import type { ReactNode } from "react";

/** Marks a value that is not real yet. Renders in the warning colour. */
export function PH({ children }: { children: ReactNode }) {
  return <span className="ph">{children}</span>;
}

export type FigureProps = {
  /** Path under /public. Omit to render `children` as a description of the figure that is still to come. */
  src?: string;
  alt?: string;
  caption?: string;
  /** Short aside, set in the left margin on wide screens. */
  note?: string;
  children?: ReactNode;
};

export function Figure({ src, alt = "", caption, note, children }: FigureProps) {
  return (
    <figure className="reveal">
      <div className="figbox">
        {src ? <img src={src} alt={alt} /> : children}
      </div>
      {caption || note ? (
        <div className="figmeta">
          {caption ? <figcaption>{caption}</figcaption> : null}
          {note ? <div className="mnote">{note}</div> : null}
        </div>
      ) : null}
    </figure>
  );
}

export type ReadoutRow = { label: string; value: ReactNode };

/** The key/value strip under a write-up's standfirst. */
export function Readout({ rows }: { rows: ReadoutRow[] }) {
  return (
    <div className="readout reveal">
      {rows.map((r) => (
        <div className="row" key={r.label}>
          <span className="lab">{r.label}</span>
          <span className="val">{r.value}</span>
        </div>
      ))}
    </div>
  );
}

export type Stat = {
  /** Label, e.g. "Final ATE" */
  k: string;
  /** Headline value, e.g. "1.84 m" */
  v: ReactNode;
  /** Sub-line, e.g. "from 4.10 m" */
  d?: ReactNode;
};

export function Stats({ items }: { items: Stat[] }) {
  return (
    <div className="stats reveal">
      {items.map((s) => (
        <div className="stat" key={s.k}>
          <div className="k">{s.k}</div>
          <div className="v">{s.v}</div>
          {s.d ? <div className="d">{s.d}</div> : null}
        </div>
      ))}
    </div>
  );
}

export type ResultsTableProps = {
  head: string[];
  rows: ReactNode[][];
  /** Index of the row to emphasise, usually the approach the write-up is about. */
  best?: number;
};

export function ResultsTable({ head, rows, best }: ResultsTableProps) {
  return (
    <table className="data-table reveal">
      <thead>
        <tr>
          {head.map((h) => (
            <th key={h}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className={i === best ? "best" : undefined}>
            {row.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/**
 * Prose elements coming out of MDX get the reveal treatment too, so a write-up
 * reads the same whether a paragraph was written in Markdown or as a component.
 */
export const mdxComponents = {
  PH,
  Figure,
  Readout,
  Stats,
  ResultsTable,
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <h2 {...props} className="reveal" />
  ),
  p: (props: React.ComponentPropsWithoutRef<"p">) => (
    <p {...props} className="reveal" />
  ),
  blockquote: (props: React.ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote {...props} className="reveal" />
  ),
  table: (props: React.ComponentPropsWithoutRef<"table">) => (
    <table {...props} className="data-table reveal" />
  ),
};
