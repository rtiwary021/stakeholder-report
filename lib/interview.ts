import raw from "./interview-questions.json";

export type InterviewQuestion = {
  order: number;
  id: string;
  question: string;
  wave1Agents: string;
  laterAgents: string;
  output: string;
  deliverable: string;
  emphasis: string;
  minutes: number;
  notes: string;
  leadershipPriority: boolean;
};

export type TraceItem = {
  n: number;
  idsLabel: string;
  ids: string[];
};

export type LeadershipAsk = TraceItem & { ask: string; response: string };
export type InterviewOutput = TraceItem & { output: string; deliverable: string; neededBy: string };

export type Flow =
  | { kind: "ask"; item: LeadershipAsk }
  | { kind: "output"; item: InterviewOutput };

export const interview = raw as {
  title: string;
  intro: string;
  minutes: { questions: number; buffer: number; total: number };
  questions: InterviewQuestion[];
  asks: LeadershipAsk[];
  outputs: InterviewOutput[];
};

export const SECTION_LABELS: Record<string, string> = {
  R: "Role & relevance",
  A: "Where time goes",
  B: "Expectations & roadmap",
  C: "Alerts & channels",
  D: "Barriers & trust",
  E: "Learning",
  F: "Communications & influence",
  G: "Measuring success",
  H: "Closing",
};

export const sectionOf = (id: string) => SECTION_LABELS[id.charAt(0)] ?? "";

export function flowLabel(flow: Flow) {
  return flow.kind === "ask" ? flow.item.ask : flow.item.output;
}
