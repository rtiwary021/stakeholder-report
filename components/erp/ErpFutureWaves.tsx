"use client";

import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Reveal from "@/components/Reveal";
import { personas, futureWavesSoWhat, WAVE_GREY, ORANGE2, ORANGE } from "@/lib/erp";
import { SectionHeader, Takeaway } from "./shared";

const WAVES = [
  { key: "w2", label: "Wave 2", color: WAVE_GREY },
  { key: "w3", label: "Wave 3", color: ORANGE2 },
  { key: "w4", label: "Wave 4", color: ORANGE },
] as const;

function WaveTooltip({ active, payload, label }: any) {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="bg-white border border-hairline rounded-lg px-3 py-2 shadow-lg text-sm">
      <div className="font-bold text-ink mb-1">{label}</div>
      {payload.map((p: any) => (
        <div key={p.dataKey} className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-sm" style={{ background: p.color }} aria-hidden="true" />
          <span className="text-body">{p.name}</span>
          <span className="font-bold text-ink ml-auto pl-3">~{Number(p.value).toFixed(1)}</span>
        </div>
      ))}
    </div>
  );
}

export default function ErpFutureWaves() {
  const [hover, setHover] = useState<string | null>(null);
  const data = personas.map((p) => ({ name: p.name, ...p.waves }));

  return (
    <section id="erp-waves" className="py-16 border-t border-hairline scroll-mt-16">
      <div className="max-w-content mx-auto px-8">
        <SectionHeader
          eyebrow="FUTURE WAVES"
          title="What Each Persona Wants From Waves 2–4"
          intro="Wave 1 told us who's ready. These answers tell us what to build next, and for whom."
        />

        <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 items-start mb-8">
          <Reveal>
            <div className="bg-white border border-hairline rounded-[10px] p-5">
              <div className="text-sm text-center font-bold mb-2 text-ink">
                Average Relevance by Wave, by Persona (0–3 scale)
              </div>
              <ResponsiveContainer width="100%" height={420}>
                <BarChart
                  data={data}
                  layout="vertical"
                  margin={{ top: 5, right: 16, left: 10, bottom: 5 }}
                  barCategoryGap="18%"
                  onMouseMove={(s: any) => setHover(s?.activeLabel ?? null)}
                  onMouseLeave={() => setHover(null)}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#EBEBEB" />
                  <XAxis type="number" domain={[0, 3]} ticks={[0, 0.5, 1, 1.5, 2, 2.5, 3]} tick={{ fontSize: 11, fill: "#6E6E6E" }} />
                  <YAxis type="category" dataKey="name" width={118} tick={{ fontSize: 12, fill: "#2B2B2B" }} />
                  <Tooltip content={<WaveTooltip />} cursor={{ fill: "rgba(253,81,8,0.05)" }} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                  {WAVES.map((w) => (
                    <Bar key={w.key} dataKey={w.key} name={w.label} fill={w.color} barSize={11} animationDuration={800} />
                  ))}
                </BarChart>
              </ResponsiveContainer>
              <p className="text-[11.5px] text-muted italic mt-1">
                Scale: 3 = very useful • 2 = somewhat useful • 1 = low value • 0 = not relevant (per the discovery
                guide&apos;s Agent Heat Map Reference). Values read from the source chart.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-3">
            {personas.map((p, i) => (
              <Reveal key={p.name} delay={i * 70}>
                <div
                  className={`rounded-[10px] px-5 py-4 transition-colors ${
                    hover === p.name ? "bg-orange/5 ring-1 ring-orange/40" : "bg-card"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-3 mb-1.5">
                    <span className="font-bold text-ink text-[15px]">{p.name}</span>
                    <span className="text-[12px] text-muted whitespace-nowrap">
                      Top wave: <b className="text-orange">{p.topWave}</b>
                    </span>
                  </div>
                  <p className="italic text-[13.5px] text-body leading-relaxed">
                    &ldquo;{p.waveQuote}&rdquo; <span className="text-muted">— {p.waveAttr}</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Takeaway>{futureWavesSoWhat}</Takeaway>
      </div>
    </section>
  );
}
