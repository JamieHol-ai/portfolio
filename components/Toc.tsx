"use client";

import { useEffect, useState } from "react";

export type TocItem = { id: string; label: string };

/**
 * Fixed section index in the left rail of a write-up, highlighting whichever
 * section is currently in the upper band of the viewport. Hidden below 1100px.
 */
export default function Toc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const heads = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!heads.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px" }
    );

    heads.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav id="toc" aria-label="Sections">
      {items.map((it) => (
        <a
          key={it.id}
          href={`#${it.id}`}
          className={it.id === active ? "on" : undefined}
        >
          {it.label}
        </a>
      ))}
    </nav>
  );
}
