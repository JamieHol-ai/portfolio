import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: "About",
  description: site.description,
};

const capabilities: { k: string; v: string }[] = [
  {
    k: "ROS 2, C++",
    v: "Perception and estimation nodes on the EUFS autonomous racecar",
  },
  {
    k: "LiDAR, point clouds",
    v: "Scan-matching odometry on vehicle data — write-up in progress",
  },
  {
    k: "State estimation",
    v: "Invariant EKF over wheelspeeds and IMU, LiDAR odometry as a second input",
  },
  {
    k: "Sensor integration",
    v: "Optical speed sensor brought into the vehicle estimation stack over CAN",
  },
  {
    k: "Python, PyTorch",
    v: "IMU bias-calibration network; reinforcement learning experiments",
  },
  {
    k: "Embedded, Arduino",
    v: "Rotating rangefinder and reconstruction pipeline for the 3D room scanner",
  },
  {
    k: "TypeScript, React",
    v: "Full-stack internships at VIOOH and Studycat",
  },
];

const time: { k: string; v: string }[] = [
  {
    k: "EDINBURGH",
    v: "Integrated Masters in Informatics, specialising towards robotics and AI.",
  },
  {
    k: "FORMULA STUDENT",
    v: "Team lead within a 150-member society building an autonomous racecar. Most of my strongest work sits here, and most of it is private.",
  },
  {
    k: "FREELANCE",
    v: "Contract front-end work, which has taken me abroad a few times and paid for the hardware.",
  },
  {
    k: "OTHERWISE",
    v: "Violin, piano, the gym, and following Formula 1 closely enough that the racing team was an obvious place to end up.",
  },
];

const quotes: { text: string; name: string; title: string }[] = [
  {
    text: "He worked on a full-stack project that was quite challenging: building from scratch an end-to-end OOH campaign visualisation and planning tool that combined multiple technologies, including natural language search powered by Cortex AI. He managed to deliver a polished product that will provide genuine value to our business users.",
    name: "Remy Prom",
    title: "Data Engineering Lead, VIOOH",
  },
  {
    text: "Jamie has demonstrated exceptional capabilities in designing and developing complex software projects, mastering new technologies, and mentoring others.",
    name: "David Harper",
    title: "formerly Tech Lead Manager, Google",
  },
  {
    text: "Jamie was always quick to find solutions and was committed to getting things done. He also presented his ideas confidently and effectively, which made him a great team player.",
    name: "Jake Whiddon",
    title: "Head of Learning Experience, Studycat",
  },
  {
    text: "Jamie proved himself to be a very capable developer, showing initiative and imagination and good communication skills. In the three months that he worked with us, he helped create lasting product features and improvements.",
    name: "Mateo Solares",
    title: "Co-founder and CPO, Studycat",
  },
];

export default function About() {
  return (
    <div className="wrap" id="main">
      <nav className="topnav">
        <Link href="/">Log</Link>
        <span className="here">About</span>
        <a href={site.cv}>CV (PDF)</a>
      </nav>

      <h1 className="reveal">About</h1>

      <p className="lede reveal" style={{ marginTop: 20 }}>
        I&rsquo;m a fourth-year Informatics student at Edinburgh working on
        integrating learned components into robotics stacks — state estimation,
        LiDAR odometry, and sensor integration on a Formula Student autonomous
        racecar.
      </p>

      <p className="reveal">
        Most of what I&rsquo;ve built over the last two years sits inside the
        team&rsquo;s private repository, which is why this site is mostly written
        rather than linked. The write-ups carry the numbers.
      </p>

      <h2 className="reveal">What I&rsquo;ve worked with</h2>

      <table className="captable">
        <tbody>
          {capabilities.map((c) => (
            <tr className="reveal" key={c.k}>
              <td className="k">{c.k}</td>
              <td className="v">{c.v}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="note reveal">
        One row per thing, each naming where it was used. No proficiency bars, no
        tools I have only read about.
      </div>

      <h2 className="reveal">How I spend my time</h2>

      {time.map((t) => (
        <div className="timeblock reveal" key={t.k}>
          <div className="k">{t.k}</div>
          <div className="v">{t.v}</div>
        </div>
      ))}

      <h2 className="reveal">People I&rsquo;ve worked with</h2>

      {quotes.map((q) => (
        <div className="quote reveal" key={q.name}>
          <p>{q.text}</p>
          <div className="attr">
            <b>{q.name}</b> — {q.title}
          </div>
        </div>
      ))}

      <hr className="rule" />
      <Footer />
    </div>
  );
}
