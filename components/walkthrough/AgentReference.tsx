"use client";

import { useState } from "react";
import { waves } from "@/lib/intro";

const agentWaves = waves.filter((w) => w.agents.length > 0);

const CHEVRON_FIRST = "polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%)";
const CHEVRON = "polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%)";

export default function AgentReference() {
  const [activeId, setActiveId] = useState(agentWaves[0]?.id);
  const active = agentWaves.find((w) => w.id === activeId) ?? agentWaves[0];

  if (!active) return null;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h2 className="text-[22px]">Agents by wave</h2>
        <p className="text-[14px] text-muted text-pretty">
          Select a wave to see its agents. Wave 1 rolls out early January; later waves are timing to be confirmed.
        </p>
      </div>

      <div role="tablist" aria-label="Release waves" className="flex gap-1 overflow-x-auto pb-1">
        {agentWaves.map((w, i) => {
          const selected = w.id === active.id;
          const tone = selected
            ? "bg-orange text-white"
            : w.current
              ? "bg-orange/15 text-orange hover:bg-orange/25"
              : "bg-muted/15 text-body hover:bg-muted/25";
          return (
            <button
              key={w.id}
              type="button"
              role="tab"
              id={`tab-${w.id}`}
              aria-selected={selected}
              aria-controls={`panel-${w.id}`}
              onClick={() => setActiveId(w.id)}
              style={{ clipPath: i === 0 ? CHEVRON_FIRST : CHEVRON }}
              className={`flex-1 min-w-[150px] flex flex-col items-center justify-center gap-0.5 py-3 px-8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange ${tone}`}
            >
              <span className="text-[15px] font-bold">{w.name}</span>
              <span className={`text-[12px] ${selected ? "text-white/90" : "opacity-80"}`}>
                {w.agents.length} agents
              </span>
            </button>
          );
        })}
      </div>

      <section
        id={`panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${active.id}`}
        className={`rounded-[10px] border p-5 flex flex-col gap-5 ${
          active.current ? "bg-orange/5 border-orange" : "bg-white border-dashed border-muted/50"
        }`}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-[18px] font-bold">
            {active.name}: {active.title}
          </h3>
          <span
            className={`text-[13px] rounded-full px-3 py-1 ${
              active.current ? "bg-orange text-white font-bold" : "bg-muted/15 text-muted"
            }`}
          >
            {active.status}
          </span>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {active.agents.map((a) => (
            <li
              key={a.name}
              className={`rounded-[8px] border bg-white p-4 flex flex-col gap-1 ${
                active.current ? "border-orange/40" : "border-muted/30"
              }`}
            >
              <span className={`text-[15px] font-bold ${active.current ? "text-orange" : "text-body"}`}>{a.name}</span>
              <span className="text-[14px] leading-relaxed text-body text-pretty">{a.description}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
