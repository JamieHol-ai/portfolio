import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { TextRevealCard } from "./ui/test-reveal-card";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <TextRevealCard
        text="You have the idea"
        revealText="I have the skills"
        ></TextRevealCard>
      </motion.h1>
    </LampContainer>
      {/* background grid */}
      <div className="w-full absolute left-0 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let me help you bring <span className="text-purple">your ideas</span> to life
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Get in contact with me to discuss your project, or to ask any questions
        </p>
        <a href="mailto:jamieholroyde@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Jamie Holroyde
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              href={info.link}
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              {typeof info.img === "string" ? (
              <img src={info.img} alt="icons" width={20} height={20} />
              ) : (
                info.img())}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;