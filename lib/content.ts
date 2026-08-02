import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";
import type { TocItem } from "@/components/Toc";

const LOG_DIR = path.join(process.cwd(), "content", "log");

export type EntryLink = { label: string; href: string };
export type EntryMeta = { label: string; value: string };

export type EntryFigure = {
  /** Path under /public. Omit and the placeholder text is shown instead. */
  src?: string;
  alt?: string;
  caption?: string;
  /** Description of the figure that is still to be made. */
  placeholder?: string;
  /** Which margin the figure slides in from. */
  side?: "left" | "right";
};

export type EntryFrontmatter = {
  title: string;
  /** ISO date, used only for ordering. */
  date: string;
  /** What the log shows in the date column, e.g. "2026-06" or "2024". */
  displayDate?: string;
  /** One paragraph on the log page. */
  summary: string;
  /** One paragraph under the title on the write-up page. */
  standfirst?: string;
  /** Generate a page at /log/<slug> and link to it from the log. */
  writeup?: boolean;
  meta?: EntryMeta[];
  links?: EntryLink[];
  figure?: EntryFigure;
};

export type Entry = EntryFrontmatter & {
  slug: string;
  body: string;
};

/**
 * YAML gives us a Date for `2026-07-28`, a number for `2024` and a string for
 * `2026-06`. Everything downstream wants a string, and quoting every date in
 * every file is exactly the kind of thing that gets forgotten.
 */
function asText(v: unknown): string | undefined {
  if (v === undefined || v === null) return undefined;
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return String(v);
}

function readEntry(file: string): Entry {
  const raw = fs.readFileSync(path.join(LOG_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const fm = data as EntryFrontmatter;

  const date = asText(fm.date);
  if (!fm.title || !date) {
    throw new Error(`content/log/${file} is missing a title or date`);
  }

  return {
    ...fm,
    date,
    displayDate: asText(fm.displayDate),
    slug: file.replace(/\.mdx?$/, ""),
    body: content,
  };
}

/** Every log entry, newest first. */
export function getEntries(): Entry[] {
  return fs
    .readdirSync(LOG_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map(readEntry)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Only the entries that have a page of their own. */
export function getWriteups(): Entry[] {
  return getEntries().filter((e) => e.writeup);
}

export function getEntry(slug: string): Entry | undefined {
  return getEntries().find((e) => e.slug === slug);
}

/**
 * Section index for a write-up, built from its `## ` headings.
 *
 * Uses the same slugger rehype-slug uses, so the ids here match the ids that
 * end up on the rendered headings.
 */
export function getToc(body: string): TocItem[] {
  const slugger = new GithubSlugger();
  const items: TocItem[] = [];

  for (const line of body.split("\n")) {
    const m = /^##\s+(.+?)\s*$/.exec(line);
    if (!m) continue;
    const label = m[1].replace(/[*_`]/g, "");
    items.push({ id: slugger.slug(label), label });
  }

  return items;
}
