"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import RecentProjects from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { TracingBeam } from "@/components/ui/TracingBeam";
import { useEffect, useState } from "react";
import { Skills } from "@/components/Skills";
import {Contact} from "@/components/Contact";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check the screen size once on component mount
    setIsMobile(window.innerWidth <= 640);
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        {!isMobile ? (
          <TracingBeam>
            <Hero />
            <RecentProjects />
            <Skills />
            <Clients />
            <Experience />
            <Footer />
          </TracingBeam>
        ) : (
          <>
            <Hero />
            <RecentProjects />
            <Skills />
            <Clients />
            <Experience />
            <Footer />
          </>
        )}
      </div>
    </main>
  );
};

export default Home;
