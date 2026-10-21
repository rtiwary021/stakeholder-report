"use client";

import { InterviewQuestion, sectionOf } from "@/lib/interview";

export default function FlowMap({
  questions,
  currentId,
  highlightIds,
  onSelect,
}: {
  questions: InterviewQuestion[];
  currentId: string;
  highlightIds: Set<string> | null;
  onSelect: (id: string) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-muted mb-2">
        <span className="font-bold tracking-[1.4px] text-orange">QUESTION FLOW</span>
        <span>Width = time budget</span>
      </div>
      <ol className="flex gap-1 h-16" aria-label="Interview questions in order">
        {questions.map((q) => {
          const isCurrent = q.id === currentId;
          const dimmed = highlightIds && !highlightIds.has(q.id);
          return (
            <li key={q.id} style={{ flexGrow: q.minutes, flexBasis: 0 }} className="min-w-0">
              <button
                type="button"
                onClick={() => onSelect(q.id)}
                aria-current={isCurrent ? "step" : undefined}
                aria-label={`Question ${q.order}, ${q.id}, ${sectionOf(q.id)}, ${q.minutes} minutes${q.leadershipPriority ? ", leadership emphasis" : ""}`}
                title={`${q.id} · ${sectionOf(q.id)} · ${q.minutes} min`}
                className={`group relative w-full h-full rounded-md flex flex-col items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 ${
                  q.leadershipPriority ? "bg-orange text-white" : "bg-card text-body hover:bg-grey6"
                } ${dimmed ? "opacity-25" : "opacity-100"} ${isCurrent ? "ring-2 ring-ink ring-offset-2 -translate-y-1" : ""}`}
              >
                <span className="text-[11px] md:text-xs font-bold leading-none">{q.id}</span>
                <span className={`hidden sm:block text-[10px] mt-1 leading-none ${q.leadershipPriority ? "text-white/80" : "text-muted"}`}>
                  {q.minutes}m
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
