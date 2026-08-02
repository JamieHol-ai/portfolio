import Link from "next/link";
import { site } from "@/site.config";

/**
 * @param home - render a link back to the log rather than to About.
 */
export default function Footer({ home = false }: { home?: boolean }) {
  return (
    <footer>
      {home ? (
        <Link href="/about">About</Link>
      ) : (
        <Link href="/">Log</Link>
      )}
      <a href={site.links.github}>GitHub</a>
      <a href={site.links.linkedin}>LinkedIn</a>
      <a href={site.links.email}>Email</a>
    </footer>
  );
}
