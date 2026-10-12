"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  PieChart,
  Pie,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";
import { ThemeSectionData } from "@/lib/data";
import { Icon } from "./Icon";
import Reveal from "./Reveal";

function BarTooltip({ active, payload, suffix }: any) {
  if (!active || !payload || !payload.length) return null;
  const p = payload[0];
  return (
    <div className="bg-white border border-hairline rounded-lg px-3 py-2 shadow-lg text-sm">
      <div className="font-bold">{p.payload.name}</div>
      <div style={{ color: p.color || p.payload.fill }}>
        {p.value}
        {suffix || ""} {suffix ? "of respondents" : "mentions"}
      </div>
    </div>
  );
}

function QuoteCard({ q, quote, attr }: { q: string; quote: string; attr: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = quote.length > 180;
  return (
    <div
      className={`bg-card rounded-[10px] p-6 flex-1 flex flex-col transition-colors hover:bg-orange/5 outline-none focus-visible:ring-2 focus-visible:ring-orange ${
        isLong ? "cursor-pointer" : ""
      }`}
      role={isLong ? "button" : undefined}
      tabIndex={isLong ? 0 : undefined}
      aria-expanded={isLong ? expanded : undefined}
      onClick={() => isLong && setExpanded((e) => !e)}
      onKeyDown={(e) => {
        if (isLong && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          setExpanded((v) => !v);
        }
      }}
    >
      <div className="text-orange font-bold text-[14.5px] mb-2.5">Q. {q}</div>
      <blockquote
        className={`italic text-[15px] m-0 transition-all ${
          isLong && !expanded ? "line-clamp-3" : ""
        }`}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>
      {isLong && (
        <div className="text-orange text-xs font-bold mt-2">
          {expanded ? "Show less ▲" : "Read full quote ▼"}
        </div>
      )}
      <div className="text-[13px] text-muted italic mt-auto pt-2.5">— {attr}</div>
    </div>
  );
}

type ChartSpec = NonNullable<ThemeSectionData["chart"]>;

function ChartBox({ chart, delay }: { chart: ChartSpec; delay: number }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const opacityFor = (i: number) => (activeIndex === null || activeIndex === i ? 1 : 0.35);
  return (
    <Reveal delay={delay} className="flex-1 flex">
      <div className="flex-1 flex flex-col justify-center bg-white border border-hairline rounded-[10px] p-6 transition-shadow duration-300 hover:shadow-md">
        <div className="text-sm text-center font-bold mb-2">{chart.title}</div>
        <ResponsiveContainer width="100%" height={260}>
          {chart.type === "bar" ? (
            <BarChart
              data={chart.data}
              layout="vertical"
              margin={{ top: 5, right: 44, left: 10, bottom: 5 }}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#EBEBEB" />
              <XAxis type="number" tick={{ fontSize: 11 }} tickFormatter={(v) => `${v}${chart.suffix || ""}`} />
              <YAxis type="category" dataKey="name" width={150} tick={{ fontSize: 11 }} />
              <Tooltip content={<BarTooltip suffix={chart.suffix} />} cursor={{ fill: "rgba(0,0,0,0.03)" }} />
              <Bar
                dataKey="value"
                radius={[0, 4, 4, 0]}
                barSize={24}
                animationDuration={800}
                onMouseEnter={(_, i) => setActiveIndex(i)}
              >
                {chart.data.map((_, i) => (
                  <Cell
                    key={i}
                    fill={chart.colors ? chart.colors[i % chart.colors.length] : chart.color}
                    fillOpacity={opacityFor(i)}
                    style={{ transition: "fill-opacity 200ms ease" }}
                  />
                ))}
                <LabelList
                  dataKey="value"
                  position="right"
                  formatter={(v: number) => `${v}${chart.suffix || ""}`}
                  style={{ fontSize: 11, fontWeight: 700, fill: "#2B2B2B" }}
                />
              </Bar>
            </BarChart>
          ) : (
            <PieChart onMouseLeave={() => setActiveIndex(null)}>
              <Pie
                data={chart.data}
                dataKey="value"
                nameKey="name"
                innerRadius={55}
                outerRadius={95}
                paddingAngle={2}
                animationDuration={800}
                onMouseEnter={(_, i) => setActiveIndex(i)}
              >
                {chart.data.map((_, i) => (
                  <Cell
                    key={i}
                    fill={chart.colors?.[i % (chart.colors?.length || 1)]}
                    fillOpacity={opacityFor(i)}
                    style={{ transition: "fill-opacity 200ms ease" }}
                  />
                ))}
              </Pie>
              <Tooltip content={<BarTooltip />} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
    </Reveal>
  );
}

export default function ThemeSection({ data, index }: { data: ThemeSectionData; index: number }) {
  const { eyebrow, title, icon, sowhat, quotes, chart, chart2 } = data;
  const hasVisual = chart || chart2;

  return (
    <section className="py-16 border-t border-hairline scroll-mt-16">
      <div className="max-w-content mx-auto px-8">
        <Reveal>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 min-w-[56px] rounded-full bg-orange flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-6">
              <Icon name={icon} className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-orange font-bold text-xs tracking-[1.6px] mb-1.5">{eyebrow}</div>
              <h3 className="text-[26px]">{title}</h3>
            </div>
          </div>

          <div className="bg-orange text-white rounded-[10px] px-6 py-5 mb-7 text-[14.5px]">
            <b className="inline-block tracking-[1.2px] text-xs mr-2.5 opacity-75">SO WHAT</b>
            {sowhat}
          </div>
        </Reveal>

        <div className={`grid gap-5 ${hasVisual ? "md:grid-cols-2" : ""} items-stretch`}>
          <Reveal delay={100} className="flex">
            <div className="flex-1 grid auto-rows-fr gap-5">
              {quotes.map((q, i) => (
                <QuoteCard key={`${q.q}-${i}`} {...q} />
              ))}
            </div>
          </Reveal>

          {hasVisual && (
            <div className="flex flex-col gap-5">
              {chart && <ChartBox chart={chart} delay={200} />}
              {chart2 && <ChartBox chart={chart2} delay={280} />}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
