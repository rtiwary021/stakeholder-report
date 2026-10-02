import { strengths, skepticism } from "@/lib/data";
import Reveal from "./Reveal";

export default function Risks() {
  return (
    <section id="risks" className="py-16 scroll-mt-16">
      <div className="max-w-content mx-auto px-8">
        <Reveal>
          <div className="text-orange font-bold text-xs tracking-[1.6px] mb-1.5">WHERE WE STAND TODAY</div>
          <h2 className="text-[30px] mb-8">What&apos;s Working, and Where Skepticism Still Lives</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Reveal>
              <h3 className="text-orange text-[17px] mb-4">What We Have Going For Us</h3>
            </Reveal>
            <div className="bg-[#FFF4ED] rounded-[10px] p-6 flex flex-col gap-5">
              {strengths.map((s, i) => (
                <Reveal key={s.title} delay={i * 90}>
                  <div>
                    <span className="text-orange font-bold text-[14.5px]">{s.title} </span>
                    <span className="text-[14.5px]">{s.body}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <Reveal delay={60}>
              <h3 className="text-muted text-[17px] mb-4">Where Skepticism Still Lives</h3>
            </Reveal>
            <div className="bg-card rounded-[10px] p-6 flex flex-col gap-5">
              {skepticism.map((s, i) => (
                <Reveal key={s.title} delay={120 + i * 90}>
                  <div>
                    <span className="text-muted font-bold text-[14.5px]">{s.title} </span>
                    <span className="text-[14.5px]">{s.body}</span>
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
