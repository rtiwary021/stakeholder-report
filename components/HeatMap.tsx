"use client";

import { useCallback, useRef, useState } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  ReferenceArea,
  ReferenceLine,
} from "recharts";
import { heatMapMeta, heatMapBubbles, heatMapPMD, heatMapStages } from "@/lib/data";
import Reveal from "./Reveal";

const NOT_ASSESSED = "#A1A8B3";
const INK = "#2B2B2B";
const MUTED = "#6E6E6E";

const sizes = [...heatMapBubbles.map((b) => b.size), heatMapPMD.size];
const minSize = Math.min(...sizes);
const maxSize = Math.max(...sizes);
const radiusFor = (size: number) => 18 + ((size - minSize) / (maxSize - minSize || 1)) * 22;

type Point = {
  role: string;
  n: number;
  x: number;
  y: number;
  size: number;
  color?: string;
  stage?: string;
  desc: string;
};

function Bubble(props: any) {
  const { cx, cy, payload, focus, onFocus } = props as {
    cx: number;
    cy: number;
    payload: Point;
    focus: (p: Point) => "on" | "off" | "none";
    onFocus: (role: string | null) => void;
  };
  if (cx == null || cy == null) return null;
  const r = radiusFor(payload.size);
  const assessed = Boolean(payload.color);
  const labelLeft = payload.x >= 8;
  const lx = labelLeft ? cx - r - 8 : cx + r + 8;
  const anchor = labelLeft ? "end" : "start";
  const name = assessed ? payload.role : "P/MD (not interviewed – provisional)";
  const state = focus(payload);

  return (
    <g
      style={{
        cursor: "pointer",
        opacity: state === "off" ? 0.2 : 1,
        transform: state === "on" ? "scale(1.06)" : "scale(1)",
        transformOrigin: `${cx}px ${cy}px`,
        transition: "opacity 250ms ease, transform 250ms ease",
      }}
      onMouseEnter={() => onFocus(payload.role)}
      onMouseLeave={() => onFocus(null)}
    >
      {assessed ? (
        <>
          <circle cx={cx} cy={cy} r={r + 6} fill={payload.color} opacity={0.18} />
          <circle cx={cx} cy={cy} r={r} fill={payload.color} stroke="#FFFFFF" strokeWidth={2.5} />
          <text x={cx} y={cy} dy="0.35em" textAnchor="middle" fill="#FFFFFF" fontSize={13} fontWeight={700}>
            {payload.n}
          </text>
        </>
      ) : (
        <>
          <circle cx={cx} cy={cy} r={r} fill="#FFFFFF" stroke={NOT_ASSESSED} strokeWidth={2} strokeDasharray="4 3" />
          <text x={cx} y={cy} dy="0.35em" textAnchor="middle" fill={MUTED} fontSize={12} fontWeight={700}>
            {payload.n}
          </text>
        </>
      )}
      <text x={lx} y={cy - 3} textAnchor={anchor} fill={assessed ? INK : MUTED} fontSize={12.5} fontWeight={700}>
        {name}
      </text>
      <text x={lx} y={cy + 13} textAnchor={anchor} fill={MUTED} fontSize={11}>
        {`n=${payload.n}`}
      </text>
    </g>
  );
}

function BubbleTooltip({ active, payload }: any) {
  if (!active || !payload || !payload.length) return null;
  const p = payload[0].payload as Point;
  return (
    <div className="bg-white border border-hairline rounded-lg px-3 py-2 shadow-lg text-sm max-w-[260px]">
      <div className="font-bold" style={{ color: p.color || MUTED }}>
        {p.role} (n={p.n})
      </div>
      {p.stage && <div className="text-xs text-muted italic mb-1">{p.stage}</div>}
      <div className="text-xs leading-relaxed">{p.desc}</div>
    </div>
  );
}

function StageDot({ color, size = "w-3 h-3" }: { color?: string | null; size?: string }) {
  return color ? (
    <span className={`${size} rounded-full shrink-0`} style={{ backgroundColor: color }} aria-hidden="true" />
  ) : (
    <span className={`${size} rounded-full shrink-0 border-2 border-dashed border-[#A1A8B3]`} aria-hidden="true" />
  );
}

export default function HeatMap() {
  const pdfOrder = ["Associates", "Sr. Associates", "Managers", "Sr. Managers", "Directors"];
  const roleNotes: Point[] = [
    ...pdfOrder
      .map((name) => heatMapBubbles.find((b) => b.role === name))
      .filter((b): b is (typeof heatMapBubbles)[number] => Boolean(b)),
    heatMapPMD,
  ];

  const [hoverRole, setHoverRole] = useState<string | null>(null);
  const [stageFilter, setStageFilter] = useState<string | null>(null);

  const matchesStage = (p: Point) =>
    stageFilter === null || (stageFilter === "__none" ? !p.color : p.color === stageFilter);

  const focus = (p: Point): "on" | "off" | "none" => {
    if (hoverRole) return p.role === hoverRole ? "on" : "off";
    if (stageFilter !== null) return matchesStage(p) ? "on" : "off";
    return "none";
  };

  // Recharts remounts shapes when the `shape` prop identity changes, which re-triggers
  // mouseenter on hover and loops. Keep the renderer stable and read latest focus via a ref.
  const focusRef = useRef(focus);
  focusRef.current = focus;
  const shape = useCallback(
    (props: any) => <Bubble {...props} focus={(p: Point) => focusRef.current(p)} onFocus={setHoverRole} />,
    [],
  );

  return (
    <section id="heatmap" className="py-16 border-t border-hairline scroll-mt-16">
      <div className="max-w-content mx-auto px-8">
        <Reveal>
          <div className="text-orange font-bold text-xs tracking-[1.6px] mb-1.5">{heatMapMeta.eyebrow}</div>
          <h2 className="text-[28px] mb-6 text-balance">{heatMapMeta.title}</h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="bg-white border border-hairline rounded-[10px] p-5 md:p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
              <div className="text-[12px] font-bold tracking-[1.2px] text-muted uppercase">Change-curve stage today</div>
              <ul className="flex flex-wrap items-center gap-2" aria-label="Filter by change-curve stage">
                {heatMapStages.map((s) => {
                  const key = s.color ?? "__none";
                  const selected = stageFilter === key;
                  return (
                    <li key={s.label}>
                      <button
                        type="button"
                        aria-pressed={selected}
                        onClick={() => setStageFilter(selected ? null : key)}
                        className={`flex items-center gap-1.5 text-[12.5px] rounded-full border px-3 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange ${
                          selected
                            ? "border-body bg-body text-white"
                            : "border-hairline bg-white hover:border-orange2"
                        }`}
                      >
                        <StageDot color={s.color} />
                        {s.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <ResponsiveContainer width="100%" height={460}>
              <ScatterChart margin={{ top: 24, right: 24, bottom: 36, left: 16 }}>
                <ReferenceArea x1={5} x2={10} y1={5} y2={10} fill="#FE7C39" fillOpacity={0.06} stroke="none" />
                <CartesianGrid stroke="#F0E8E2" strokeDasharray="2 4" />
                <ReferenceLine x={5} stroke="#E3D6CC" />
                <ReferenceLine y={5} stroke="#E3D6CC" />
                <XAxis
                  type="number"
                  dataKey="x"
                  domain={[0, 10]}
                  ticks={[0, 2, 4, 6, 8, 10]}
                  tick={{ fontSize: 11, fill: MUTED }}
                  axisLine={{ stroke: "#CFC4BB" }}
                  tickLine={false}
                >
                  <Label
                    value={heatMapMeta.xAxisLabel}
                    position="bottom"
                    offset={14}
                    style={{ fontSize: 11, fontWeight: 700, fill: INK, letterSpacing: 0.4 }}
                  />
                </XAxis>
                <YAxis
                  type="number"
                  dataKey="y"
                  domain={[0, 10]}
                  ticks={[0, 2, 4, 6, 8, 10]}
                  tick={{ fontSize: 11, fill: MUTED }}
                  axisLine={{ stroke: "#CFC4BB" }}
                  tickLine={false}
                >
                  <Label
                    value={heatMapMeta.yAxisLabel}
                    angle={-90}
                    position="left"
                    style={{ fontSize: 11, fontWeight: 700, fill: INK, textAnchor: "middle", letterSpacing: 0.4 }}
                  />
                </YAxis>
                <Tooltip content={<BubbleTooltip />} cursor={false} />
                <Scatter data={[heatMapPMD]} shape={shape} isAnimationActive={false} />
                <Scatter data={heatMapBubbles} shape={shape} isAnimationActive={false} />
              </ScatterChart>
            </ResponsiveContainer>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-hairline">
              <p className="text-[12px] text-muted italic">{heatMapMeta.sizeLegendLabel}</p>
              <p className="text-[12px] text-muted">Number inside each bubble = stakeholders interviewed</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <h3 className="font-bold text-base mt-8 mb-4">What the interviews tell us</h3>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {roleNotes.map((r) => (
              <li
                key={r.role}
                tabIndex={0}
                onMouseEnter={() => setHoverRole(r.role)}
                onMouseLeave={() => setHoverRole(null)}
                onFocus={() => setHoverRole(r.role)}
                onBlur={() => setHoverRole(null)}
                className={`bg-card rounded-[10px] p-5 flex flex-col gap-2 h-full border transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-orange ${
                  hoverRole === r.role ? "border-orange2 bg-white shadow-md -translate-y-0.5" : "border-transparent"
                } ${focus(r) === "off" ? "opacity-50" : "opacity-100"}`}
              >
                <div className="flex items-center gap-2.5">
                  <StageDot color={r.color} size="w-3.5 h-3.5" />
                  <span className="font-bold text-[14px]">{r.role}</span>
                  <span className="ml-auto text-[12px] text-muted">n={r.n}</span>
                </div>
                <span className="text-[11.5px] font-bold tracking-[0.6px] uppercase" style={{ color: r.color || MUTED }}>
                  {r.stage ?? "Not assessed"}
                </span>
                <p className="text-[13px] text-muted leading-relaxed">{r.desc}</p>
              </li>
            ))}
          </ul>
        </Reveal>

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
