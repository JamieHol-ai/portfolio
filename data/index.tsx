import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Digital Library",
      description: "Built using React.js, Astro and Tailwind CSS",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg", //TODO change to an image of the libary on an ipad
      spareImg: "",
      link: "https://www.google.com",
      content: () => {
        return (
          <p>
            Web Application Development: Utilised Astro, Tailwind, and React to create a user-friendly web application for displaying videos and books. 
            This application was designed with a simple, child-friendly interface to ensure accessibility and engagement for young users. <br/>
            Cloud Hosting: Hosted the digital library on Cloudflare, leveraging its secure and fast infrastructure to ensure reliable access to educational resources
          </p>
        );
      },
    },
    {
      id: 2,
      title: "3D Room Scanner",
      description: "Using an Arduino, C++ and Python",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "bottom-0 absolute h-1/2",
      titleClassName: "justify-end",
      img: "/Projects/Room Scanner.png",
      spareImg: "",
      link: "https://www.google.com",
      content: () => {
        return (
          <p>
            Gold CREST award entry. The project was to design and build an affordable 3D room scanner capable of scanning spaces within a 180-degree field of view. 
            Further detail contained in the Crest report.pdf file
          </p>
        );
      },
    },
    {
      id: 3,
      title: "Optical Speed Sensor",
      description: "Using C++ to interface with a race car",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "", // Change to a 3D image of a racecar
      spareImg: "",
      link: "https://www.google.com",
      content: () => {
        return (
          <p>
            Web Application Development: Utilised Astro, Tailwind, and React to create a user-friendly web application for displaying videos and books. 
            This application was designed with a simple, child-friendly interface to ensure accessibility and engagement for young users. <br/>
            Cloud Hosting: Hosted the digital library on Cloudflare, leveraging its secure and fast infrastructure to ensure reliable access to educational resources
          </p>
        );
      },
    },
    {
      id: 4,
      title: "Planetary Orbit Simulator",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg", //TODO - change to a gif of the planets orbiting
      spareImg: "/b4.svg", //TODO - add commets to the background
      link: "https://www.google.com",
      content: () => {
        return (
          <p>
            Web Application Development: Utilised Astro, Tailwind, and React to create a user-friendly web application for displaying videos and books. 
            This application was designed with a simple, child-friendly interface to ensure accessibility and engagement for young users. <br/>
            Cloud Hosting: Hosted the digital library on Cloudflare, leveraging its secure and fast infrastructure to ensure reliable access to educational resources
          </p>
        );
      },
    },
  
    {
      id: 5,
      title: "AI Flappy Bird",
      description: "Current Project",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg", //TODO - change to flappy bird image
      spareImg: "/grid.svg",
      link: "https://www.google.com",
      content: () => {
        return (
          <p>
            Web Application Development: Utilised Astro, Tailwind, and React to create a user-friendly web application for displaying videos and books. 
            This application was designed with a simple, child-friendly interface to ensure accessibility and engagement for young users. <br/>
            Cloud Hosting: Hosted the digital library on Cloudflare, leveraging its secure and fast infrastructure to ensure reliable access to educational resources
          </p>
        );
      },
    },
    {
      id: 6,
      title: "Want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Working with Jamie was great (Hopefull)",
      name: "Lesley Ellis",
      title: "Managing Trustee at Cromar Future Group, Charity SC04703",
      image: "/testimonials/???.jpg",
    },
    {
      quote:
        "He's a cool guy",
      name: "David Harper",
      title: "??? not putting retired",
    },
    {
      quote:
        "idk",
      name: "Jono Hope",
      title: "Hot Sauce Guy",
    },
    {
      quote:
        "Cool",
      name: "Jake/Mark",
      title: "Work in Studycat",
    },
    {
      quote:
        "Cool",
      name: "Meet and code Person?",
      title: "Work in Studycat",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "Studycat",
      img: "/testimonials/studycat.svg",
      nameImg: "/testimonials/studycatName.svg",
    },
    {
      id: 2,
      name: "Cromar Future Group",
      img: "/testimonials/EE.jpg",
      nameImg: "/testimonials/EEName.jpg",
    },
    {
      id: 3,
      name: "Meet and Code",
      img: "/testimonials/meet_and_code.png",
      nameImg: "/testimonials/meet_and_codeName.png",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "University Stuff",
      desc: "Talk about course, content and projects",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "EUFS",
      desc: "Talk about the society, projects and roles",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelancer",
      desc: "Studycat stuff, things with Jono, other projects",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "General non-coding work",
      desc: "Gym, F1, music, etc",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: () => {return(<FaGithub/>);},
      link: "https://github.com/JamieHol-ai",
    },
    {
      id: 2,
      img: () => {return(<FaLinkedinIn/>);},
      link: "https://www.linkedin.com/in/jamieholroyde/",
    },
    {
      id: 3,
      img: () => {return(<FaEnvelope/>);},
      link: "mailto:jamieholroyde@gmail.com",
    },
  ];

  export const skills = [
    {
      title: "Programming Languages",
      description: () => {
        return (
          <ul>
            <li>Python</li>
            <li>JavaScript</li>
            <li>C++</li>
            <li>Java</li>
          </ul>
        );
      },
    },
    {
      title: "Web Development",
      description: () => {
        return (
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Astro</li>
            <li>Tailwind</li>
            <li>React</li>
          </ul>
        );
      },
    },
    {
      title: "Tools and Platforms",
      description: () => {
        return (
          <ul>
            <li>Git</li>
            <li>VS Code</li>
            <li>Gitlab</li>
          </ul>
        );
      },
    },
    {
      title: "Game Development",
      description: () => {
        return (
          <ul>
            <li>Unreal Engine 4</li>
            <li>Unity</li>
          </ul>
        );
      },
    },
    {
      title: "Robotics and Embedded Systems",
      description: () => {
        return (
          <ul>
            <li>ROS</li>
            <li>SLAM</li>
            <li>Arduino</li>
            <li>Raspberry Pi</li>
          </ul>
        );
      },
    },
    {
      title: "Machine Learning and AI",
      description: () => {
        return (
          <ul>
            <li>TensorFlow</li>
          </ul>
        );
      },
    },
  ];