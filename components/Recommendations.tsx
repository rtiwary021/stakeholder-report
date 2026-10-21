import { recommendations } from "@/lib/data";
import Reveal from "./Reveal";

export default function Recommendations() {
  return (
    <section id="recommendations" className="py-16 scroll-mt-16">
      <div className="max-w-content mx-auto px-8">
        <Reveal>
          <h2 className="text-[30px] mb-2">Recommendations &amp; Next Steps</h2>
          <p className="text-muted italic text-[15px] mb-8">Turning findings into a rollout plan</p>
        </Reveal>
        <div className="flex flex-col gap-3.5">
          {recommendations.map((r, i) => (
            <Reveal key={r.num} delay={i * 90}>
              <div className="bg-card rounded-[10px] p-5 grid grid-cols-[56px_1fr] gap-5 items-start transition-all duration-300 hover:bg-orange/5 hover:-translate-y-0.5">
                <div className="font-serif font-bold text-orange3 text-[32px]">{r.num}</div>
                <div>
                  <h3 className="text-orange text-[17px] mb-1.5">{r.title}</h3>
                  <p className="text-[14.5px] m-0">{r.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
