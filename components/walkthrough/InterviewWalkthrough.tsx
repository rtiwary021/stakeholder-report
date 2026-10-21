"use client";

import { useEffect, useMemo, useState } from "react";
import { Flow, flowLabel, interview } from "@/lib/interview";
import FlowMap from "./FlowMap";
import QuestionCard from "./QuestionCard";
import TracePanel from "./TracePanel";

const { questions, asks, outputs, minutes } = interview;

export default function InterviewWalkthrough() {
  const [currentId, setCurrentId] = useState(questions[0].id);
  const [flow, setFlow] = useState<Flow | null>(null);
  const [interviewerMode, setInterviewerMode] = useState(true);

  const steps = useMemo(
    () => (flow ? questions.filter((q) => flow.item.ids.includes(q.id)) : questions),
    [flow]
  );
  const highlightIds = useMemo(() => (flow ? new Set(flow.item.ids) : null), [flow]);

  const current = questions.find((q) => q.id === currentId)!;
  const stepIndex = steps.findIndex((q) => q.id === currentId);
  const startMinute =
    minutes.buffer + questions.slice(0, current.order - 1).reduce((sum, q) => sum + q.minutes, 0);

  const feedsOutputs = outputs.filter((o) => o.ids.includes(current.id) && o.ids.length < questions.length);

  const go = (delta: number) => {
    if (stepIndex === -1) {
      const next = delta > 0 ? steps.find((q) => q.order > current.order) : [...steps].reverse().find((q) => q.order < current.order);
      if (next) setCurrentId(next.id);
      return;
    }
    const next = steps[stepIndex + delta];
    if (next) setCurrentId(next.id);
  };

  const applyFlow = (next: Flow | null) => {
    setFlow(next);
    if (next && !next.item.ids.includes(currentId)) {
      const first = questions.find((q) => next.item.ids.includes(q.id));
      if (first) setCurrentId(first.id);
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("input, textarea, [contenteditable]")) return;
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const atStart = stepIndex === 0 || (stepIndex === -1 && !steps.some((q) => q.order < current.order));
  const atEnd = stepIndex === steps.length - 1 || (stepIndex === -1 && !steps.some((q) => q.order > current.order));

  return (
    <section className="pb-16" aria-label="Interview walkthrough">
      <div className="max-w-content mx-auto px-8 flex flex-col gap-8">
        <div className="bg-white border border-hairline rounded-[10px] p-5 flex flex-col gap-4">
          <FlowMap questions={questions} currentId={currentId} highlightIds={highlightIds} onSelect={setCurrentId} />
          <div className="flex flex-wrap items-center justify-between gap-3 text-[13px]">
            <div className="flex flex-wrap items-center gap-4 text-muted">
              <span className="inline-flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-orange" aria-hidden="true" /> Leadership emphasis
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-card border border-hairline" aria-hidden="true" /> Standard
              </span>
            </div>
            <div className="flex items-center gap-1 bg-card rounded-lg p-1" role="group" aria-label="View mode">
              {[
                { value: true, label: "Interviewer view" },
                { value: false, label: "Interviewee view" },
              ].map((m) => (
                <button
                  key={m.label}
                  type="button"
                  aria-pressed={interviewerMode === m.value}
                  onClick={() => setInterviewerMode(m.value)}
                  className={`font-bold rounded-md px-3 py-1.5 transition-colors ${
                    interviewerMode === m.value ? "bg-white text-orange shadow-sm" : "text-muted hover:text-orange"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-[1fr_320px] items-start">
          <div className="flex flex-col gap-6">
            {flow && (
              <div className="flex items-start justify-between gap-4 bg-orange/10 rounded-lg px-4 py-3">
                <p className="text-[13.5px] leading-relaxed">
                  <b className="text-orange tracking-[1px] text-xs mr-2">
                    {flow.kind === "ask" ? "TRACING ASK" : "TRACING OUTPUT"}
                  </b>
                  {flowLabel(flow)}
                </p>
                <button
                  type="button"
                  onClick={() => setFlow(null)}
                  className="text-xs font-bold text-orange whitespace-nowrap hover:underline"
                >
                  Clear
                </button>
              </div>
            )}

            <QuestionCard
              key={current.id}
              question={current}
              total={questions.length}
              startMinute={startMinute}
              interviewerMode={interviewerMode}
              feedsOutputs={feedsOutputs}
              onTraceOutput={applyFlow}
            />

            <div className="flex items-center justify-between gap-4 border-t border-hairline pt-5">
              <button
                type="button"
                onClick={() => go(-1)}
                disabled={atStart}
                className="text-sm font-bold rounded-lg px-5 py-2.5 border border-hairline hover:border-orange hover:text-orange transition-colors disabled:opacity-40 disabled:pointer-events-none"
              >
                &larr; Previous
              </button>
              <span className="text-[13px] text-muted text-center">
                {stepIndex === -1 ? "Outside this flow" : `${stepIndex + 1} of ${steps.length}${flow ? " in this flow" : ""}`}
                <span className="hidden sm:inline"> &middot; use &larr; &rarr; keys</span>
              </span>
              <button
                type="button"
                onClick={() => go(1)}
                disabled={atEnd}
                className="text-sm font-bold rounded-lg px-5 py-2.5 bg-orange text-white hover:bg-orange2 transition-colors disabled:opacity-40 disabled:pointer-events-none"
              >
                Next &rarr;
              </button>
            </div>
          </div>

          <TracePanel asks={asks} outputs={outputs} flow={flow} onChange={applyFlow} />
        </div>
      </div>
    </section>
  );
}
