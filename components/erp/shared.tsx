import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

export function SectionHeader({
  id,
  eyebrow,
  title,
  intro,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
}) {
  return (
    <Reveal>
      <div id={id} className="mb-8">
        {eyebrow && <div className="text-orange font-bold text-xs tracking-[1.6px] mb-2">{eyebrow}</div>}
        <h2 className="text-[30px] leading-tight mb-2 text-balance">{title}</h2>
        {intro && <p className="text-muted text-[15px] leading-relaxed max-w-[860px] text-pretty">{intro}</p>}
      </div>
    </Reveal>
  );
}

export function Takeaway({ label = "SO WHAT", children }: { label?: string; children: ReactNode }) {
  return (
    <Reveal>
      <div className="bg-charcoal text-white rounded-lg px-6 py-5 flex flex-col md:flex-row gap-2 md:gap-8 md:items-center">
        <div className="text-orange font-bold text-sm tracking-[1.4px] whitespace-nowrap md:w-28">{label}</div>
        <p className="text-[15px] leading-relaxed text-pretty">{children}</p>
      </div>
    </Reveal>
  );
}

export function PctTooltip({ active, payload }: any) {
  if (!active || !payload || !payload.length) return null;
  const p = payload[0];
  return (
    <div className="bg-white border border-hairline rounded-lg px-3 py-2 shadow-lg text-sm">
      <div className="font-bold text-ink">{p.payload.name}</div>
      <div className="text-body">{p.value}% of stakeholders</div>
    </div>
  );
}
