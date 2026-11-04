"use client";

import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer, LabelList } from "recharts";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { erpThemes, type ErpChart, type ErpTheme } from "@/lib/erp";
import { PctTooltip, SectionHeader } from "./shared";

function ThemeChart({ chart }: { chart: ErpChart }) {
  const height = 70 + chart.data.length * 48;
  const max = Math.max(...chart.data.map((d) => d.value));
  const domainMax = Math.ceil((max + 5) / 10) * 10;
  return (
    <div className="bg-white border border-hairline rounded-[10px] p-5">
      <div className="text-sm text-center font-bold mb-2 text-ink text-balance">{chart.title}</div>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={chart.data} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#EBEBEB" />
          <XAxis
            type="number"
            domain={[0, domainMax]}
            tick={{ fontSize: 11, fill: "#6E6E6E" }}
            tickFormatter={(v) => `${v}%`}
          />
          <YAxis type="category" dataKey="name" width={170} tick={{ fontSize: 11.5, fill: "#2B2B2B" }} />
          <Tooltip content={<PctTooltip />} cursor={{ fill: "rgba(0,0,0,0.03)" }} />
          <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={26} animationDuration={800}>
            {chart.data.map((d) => (
              <Cell key={d.name} fill={d.color ?? chart.color} />
            ))}
            <LabelList
              dataKey="value"
              position="insideRight"
              fill="#fff"
              fontSize={12}
              fontWeight={700}
              formatter={(v: number) => `${v}%`}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function ThemePanel({ theme }: { theme: ErpTheme }) {
  return (
    <div key={theme.number} className="animate-in">
      <div className="flex items-start gap-4 mb-5">
        <div className="w-14 h-14 min-w-[56px] rounded-full bg-orange flex items-center justify-center">
          <Icon name={theme.icon} className="w-6 h-6 text-white" />
        </div>
        <div>
          <div className="text-orange font-bold text-xs tracking-[1.6px] mb-1.5">
            THEME {theme.number} — {theme.label.toUpperCase()}
          </div>
          <h3 className="text-[26px] text-balance">{theme.title}</h3>
        </div>
      </div>

      <div className="bg-orange text-white rounded-lg px-5 py-4 mb-7 text-[14.5px] leading-relaxed">
        <b className="inline-block tracking-[1.2px] text-xs mr-2.5 opacity-80">SO WHAT</b>
        {theme.sowhat}
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col gap-4">
          {theme.groups.map((g) => (
            <div key={g.q} className="bg-card rounded-[10px] p-5">
              <div className="text-orange font-bold text-[14.5px] mb-3 leading-snug">Q. {g.q}</div>
              <div className="flex flex-col gap-4">
                {g.quotes.map((qt) => (
                  <figure key={qt.text} className="m-0">
                    <blockquote className="italic text-[15px] text-body leading-relaxed m-0">
                      &ldquo;{qt.text}&rdquo;
                    </blockquote>
                    <figcaption className="text-[13px] text-muted italic mt-1.5">— {qt.attr}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          {theme.charts.map((c) => (
            <ThemeChart key={c.title} chart={c} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ErpThemes() {
  const [active, setActive] = useState(0);

  return (
    <section id="erp-themes" className="py-16 border-t border-hairline scroll-mt-16">
      <div className="max-w-content mx-auto px-8">
        <SectionHeader
          eyebrow="EIGHT THEMES IN DEPTH"
          title="What stakeholders told us, theme by theme"
          intro="Select a theme to see the questions asked, representative quotes, and how responses were distributed across the 18 interviews."
        />

        <Reveal>
          <div
            role="tablist"
            aria-label="Interview themes"
            className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-10"
          >
            {erpThemes.map((t, i) => {
              const isActive = i === active;
              return (
                <button
                  key={t.number}
                  id={`erp-theme-${t.number}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  className={`scroll-mt-24 flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-left transition-colors border ${
                    isActive
                      ? "bg-orange text-white border-orange"
                      : "bg-white text-body border-hairline hover:border-orange hover:text-orange"
                  }`}
                >
                  <Icon name={t.icon} className="w-4 h-4 min-w-[16px]" />
                  <span className="text-[12.5px] font-bold leading-tight">{t.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div role="tabpanel">
          <ThemePanel theme={erpThemes[active]} />
        </div>

        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={() => setActive((a) => Math.max(0, a - 1))}
            disabled={active === 0}
            className="text-[13px] font-bold text-muted hover:text-orange disabled:opacity-30 disabled:hover:text-muted transition-colors"
          >
            {"← Previous theme"}
          </button>
          <button
            type="button"
            onClick={() => setActive((a) => Math.min(erpThemes.length - 1, a + 1))}
            disabled={active === erpThemes.length - 1}
            className="text-[13px] font-bold text-orange hover:text-orange2 disabled:opacity-30 transition-colors"
          >
            {"Next theme →"}
          </button>
        </div>
      </div>
    </section>
  );
}
