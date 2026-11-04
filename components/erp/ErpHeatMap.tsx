"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { heatMap, heatMapTakeaway, STAGES } from "@/lib/erp";
import { SectionHeader, Takeaway } from "./shared";

const stageColor = (id: string) => STAGES.find((s) => s.id === id)?.color ?? "#A1A8B3";

export default function ErpHeatMap() {
  const [selected, setSelected] = useState<string | null>(null);
  const ticks = [0, 2, 4, 6, 8, 10];

  return (
    <section className="py-16 border-t border-hairline">
      <div className="max-w-content mx-auto px-8">
        <SectionHeader
          eyebrow="ROLES & DEGREE OF IMPACT"
          title="ATE Stakeholder Impact Heat Map by Practice Roles"
          intro="Select a role to see what the interviews tell us. Bubble size shows change-curve impact — how far the role must travel on the change curve."
        />

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 items-start mb-8">
          <Reveal>
            <div className="flex flex-col gap-2">
              <div className="text-[11px] font-bold text-body tracking-wide">
                {"↑ DIRECT IMPACT ON SERVICE DELIVERY (low → high)"}
              </div>
              <div className="flex gap-2">
                <div className="flex flex-col-reverse justify-between text-[11px] text-muted py-0 -my-1.5">
                  {ticks.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div
                  className="relative flex-1 aspect-[4/3] border-l border-b border-grey4 rounded-sm overflow-visible"
                  style={{
                    background:
                      "linear-gradient(to top right, rgba(253,81,8,0.02), rgba(253,81,8,0.14)), repeating-linear-gradient(0deg, transparent, transparent calc(20% - 1px), #EBEBEB calc(20% - 1px), #EBEBEB 20%), repeating-linear-gradient(90deg, transparent, transparent calc(20% - 1px), #EBEBEB calc(20% - 1px), #EBEBEB 20%)",
                  }}
                >
                  {heatMap.map((r) => {
                    const isSel = selected === r.role;
                    const dimmed = selected !== null && !isSel;
                    const notAssessed = r.stage === "not-assessed";
                    const diameter = `${r.size * 2.3}%`;
                    return (
                      <button
                        key={r.role}
                        type="button"
                        onClick={() => setSelected(isSel ? null : r.role)}
                        aria-pressed={isSel}
                        aria-label={`${r.role}, n=${r.n}, ${STAGES.find((s) => s.id === r.stage)?.label}`}
                        className={`absolute -translate-x-1/2 translate-y-1/2 rounded-full flex flex-col items-center justify-center text-center transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
                          notAssessed ? "border-2 border-dashed border-grey4 bg-white/60 text-muted" : "text-white"
                        } ${isSel ? "z-20 scale-110 shadow-xl" : "z-10 hover:scale-105"}`}
                        style={{
                          left: `${r.x * 10}%`,
                          bottom: `${r.y * 10}%`,
                          width: diameter,
                          aspectRatio: "1 / 1",
                          background: notAssessed ? undefined : stageColor(r.stage),
                          opacity: dimmed ? 0.35 : 1,
                          boxShadow: notAssessed ? undefined : "0 0 0 2px #fff",
                        }}
                      >
                        <span className="font-bold text-[11px] sm:text-[13px] leading-tight px-1">{r.role}</span>
                        <span className="text-[10px] sm:text-[12px]">n={r.n}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="flex justify-between text-[11px] text-muted pl-6">
                {ticks.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="text-[11px] font-bold text-body tracking-wide text-center">
                {"DEGREE OF IMPACT · how much the role's day-to-day work changes (low → high)"}
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3">
                {STAGES.map((s) => (
                  <span key={s.id} className="flex items-center gap-2 text-[12.5px] text-body">
                    <span
                      className={`w-3 h-3 rounded-full ${s.id === "not-assessed" ? "border border-dashed border-grey4" : ""}`}
                      style={{ background: s.id === "not-assessed" ? "transparent" : s.color }}
                      aria-hidden="true"
                    />
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="bg-card rounded-[10px] p-6">
              <h3 className="text-[21px] mb-4">What the interviews tell us</h3>
              <ul className="flex flex-col gap-1">
                {heatMap.map((r) => {
                  const isSel = selected === r.role;
                  return (
                    <li key={r.role}>
                      <button
                        type="button"
                        onClick={() => setSelected(isSel ? null : r.role)}
                        className={`w-full text-left flex gap-3 rounded-lg p-2.5 transition-colors ${
                          isSel ? "bg-white shadow-sm" : "hover:bg-white/60"
                        } ${selected !== null && !isSel ? "opacity-50" : ""}`}
                      >
                        <span
                          className={`mt-1 w-3 h-3 min-w-[12px] rounded-full ${
                            r.stage === "not-assessed" ? "border border-dashed border-grey4" : ""
                          }`}
                          style={{ background: r.stage === "not-assessed" ? "transparent" : stageColor(r.stage) }}
                          aria-hidden="true"
                        />
                        <span>
                          <span className="block font-bold text-ink text-[14.5px]">{r.role}</span>
                          <span className="block text-[13px] text-body leading-relaxed">{r.insight}</span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>

        <Takeaway label="KEY TAKEAWAY">{heatMapTakeaway}</Takeaway>
      </div>
    </section>
  );
}
