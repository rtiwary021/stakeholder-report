"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { recommendations, topRisks, leadershipAsks, finalTakeaway } from "@/lib/erp";
import { SectionHeader, Takeaway } from "./shared";

export default function ErpRecommendations() {
  const [open, setOpen] = useState<number | null>(0);
  const [checked, setChecked] = useState<boolean[]>(() => leadershipAsks.map(() => false));

  return (
    <section id="erp-recommendations" className="py-16 border-t border-hairline scroll-mt-16">
      <div className="max-w-content mx-auto px-8">
        <SectionHeader
          eyebrow="RECOMMENDATIONS & NEXT STEPS"
          title="Turning findings into a rollout plan"
          intro="Select an insight to see what we learned and what the adoption plan requires."
        />

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 items-start mb-8">
          <Reveal>
            <ol className="flex flex-col gap-2">
              {recommendations.map((r, i) => {
                const isOpen = open === i;
                return (
                  <li key={r.title} className="bg-card rounded-lg overflow-hidden">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-orange/5 transition-colors"
                    >
                      <span className="font-serif font-bold text-[24px] text-ink w-9">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 font-bold text-orange text-[16px]">{r.title}</span>
                      <span
                        aria-hidden="true"
                        className={`text-muted transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      >
                        {"▾"}
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-5 pl-[76px] flex flex-col gap-2">
                          <p className="text-[14px] text-body leading-relaxed">{r.learned}</p>
                          <p className="text-[14px] text-ink font-bold leading-relaxed">{r.requires}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal delay={100}>
              <div className="bg-card rounded-[10px] p-6">
                <div className="text-orange font-bold text-xs tracking-[1.8px] mb-4">TOP RISKS TO MANAGE</div>
                <div className="flex flex-col gap-5">
                  {topRisks.map((r) => (
                    <div key={r.title} className="flex gap-4">
                      <div className="w-10 h-10 min-w-[40px] rounded-full bg-orange flex items-center justify-center">
                        <Icon name="triangle" className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-ink text-[15px]">{r.title}</div>
                        <p className="text-[13.5px] text-body leading-relaxed">{r.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="border-2 border-orange rounded-[10px] p-6">
                <div className="text-orange font-bold text-xs tracking-[1.8px] mb-4">
                  RECOMMENDATIONS FOR LEADERSHIP
                </div>
                <ul className="flex flex-col gap-3">
                  {leadershipAsks.map((a, i) => (
                    <li key={a}>
                      <label className="flex gap-3 items-start cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={checked[i]}
                          onChange={() => setChecked((c) => c.map((v, j) => (j === i ? !v : v)))}
                          className="mt-0.5 w-5 h-5 min-w-[20px] accent-orange cursor-pointer"
                        />
                        <span
                          className={`text-[14px] leading-relaxed transition-colors ${
                            checked[i] ? "text-muted line-through" : "text-body group-hover:text-ink"
                          }`}
                        >
                          {a}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        <Takeaway label="KEY TAKEAWAY">{finalTakeaway}</Takeaway>
      </div>
    </section>
  );
}
