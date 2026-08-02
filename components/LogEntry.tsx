import Link from "next/link";
import type { Entry } from "@/lib/content";

export default function LogEntry({ entry }: { entry: Entry }) {
  const { figure } = entry;
  const side = figure?.side ?? "right";

  return (
    <article className="entry">
      <div className="date reveal">{entry.displayDate ?? entry.date}</div>
      <div className="body">
        <h2 className="title reveal">
          {entry.writeup ? (
            <Link href={`/log/${entry.slug}`}>{entry.title}</Link>
          ) : (
            entry.title
          )}
        </h2>

        <p className="desc reveal">{entry.summary}</p>

        {entry.meta?.length || entry.links?.length ? (
          <div className="meta reveal">
            {entry.meta?.map((m) => (
              <span key={m.label}>
                {m.label} <b>{m.value}</b>
              </span>
            ))}
            {entry.links?.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label} →
              </a>
            ))}
          </div>
        ) : null}

        {entry.writeup ? (
          <Link className="more reveal" href={`/log/${entry.slug}`}>
            Write-up →
          </Link>
        ) : null}

        {figure ? (
          <figure className={`fig from-${side}`}>
            <div className="figbox">
              {figure.src ? (
                <img src={figure.src} alt={figure.alt ?? ""} />
              ) : (
                figure.placeholder
              )}
            </div>
            {figure.caption ? <figcaption>{figure.caption}</figcaption> : null}
          </figure>
        ) : null}
      </div>
    </article>
  );
}
