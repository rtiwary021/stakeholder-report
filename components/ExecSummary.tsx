import { execSummaryMeta, strengths, stillNeeded } from "@/lib/data";
import Reveal from "./Reveal";

export default function ExecSummary() {
  return (
    <section id="summary" className="py-16 scroll-mt-16">
      <div className="max-w-content mx-auto px-8">
        <Reveal>
          <h2 className="text-[30px] mb-7">Executive Summary</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Reveal>
              <h3 className="text-orange text-[17px] mb-4">{execSummaryMeta.workingLabel}</h3>
            </Reveal>
            <div className="bg-[#FFF4ED] rounded-[10px] p-6 flex flex-col gap-5">
              {strengths.map((s, i) => (
                <Reveal key={s.title} delay={i * 90}>
                  <div className="rounded-md -mx-2 px-2 py-1 transition-colors duration-200 hover:bg-white/70">
                    <span className="text-orange font-bold text-[14.5px]">{s.title}. </span>
                    <span className="text-[14.5px]">{s.body}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <Reveal delay={60}>
              <h3 className="text-muted text-[17px] mb-4">
                {execSummaryMeta.needsLabel}
                <span className="font-normal italic">{execSummaryMeta.needsSubLabel}</span>
              </h3>
            </Reveal>
            <div className="bg-card rounded-[10px] p-6 flex flex-col gap-5">
              {stillNeeded.map((s, i) => (
                <Reveal key={s.title} delay={120 + i * 90}>
                  <div className="rounded-md -mx-2 px-2 py-1 transition-colors duration-200 hover:bg-white/70">
                    <span className="text-muted font-bold text-[14.5px]">{s.title}. </span>
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
