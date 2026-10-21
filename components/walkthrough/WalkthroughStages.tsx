"use client";

import { useState } from "react";
import IntroSummary from "./IntroSummary";
import InterviewWalkthrough from "./InterviewWalkthrough";
import { interview } from "@/lib/interview";

type Stage = "intro" | "questions";

export default function WalkthroughStages() {
  const [stage, setStage] = useState<Stage>("intro");

  const select = (next: Stage) => {
    setStage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const tabs: { id: Stage; step: number; label: string }[] = [
    { id: "intro", step: 1, label: "Quick intro" },
    { id: "questions", step: 2, label: `The ${interview.questions.length} questions` },
  ];

  return (
    <>
      <div className="max-w-content mx-auto px-8 pb-8">
        <div className="inline-flex gap-1 bg-card rounded-full p-1" role="tablist" aria-label="Interview stages">
          {tabs.map((t) => {
            const active = stage === t.id;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => select(t.id)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                  active ? "bg-white text-body shadow-sm" : "text-muted hover:text-orange"
                }`}
              >
                <span
                  className={`h-5 w-5 rounded-full text-[11px] flex items-center justify-center ${
                    active ? "bg-orange text-white" : "bg-white text-muted"
                  }`}
                >
                  {t.step}
                </span>
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {stage === "intro" ? (
        <section className="pb-16" aria-label="Interview introduction">
          <div className="max-w-content mx-auto px-8">
            <IntroSummary onStart={() => select("questions")} />
          </div>
        </section>
      ) : (
        <InterviewWalkthrough onBackToIntro={() => select("intro")} />
      )}
    </>
  );
}
