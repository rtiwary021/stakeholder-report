"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

type Tone = "orange" | "orange2" | "orange3" | "grey" | "slate";

type CloudWord = {
  word: string;
  x: number;
  y: number;
  size: number;
  tone: Tone;
  rotate?: number;
};

const TONE_FILL: Record<Tone, string> = {
  orange: "#FD5108",
  orange2: "#FE7C39",
  orange3: "#FFAA72",
  grey: "#6E6E6E",
  slate: "#A1A8B3",
};

// Positions, sizes and colours mirror appendix slide 21. The slide gives no mention counts, so none are shown.
const WORDS: CloudWord[] = [
  { word: "Helpful", x: 440, y: 280, size: 96, tone: "orange" },
  { word: "Excited", x: 429, y: 176, size: 66, tone: "grey" },
  { word: "Accurate", x: 443, y: 376, size: 64, tone: "orange2" },
  { word: "Judgment", x: 423, y: 445, size: 46, tone: "orange3" },
  { word: "Valuable", x: 446, y: 103, size: 44, tone: "orange" },
  { word: "Efficient", x: 657, y: 158, size: 44, tone: "grey", rotate: -90 },
  { word: "Trust", x: 153, y: 240, size: 48, tone: "slate", rotate: 90 },
  { word: "Standardize", x: 465, y: 51, size: 38, tone: "grey" },
  { word: "Validate", x: 267, y: 100, size: 36, tone: "slate" },
  { word: "Useful", x: 463, y: 497, size: 36, tone: "orange" },
  { word: "Trying", x: 282, y: 41, size: 34, tone: "orange2" },
  { word: "Concerned", x: 708, y: 202, size: 32, tone: "orange3", rotate: 90 },
  { word: "Adoption", x: 757, y: 285, size: 32, tone: "orange3", rotate: -90 },
  { word: "Curious", x: 701, y: 439, size: 34, tone: "grey" },
  { word: "Context", x: 175, y: 451, size: 34, tone: "grey" },
  { word: "Confident", x: 273, y: 517, size: 34, tone: "orange" },
  { word: "Reliable", x: 648, y: 492, size: 32, tone: "slate" },
  { word: "Eager", x: 163, y: 57, size: 30, tone: "grey" },
  { word: "Champion", x: 108, y: 113, size: 30, tone: "orange" },
  { word: "Hesitant", x: 215, y: 347, size: 28, tone: "grey", rotate: 90 },
  { word: "Skeptical", x: 716, y: 29, size: 28, tone: "orange2" },
  { word: "Worried", x: 822, y: 112, size: 28, tone: "orange3" },
  { word: "Overhead", x: 754, y: 72, size: 26, tone: "slate" },
  { word: "Teamwork", x: 58, y: 242, size: 24, tone: "orange", rotate: 90 },
  { word: "Amazing", x: 851, y: 275, size: 26, tone: "grey" },
  { word: "Familiar", x: 58, y: 152, size: 24, tone: "orange2" },
  { word: "Nebulous", x: 120, y: 353, size: 24, tone: "grey" },
  { word: "Open", x: 124, y: 407, size: 24, tone: "grey" },
  { word: "Potential", x: 823, y: 151, size: 22, tone: "orange3" },
  { word: "Wary", x: 852, y: 225, size: 22, tone: "grey" },
  { word: "Inspired", x: 821, y: 188, size: 20, tone: "orange2" },
  { word: "Proven", x: 919, y: 346, size: 20, tone: "orange3" },
  { word: "Partner", x: 836, y: 387, size: 20, tone: "slate", rotate: -90 },
  { word: "Intuitive", x: 240, y: 176, size: 18, tone: "slate" },
  { word: "Nervous", x: 837, y: 311, size: 18, tone: "orange3" },
  { word: "Control", x: 668, y: 363, size: 18, tone: "grey" },
  { word: "Faith", x: 155, y: 492, size: 18, tone: "orange" },
  { word: "Fear", x: 602, y: 95, size: 16, tone: "grey", rotate: 90 },
];

const VB_W = 980;
const VB_H = 545;

export default function ErpAppendix() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="erp-appendix" className="border-t border-hairline scroll-mt-16">
      <div className="max-w-content mx-auto px-8 py-16">
        <Reveal>
          <div className="text-muted font-bold text-xs tracking-[1.6px] mb-8">APPENDIX</div>

          <div className="flex items-start gap-4 mb-5">
            <div
              aria-hidden="true"
              className="w-14 h-14 min-w-[56px] rounded-full bg-orange flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div>
              <div className="text-orange font-bold text-xs tracking-[1.6px] mb-1.5">VOICE OF THE INTERVIEWS</div>
              <h2 className="text-[26px] leading-tight text-balance">
                How ERP Stakeholders Describe Their Relationship with AI
              </h2>
            </div>
          </div>

          <div className="bg-orange text-white rounded-lg px-5 py-4 mb-7 text-[14.5px] leading-relaxed text-pretty">
            &ldquo;Helpful&rdquo; is the most-used word stakeholders reach for &mdash; well ahead of Excited and
            Accurate, echoing a practice that already sees real utility while still building full confidence in it.
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="bg-white border border-hairline rounded-[14px] p-6 md:p-8 shadow-sm">
            <svg
              viewBox={`0 0 ${VB_W} ${VB_H}`}
              className="w-full h-auto"
              role="img"
              aria-label={`Word cloud of stakeholder vocabulary about AI. Largest words: ${WORDS.slice(0, 6)
                .map((w) => w.word)
                .join(", ")}. Also mentioned: ${WORDS.slice(6)
                .map((w) => w.word)
                .join(", ")}.`}
            >
              {WORDS.map((w) => {
                const isHovered = hovered === w.word;
                const scale = isHovered ? 1.12 : 1;
                return (
                  <text
                    key={w.word}
                    x={w.x}
                    y={w.y}
                    fontSize={w.size}
                    fill={TONE_FILL[w.tone]}
                    fontFamily="Georgia, 'Times New Roman', serif"
                    fontWeight={700}
                    textAnchor="middle"
                    dominantBaseline="central"
                    transform={`translate(${w.x} ${w.y}) rotate(${w.rotate ?? 0}) scale(${scale}) translate(${-w.x} ${-w.y})`}
                    opacity={hovered && !isHovered ? 0.3 : 1}
                    style={{ transition: "transform 220ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 150ms ease" }}
                    className="cursor-default"
                    onMouseEnter={() => setHovered(w.word)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {w.word}
                  </text>
                );
              })}
            </svg>
          </div>
          <p className="text-center text-[13px] text-muted italic mt-3 text-pretty">
            Perception-specific vocabulary (trust, accuracy, judgment, comfort, and similar terms) across the 18 ERP
            interviews completed so far &mdash; size reflects relative mention frequency.
          </p>
        </Reveal>
      </div>

      <div className="bg-peach">
        <div className="max-w-content mx-auto px-8 pt-40 pb-16 flex flex-col gap-2">
          <Reveal>
            <h2 className="font-serif font-bold text-body text-[56px] md:text-[72px] leading-none">Thank You</h2>
            <p className="text-ink text-[20px] mt-4">Questions &amp; Discussion</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
