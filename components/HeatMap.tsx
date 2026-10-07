"use client";

import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Label } from "recharts";
import { heatMapMeta, heatMapBubbles, heatMapPMD, heatMapStages } from "@/lib/data";
import Reveal from "./Reveal";

function BubbleTooltip({ active, payload }: any) {
  if (!active || !payload || !payload.length) return null;
  const p = payload[0].payload;
  return (
    <div className="bg-white border border-hairline rounded-lg px-3 py-2 shadow-lg text-sm max-w-[260px]">
      <div className="font-bold" style={{ color: p.color || "#6E6E6E" }}>{p.role} (n={p.n})</div>
      {p.stage && <div className="text-xs text-muted italic mb-1">{p.stage}</div>}
      <div className="text-xs">{p.desc}</div>
    </div>
  );
}

export default function HeatMap() {
  const data = heatMapBubbles.map((b) => ({ ...b, z: b.size }));
  const pmdData = [{ ...heatMapPMD, z: heatMapPMD.size }];
  const pdfOrder = ["Associates", "Sr. Associates", "Managers", "Sr. Managers", "Directors"];
  const roleNotes: { role: string; desc: string; color?: string }[] = [
    ...pdfOrder
      .map((name) => heatMapBubbles.find((b) => b.role === name))
      .filter((b): b is (typeof heatMapBubbles)[number] => Boolean(b)),
    heatMapPMD,
  ];

  return (
    <section className="py-16 border-t border-hairline scroll-mt-16">
      <div className="max-w-content mx-auto px-8">
        <Reveal>
          <div className="text-orange font-bold text-xs tracking-[1.6px] mb-1.5">{heatMapMeta.eyebrow}</div>
          <h2 className="text-[28px] mb-6">{heatMapMeta.title}</h2>
        </Reveal>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
          <Reveal delay={100}>
            <div className="bg-[#FFF4ED] border border-hairline rounded-[10px] p-5 relative">
              <ResponsiveContainer width="100%" height={420}>
                <ScatterChart margin={{ top: 20, right: 20, bottom: 30, left: 10 }}>
                  <CartesianGrid stroke="#E8DFD8" />
                  <XAxis type="number" dataKey="x" domain={[0, 10]} ticks={[0, 2, 4, 6, 8, 10]} tick={{ fontSize: 11, fill: "#6E6E6E" }}>
                    <Label value={heatMapMeta.xAxisLabel} position="bottom" offset={10} style={{ fontSize: 11, fontWeight: 700, fill: "#2B2B2B" }} />
                  </XAxis>
                  <YAxis type="number" dataKey="y" domain={[0, 10]} ticks={[0, 2, 4, 6, 8, 10]} tick={{ fontSize: 11, fill: "#6E6E6E" }}>
                    <Label value={heatMapMeta.yAxisLabel} angle={-90} position="left" style={{ fontSize: 11, fontWeight: 700, fill: "#2B2B2B", textAnchor: "middle" }} />
                  </YAxis>
                  <ZAxis type="number" dataKey="z" range={[600, 3600]} />
                  <Tooltip content={<BubbleTooltip />} cursor={{ strokeDasharray: "3 3" }} />
                  <Scatter data={data} fillOpacity={0.88}>
                    {data.map((d, i) => <Cell key={i} fill={d.color} stroke="#fff" strokeWidth={2} />)}
                  </Scatter>
                  <Scatter data={pmdData} fill="none" stroke="#A1A8B3" strokeDasharray="4 3" strokeWidth={2} />
                </ScatterChart>
              </ResponsiveContainer>
              {/* Role labels overlaid - approximate positions matching the data */}
              <div className="absolute inset-5 pointer-events-none">
                {heatMapBubbles.map((b) => (
                  <div
                    key={b.role}
                    className="absolute text-white text-[11px] font-bold text-center -translate-x-1/2 -translate-y-1/2 leading-tight"
                    style={{ left: `${(b.x / 10) * 100}%`, top: `${(1 - b.y / 10) * 82 + 3}%` }}
                  >
                    {b.role}<br /><span className="font-normal text-[10px]">n={b.n}</span>
                  </div>
                ))}
                <div
                  className="absolute text-muted text-[10px] font-bold text-center -translate-x-1/2 -translate-y-1/2 leading-tight whitespace-nowrap"
                  style={{ left: `${(heatMapPMD.x / 10) * 100}%`, top: `${(1 - heatMapPMD.y / 10) * 82 + 3}%` }}
                >
                  P/MD (not interviewed – provisional)<br /><span className="font-normal">n={heatMapPMD.n}</span>
                </div>
              </div>
            </div>
            <div className="mt-3 text-[12px] text-muted italic">{heatMapMeta.sizeLegendLabel}</div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-card rounded-[10px] p-5">
              <div className="font-bold text-sm mb-3">Change-curve stage today</div>
              <div className="flex flex-col gap-2.5">
                {heatMapStages.map((s) => (
                  <div key={s.label} className="flex items-center gap-2.5">
                    {s.color ? (
                      <span className="w-3.5 h-3.5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
                    ) : (
                      <span className="w-3.5 h-3.5 rounded-full shrink-0 border-2 border-dashed border-[#A1A8B3]" />
                    )}
                    <span className="text-[13px]">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-[10px] p-5 mt-4">
              <div className="font-bold text-sm mb-3">What the interviews tell us</div>
              <dl className="flex flex-col gap-3">
                {roleNotes.map((r) => (
                  <div key={r.role} className="flex gap-2.5">
                    {r.color ? (
                      <span className="w-2.5 h-2.5 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: r.color }} aria-hidden="true" />
                    ) : (
                      <span className="w-2.5 h-2.5 rounded-full shrink-0 mt-1.5 border-2 border-dashed border-[#A1A8B3]" aria-hidden="true" />
                    )}
                    <div>
                      <dt className="text-[13px] font-bold">{r.role}</dt>
                      <dd className="text-[12.5px] text-muted leading-relaxed">{r.desc}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        <Reveal delay={280}>
          <div className="bg-[#2B2B2B] text-white rounded-lg px-5 py-4 mt-7 text-[14.5px]">
            <b className="inline-block tracking-[1.2px] text-xs mr-2.5 text-orange">KEY TAKEAWAY</b>
            {heatMapMeta.soWhat}
          </div>
          <p className="text-[11px] text-muted italic mt-3">{heatMapMeta.source}</p>
        </Reveal>
      </div>
    </section>
  );
}
