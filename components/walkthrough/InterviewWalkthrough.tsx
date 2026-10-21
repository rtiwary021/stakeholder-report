"use client";

import { useEffect, useState } from "react";
import { interview, sectionOf } from "@/lib/interview";

const { questions } = interview;

export default function InterviewWalkthrough() {
  const [index, setIndex] = useState(0);
  const current = questions[index];
  const total = questions.length;

  const go = (delta: number) => setIndex((i) => Math.min(total - 1, Math.max(0, i + delta)));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIndex((i) => Math.min(total - 1, i + 1));
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  return (
    <section className="pb-16" aria-label="Interview questions">
      <div className="max-w-content mx-auto px-8 flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <nav aria-label="Jump to question" className="flex gap-1.5">
            {questions.map((q, i) => (
              <button
                key={q.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Question ${i + 1}`}
                aria-current={i === index ? "step" : undefined}
                className={`h-2 flex-1 rounded-full transition-colors ${
                  i === index ? "bg-orange" : i < index ? "bg-orange/40" : "bg-card hover:bg-orange/20"
                }`}
              />
            ))}
          </nav>

          <article
            key={current.id}
            className="bg-white border border-hairline rounded-[10px] p-8 md:p-12 min-h-[300px] flex flex-col gap-6 animate-in"
            aria-live="polite"
          >
            <div className="flex items-center justify-between gap-4 text-[13px]">
              <span className="text-orange font-bold tracking-[2px] uppercase">{sectionOf(current.id)}</span>
              <span className="text-muted font-bold">
                Question {index + 1} of {total}
              </span>
            </div>
            <p className="text-[24px] md:text-[30px] leading-snug text-pretty">{current.question}</p>
          </article>

          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              disabled={index === 0}
              className="text-sm font-bold rounded-lg px-5 py-2.5 border border-hairline hover:border-orange hover:text-orange transition-colors disabled:opacity-40 disabled:pointer-events-none"
            >
              &larr; Previous
            </button>
            <span className="hidden sm:inline text-[13px] text-muted">Use &larr; &rarr; keys to move</span>
            <button
              type="button"
              onClick={() => go(1)}
              disabled={index === total - 1}
              className="text-sm font-bold rounded-lg px-5 py-2.5 bg-orange text-white hover:bg-orange2 transition-colors disabled:opacity-40 disabled:pointer-events-none"
            >
              Next &rarr;
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[22px]">All {total} questions</h2>
          <ol className="bg-white border border-hairline rounded-[10px] divide-y divide-hairline">
            {questions.map((q, i) => (
              <li key={q.id}>
                <button
                  type="button"
                  onClick={() => {
                    setIndex(i);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`w-full text-left flex items-start gap-4 px-5 py-4 transition-colors hover:bg-card ${
                    i === index ? "bg-orange/10" : ""
                  }`}
                >
                  <span
                    className={`shrink-0 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${
                      i === index ? "bg-orange text-white" : "bg-card text-muted"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="text-[15px] leading-relaxed text-pretty">{q.question}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
