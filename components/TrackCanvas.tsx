"use client";

import { useEffect, useRef } from "react";

const CONE_PAIRS = 74;
const TRACK_GAP = 13; // half-width of the track, in px, at the centreline
const DRAW_MS = 2200; // time for the track to lay itself out, start to finish

/**
 * The hero background: a cone-lined track that draws itself once and then
 * breathes. Blue-left / yellow-right, the way the cones actually sit on a
 * Formula Student circuit.
 */
export default function TrackCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = 0;
    let H = 0;
    let cones: { x: number; y: number; side: "l" | "r"; a: number }[] = [];
    let raf = 0;
    let start = 0;

    const build = () => {
      const dpr = devicePixelRatio || 1;
      W = cv.clientWidth;
      H = cv.clientHeight;
      cv.width = W * dpr;
      cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cones = [];
      const cx = W * 0.5;
      const cy = H * 0.5;
      const rx = Math.min(W * 0.34, 420);
      const ry = Math.min(H * 0.3, 220);

      for (let i = 0; i < CONE_PAIRS; i++) {
        const a = (i / CONE_PAIRS) * Math.PI * 2;
        // two out-of-phase sines bend the ellipse into something track-shaped
        const wob = 1 + 0.3 * Math.sin(a * 2.2) + 0.14 * Math.sin(a * 3.7 + 1.1);
        const px = cx + Math.cos(a) * rx * wob;
        const py = cy + Math.sin(a) * ry * wob;
        const nx = Math.cos(a);
        const ny = Math.sin(a);
        cones.push({ x: px - nx * TRACK_GAP, y: py - ny * TRACK_GAP, side: "l", a });
        cones.push({ x: px + nx * TRACK_GAP, y: py + ny * TRACK_GAP, side: "r", a });
      }
    };

    // Driven by elapsed time rather than frame count, so the track lays itself
    // out over DRAW_MS whether the display runs at 60Hz or 120Hz.
    const draw = (now: number) => {
      if (!start) start = now;
      const elapsed = now - start;

      ctx.clearRect(0, 0, W, H);
      const prog = reduce ? 1 : Math.min(1, elapsed / DRAW_MS);
      const t = reduce ? 0 : elapsed / 1000;
      const lim = prog * Math.PI * 2;

      for (const c of cones) {
        if (c.a > lim) continue;
        const fade = Math.min(1, (lim - c.a) * 2.4);
        const drift = reduce ? 0 : Math.sin(t * 0.5 + c.a * 3) * 1.1;
        ctx.beginPath();
        ctx.arc(c.x + drift, c.y + drift * 0.5, 2.1, 0, Math.PI * 2);
        ctx.fillStyle =
          c.side === "l"
            ? `rgba(111,168,160,${0.34 * fade})`
            : `rgba(200,150,90,${0.28 * fade})`;
        ctx.fill();
      }

      // with motion reduced the track is static, so one pass is enough
      if (reduce) return;
      raf = requestAnimationFrame(draw);
    };

    build();
    cv.classList.add("on");
    raf = requestAnimationFrame(draw);

    addEventListener("resize", build);
    return () => {
      removeEventListener("resize", build);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas id="track" ref={ref} aria-hidden="true" />;
}
