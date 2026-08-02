import Link from "next/link";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="wrap" id="main">
      <nav className="topnav">
        <Link href="/">← Log</Link>
      </nav>

      <h1>404</h1>
      <p className="standfirst">There is nothing at this address.</p>

      <hr className="rule" style={{ marginTop: 56 }} />
      <Footer />
    </div>
  );
}
