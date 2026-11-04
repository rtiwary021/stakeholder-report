"use client";

import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import Reveal from "@/components/Reveal";
import AnimatedNumber from "@/components/AnimatedNumber";
import { erpMeta, methodologyIntro, roleMix, themesCovered } from "@/lib/erp";
import { SectionHeader } from "./shared";

function RoleTooltip({ active, payload }: any) {
  if (!active || !payload || !payload.length) return null;
  const p = payload[0];
  return (
    <div className="bg-white border border-hairline rounded-lg px-3 py-2 shadow-lg text-sm">
      <div className="font-bold text-ink">{p.name}</div>
      <div className="text-body">{p.value}% of stakeholders</div>
    </div>
  );
}

export default function ErpMethodology() {
  const [hover, setHover] = useState<number | null>(null);
  const stats = [
    { num: String(erpMeta.stakeholders), label: "Stakeholders interviewed" },
    { num: String(erpMeta.roleLevels), label: "Role levels, Associate to Director" },
    { num: String(erpMeta.themes), label: "Questions organized under eight themes" },
    { num: erpMeta.avgDuration, label: "Average interview length" },
  ];

  return (
    <section id="erp-methodology" className="py-16 border-t border-hairline scroll-mt-16">
      <div className="max-w-content mx-auto px-8">
        <SectionHeader title="Methodology & Scope" intro={methodologyIntro} />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="bg-card rounded-[10px] p-6 text-center h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="font-serif font-bold text-[36px] text-orange">
                  <AnimatedNumber value={s.num} />
                </div>
                <div className="text-[13px] text-body font-bold mt-1.5 leading-tight">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-orange text-lg mb-4">Stakeholder Roles Interviewed</h3>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-[220px] h-[220px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={roleMix}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={100}
                        innerRadius={48}
                        paddingAngle={1}
                        startAngle={90}
                        endAngle={-270}
                        onMouseEnter={(_, i) => setHover(i)}
                        onMouseLeave={() => setHover(null)}
                        animationDuration={800}
                      >
                        {roleMix.map((r, i) => (
                          <Cell
                            key={r.name}
                            fill={r.color}
                            stroke="#fff"
                            strokeWidth={2}
                            opacity={hover === null || hover === i ? 1 : 0.4}
                          />
                        ))}
                      </Pie>
                      <Tooltip content={<RoleTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <ul className="flex flex-col gap-2">
                  {roleMix.map((r, i) => (
                    <li
                      key={r.name}
                      onMouseEnter={() => setHover(i)}
                      onMouseLeave={() => setHover(null)}
                      className={`flex items-center gap-2.5 text-[14px] transition-opacity ${
                        hover === null || hover === i ? "opacity-100" : "opacity-50"
                      }`}
                    >
                      <span className="w-3 h-3 rounded-sm" style={{ background: r.color }} aria-hidden="true" />
                      <span className="text-body">{r.name}</span>
                      <span className="font-bold text-ink ml-auto pl-3">{r.value}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-orange text-lg mb-4">Themes Covered</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {themesCovered.map((t, i) => (
                  <li key={t}>
                    <a
                      href={`#erp-theme-${i + 1}`}
                      className="relative pl-5 text-[15px] text-body hover:text-orange transition-colors"
                    >
                      <span className="absolute left-0 top-[7px] w-2 h-2 rounded-full bg-orange2" aria-hidden="true" />
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
