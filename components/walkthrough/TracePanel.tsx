"use client";

import { useState } from "react";
import { Flow, LeadershipAsk, InterviewOutput } from "@/lib/interview";

function TraceButton({
  active,
  title,
  meta,
  onClick,
}: {
  active: boolean;
  title: string;
  meta: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`w-full text-left rounded-lg px-4 py-3 transition-colors border ${
        active ? "bg-orange text-white border-orange" : "bg-white border-hairline hover:border-orange"
      }`}
    >
      <span className="block text-[13.5px] leading-snug">{title}</span>
      <span className={`block text-[11px] font-bold tracking-[1px] mt-1.5 ${active ? "text-white/80" : "text-orange"}`}>{meta}</span>
    </button>
  );
}

export default function TracePanel({
  asks,
  outputs,
  flow,
  onChange,
}: {
  asks: LeadershipAsk[];
  outputs: InterviewOutput[];
  flow: Flow | null;
  onChange: (flow: Flow | null) => void;
}) {
  const [tab, setTab] = useState<"output" | "ask">(flow?.kind ?? "output");
  const activeTab = flow?.kind ?? tab;

  const isActive = (kind: Flow["kind"], n: number) => flow?.kind === kind && flow.item.n === n;
  const toggle = (next: Flow) => onChange(flow && flow.kind === next.kind && flow.item.n === next.item.n ? null : next);

  return (
    <aside aria-label="Trace question flows" className="bg-card rounded-[10px] p-5">
      <h2 className="text-lg mb-1">Trace a flow</h2>
      <p className="text-[13px] text-muted leading-relaxed mb-4">
        Pick an output or leadership ask to highlight the questions that feed it, then step through only those.
      </p>

      <div role="tablist" className="flex gap-1 bg-white rounded-lg p-1 mb-4">
        {(["output", "ask"] as const).map((t) => (
          <button
            key={t}
            role="tab"
            type="button"
            aria-selected={activeTab === t}
            onClick={() => {
              setTab(t);
              if (flow && flow.kind !== t) onChange(null);
            }}
            className={`flex-1 text-[13px] font-bold rounded-md py-2 transition-colors ${
              activeTab === t ? "bg-orange text-white" : "text-muted hover:text-orange"
            }`}
          >
            {t === "output" ? `Outputs (${outputs.length})` : `Leadership asks (${asks.length})`}
          </button>
        ))}
      </div>

      <ul className="flex flex-col gap-2 max-h-[520px] overflow-y-auto pr-1">
        {activeTab === "output"
          ? outputs.map((o) => (
              <li key={o.n}>
                <TraceButton
                  active={isActive("output", o.n)}
                  title={o.output}
                  meta={`${o.idsLabel} · ${o.neededBy}`}
                  onClick={() => toggle({ kind: "output", item: o })}
                />
              </li>
            ))
          : asks.map((a) => (
              <li key={a.n}>
                <TraceButton
                  active={isActive("ask", a.n)}
                  title={a.ask}
                  meta={a.idsLabel}
                  onClick={() => toggle({ kind: "ask", item: a })}
                />
              </li>
            ))}
      </ul>
    </aside>
  );
}
