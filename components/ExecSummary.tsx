"use client";

import { execCards, meta, documentationBanner } from "@/lib/data";
import { Icon } from "./Icon";
import Reveal from "./Reveal";

export default function ExecSummary() {
  return (
    <section id="summary" className="py-16 scroll-mt-16">
      <div className="max-w-content mx-auto px-8">
        <Reveal>
          <h2 className="text-[30px] mb-2">Executive Summary</h2>
          <p className="text-muted italic text-[15px] mb-8">
            Headline findings synthesized from {meta.stakeholders} completed stakeholder interviews
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {execCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 90}>
              <div className="bg-card rounded-[10px] p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-default group">
                <div className="w-11 h-11 rounded-full bg-orange flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon name={card.icon} className="w-[22px] h-[22px] text-white" />
                </div>
                <h3 className="text-orange text-[19px] mb-2.5">{card.title}</h3>
                <p className="text-[15px]">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={360}>
          <div className="bg-orange text-white rounded-[10px] px-7 py-5">
            <span className="font-bold text-[13px] tracking-[0.5px] mr-2">{documentationBanner.title}</span>
            <span className="text-[14.5px]">{documentationBanner.body}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
