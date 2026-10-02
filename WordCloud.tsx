"use client";

import { useState } from "react";
import wordData from "@/lib/wordcloud-data.json";
import { meta } from "@/lib/data";
import Reveal from "./Reveal";

type WordDatum = {
  word: string;
  x: number;
  y: number;
  fontSize: number;
  color: string;
  rotate: number;
  freq: number;
};

const VB_W = 1300;
const VB_H = 680;

export default function WordCloud() {
  const [hovered, setHovered] = useState<WordDatum | null>(null);
  const words = wordData as WordDatum[];

  return (
    <section id="wordcloud" className="py-16 scroll-mt-16 border-t border-hairline">
      <div className="max-w-content mx-auto px-8">
        <Reveal>
          <div className="flex items-start gap-4 mb-5">
            <div className="w-14 h-14 min-w-[56px] rounded-full bg-orange flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div>
              <div className="text-orange font-bold text-xs tracking-[1.6px] mb-1.5">
                VOICE OF THE INTERVIEWS
              </div>
              <h3 className="text-[26px]">How Stakeholders Describe Their Relationship with AI</h3>
            </div>
          </div>

          <div className="bg-orange text-white rounded-lg px-5 py-4 mb-7 text-[14.5px]">
            <b className="inline-block tracking-[1.2px] text-xs mr-2.5 opacity-75">SO WHAT</b>
            &ldquo;Comfortable&rdquo; is the most-used word stakeholders reach for when describing AI — followed
            closely by Trust, Judgment, and Risk, echoing a practice that is engaged but still calibrating.
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative bg-white border border-hairline rounded-[14px] p-8 shadow-sm">
            <div className="relative w-full" style={{ paddingBottom: `${(VB_H / VB_W) * 100}%` }}>
              <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="absolute inset-0 w-full h-full">
                {words.map((w) => {
                  const cx = (w.x / 100) * VB_W;
                  const cy = (w.y / 100) * VB_H;
                  const isHovered = hovered?.word === w.word;
                  const scale = isHovered ? 1.16 : 1;
                  return (
                    <text
                      key={w.word}
                      x={cx}
                      y={cy}
                      fontSize={w.fontSize}
                      fill={w.color}
                      fontFamily="Georgia, serif"
                      fontWeight={700}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      transform={`translate(${cx} ${cy}) rotate(${w.rotate}) scale(${scale}) translate(${-cx} ${-cy})`}
                      style={{
                        transition: "transform 220ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 150ms ease, filter 200ms ease",
                        filter: isHovered ? "drop-shadow(0 6px 14px rgba(0,0,0,0.18))" : "none",
                      }}
                      className="cursor-pointer"
                      opacity={hovered && !isHovered ? 0.3 : 1}
                      onMouseEnter={() => setHovered(w)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {w.word}
                    </text>
                  );
                })}
              </svg>
            </div>
            {hovered && (
              <div className="absolute top-5 right-5 bg-black text-white text-sm rounded-md px-3 py-2 pointer-events-none animate-in" style={{ animationDuration: "150ms" }}>
                <span className="font-bold">{hovered.word}</span> — mentioned {hovered.freq} times
              </div>
            )}
          </div>
          <p className="text-center text-[13px] text-muted italic mt-3">
            Perception-specific vocabulary (trust, risk, judgment, comfort, and similar terms) across all{" "}
            {meta.stakeholders} stakeholder transcripts — size reflects mention count. Hover any word for its exact count.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
