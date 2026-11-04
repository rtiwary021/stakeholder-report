"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from "recharts";
import Reveal from "@/components/Reveal";
import { SENTIMENT, sentimentByTheme, sentimentIntro, whatToWatch } from "@/lib/erp";
import { SectionHeader } from "./shared";

function StackTooltip({ active, payload, label }: any) {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="bg-white border border-hairline rounded-lg px-3 py-2 shadow-lg text-sm">
      <div className="font-bold text-ink mb-1">{label}</div>
      {payload.map((p: any) => (
        <div key={p.dataKey} className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-sm" style={{ background: p.color }} aria-hidden="true" />
          <span className="capitalize text-body">{p.dataKey}</span>
          <span className="font-bold text-ink ml-auto pl-3">{p.value}</span>
        </div>
      ))}
    </div>
  );
}

const hideZero = (v: number) => (v > 0 ? v : "");

export default function ErpSentiment() {
  return (
    <section id="erp-sentiment" className="py-16 border-t border-hairline scroll-mt-16">
      <div className="max-w-content mx-auto px-8">
        <SectionHeader title="Sentiment Overview" intro={sentimentIntro} />

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 items-start">
          <Reveal>
            <div className="bg-white border border-hairline rounded-[10px] p-5">
              <div className="text-sm text-center font-bold mb-3 text-ink">
                Sentiment by Theme (n=18, varies by question)
              </div>
              <ResponsiveContainer width="100%" height={340}>
                <BarChart data={sentimentByTheme} margin={{ top: 5, right: 10, left: -18, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EBEBEB" />
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 11, fill: "#6E6E6E" }}
                    interval={0}
                    tickFormatter={(v: string) => v.split(" / ")[0]}
                  />
                  <YAxis domain={[0, 18]} ticks={[0, 3, 6, 9, 12, 15, 18]} tick={{ fontSize: 11, fill: "#6E6E6E" }} />
                  <Tooltip content={<StackTooltip />} cursor={{ fill: "rgba(0,0,0,0.03)" }} />
                  <Legend
                    wrapperStyle={{ fontSize: 12 }}
                    formatter={(v: string) => <span className="capitalize text-body">{v}</span>}
                  />
                  <Bar dataKey="positive" stackId="s" fill={SENTIMENT.positive} animationDuration={800}>
                    <LabelList dataKey="positive" position="center" fill="#fff" fontSize={12} formatter={hideZero} />
                  </Bar>
                  <Bar dataKey="mixed" stackId="s" fill={SENTIMENT.mixed} animationDuration={800}>
                    <LabelList dataKey="mixed" position="center" fill="#fff" fontSize={12} formatter={hideZero} />
                  </Bar>
                  <Bar dataKey="concerned" stackId="s" fill={SENTIMENT.concerned} animationDuration={800}>
                    <LabelList dataKey="concerned" position="center" fill="#fff" fontSize={12} formatter={hideZero} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h3 className="text-[22px] mb-4">What to watch</h3>
            </Reveal>
            <div className="flex flex-col gap-3">
              {whatToWatch.map((w, i) => (
                <Reveal key={w.stat} delay={i * 100}>
                  <div className="bg-card rounded-[10px] px-5 py-5 flex items-center gap-5 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md">
                    <div className="font-serif font-bold text-[28px] text-ink min-w-[96px] text-center">{w.stat}</div>
                    <p className="text-[14px] text-body leading-relaxed">{w.body}</p>
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
