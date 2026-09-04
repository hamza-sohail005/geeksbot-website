"use client";

import { useEffect, useRef, useState } from "react";

const clamp = (n, min = -1, max = 1) => Math.min(max, Math.max(min, n));

// Desktop stage: the four value points ride a large right-bulging arc that
// wraps the GeeksBot "G". Node positions are sampled off the real <path> at
// mount; these are the SSR / pre-measure fallbacks, in viewBox units. The
// tall viewBox is deliberate - it is what gives each point real breathing room.
const VIEW = { w: 660, h: 680 };
const CORE = { x: 264, y: 340, r: 37 };
const ARC_D = "M 334 58 C 452 252 452 428 334 622";
// target node heights as a fraction of the arc's vertical extent (even spacing)
const ARC_HEIGHTS = [0.05, 0.35, 0.65, 0.95];
const SPARK_START = 0.04;
const ARC_FALLBACK = [
  { x: 352, y: 86 },
  { x: 414, y: 255 },
  { x: 414, y: 425 },
  { x: 352, y: 594 },
];
const CYCLE = 14000; // ms for the light to travel the whole arc once
const STEP = 3000; // ms between active points on mobile

function useMediaFlag(query) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const sync = () => setOn(mq.matches);
    sync();
    mq.addEventListener?.("change", sync);
    return () => mq.removeEventListener?.("change", sync);
  }, [query]);
  return on;
}

function Icon({ name }) {
  const p = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "target":
      return (
        <>
          <circle cx="12" cy="12" r="8.5" {...p} />
          <circle cx="12" cy="12" r="4.5" {...p} />
          <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
        </>
      );
    case "users":
      return (
        <>
          <circle cx="9.5" cy="8" r="3.2" {...p} />
          <path d="M4 19v-1.2A4 4 0 0 1 8 14h3a4 4 0 0 1 4 3.8V19" {...p} />
          <path d="M16 8.2a3 3 0 0 1 0 5.6M17.5 19v-1a3.5 3.5 0 0 0-2.3-3.2" {...p} />
        </>
      );
    case "trend":
      return (
        <>
          <path d="M4 15.5l5-5 3.5 3.5L20 7.5" {...p} />
          <path d="M15 7.5h5v5" {...p} />
        </>
      );
    case "shield":
      return (
        <>
          <path d="M12 3l7 3v5.2c0 4.4-3 7.4-7 8.8-4-1.4-7-4.4-7-8.8V6l7-3z" {...p} />
          <path d="M9 12l2 2 4-4.5" {...p} />
        </>
      );
    case "message":
      return (
        <path
          d="M20 11.5a7.5 7.5 0 0 1-10.9 6.7L4.5 19.5l1.3-3.9A7.5 7.5 0 1 1 20 11.5z"
          {...p}
        />
      );
    case "clock":
      return (
        <>
          <circle cx="12" cy="12" r="8.3" {...p} />
          <path d="M12 7.3V12l3.2 2" {...p} />
        </>
      );
    case "spark":
      return <path d="M13 3l-8 10h6l-1 8 8-10h-6l1-8z" {...p} />;
    case "loop":
      return (
        <>
          <path d="M5 9.5A7 7 0 0 1 17 6l2 2" {...p} />
          <path d="M19 4v4h-4" {...p} />
          <path d="M19 14.5A7 7 0 0 1 7 18l-2-2" {...p} />
          <path d="M5 20v-4h4" {...p} />
        </>
      );
    case "link":
      return (
        <>
          <path d="M10 14l4-4" {...p} />
          <path d="M12.5 6.5l1-1a3.5 3.5 0 0 1 5 5l-1 1" {...p} />
          <path d="M11.5 17.5l-1 1a3.5 3.5 0 0 1-5-5l1-1" {...p} />
        </>
      );
    case "layers":
      return (
        <>
          <path d="M12 4l8 4-8 4-8-4 8-4z" {...p} />
          <path d="M4 12l8 4 8-4" {...p} />
          <path d="M4 16l8 4 8-4" {...p} />
        </>
      );
    case "gauge":
      return (
        <>
          <path d="M4 16a8 8 0 1 1 16 0" {...p} />
          <path d="M12 16l4.5-4.5" {...p} />
          <circle cx="12" cy="16" r="1.3" fill="currentColor" stroke="none" />
        </>
      );
    default:
      return <circle cx="12" cy="12" r="8" {...p} />;
  }
}

function CoreGlyph({ cx, cy, r }) {
  return (
    <g className="service-core__core">
      <circle cx={cx} cy={cy} r={r + 20} fill="url(#scCoreGlow)" />
      <g className="service-core__ring service-core__ring--a">
        <circle cx={cx} cy={cy} r={r + 17} />
        <circle className="service-core__ring-node" cx={cx} cy={cy - r - 17} r="2.4" />
      </g>
      <g className="service-core__ring service-core__ring--b">
        <circle cx={cx} cy={cy} r={r + 7} />
        <circle className="service-core__ring-node" cx={cx + r + 7} cy={cy} r="2" />
      </g>
      <circle className="service-core__disc" cx={cx} cy={cy} r={r} fill="url(#scDisc)" />
      <text
        className="service-core__glyph"
        x={cx}
        y={cy + 1}
        fontSize={r * 0.92}
        textAnchor="middle"
        dominantBaseline="central"
      >
        G
      </text>
    </g>
  );
}

function Defs() {
  return (
    <defs>
      <linearGradient id="scArcGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2dd4bf" />
        <stop offset="100%" stopColor="#3f9dbd" />
      </linearGradient>
      <radialGradient id="scCoreGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(45,212,191,0.32)" />
        <stop offset="100%" stopColor="rgba(45,212,191,0)" />
      </radialGradient>
      <radialGradient id="scDisc" cx="34%" cy="28%" r="72%">
        <stop offset="0%" stopColor="#7fe9dc" />
        <stop offset="55%" stopColor="#2dd4bf" />
        <stop offset="100%" stopColor="#2f8fb0" />
      </radialGradient>
      <radialGradient id="scSpark" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(45,212,191,0.9)" />
        <stop offset="100%" stopColor="rgba(45,212,191,0)" />
      </radialGradient>
    </defs>
  );
}

/**
 * "Why GeeksBot" visual for the Services hero right side. Four value points
 * ride a curved orbit around the GeeksBot G; a slow glowing light travels the
 * curve and lights each point as it passes. Hover / focus holds a point.
 * Every point's text stays in the DOM, so the message never depends on motion.
 */
export default function ServiceCoreVisual({ benefits, flowLabel = "Why GeeksBot" }) {
  const count = benefits.length;
  const reduced = useMediaFlag("(prefers-reduced-motion: reduce)");
  // Below this the arc + labels can't breathe in half a column - fall back to
  // a clean vertical stack (same content, generous spacing).
  const compact = useMediaFlag("(max-width: 1279px)");

  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);
  const shown = hovered !== null ? hovered : active;

  const [points, setPoints] = useState(ARC_FALLBACK);

  const wrapRef = useRef(null);
  const innerRef = useRef(null);
  const arcRef = useRef(null);
  const sparkRef = useRef(null);

  // Place the four nodes at evenly spaced HEIGHTS along the arc (not evenly
  // spaced by arc-length - that bunches them where the curve bows out). Dense-
  // sample the real path, then pick the point nearest each target height.
  useEffect(() => {
    const path = arcRef.current;
    if (!path || compact) return;
    try {
      const L = path.getTotalLength();
      const dense = [];
      for (let i = 0; i <= 240; i++) {
        const p = path.getPointAtLength((i / 240) * L);
        dense.push({ x: p.x, y: p.y });
      }
      const yTop = dense[0].y;
      const ySpan = dense[dense.length - 1].y - yTop;
      setPoints(
        ARC_HEIGHTS.map((f) => {
          const target = yTop + ySpan * f;
          let best = dense[0];
          let bd = Infinity;
          for (const d of dense) {
            const dd = Math.abs(d.y - target);
            if (dd < bd) {
              bd = dd;
              best = d;
            }
          }
          return { x: best.x, y: best.y };
        })
      );
    } catch {
      /* getPointAtLength unsupported - keep fallbacks */
    }
  }, [compact]);

  // Drives which point is "active". Desktop: a rAF loop slides the light along
  // the arc and flips the active index as it passes each node. Mobile / no
  // path: a plain interval. Reduced motion: hold the first point, light parked.
  useEffect(() => {
    if (hovered !== null) return undefined;

    if (reduced) {
      setActive(0);
      const path = arcRef.current;
      const spark = sparkRef.current;
      if (path && spark) {
        try {
          const pt = path.getPointAtLength(SPARK_START * path.getTotalLength());
          spark.setAttribute("transform", `translate(${pt.x} ${pt.y})`);
        } catch {
          /* noop */
        }
      }
      return undefined;
    }

    const path = arcRef.current;
    const spark = sparkRef.current;
    if (compact || !path || !spark) {
      const id = setInterval(() => setActive((i) => (i + 1) % count), STEP);
      return () => clearInterval(id);
    }

    let L = 0;
    try {
      L = path.getTotalLength();
    } catch {
      const id = setInterval(() => setActive((i) => (i + 1) % count), STEP);
      return () => clearInterval(id);
    }

    let raf = 0;
    let start = 0;
    const loop = (ts) => {
      if (!start) start = ts;
      const t = ((ts - start) % CYCLE) / CYCLE;
      const pt = path.getPointAtLength(t * L);
      spark.setAttribute("transform", `translate(${pt.x.toFixed(1)} ${pt.y.toFixed(1)})`);
      const idx = t < 0.22 ? 0 : t < 0.5 ? 1 : t < 0.78 ? 2 : 3;
      setActive((cur) => (cur === idx ? cur : idx));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [reduced, compact, count, hovered]);

  // Very subtle cursor parallax - layers drift at slightly different rates,
  // capped at a few px, exposed as CSS vars the layers consume.
  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner || reduced || compact) return undefined;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      inner.style.setProperty("--px", `${cx.toFixed(2)}px`);
      inner.style.setProperty("--py", `${cy.toFixed(2)}px`);
      if (Math.abs(tx - cx) + Math.abs(ty - cy) > 0.15) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };
    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      tx = clamp((e.clientX - (r.left + r.width / 2)) / (r.width / 2)) * 8;
      ty = clamp((e.clientY - (r.top + r.height / 2)) / (r.height / 2)) * 6;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [reduced, compact]);

  const hold = (i) => setHovered(i);
  const release = () => setHovered(null);

  return (
    <div
      className={`service-core animate${compact ? " is-compact" : ""}`}
      ref={wrapRef}
      data-hovered={hovered !== null ? "true" : "false"}
    >
      <div className="service-core__inner" ref={innerRef}>
        {compact ? (
          <svg
            className="service-core__canvas service-core__canvas--compact"
            viewBox="0 0 120 120"
            aria-hidden="true"
          >
            <Defs />
            <circle className="service-core__halo" cx="60" cy="60" r="46" />
            <g className="service-core__ring service-core__ring--a">
              <circle cx="60" cy="60" r="46" fill="none" />
              <circle className="service-core__spark-dot" cx="60" cy="14" r="3.4" />
            </g>
            <CoreGlyph cx={60} cy={60} r={22} />
          </svg>
        ) : (
          <svg
            className="service-core__canvas"
            viewBox={`0 0 ${VIEW.w} ${VIEW.h}`}
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <Defs />

            {/* faint dashed orbit tying the G to the arc */}
            <circle className="service-core__halo" cx={CORE.x + 48} cy={CORE.y} r={148} />

            {/* the curved path the light travels */}
            <path ref={arcRef} className="service-core__arc" d={ARC_D} pathLength="1" />

            {/* markers where each value point meets the curve */}
            {points.map((pt, i) => (
              <g
                key={i}
                className={`service-core__marker${i === shown ? " is-active" : ""}`}
              >
                <circle className="service-core__marker-halo" cx={pt.x} cy={pt.y} r="15" />
                <circle className="service-core__marker-dot" cx={pt.x} cy={pt.y} r="3.4" />
              </g>
            ))}

            {/* travelling light */}
            <g ref={sparkRef} className="service-core__spark">
              <circle className="service-core__spark-aura" r="17" fill="url(#scSpark)" />
              <circle className="service-core__spark-dot" r="3.8" />
            </g>

            <CoreGlyph cx={CORE.x} cy={CORE.y} r={CORE.r} />
          </svg>
        )}

        <p className="service-core__label" aria-hidden="true">
          <span className="service-core__label-sm">Why</span>
          <strong className="service-core__label-lg">GeeksBot</strong>
          <span className="service-core__label-xs">is the right choice.</span>
        </p>

        <ul className="service-core__benefits" aria-label={flowLabel}>
          {benefits.map((b, i) => {
            const pos = points[i] || ARC_FALLBACK[i];
            const style = compact
              ? undefined
              : {
                  left: `${(pos.x / VIEW.w) * 100}%`,
                  top: `${(pos.y / VIEW.h) * 100}%`,
                };
            return (
              <li
                key={b.title}
                className={`service-core__benefit${i === shown ? " is-active" : ""}`}
                style={style}
                tabIndex={0}
                onMouseEnter={() => hold(i)}
                onMouseLeave={release}
                onFocus={() => hold(i)}
                onBlur={release}
              >
                <span className="service-core__badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <Icon name={b.icon} />
                  </svg>
                </span>
                <span className="service-core__b-text">
                  <span className="service-core__b-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="service-core__b-title">{b.title}</span>
                  <span className="service-core__b-desc">{b.text}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
