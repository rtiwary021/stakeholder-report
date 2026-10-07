"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { meta, methodologyOverview, roleBreakdown, COLORS } from "@/lib/data";
import Reveal from "./Reveal";
import AnimatedNumber from "./AnimatedNumber";

const CLUSTERS = [
  "Current value & identity",
  "Friction & first reaction",
  "Role & expertise evolution",
  "Trust, control & judgment",
  "Client value & behavior change",
  "Barriers & incentives",
  "Learning & proof",
  "Peer influence & future state",
];

const ROLE_COLORS = [COLORS.orange3, COLORS.orange2, COLORS.orange, COLORS.grey, COLORS.grey4];

function StatCard({ num, label, delay = 0 }: { num: string; label: string; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="bg-card rounded-[10px] p-6 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="font-serif font-bold text-[34px] text-orange">
          <AnimatedNumber value={num} />
        </div>
        <div className="text-[13px] text-muted mt-1.5 leading-tight">{label}</div>
      </div>
    </Reveal>
  );
}

function RoleTooltip({ active, payload }: any) {
  if (!active || !payload || !payload.length) return null;
  const p = payload[0];
  return (
    <div className="bg-white border border-hairline rounded-lg px-3 py-2 shadow-lg text-sm">
      <span className="font-bold">{p.name}</span>: {p.value}
    </div>
  );
}

export default function Methodology() {
  return (
    <section id="methodology" className="py-16 scroll-mt-16">
      <div className="max-w-content mx-auto px-8">
        <Reveal>
          <h2 className="text-[30px] mb-2">Methodology &amp; Scope</h2>
          <p className="text-muted italic text-[15px] mb-8 max-w-[900px]">
            {methodologyOverview}
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
          <StatCard num={String(meta.stakeholders)} label="Stakeholders interviewed" delay={0} />
          <StatCard num={String(meta.roleLevels)} label="Role levels Associate to Director" delay={80} />
          <StatCard num={String(meta.clusters)} label="Questions organized under eight themes" delay={160} />
          <StatCard num={meta.avgDuration} label="Average interview length" delay={240} />
        </div>

        <Reveal delay={200}>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-orange text-lg mb-3.5">Stakeholder Roles Interviewed</h3>
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie data={roleBreakdown} dataKey="count" nameKey="role" innerRadius={50} outerRadius={90} paddingAngle={2} animationDuration={800}>
                    {roleBreakdown.map((_, i) => (
                      <Cell key={i} fill={ROLE_COLORS[i % ROLE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<RoleTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div>
              <h3 className="text-orange text-lg mb-3.5">Question Clusters Covered</h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                {CLUSTERS.map((c) => (
                  <li key={c} className="relative pl-5 text-[15px]">
                    <span className="absolute left-0 top-[9px] w-1.5 h-1.5 rounded-full bg-orange" />
                    {c}
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
