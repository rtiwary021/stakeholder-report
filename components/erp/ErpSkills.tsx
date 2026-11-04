"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { baselineSkills, futureSkills, skillCallout, skillTakeaway, type Skill } from "@/lib/erp";
import { SectionHeader, Takeaway } from "./shared";

type SortMode = "slide" | "count";

function SkillList({ skills, future, sort }: { skills: Skill[]; future: boolean; sort: SortMode }) {
  const items = skills.map((s, i) => ({ ...s, rank: i + 1 }));
  if (sort === "count") items.sort((a, b) => b.count - a.count);
  const top = Math.max(...skills.map((s) => s.count));

  return (
    <ol className="flex flex-col">
      {items.map((s) => {
        const highlight = future && s.count === top;
        return (
          <li
            key={s.name}
            className={`flex items-center gap-4 px-4 py-3 border-b border-hairline ${highlight ? "bg-orange/5" : ""}`}
          >
            <span className={`font-bold text-[15px] w-5 ${future ? "text-orange" : "text-muted"}`}>{s.rank}</span>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-ink text-[14.5px]">{s.name}</div>
              <div className="text-[13px] text-body leading-snug">{s.desc}</div>
            </div>
            <div className="flex items-center gap-2.5 min-w-[96px]">
              <span className="flex-1 h-2 rounded-full bg-hairline overflow-hidden" aria-hidden="true">
                <span
                  className={`block h-full rounded-full ${future ? "bg-orange" : "bg-muted"}`}
                  style={{ width: `${(s.count / 18) * 100}%` }}
                />
              </span>
              <span className={`text-[13px] font-bold ${future ? "text-orange" : "text-body"}`}>{s.count}/18</span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default function ErpSkills() {
  const [sort, setSort] = useState<SortMode>("slide");

  return (
    <section className="py-16 border-t border-hairline">
      <div className="max-w-content mx-auto px-8">
        <SectionHeader
          eyebrow="THE SKILL SHIFT"
          title="Consultant Skills: Baseline Today vs. Agentic Future"
          intro="Skills named or demonstrated by 18 stakeholders across the interviews; count = number of interviewees whose answers reflected it."
        />

        <div className="flex items-center gap-2 mb-4" role="group" aria-label="Sort skills">
          <span className="text-[12.5px] text-muted mr-1">Sort:</span>
          {(
            [
              ["slide", "As presented"],
              ["count", "Most cited"],
            ] as const
          ).map(([mode, label]) => (
            <button
              key={mode}
              type="button"
              aria-pressed={sort === mode}
              onClick={() => setSort(mode)}
              className={`text-[12.5px] font-bold rounded-full px-3 py-1 border transition-colors ${
                sort === mode ? "bg-orange text-white border-orange" : "border-hairline text-body hover:border-orange"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Reveal>
            <div className="rounded-[10px] overflow-hidden border border-hairline">
              <div className="bg-charcoal text-white font-bold text-[14px] px-4 py-3">
                BASELINE TODAY — What makes a strong ERP consultant
              </div>
              <SkillList skills={baselineSkills} future={false} sort={sort} />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[10px] overflow-hidden border border-hairline">
              <div className="bg-charcoal text-orange font-bold text-[14px] px-4 py-3">
                AGENTIC FUTURE — New skills as AI takes on more of the work
              </div>
              <SkillList skills={futureSkills} future sort={sort} />
              <p className="font-serif italic font-bold text-orange text-[15px] px-4 py-4 text-pretty">{skillCallout}</p>
            </div>
          </Reveal>
        </div>

        <Takeaway label="KEY TAKEAWAY">{skillTakeaway}</Takeaway>
      </div>
    </section>
  );
}
