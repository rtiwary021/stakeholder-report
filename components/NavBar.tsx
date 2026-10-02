"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const SECTIONS = [
  { id: "methodology", label: "Methodology" },
  { id: "summary", label: "Summary" },
  { id: "overview", label: "Overview" },
  { id: "wordcloud", label: "Voices" },
  { id: "themes", label: "Themes" },
  { id: "risks", label: "Risks" },
  { id: "recommendations", label: "Recommendations" },
  { id: "messages", label: "Messaging" },
];

export default function NavBar() {
  const [active, setActive] = useState<string>("methodology");
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = linkRefs.current[active];
    const nav = navRef.current;
    if (el && nav) {
      const elRect = el.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      setIndicator({ left: elRect.left - navRect.left, width: elRect.width });
    }
  }, [active]);

  return (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-hairline">
      <div className="max-w-content mx-auto px-8 py-3.5 flex items-center justify-between gap-6">
        <Image src="/pwc-logo.png" alt="PwC" width={100} height={49} className="h-[26px] w-auto" />
        <nav ref={navRef} className="hidden md:flex gap-5 flex-wrap relative">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              ref={(node) => {
                linkRefs.current[s.id] = node;
              }}
              href={`#${s.id}`}
              className={`text-[13px] font-bold transition-colors pb-1 ${
                active === s.id ? "text-orange" : "text-muted hover:text-orange"
              }`}
            >
              {s.label}
            </a>
          ))}
          {indicator && (
            <span
              className="absolute bottom-0 h-[2px] bg-orange rounded-full"
              style={{
                left: indicator.left,
                width: indicator.width,
                transition: "left 300ms cubic-bezier(0.65, 0, 0.35, 1), width 300ms cubic-bezier(0.65, 0, 0.35, 1)",
              }}
            />
          )}
        </nav>
      </div>
    </div>
  );
}
