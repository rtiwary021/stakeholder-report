# Stakeholder Impact Report — Interactive Web Version

An interactive Next.js version of the Agentic Delivery Transformation stakeholder
report, built from 13 completed stakeholder interviews. Same PwC design system as
the companion PowerPoint deck (Georgia/Arial, orange-and-grey palette), plus real
interactivity: hoverable/tooltipped charts (Recharts), a hoverable word cloud with
exact mention counts, expandable long quotes, and a scroll-spy navigation bar.

## What's inside

- `app/` — Next.js App Router entry point and global styles
- `components/` — one component per report section (Hero, Methodology, Executive
  Summary, Overview, WordCloud, ThemeSection ×8, Risks, Recommendations)
- `lib/data.ts` — every real number, quote, and chart dataset from the report, in
  one place. Edit this file to update content — the components just render it.
- `lib/wordcloud-data.json` — precomputed word-cloud layout (word, position, size,
  color) derived from real word-frequency counts across all 13 transcripts.
- `public/` — the PwC logo and cover background image.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy to Vercel

**Option A — via GitHub (recommended):**
1. Create a new GitHub repository and push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new), import the repository, and click
   **Deploy**. Vercel auto-detects Next.js — no configuration needed.

**Option B — via Vercel CLI:**
```bash
npm install -g vercel
vercel
```
Follow the prompts (link or create a project, accept the detected Next.js settings),
then `vercel --prod` to deploy to your production URL.

## Updating content later

All report content lives in `lib/data.ts` as plain, typed data — stat cards, the
sentiment chart, all 8 theme sections (eyebrow, title, so-what, quotes, chart data),
risks, and recommendations. To update a number or add a quote, edit that file only;
no component code needs to change. The word cloud regenerates from
`lib/wordcloud-data.json` — see the note at the bottom of this file if you need to
recompute it from new transcripts.

## Regenerating the word cloud from new data

The word cloud layout was precomputed offline from real transcript word-frequency
counts (stopwords and interviewer speech removed) using a simple spiral-placement
algorithm, then exported as static `{word, x, y, fontSize, color, rotate, freq}`
records. If you add more interviews later and want to refresh it, recompute the
frequency counts from the new transcript set, regenerate the layout, and replace
`lib/wordcloud-data.json` — the `WordCloud.tsx` component will pick up the new file
automatically with no other changes required.
