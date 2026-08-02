"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Wires up every `.reveal` and `.fig` on the page to an IntersectionObserver.
 *
 * Elements come back out as well as in, and the direction of travel flips which
 * way they translate, so scrolling back up doesn't feel like a different page.
 * Re-runs on navigation because the App Router swaps the DOM under us.
 */
export default function ScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".reveal, .fig");
    if (!targets.length) return;

    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((el) => el.classList.add("in"));
      return;
    }

    let lastY = scrollY;
    let dir = 1;
    const onScroll = () => {
      dir = scrollY > lastY ? 1 : -1;
      lastY = scrollY;
    };
    addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const el = e.target as HTMLElement;
          const i = Number(el.dataset.i ?? 0);
          // stagger within a group of six, then reset — keeps late items snappy
          el.style.transitionDelay = `${Math.min(i % 6, 5) * 45}ms`;
          el.classList.toggle("in", e.isIntersecting);
          el.classList.toggle("up", dir < 0);
        });
      },
      { threshold: 0.12, rootMargin: "-4% 0px -8% 0px" }
    );

    targets.forEach((el, i) => {
      el.dataset.i = String(i);
      io.observe(el);
    });

    return () => {
      removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
