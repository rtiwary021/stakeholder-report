"use client";

import { useState } from "react";
import { recommendationsMeta, recommendations, topRisks, leadershipRecs } from "@/lib/data";
import Reveal from "./Reveal";

export default function Recommendations() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const doneCount = leadershipRecs.filter((r) => checked[r]).length;

  return (
    <section id="recommendations" className="py-16 border-t border-hairline scroll-mt-16">
      <div className="max-w-content mx-auto px-8">
        <Reveal>
          <div className="text-orange font-bold text-xs tracking-[1.6px] mb-1.5">{recommendationsMeta.eyebrow}</div>
          <h2 className="text-[28px] mb-7">{recommendationsMeta.title}</h2>
        </Reveal>

        <div className="grid lg:grid-cols-[2.2fr_1fr] gap-8 items-start">
          <Reveal delay={100}>
            <div className="hidden md:grid grid-cols-[50px_150px_1fr] gap-4 px-2 pb-2 text-[11px] font-bold text-muted tracking-wide">
              <span></span>
              <span>KEY INSIGHT</span>
              <span>WHAT WE LEARNED / WHAT THE ADOPTION PLAN REQUIRES</span>
            </div>
            <div className="flex flex-col rounded-[10px] overflow-hidden">
              {recommendations.map((r, i) => (
                <div
                  key={r.num}
                  className={`group grid md:grid-cols-[50px_150px_1fr] gap-4 px-2 py-3 items-start transition-colors duration-200 hover:bg-orange/5 ${
                    i % 2 === 0 ? "bg-card" : "bg-white"
                  }`}
                >
                  <div className="font-serif font-bold text-2xl text-[#2B2B2B] transition-colors duration-200 group-hover:text-orange">
                    {r.num}
                  </div>
                  <div className="font-bold text-orange text-[13.5px]">{r.title}</div>
                  <div className="text-[13px]">
                    <p className="mb-1">{r.insight}</p>
                    <p className="font-bold">{r.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal delay={150}>
              <div className="bg-card rounded-[10px] p-5">
                <div className="text-orange font-bold text-xs tracking-[1.2px] mb-3">{recommendationsMeta.risksTitle}</div>
                <div className="flex flex-col gap-4">
                  {topRisks.map((risk) => (
                    <div key={risk.title} className="group flex gap-3">
                      <span className="w-8 h-8 rounded-full bg-orange flex items-center justify-center shrink-0 text-white text-sm transition-transform duration-200 group-hover:scale-110">
                        !
                      </span>
                      <div>
                        <div className="font-bold text-[13px]">{risk.title}</div>
                        <div className="text-[12px] text-muted">{risk.body}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="border-2 border-orange rounded-[10px] p-5">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="text-orange font-bold text-xs tracking-[1.2px]">{recommendationsMeta.leadershipTitle}</div>
                  <span className="text-[11px] font-bold text-muted tabular-nums" aria-live="polite">
                    {doneCount}/{leadershipRecs.length}
                  </span>
                </div>
                <div className="h-1 rounded-full bg-hairline mb-4 overflow-hidden" aria-hidden="true">
                  <div
                    className="h-full bg-orange rounded-full transition-all duration-500"
                    style={{ width: `${(doneCount / leadershipRecs.length) * 100}%` }}
                  />
                </div>
                <ul className="flex flex-col gap-1">
                  {leadershipRecs.map((rec) => {
                    const isChecked = Boolean(checked[rec]);
                    return (
                      <li key={rec}>
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked={isChecked}
                          onClick={() => setChecked((c) => ({ ...c, [rec]: !c[rec] }))}
                          className="w-full flex gap-2.5 text-left rounded-md px-1.5 py-1.5 transition-colors hover:bg-orange/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
                        >
                          <span
                            className={`w-4 h-4 border-2 border-orange rounded-sm shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
                              isChecked ? "bg-orange" : "bg-white"
                            }`}
                            aria-hidden="true"
                          >
                            {isChecked && (
                              <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5}>
                                <path d="M2.5 6.5l2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </span>
                          <span className={`text-[12.5px] transition-colors ${isChecked ? "text-muted" : ""}`}>{rec}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={300}>
          <div className="bg-[#2B2B2B] text-white rounded-lg px-5 py-4 mt-7 text-[14.5px]">
            <b className="inline-block tracking-[1.2px] text-xs mr-2.5 text-orange">{recommendationsMeta.keyTakeawayLabel.toUpperCase()}</b>
            {recommendationsMeta.keyTakeaway}
          </div>
          <p className="text-[11px] text-muted italic mt-3">{recommendationsMeta.source}</p>
        </Reveal>
      </div>
    </section>
  );
}
