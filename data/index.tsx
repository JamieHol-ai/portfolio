import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";

export const navItems = [
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "About", link: "#about" },
  { name: "Contact", link: "#contact" },
];
  
export const projects = [
  {
    id: 1,
    title: "Digital Library",
    description: "Built using React.js, Astro and Tailwind CSS",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-1/2",
    imgClassName: "w-full bottom-0 absolute",
    titleClassName: "justify-start bg-slate-950/50",
    img: "/Projects/Library.svg",
    spareImg: "",
    content: () => {
      return (
        <div>
          <strong>Web Application Development<br/></strong>
          <p>
            Developed a user-friendly digital library web app using React, Astro, and Tailwind CSS, with a child-friendly interface and the ability to update content without app updates.<b/>
            This project enhanced my collaboration, communication, and problem-solving skills by working with a diverse team and engaging in regular feedback and decision-making processes.
          </p>

          <strong>Tools and Technologies Used<br/></strong>
          <ul>
            <li><strong>Design and Development:</strong> Figma, React, and Astro</li>
            <li><strong>Styling and Frameworks:</strong> Tailwind CSS</li>
            <li><strong>Project Management:</strong> Zenhub</li>
          </ul>

          <p>
            This project enriched my professional skills in a collaborative and innovative environment.
          </p>
        </div>
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
    img: "/grid.svg",
    spareImg: "",
    sourceCode: "https://github.com/JamieHol-ai/3D-Room-Scanner",
    content: () => {
      return (
        <div>
          <strong>Development<br/></strong>
          <p>
            For this project I designed and built an affordable 3D room scanner with a 180-degree field of view, achieving accurate space representation through efficient data collection and visualisation.
            I used an Arduino with a pan/tilt unit and infrared sensor for data collection, and a computer for processing and display.
          </p>
          <strong>Skills and knowledge gained<br/></strong>
          <ul>
            <li>Understanding of sensors and micro-controllers</li>
            <li>Python and C++ programming skills</li>
            <li>Circuit construction and coordinate conversion</li>
          </ul>

          <p>
            This project enhanced my scientific skills, understanding of waves, and improved my time management, organisational, and report writing abilities.
          </p>
        </div>
      );
    },
  },
  {
    id: 3,
    title: "Optical Speed Sensor Integration",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "bg-slate-950/50",
    img: "/Projects/OSS.png", // Change to a 3D image of a racecar
    spareImg: "",
    content: () => {
      return (
        <div>
          <strong>Project Summary<br/></strong>
          <p>
            Integrated a new Optical Speed Sensor with a self-driving race car to enhance speed measurement accuracy and improve positioning by supplementing wheel odometry.
            This involved utilising CAN protocols for communication between the sensor and race car systems, developing templates for seamless integration.
            To do this I had to collaborate with older peers, enhancing communication and problem-solving skills, and learning to convey technical information effectively.
          </p>
          <strong>Skills and Knowledge Gained<br/></strong>
          <ul>
            <li>Understanding of CAN protocols and automotive systems</li>
            <li>Experience in sensor communication integration</li>
            <li>Knowledge of autonomous vehicle systems</li>
          </ul>
          <p>
            This project improved the race car's performance and enriched my technical and interpersonal skills for future challenges in autonomous systems.
          </p>
        </div>
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
    img: "/Projects/PlanetaryOrbits.png",
    spareImg: "/grid.svg",
    link: "",
    content: () => {
      return (
        <div>
          <strong>Project Summary<br/></strong>
          <p>
            Simulated planetary orbits using Python, focusing on mathematical accuracy through Kepler's laws for realistic planetary movement representation.
            Implemented in Python to model celestial motions, applying Kepler's laws for accurate elliptical orbits and varying speeds.
          </p>
          <strong>Skills and Knowledge Gained<br/></strong>
          <ul>
            <li>Proficiency in Python for scientific simulations</li>
            <li>Understanding of Kepler's laws and orbital mechanics</li>
            <li>Experience in mathematical modeling and simulation accuracy</li>
          </ul>

          <p>
            This project deepened my understanding of orbital mechanics and enhanced my programming skills in Python for scientific applications.
          </p>
        </div>
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
    img: "/Projects/flappyBird.svg",
    spareImg: "/grid.svg",
    sourceCode: "https://github.com/JamieHol-ai/Flappy-Bird",
    live: "https://jamiehol-ai.github.io/Flappy-Bird/",
    content: () => {
      return (
        <div>
          <strong>Project Summary<br/></strong>
          <p>
            Developed an AI to play Flappy Bird using TensorFlow and Python, simulating neural networks that evolve through generations of 10 birds to navigate the game.
            Utilised TensorFlow to train neural networks, employing a genetic algorithm to evolve the AI by selecting and mutating the best-performing birds.
          </p>

          <strong>Skills and Knowledge Gained<br/></strong>
          <ul>
            <li>Proficiency in TensorFlow for neural network development</li>
            <li>Understanding of genetic algorithms in AI</li>
            <li>Experience in game AI simulation</li>
          </ul>

          <p>
            This project improved my skills in AI and machine learning, offering insights into neural network training and genetic evolution.
          </p>
        </div>
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
      "Jamie was always quick to find solutions and was commited to getting things done. He also presented his ideas confidently and effectively, which made him a great team player. His work ethic is outstanding, and he became a real asset to our team. He's pretty funny too. I highly recommend Jamie—any company would be lucky to have him on board!",
    name: "Jake Whiddon",
    title: "Head of Learning Experience @ Studycat",
    image: "/testimonials/jake.jpeg",
  },
  {
    quote:
      "Jamie has demonstrated exceptional capabilities in designing and developing complex software projects, mastering new technologies, and mentoring others. His achievements highlight his outstanding abilities and potential.",
    name: "David Harper",
    title: "Former Tech Lead Manager at Google",
    image: "/testimonials/dave.jpeg",
  },
  {
    quote:
      "Jamie proved himself to be a very capable developer, showing initiative and imagination and good communication skills. In the three months that he worked with us, he helped create lasting product features and improvements.",
    name: "Mateo Solares",
    title: "Co-founder/CPO @ Studycat",
    image: "/testimonials/mateo.jpeg",
  }
];
  
export const companies = [
  {
    id: 1,
    name: "Studycat",
    img: "/testimonials/studycat.svg",
    link: "https://studycat.com/"
  },
  {
    id: 2,
    name: "Cromar Future Group",
    img: "/testimonials/EE.svg",
    link: "https://www.futuregroup.org.uk/"
  },
  {
    id: 3,
    name: "Meet and Code",
    img: "/testimonials/meet_and_code.svg",
    link: "https://www.meet-and-code.org/gb/en/"
  },
];
  
export const workExperience = [
  {
    id: 1,
    title: "Edinburgh University",
    desc: "As a second-year Masters student in Informatics at the University of Edinburgh, I am focused on specialising in AI or robotics. The curriculum and opportunities, like a guest lecture by Haskell founder Philip Wadler, have enriched my understanding and inspired further exploration in these fields.",
    className: "md:col-span-2",
    thumbnail: "/experience/university.png",
  },
  {
    id: 2,
    title: "Formula Student",
    desc: "In FS, I am part of a 150+ member team focused on designing a high-performance race car. This experience has greatly improved my communication and teamwork skills, emphasising the importance of collaboration in achieving shared goals.",
    className: "md:col-span-2",
    thumbnail: "/experience/formulaStudent.png",
  },
  {
    id: 3,
    title: "Freelancing",
    desc: "Freelancing has offered me the opportunity to travel internationally and meet new people, while engaging in fascinating projects. This experience has broadened my horizons and enriched my professional journey.",
    className: "md:col-span-2",
    thumbnail: "/experience/freelance.png",
  },
  {
    id: 4,
    title: "Personal Interests",
    desc: "Outside of work, I enjoy staying active by going to the gym and have recently developed an interest in Formula 1. Music is another passion of mine; playing both violin and piano provides me with a great source of relaxation and inspiration.",
    className: "md:col-span-2",
    thumbnail: "/experience/other.png",
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

export const heroProjects = [
  {
    title: "Studycat Library",
    thumbnail:
      "/Hero/Library.svg",
  },
  {
    title: "Room Scanner",
    thumbnail:
      "/Hero/Room Scanner.png",
  },
  {
    title: "Planetary Orbit Simulator",
    thumbnail:
      "/Hero/Planetary-Orbits.png",
  },
  {
    title: "Formula Student",
    thumbnail:
      "/Hero/vs-code.png",
  },
  {
    title: "Formula Student",
    thumbnail:
      "/Hero/slam-analysis.png",
  },
  {
    title: "Flappy Bird",
    thumbnail:
      "/Hero/Flappy-bird.png",
  },
  {
    title: "Studycat Library",
    thumbnail:
      "/Hero/Library.svg",
  },
  {
    title: "Room Scanner",
    thumbnail:
      "/Hero/Room Scanner.png",
  },
  {
    title: "Planetary Orbit Simulator",
    thumbnail:
      "/Hero/Planetary-Orbits.png",
  },
  {
    title: "Formula Student",
    thumbnail:
      "/Hero/vs-code.png",
  },
  {
    title: "Formula Student",
    thumbnail:
      "/Hero/slam-analysis.png",
  },
  {
    title: "Flappy Bird",
    thumbnail:
      "/Hero/Flappy-bird.png",
  },
];