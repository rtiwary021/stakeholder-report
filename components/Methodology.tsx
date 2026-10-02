import { meta, roleBreakdown, methodologyNote } from "@/lib/data";
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

export default function Methodology() {
  return (
    <section id="methodology" className="py-16 scroll-mt-16">
      <div className="max-w-content mx-auto px-8">
        <Reveal>
          <h2 className="text-[30px] mb-2">Methodology &amp; Scope</h2>
          <p className="text-muted italic text-[15px] mb-8">
            Findings based on {meta.stakeholders} completed stakeholder interviews across the CRM/CE practice
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
          <StatCard num={String(meta.stakeholders)} label="Stakeholders interviewed" delay={0} />
          <StatCard num={String(meta.roleLevels)} label="Role levels Associate to Director" delay={80} />
          <StatCard num={String(meta.clusters)} label="Thematic clusters analyzed" delay={160} />
          <StatCard num={meta.avgDuration} label="Average interview length" delay={240} />
        </div>

        <Reveal delay={60}>
          <p className="text-center text-[13px] text-muted italic mb-10">
            Role mix:{" "}
            {roleBreakdown.map((r, i) => (
              <span key={r.role}>
                {i > 0 && " • "}
                {r.count} {r.role}
              </span>
            ))}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-orange text-lg mb-3.5">Approach</h3>
              <ul className="space-y-3.5">
                <li className="relative pl-5 text-[15px]">
                  <span className="absolute left-0 top-[9px] w-1.5 h-1.5 rounded-full bg-orange" />
                  One-on-one, semi-structured interviews using a shared 16-question discovery guide organized around 8 thematic clusters
                </li>
                <li className="relative pl-5 text-[15px]">
                  <span className="absolute left-0 top-[9px] w-1.5 h-1.5 rounded-full bg-orange" />
                  {methodologyNote}
                </li>
                <li className="relative pl-5 text-[15px]">
                  <span className="absolute left-0 top-[9px] w-1.5 h-1.5 rounded-full bg-orange" />
                  Responses coded by theme and rolled up into the findings below; all attribution is by role only — no names
                </li>
              </ul>
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
