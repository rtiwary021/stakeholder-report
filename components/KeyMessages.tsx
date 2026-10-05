import { keyMessages, skillShift } from "@/lib/data";
import Reveal from "./Reveal";

export default function KeyMessages() {
  return (
    <section id="messages" className="py-16 scroll-mt-16 border-t border-hairline">
      <div className="max-w-content mx-auto px-8">
        <Reveal>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 min-w-[56px] rounded-full bg-orange flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                <path d="M3 11l18-5v12L3 13v-2z" />
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" fill="none" stroke="white" strokeWidth={2} />
              </svg>
            </div>
            <div>
              <div className="text-orange font-bold text-xs tracking-[1.6px] mb-1.5">
                FROM FINDINGS TO ROLLOUT
              </div>
              <h3 className="text-[26px]">Key Messages for the Change Story</h3>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-4 mb-10">
          {keyMessages.map((m, i) => (
            <Reveal key={m.quote} delay={i * 90}>
              <div
                className="rounded-[10px] px-6 py-5 text-white transition-transform duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: m.color }}
              >
                <div className="font-serif italic font-bold text-[17px] mb-1.5">
                  &ldquo;{m.quote}&rdquo;
                </div>
                <div className="text-[12.5px] opacity-85">{m.grounding}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={270}>
          <h3 className="text-[20px] mb-3.5">The Skill Shift</h3>
          <div className="border border-hairline rounded-[10px] overflow-hidden">
            <div className="grid grid-cols-2 bg-black text-white px-6 py-3 font-bold text-[13px]">
              <div>TODAY</div>
              <div className="text-orange">TOMORROW</div>
            </div>
            {skillShift.map((row, i) => (
              <div
                key={row.today}
                className={`grid grid-cols-2 px-6 py-3 text-[14.5px] ${i % 2 === 0 ? "bg-card" : "bg-white"}`}
              >
                <div>{row.today}</div>
                <div className="text-orange font-bold">{row.tomorrow}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
