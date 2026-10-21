// Regenerates lib/interview-questions.json from the interview workbook.
// Run: node scripts/extract-interview-questions.mjs
import { readFileSync, writeFileSync } from "fs";
import { read, utils } from "xlsx";

const SOURCE = "data/ERP-Change-Comms-Stakeholder-Interview-Questions-f37651.xlsx";
const OUT = "lib/interview-questions.json";

const wb = read(readFileSync(SOURCE));
const ws = wb.Sheets["Questions & Outputs"];
const rows = utils.sheet_to_json(ws, { header: 1, defval: "" });
const text = (v) => String(v ?? "").trim();

const header = rows.findIndex((r) => text(r[0]) === "Order");
const col = (name) => rows[header].findIndex((h) => text(h).startsWith(name));
const C = {
  question: col("Question"),
  wave1: col("Wave 1 agents"),
  later: col("Later-wave agents"),
  deliverable: col("Future deliverable"),
  minutes: col("Min"),
  notes: col("Interviewer notes"),
};

const questions = [];
for (let i = header + 1; i < rows.length; i++) {
  const r = rows[i];
  if (typeof r[0] !== "number") break;
  questions.push({
    order: r[0],
    id: `Q${r[0]}`,
    question: text(r[C.question]),
    wave1Agents: text(r[C.wave1]),
    laterAgents: text(r[C.later]),
    output: "",
    deliverable: text(r[C.deliverable]),
    emphasis: "",
    minutes: Number(r[C.minutes]) || 0,
    notes: text(r[C.notes]),
    leadershipPriority: false,
  });
}

const minutesRow = (label) =>
  Number(rows.find((r) => r.some((v) => text(v).startsWith(label)))?.[C.minutes]) || 0;

const data = {
  title: text(rows[0][0]),
  intro: "",
  minutes: {
    questions: minutesRow("Questions subtotal"),
    buffer: minutesRow("Intro and buffer"),
    total: minutesRow("Total interview"),
  },
  questions,
  asks: [],
  outputs: [],
};

writeFileSync(OUT, JSON.stringify(data, null, 2) + "\n");
console.log(`Wrote ${questions.length} questions to ${OUT}`, data.minutes);
