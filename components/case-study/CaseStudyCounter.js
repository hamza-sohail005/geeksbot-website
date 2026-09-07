"use client";

import { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Editorial count-up. `value` is the number to count to; `prefix` / `suffix`
 * frame it (e.g. "~", "+", "K+"). Counts only once, when scrolled into view.
 * Reduced motion / no-IO -> shows the final value immediately.
 */
export default function CaseStudyCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1400,
  className = "",
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      setDisplay(value);
      done.current = true;
      return undefined;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || done.current) return;
        done.current = true;
        const start = performance.now();
        const run = (now) => {
          const t = Math.min((now - start) / duration, 1);
          // easeOutCubic
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(Math.round(eased * value));
          if (t < 1) requestAnimationFrame(run);
        };
        requestAnimationFrame(run);
        io.disconnect();
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
