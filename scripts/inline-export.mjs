// Bundles a `next build` static export (output: 'export') into one self-contained HTML file.
// Usage: node scripts/inline-export.mjs <outDir> <destFile>
import fs from "node:fs";
import path from "node:path";

const [, , outDir, dest] = process.argv;
if (!outDir || !dest) {
  console.error("Usage: node scripts/inline-export.mjs <outDir> <destFile>");
  process.exit(1);
}

const read = (p) => fs.readFileSync(path.join(outDir, p.replace(/^\//, "")));
const mime = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
};
const dataUri = (p) =>
  `data:${mime[path.extname(p)] || "application/octet-stream"};base64,${read(p).toString("base64")}`;

let html = fs.readFileSync(path.join(outDir, "index.html"), "utf8");

html = html.replace(/<link[^>]+rel="stylesheet"[^>]*href="([^"]+)"[^>]*\/?>/g, (_, href) => {
  const css = read(href)
    .toString("utf8")
    .replace(/url\((\/_next\/static\/media\/[^)]+)\)/g, (_m, u) => `url(${dataUri(u)})`);
  return `<style>${css}</style>`;
});

html = html.replace(/<link[^>]+rel="preload"[^>]*\/?>/g, "");

const scripts = [];
html = html.replace(/<script[^>]*src="(\/_next\/[^"]+)"[^>]*><\/script>/g, (_m, src) => {
  scripts.push(src);
  return "";
});

// Every chunk is inlined up front so webpack never has to fetch one over file://.
const inlined = scripts
  .map((src) => `<script>${read(src).toString("utf8").replace(/<\/script/gi, "<\\/script")}</script>`)
  .join("");
// Function replacer: a string replacer would interpret `$&`, `$'` etc. inside the minified JS.
html = html.replace("</body>", () => `${inlined}</body>`);

// React re-inserts stylesheets listed in the RSC payload; point those at embedded copies so nothing is fetched.
html = html.replace(/\/_next\/static\/css\/[A-Za-z0-9_-]+\.css/g, (p) => `data:text/css;base64,${read(p).toString("base64")}`);

const publicAssets = fs
  .readdirSync(outDir)
  .filter((f) => mime[path.extname(f)])
  .map((f) => "/" + f);
for (const asset of publicAssets) html = html.split(asset).join(dataUri(asset));

fs.writeFileSync(dest, html);
console.log(`Inlined ${scripts.length} scripts -> ${dest} (${Math.round(fs.statSync(dest).size / 1024)} KB)`);
