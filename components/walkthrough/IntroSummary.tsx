"use client";

import { useState } from "react";
import { howUsed, notYet, otherTools, roadmapNote, themes, timeline, wave1Expect, waves, whyAsking } from "@/lib/intro";

function Label({ children, muted }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <div className={`text-[12px] font-bold tracking-[2px] uppercase ${muted ? "text-muted" : "text-orange"}`}>
      {children}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2 list-disc pl-5 text-[15px] leading-relaxed marker:text-orange">
      {items.map((item) => (
        <li key={item} className="text-pretty">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function IntroSummary({ onStart }: { onStart: () => void }) {
  const [waveId, setWaveId] = useState("wave1");
  const [themeIdx, setThemeIdx] = useState(0);
  const wave = waves.find((w) => w.id === waveId) ?? waves[1];
  const theme = themes[themeIdx];

  return (
    <div className="flex flex-col gap-6 animate-in">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-orange/5 border border-orange rounded-[10px] p-6 flex flex-col gap-4">
          <Label>Why we&apos;re asking</Label>
          <Bullets items={whyAsking} />
        </div>
        <div className="bg-card rounded-[10px] p-6 flex flex-col gap-4">
          <Label muted>How your answers will be used</Label>
          <Bullets items={howUsed} />
        </div>
        <div className="bg-white border border-dashed border-muted/50 rounded-[10px] p-6 flex flex-col gap-4">
          <Label muted>What happens next</Label>
          <ol className="flex flex-col gap-3">
            {timeline.map((t, i) => (
              <li key={t.when} className="flex gap-3">
                <span
                  className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${i === 0 ? "bg-orange" : "bg-muted/40"}`}
                  aria-hidden="true"
                />
                <div className="flex flex-col">
                  <span className="text-[15px] font-bold">{t.when}</span>
                  <span className="text-[14px] text-muted leading-relaxed">{t.what}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="bg-white border border-hairline rounded-[10px] p-6 flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <Label>The roadmap at a glance</Label>
          <p className="text-[14px] text-muted">Select a release to see what it includes.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2" role="tablist" aria-label="Roadmap releases">
          {waves.map((w) => {
            const active = w.id === waveId;
            return (
              <button
                key={w.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setWaveId(w.id)}
                className={`rounded-lg px-3 py-3 text-left flex flex-col gap-0.5 border transition-colors ${
                  active
                    ? w.current
                      ? "bg-orange border-orange text-white"
                      : "bg-body border-body text-white"
                    : w.current
                      ? "bg-orange/5 border-orange/40 hover:border-orange"
                      : "bg-card border-transparent hover:border-muted/50"
                }`}
              >
                <span className="text-[15px] font-bold">{w.name}</span>
                <span className={`text-[12px] ${active ? "text-white/85" : "text-muted"}`}>
                  {w.current ? "Current focus" : "Later release"}
                </span>
              </button>
            );
          })}
        </div>

        <div key={wave.id} role="tabpanel" className="flex flex-col gap-4 animate-in">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-[22px]">{wave.title}</h3>
            <span className={`text-[13px] font-bold ${wave.current ? "text-orange" : "text-muted"}`}>{wave.status}</span>
          </div>
          {wave.summary && <p className="text-[15px] leading-relaxed text-pretty max-w-[760px]">{wave.summary}</p>}
          {wave.agents.length > 0 && (
            <ul className="grid gap-3 sm:grid-cols-2">
              {wave.agents.map((a) => (
                <li
                  key={a.name}
                  className={`rounded-lg p-4 flex flex-col gap-1 border ${
                    wave.current ? "bg-orange/5 border-orange/40" : "bg-card border-transparent"
                  }`}
                >
                  <span className={`text-[15px] font-bold ${wave.current ? "text-orange" : ""}`}>{a.name}</span>
                  <span className="text-[14px] leading-relaxed text-body">{a.description}</span>
                </li>
              ))}
            </ul>
          )}
          {wave.id === "wave1" && (
            <div className="grid gap-3 md:grid-cols-2">
              <div className="bg-orange/5 border border-orange rounded-lg p-4 flex flex-col gap-3">
                <Label>You can expect</Label>
                <Bullets items={wave1Expect} />
              </div>
              <div className="bg-card rounded-lg p-4 flex flex-col gap-3">
                <Label muted>Don&apos;t expect yet</Label>
                <Bullets items={notYet} />
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-hairline pt-5 flex flex-col gap-3">
          <Label muted>Outside the waves</Label>
          <ul className="grid gap-3 sm:grid-cols-2">
            {otherTools.map((t) => (
              <li key={t.name} className="rounded-lg p-4 flex flex-col gap-1 border border-dashed border-muted/50">
                <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-muted">{t.tag}</span>
                <span className="text-[15px] font-bold">{t.name}</span>
                <span className="text-[14px] leading-relaxed text-body">{t.description}</span>
              </li>
            ))}
          </ul>
          <p className="text-[13px] italic text-muted text-pretty">{roadmapNote}</p>
        </div>
      </div>

      <div className="bg-white border border-hairline rounded-[10px] p-6 flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <Label>What we&apos;d like to hear from you</Label>
          <p className="text-[14px] text-muted">
            Three things the plan has to get right: what you know, why it matters to you, and what you need.
          </p>
        </div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Conversation themes">
          {themes.map((t, i) => (
            <button
              key={t.label}
              type="button"
              role="tab"
              aria-selected={i === themeIdx}
              onClick={() => setThemeIdx(i)}
              className={`rounded-full px-4 py-2 text-[13px] font-bold tracking-[1.5px] uppercase border transition-colors ${
                i === themeIdx ? "bg-orange border-orange text-white" : "border-hairline text-muted hover:border-orange hover:text-orange"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div key={theme.label} role="tabpanel" className="flex flex-col gap-3 animate-in">
          <h3 className="text-[20px]">{theme.title}</h3>
          <Bullets items={theme.points} />
        </div>
      </div>

      <div className="bg-orange text-white rounded-[10px] px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-[16px] font-bold text-pretty">
          There are no right answers. We want your honest view, including doubts.
        </p>
        <button
          type="button"
          onClick={onStart}
          className="shrink-0 text-sm font-bold rounded-lg px-5 py-2.5 bg-white text-orange hover:bg-white/90 transition-colors"
        >
          Start the questions &rarr;
        </button>
      </div>
    </div>
  );
}
