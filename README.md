# jamieholroyde.com

Personal site — a reverse-chronological log of what I've built, with write-ups
for the things worth explaining.

Next.js (App Router) + TypeScript, hand-written CSS, no UI framework.
Content lives in MDX. `next build` emits a fully static `./out`.

```bash
npm install
npm run dev
```

## Layout

```
app/
  layout.tsx          fonts, metadata, the shared scroll behaviour
  page.tsx            hero + the log
  about/page.tsx      about, capabilities, testimonials
  log/[slug]/page.tsx a write-up, rendered from MDX
  globals.css         all of the CSS — tokens at the top
components/
  mdx.tsx             the components MDX write-ups can use
  LogEntry.tsx        one row of the log
  ScrollEdge.tsx      the left-edge scroll indicator
  ScrollMotion.tsx    wires .reveal / .fig up to an IntersectionObserver
  TrackCanvas.tsx     the hero's cone track
  Toc.tsx             a write-up's section index
content/log/*.mdx     the content
lib/content.ts        reads content/log, sorts it, builds the section index
site.config.ts        name, links, CV path
```

## Adding a log entry

Drop a file in `content/log/`. Frontmatter drives the log page:

```yaml
---
title: What I did
date: 2026-07-28        # ordering only
displayDate: 2026-07    # what the log actually shows; defaults to `date`
summary: One paragraph, shown on the log.
meta:
  - label: Code
    value: private (team)
links:
  - label: Source
    href: https://github.com/...
figure:
  side: left            # which margin it slides in from
  src: /Hero/thing.png  # omit and `placeholder` is shown instead
  placeholder: figure — what this will eventually be
  caption: Fig. 1
---
```

That alone gives you an entry on the log and nothing else. Add
`writeup: true` and a `standfirst`, and the body of the file becomes a page at
`/log/<filename>`, linked from the log.

## Writing a write-up

The body is Markdown. Each `## Heading` becomes a section in the left-rail
index automatically. On top of Markdown you have:

- `<Readout rows={[{ label, value }]} />` — the key/value strip
- `<Stats items={[{ k, v, d }]} />` — the headline numbers
- `<ResultsTable head={[]} rows={[[]]} best={2} />` — a comparison table
- `<Figure src caption note>` — `note` is set in the left margin on wide screens
- `<PH>1.84 m</PH>` — marks a number that isn't real yet, in amber

`<PH>` is the honesty valve: anything wrapped in it is visibly flagged as
placeholder, so a half-finished write-up can go up without pretending.

## Deploying

`npm run build` writes `./out`. Static — any host will do. `trailingSlash` is
on so extensionless URLs work on GitHub Pages.
