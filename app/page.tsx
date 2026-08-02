import Footer from "@/components/Footer";
import LogEntry from "@/components/LogEntry";
import TrackCanvas from "@/components/TrackCanvas";
import { getEntries } from "@/lib/content";
import { site } from "@/site.config";

export default function Home() {
  const entries = getEntries();

  return (
    <>
      <section id="hero">
        <TrackCanvas />
        <div className="wrap heroinner">
          <h1>{site.name}</h1>
          <p className="sub">{site.tagline}</p>
          <a className="cv" href={site.cv}>
            CV (PDF)
          </a>
        </div>
        <div className="scrollrail">
          <div className="wrap">
            <span className="scrollhint">SCROLL</span>
          </div>
        </div>
      </section>

      <main className="wrap log" id="main">
        <hr className="rule" />

        {entries.map((entry) => (
          <LogEntry key={entry.slug} entry={entry} />
        ))}

        <hr className="rule" />
        <Footer home />
      </main>
    </>
  );
}
