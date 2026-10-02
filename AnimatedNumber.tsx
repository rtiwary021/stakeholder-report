"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates a number or "N min" / "N of M" style string counting up when it
 * scrolls into view. Non-numeric parts of the string are preserved as-is;
 * only the leading integer is animated (e.g. "26 min" -> animates 26).
 */
export default function AnimatedNumber({
  value,
  duration = 1100,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<string>(value.replace(/\d+/, "0"));
  const started = useRef(false);

  useEffect(() => {
    const match = value.match(/\d+/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseInt(match[0], 10);
    const prefix = value.slice(0, match.index);
    const suffix = value.slice((match.index || 0) + match[0].length);

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.round(eased * target);
              setDisplay(`${prefix}${current}${suffix}`);
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}
