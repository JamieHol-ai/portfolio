"use client";

import { useEffect } from "react";

/**
 * The 1px line down the left edge of the viewport that tracks scroll depth.
 * Written to the DOM node directly rather than through state — this runs on
 * every scroll frame and should not re-render React.
 */
export default function ScrollEdge() {
  useEffect(() => {
    const edge = document.getElementById("edge");
    if (!edge) return;

    const onScroll = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      edge.style.transform = `scaleY(${h > 0 ? scrollY / h : 0})`;
    };

    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    onScroll();

    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
    };
  }, []);

  return <div id="edge" aria-hidden="true" />;
}
