import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import Footer from "@/components/Footer";
import { mdxComponents } from "@/components/mdx";
import Toc from "@/components/Toc";
import { getEntry, getToc, getWriteups } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getWriteups().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) return {};

  return {
    title: entry.title,
    description: entry.standfirst ?? entry.summary,
  };
}

export default async function Writeup({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry || !entry.writeup) notFound();

  const toc = getToc(entry.body);

  return (
    <>
      <Toc items={toc} />

      <div className="wrap writeup" id="main">
        <nav className="topnav">
          <Link href="/">← Log</Link>
          <span>/ {entry.title}</span>
        </nav>

        <h1 className="reveal">{entry.title}</h1>
        {entry.standfirst ? (
          <p className="standfirst reveal">{entry.standfirst}</p>
        ) : null}

        <MDXRemote
          source={entry.body}
          components={mdxComponents}
          options={{
            // next-mdx-remote strips JS expressions by default, which is the
            // right call for user-submitted MDX but would eat the props on
            // <Readout>, <Stats> and friends. This content is first-party and
            // lives in the repo; blockDangerousJS still guards the sharp edges.
            blockJS: false,
            blockDangerousJS: true,
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeSlug],
            },
          }}
        />

        <hr className="rule" style={{ marginTop: 56 }} />
        <Footer />
      </div>
    </>
  );
}
