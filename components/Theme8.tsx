"use client";

import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, LabelList, ResponsiveContainer } from "recharts";
import { theme8 } from "@/lib/data";
import { Icon } from "./Icon";
import Reveal from "./Reveal";

function BarTooltip({ active, payload }: any) {
  if (!active || !payload || !payload.length) return null;
  const p = payload[0];
  return (
    <div className="bg-white border border-hairline rounded-lg px-3 py-2 shadow-lg text-sm">
      <div className="font-bold">{p.payload.name}</div>
      <div style={{ color: p.payload.fill }}>{p.value}% of respondents</div>
    </div>
  );
}

export default function Theme8() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <section className="py-16 border-t border-hairline scroll-mt-16">
      <div className="max-w-content mx-auto px-8">
        <Reveal>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 min-w-[56px] rounded-full bg-orange flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-6">
              <Icon name={theme8.icon} className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-orange font-bold text-xs tracking-[1.6px] mb-1.5">{theme8.eyebrow}</div>
              <h3 className="text-[26px]">{theme8.title}</h3>
            </div>
          </div>
          <div className="bg-orange text-white rounded-[10px] px-6 py-5 mb-7 text-[14.5px]">
            <b className="inline-block tracking-[1.2px] text-xs mr-2.5 opacity-75">SO WHAT</b>
            {theme8.sowhat}
          </div>
        </Reveal>

        {/* Top section: peer-influence quote + chart */}
        <div className="grid md:grid-cols-2 gap-5 items-stretch mb-10">
          <Reveal delay={100} className="flex">
            <div className="flex-1 flex flex-col bg-card rounded-[10px] p-6">
              <div className="text-orange font-bold text-[14.5px] mb-2.5">Q. {theme8.quote.q}</div>
              <blockquote className="italic text-[15px] m-0">&ldquo;{theme8.quote.quote}&rdquo;</blockquote>
              <div className="text-[13px] text-muted italic mt-auto pt-2.5">— {theme8.quote.attr}</div>
            </div>
          </Reveal>
          <Reveal delay={200} className="flex">
            <div className="flex-1 flex flex-col justify-center bg-white border border-hairline rounded-[10px] p-6 transition-shadow duration-300 hover:shadow-md">
              <div className="text-sm text-center font-bold mb-2">{theme8.chart.title}</div>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart
                  data={theme8.chart.data}
                  layout="vertical"
                  margin={{ top: 5, right: 44, left: 10, bottom: 5 }}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#EBEBEB" />
                  <XAxis type="number" tick={{ fontSize: 11 }} tickFormatter={(v) => `${v}%`} />
                  <YAxis type="category" dataKey="name" width={150} tick={{ fontSize: 11 }} />
                  <Tooltip content={<BarTooltip />} cursor={{ fill: "rgba(0,0,0,0.03)" }} />
                  <Bar
                    dataKey="value"
                    radius={[0, 4, 4, 0]}
                    barSize={24}
                    animationDuration={800}
                    onMouseEnter={(_, i) => setActiveIndex(i)}
                  >
                    {theme8.chart.data.map((_, i) => (
                      <Cell
                        key={i}
                        fill={theme8.chart.colors[i % theme8.chart.colors.length]}
                        fillOpacity={activeIndex === null || activeIndex === i ? 1 : 0.35}
                        style={{ transition: "fill-opacity 200ms ease" }}
                      />
                    ))}
                    <LabelList
                      dataKey="value"
                      position="right"
                      formatter={(v: number) => `${v}%`}
                      style={{ fontSize: 11, fontWeight: 700, fill: "#2B2B2B" }}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Reveal>
        </div>

        {/* Bottom section: future-state question banner + one quote per role */}
        <Reveal delay={280}>
          <div className="bg-orange text-white rounded-[10px] px-6 py-5 mb-3.5 text-[14.5px]">
            {theme8.futureStateQuestion}
          </div>
        </Reveal>
        <div className="flex flex-col">
          {theme8.futureStateQuotes.map((q, i) => (
            <Reveal key={q.attr} delay={320 + i * 70}>
              <div
                className={`px-5 py-3 text-[14.5px] transition-colors duration-200 hover:bg-orange/5 ${
                  i % 2 === 0 ? "bg-card" : "bg-white"
                }`}
              >
                <span className="italic">&ldquo;{q.quote}&rdquo;</span>{" "}
                <span className="text-muted italic text-[13px]">— {q.attr}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
