"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { sentimentByTheme, watchStats, COLORS, meta, overviewStatement } from "@/lib/data";
import Reveal from "./Reveal";
import AnimatedNumber from "./AnimatedNumber";

const maxStack = Math.max(
  ...sentimentByTheme.map((t) => t.Positive + t.Mixed + t.Concerned)
);

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="bg-white border border-hairline rounded-lg px-3 py-2 shadow-lg text-sm">
      <div className="font-bold mb-1">{label}</div>
      {payload.map((p: any) => (
        <div key={p.name} style={{ color: p.color }}>
          {p.name}: <span className="font-bold">{p.value}</span>
        </div>
      ))}
    </div>
  );
}

const SERIES = [
  { key: "Positive", color: COLORS.orange },
  { key: "Mixed", color: COLORS.orange2 },
  { key: "Concerned", color: COLORS.grey },
] as const;

export default function Overview() {
  const [hidden, setHidden] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setHidden((h) => ({ ...h, [key]: !h[key] }));
  return (
    <section id="overview" className="py-16 scroll-mt-16">
      <div className="max-w-content mx-auto px-8">
        <Reveal>
          <h2 className="text-[30px] mb-2">Sentiment Overview</h2>
          <p className="text-muted italic text-[15px] mb-8 max-w-[950px]">
            {overviewStatement}
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-5 items-start">
          <Reveal delay={80}>
            <div className="bg-white border border-hairline rounded-[10px] p-6 transition-shadow duration-300 hover:shadow-md">
              <div className="text-sm text-center font-bold mb-2">
                Sentiment by Theme (n={meta.stakeholders}, varies by question)
              </div>
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={sentimentByTheme} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={COLORS.card} />
                  <XAxis dataKey="theme" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} domain={[0, maxStack]} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(0,0,0,0.03)" }} />
                  {SERIES.map((s, i) => (
                    <Bar
                      key={s.key}
                      dataKey={s.key}
                      stackId="a"
                      fill={s.color}
                      hide={hidden[s.key]}
                      animationDuration={900}
                      animationBegin={i * 150}
                    />
                  ))}
                </BarChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap justify-center gap-2 mt-2" aria-label="Toggle sentiment series">
                {SERIES.map((s) => (
                  <button
                    key={s.key}
                    type="button"
                    aria-pressed={!hidden[s.key]}
                    onClick={() => toggle(s.key)}
                    className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-[12px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange ${
                      hidden[s.key] ? "border-hairline text-muted opacity-60 line-through" : "border-hairline hover:border-orange2"
                    }`}
                  >
                    <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: s.color }} aria-hidden="true" />
                    {s.key}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={120}>
              <h3 className="text-lg mb-3.5">What to watch</h3>
            </Reveal>
            <div className="flex flex-col gap-4">
              {watchStats.map((s, i) => (
                <Reveal key={s.text} delay={160 + i * 90}>
                  <div className="bg-card rounded-[10px] p-6 flex items-center gap-4 transition-all duration-300 hover:bg-orange/5 hover:-translate-y-0.5">
                    <div className="font-serif font-bold text-orange text-[26px] min-w-[74px]">
                      <AnimatedNumber value={s.big} />
                    </div>
                    <p className="text-sm m-0">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
