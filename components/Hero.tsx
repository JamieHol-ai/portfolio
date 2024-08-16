import { FaLocationArrow, FaDownload } from "react-icons/fa";
import MagicButton from "./MagicButton"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import { HeroParallax } from "./ui/HeroParallax";
import { heroProjects } from "@/data";


const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <HeroParallax products={heroProjects} >
      <div className="flex justify-center relative my-32 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <p className="text-center text-[40px] md:text-5xl lg:text-6xl">
          Jamie Holroyde
          </p>
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Integrated Masters Student of Informatics @ The University of Edinburgh"
            className="text-center md:tracking-wider mb-4 text-sm md:text-md lg:text-xl"
          />
          <div className="flex gap-8">
          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <a href="/Jamie_Holroyde_CV.pdf">
            <MagicButton
              title="Download CV"
              icon={<FaDownload />}
              position="right"
            />
          </a>
          </div>
        </div>
      </div>
      </HeroParallax>
    </div>
  );
};
export default Hero