"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { personas, personaIntro, personaSoWhat, personaSource } from "@/lib/erp";
import { SectionHeader, Takeaway } from "./shared";

export default function ErpPersonas() {
  const [active, setActive] = useState(0);
  const p = personas[active];

  return (
    <section className="py-16 border-t border-hairline">
      <div className="max-w-content mx-auto px-8">
        <SectionHeader eyebrow="PRACTICE AREA FOCUS" title="How the Findings Vary by Persona" intro={personaIntro} />

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 items-start mb-8">
          <Reveal>
            <div className="bg-white border border-hairline rounded-[10px] p-5">
              <div className="text-sm text-center font-bold mb-4 text-ink">
                Sentiment by Persona (% of codes, n=18 stakeholders)
              </div>
              <div className="flex flex-col gap-2" role="tablist" aria-label="Personas">
                {personas.map((per, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={per.name}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActive(i)}
                      className={`flex items-center gap-3 rounded-lg px-2 py-2 transition-colors text-left ${
                        isActive ? "bg-orange/5 ring-1 ring-orange/40" : "hover:bg-card"
                      }`}
                    >
                      <span className={`w-[120px] text-[13px] ${isActive ? "font-bold text-ink" : "text-body"}`}>
                        {per.name}
                      </span>
                      <span className="flex-1 flex h-7 rounded overflow-hidden" aria-hidden="true">
                        <span className="bg-positive transition-all duration-700" style={{ width: `${per.positive}%` }} />
                        <span className="bg-mixed transition-all duration-700" style={{ width: `${per.mixed}%` }} />
                        <span className="bg-concerned transition-all duration-700" style={{ width: `${per.concerned}%` }} />
                      </span>
                      <span className="sr-only">
                        {per.positiveOrMixed}% positive-or-mixed{per.concerned > 0 ? `, some concern` : ""}
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="flex justify-center gap-5 mt-4 text-[12px] text-body">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-positive" aria-hidden="true" />
                  Positive
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-mixed" aria-hidden="true" />
                  Mixed
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-concerned" aria-hidden="true" />
                  Concerned
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div key={p.name} className="bg-card rounded-[10px] p-6 animate-in" role="tabpanel">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-3 h-3 rounded-full" style={{ background: p.color }} aria-hidden="true" />
                <h3 className="text-[22px]">{p.name}</h3>
              </div>
              <div className="text-[13px] text-muted mb-4">
                {p.positiveOrMixed}% positive-or-mixed · n={p.n} of 18
              </div>
              <p className="text-[15px] text-body leading-relaxed">{p.finding}</p>
              <div className="flex gap-2 mt-5">
                {personas.map((per, i) => (
                  <button
                    key={per.name}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Show ${per.name}`}
                    className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-orange" : "w-1.5 bg-grey5"}`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Takeaway>{personaSoWhat}</Takeaway>
        <p className="text-[12px] text-muted italic mt-3">{personaSource}</p>
      </div>
    </section>
  );
}
