import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { FlipWords } from "./ui/flip-words";

const Footer = () => {
  const words = ["ideas", "vision", "project"];
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      
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
          Let&apos;s bring your<br/> <FlipWords words={words} className="text-purple"/><br/>to life
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

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-2">
        <a
          href="https://github.com/JamieHol-ai/portfolio"
          key={"Source-code"}
          className="backdrop-filter backdrop-blur-lg md:text-base text-sm md:font-normal font-light"
        >
          <p>View Source Code</p>
        </a>

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