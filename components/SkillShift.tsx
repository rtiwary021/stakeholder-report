import { skillShiftMeta, skillShiftToday, skillShiftFuture } from "@/lib/data";
import Reveal from "./Reveal";

function SkillRow({ rank, name, desc, count }: { rank: number; name: string; desc: string; count: number }) {
  return (
    <div className="flex items-start gap-3 py-2 border-b border-hairline last:border-0">
      <div className="font-serif font-bold text-orange text-lg w-6 shrink-0">{rank}</div>
      <div className="flex-1">
        <div className="font-bold text-[13.5px]">{name}</div>
        <div className="text-[12px] text-muted">{desc}</div>
      </div>
      <div className="text-[13px] font-bold text-muted whitespace-nowrap">{count}/18</div>
    </div>
  );
}

export default function SkillShift() {
  return (
    <section className="py-16 border-t border-hairline scroll-mt-16">
      <div className="max-w-content mx-auto px-8">
        <Reveal>
          <div className="text-orange font-bold text-xs tracking-[1.6px] mb-1.5">{skillShiftMeta.eyebrow}</div>
          <h2 className="text-[28px] mb-2">{skillShiftMeta.title}</h2>
          <p className="text-muted italic text-[14px] mb-8 max-w-[900px]">{skillShiftMeta.overview}</p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          <Reveal delay={100}>
            <h3 className="text-orange text-[15px] font-bold tracking-wide mb-3">BASELINE TODAY — What makes a strong CRM consultant</h3>
            <div className="bg-card rounded-[10px] px-4">
              {skillShiftToday.map((s, i) => (
                <SkillRow key={s.name} rank={i + 1} name={s.name} desc={s.desc} count={s.count} />
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <h3 className="text-orange text-[15px] font-bold tracking-wide mb-3">AGENTIC FUTURE — New skills as AI takes on more of the work</h3>
            <div className="bg-[#FFF4ED] rounded-[10px] px-4">
              {skillShiftFuture.map((s, i) => (
                <SkillRow key={s.name} rank={i + 1} name={s.name} desc={s.desc} count={s.count} />
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <p className="text-[13px] font-bold text-orange mt-6 mb-5">{skillShiftMeta.takeaway}</p>
          <div className="bg-[#2B2B2B] text-white rounded-lg px-5 py-4 text-[14.5px]">
            <b className="inline-block tracking-[1.2px] text-xs mr-2.5 text-orange">KEY TAKEAWAY</b>
            {skillShiftMeta.keyTakeaway}
          </div>
          <p className="text-[11px] text-muted italic mt-3">{skillShiftMeta.source}</p>
        </Reveal>
      </div>
    </section>
  );
}
