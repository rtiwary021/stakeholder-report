// Regenerates lib/interview-questions.json from the interview workbook.
// Run: node scripts/extract-interview-questions.mjs
import { readFileSync, writeFileSync } from "fs";
import { read, utils } from "xlsx";

const SOURCE = "data/ERP-Change-Comms-Stakeholder-Interview-Questions-deffb2.xlsx";
const OUT = "lib/interview-questions.json";
const EMPHASIS_FILL = "FBD9C3";

const wb = read(readFileSync(SOURCE), { cellStyles: true });
const ws = wb.Sheets["Questions & Outputs"];
const rows = utils.sheet_to_json(ws, { header: 1, defval: "" });
const text = (v) => String(v ?? "").trim();
const findRow = (prefix) => rows.findIndex((r) => text(r[0]).startsWith(prefix));

const allIds = [];
function parseIds(raw) {
  const s = text(raw);
  if (/^all/i.test(s)) return [...allIds];
  return s.match(/\b[A-HR]\d\b/g) ?? [];
}

const qStart = findRow("Order") + 1;
const questions = [];
for (let i = qStart; i < rows.length; i++) {
  const r = rows[i];
  if (typeof r[0] !== "number") break;
  const fill = ws[utils.encode_cell({ r: i, c: 2 })]?.s?.fgColor?.rgb;
  questions.push({
    order: r[0],
    id: text(r[1]),
    question: text(r[2]),
    wave1Agents: text(r[3]),
    laterAgents: text(r[4]),
    output: text(r[5]),
    deliverable: text(r[6]),
    emphasis: text(r[7]),
    minutes: Number(r[8]) || 0,
    notes: text(r[9]),
    leadershipPriority: fill === EMPHASIS_FILL,
  });
  allIds.push(text(r[1]));
}

const minutesRow = (label) =>
  Number(rows.find((r) => r.some((v) => text(v).startsWith(label)))?.find((v) => typeof v === "number")) || 0;

const asks = [];
for (let i = findRow("A. ") + 2; i < rows.length && typeof rows[i][0] === "number"; i++) {
  const r = rows[i];
  asks.push({ n: r[0], ask: text(r[2]), idsLabel: text(r[3]), ids: parseIds(r[3]), response: text(r[4]) });
}

const outputs = [];
for (let i = findRow("C. ") + 2; i < rows.length && typeof rows[i][0] === "number"; i++) {
  const r = rows[i];
  outputs.push({ n: r[0], output: text(r[2]), idsLabel: text(r[3]), ids: parseIds(r[3]), deliverable: text(r[4]), neededBy: text(r[7]) });
}

const data = {
  title: text(rows[0][0]),
  intro: text(rows[1][0]),
  minutes: {
    questions: minutesRow("Questions subtotal"),
    buffer: minutesRow("Intro and buffer"),
    total: minutesRow("Total interview"),
  },
  questions,
  asks,
  outputs,
};

writeFileSync(OUT, JSON.stringify(data, null, 2) + "\n");
console.log(`Wrote ${questions.length} questions, ${asks.length} asks, ${outputs.length} outputs to ${OUT}`);
