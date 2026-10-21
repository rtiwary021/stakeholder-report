import { waves } from "@/lib/data";
import Reveal from "./Reveal";

export default function Rollout() {
  return (
    <section id="rollout" className="py-16 scroll-mt-16 border-t border-hairline">
      <div className="max-w-content mx-auto px-8">
        <Reveal>
          <div className="flex items-start gap-4 mb-5">
            <div className="w-14 h-14 min-w-[56px] rounded-full bg-orange flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                <line x1="8" y1="2" x2="8" y2="18" />
                <line x1="16" y1="6" x2="16" y2="22" />
              </svg>
            </div>
            <div>
              <div className="text-orange font-bold text-xs tracking-[1.6px] mb-1.5">
                FROM FINDINGS TO ROLLOUT
              </div>
              <h3 className="text-[26px]">A Phased Path to Adoption</h3>
            </div>
          </div>
          <p className="text-muted italic text-[15px] mb-7">
            Sequencing adoption by where trust already exists, rather than by technical difficulty
          </p>
        </Reveal>

        <div className="flex flex-col gap-4">
          {waves.map((w, i) => (
            <Reveal key={w.wave} delay={i * 100}>
              <div className="bg-card rounded-[10px] p-6 grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-5 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <div>
                  <div className="font-bold text-[15px]" style={{ color: w.color }}>
                    {w.wave}
                  </div>
                  <div className="text-muted text-[13px]">{w.period}</div>
                </div>
                <div>
                  <h3 className="text-[18px] mb-2" style={{ color: w.color }}>
                    {w.title}
                  </h3>
                  <p className="text-[14.5px] m-0">
                    <b>Focus:</b> {w.focus}{" "}
                    <span className="text-muted italic">{w.rationale}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
