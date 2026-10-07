import { recommendationsMeta, recommendations, topRisks, leadershipRecs } from "@/lib/data";
import Reveal from "./Reveal";

export default function Recommendations() {
  return (
    <section id="recommendations" className="py-16 border-t border-hairline scroll-mt-16">
      <div className="max-w-content mx-auto px-8">
        <Reveal>
          <div className="text-orange font-bold text-xs tracking-[1.6px] mb-1.5">{recommendationsMeta.eyebrow}</div>
          <h2 className="text-[28px] mb-7">{recommendationsMeta.title}</h2>
        </Reveal>

        <div className="grid lg:grid-cols-[2.2fr_1fr] gap-8 items-start">
          <Reveal delay={100}>
            <div className="hidden md:grid grid-cols-[50px_150px_1fr] gap-4 px-2 pb-2 text-[11px] font-bold text-muted tracking-wide">
              <span></span>
              <span>KEY INSIGHT</span>
              <span>WHAT WE LEARNED / WHAT THE ADOPTION PLAN REQUIRES</span>
            </div>
            <div className="flex flex-col">
              {recommendations.map((r, i) => (
                <div key={r.num} className={`grid md:grid-cols-[50px_150px_1fr] gap-4 px-2 py-3 items-start ${i % 2 === 0 ? "bg-card" : "bg-white"}`}>
                  <div className="font-serif font-bold text-2xl text-[#2B2B2B]">{r.num}</div>
                  <div className="font-bold text-orange text-[13.5px]">{r.title}</div>
                  <div className="text-[13px]">
                    <p className="mb-1">{r.insight}</p>
                    <p className="font-bold">{r.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal delay={150}>
              <div className="bg-card rounded-[10px] p-5">
                <div className="text-orange font-bold text-xs tracking-[1.2px] mb-3">{recommendationsMeta.risksTitle}</div>
                <div className="flex flex-col gap-4">
                  {topRisks.map((risk) => (
                    <div key={risk.title} className="flex gap-3">
                      <span className="w-8 h-8 rounded-full bg-orange flex items-center justify-center shrink-0 text-white text-sm">!</span>
                      <div>
                        <div className="font-bold text-[13px]">{risk.title}</div>
                        <div className="text-[12px] text-muted">{risk.body}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="border-2 border-orange rounded-[10px] p-5">
                <div className="text-orange font-bold text-xs tracking-[1.2px] mb-3">{recommendationsMeta.leadershipTitle}</div>
                <div className="flex flex-col gap-3">
                  {leadershipRecs.map((rec) => (
                    <div key={rec} className="flex gap-2.5">
                      <span className="w-4 h-4 border-2 border-orange rounded-sm shrink-0 mt-0.5" />
                      <span className="text-[12.5px]">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={300}>
          <div className="bg-[#2B2B2B] text-white rounded-lg px-5 py-4 mt-7 text-[14.5px]">
            <b className="inline-block tracking-[1.2px] text-xs mr-2.5 text-orange">{recommendationsMeta.keyTakeawayLabel.toUpperCase()}</b>
            {recommendationsMeta.keyTakeaway}
          </div>
          <p className="text-[11px] text-muted italic mt-3">{recommendationsMeta.source}</p>
        </Reveal>
      </div>
    </section>
  );
}
