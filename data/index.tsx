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
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg", //TODO change to an image of the libary on an ipad
    spareImg: "",
    link: "https://www.google.com",
    content: () => {
      return (
        <div>
          <h2>Web Application Development</h2>
          <p>
            I developed a user-friendly digital library web application using React, Astro, and Tailwind CSS. The primary objective was to create an efficient and engaging way to display the books, videos, and songs produced by the company. The application was designed with a simple, child-friendly interface to ensure accessibility and engagement for young users. A key feature was the ability to update the library content without needing to update the app itself, addressing the time constraints of the app development team.
          </p>

          <h2>Teamwork and Skills Development</h2>
          <p>
            Working with a diverse team, I enhanced my ability to collaborate effectively in a group setting, improving both my communication and problem-solving skills. Regular feedback sessions and collaborative decision-making processes were integral to the successful completion of the project, fostering a supportive and innovative environment.
          </p>

          <h2>Tools and Technologies Used</h2>
          <ul>
            <li>
              <strong>Design and Development:</strong> Utilized Figma for design prototyping, with React as the primary language for building dynamic user interfaces and Astro for fast, modern web development.
            </li>
            <li>
              <strong>Styling and Frameworks:</strong> Implemented Tailwind CSS for efficient styling.
            </li>
            <li>
              <strong>Project Management:</strong> Employed Zenhub for task management and progress tracking, ensuring that project milestones were met efficiently.
            </li>
          </ul>

          <p>
            This experience not only allowed me to contribute to impactful projects but also enriched my professional skills in a collaborative and innovative environment.
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
    img: "/Projects/Room Scanner.png",
    spareImg: "",
    link: "https://www.google.com",
    content: () => {
      return (
        <div>
          <h2>Project Summary</h2>
          <p>
            The aim of the project was to design and build an affordable 3D room scanner capable of scanning spaces within a 180-degree field of view. This objective was successfully achieved, allowing users to gain an accurate representation of the scanned space through the constructed images. Key accomplishments included achieving the required range of movement, obtaining and processing raw data from a distance sensor, and displaying the scanned data effectively.
          </p>

          <h2>Methodology</h2>
          <p>
            The project utilized an Arduino connected to a pan/tilt unit and an infrared sensor to obtain values. The computer was responsible for processing and displaying these values. This setup allowed for efficient data collection and visualization.
          </p>

          <h2>Challenges Overcome</h2>
          <ul>
            <li>Managing pulse width limits</li>
            <li>Correcting time lag and baud rate issues</li>
            <li>Effectively utilizing the serial port for communication</li>
          </ul>

          <h2>Skills and Knowledge Gained</h2>
          <ul>
            <li>Understanding of infrared and ultrasonic sensors</li>
            <li>Experience with micro-controllers and micro-computers</li>
            <li>Basic Python and C++ programming skills</li>
            <li>Ability to construct circuits with various components</li>
            <li>Conversion of spherical to Cartesian coordinates</li>
            <li>Creation of circuit diagrams and research into device reliability</li>
            <li>Insights into how surface textures affect reflectivity</li>
          </ul>

          <p>
            This project enhanced my scientific skillset and deepened my understanding of waves, which is foundational in physics. It also improved my time management, organizational, and report writing skills.
          </p>
        </div>
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
        <div>
          <h2>Project Summary</h2>
          <p>
            This project involved setting up a new Optical Speed Sensor and integrating it with an existing self-driving autonomous race car. The primary benefit of this integration was achieving greater accuracy in speed measurements, enhancing positioning accuracy by supplementing wheel odometry data.
          </p>

          <h2>Technical Implementation</h2>
          <p>
            The project required the use of CAN protocols to facilitate communication between the Optical Speed Sensor and the race car's systems. I also developed compatible templates to ensure seamless integration and data exchange.
          </p>

          <h2>Collaboration and Skills Development</h2>
          <p>
            Throughout the project, I collaborated extensively with older peers, which significantly enhanced my communication and problem-solving skills. This experience taught me how to effectively convey technical information and work collaboratively to overcome challenges.
          </p>

          <h2>Skills and Knowledge Gained</h2>
          <ul>
            <li>Understanding of CAN protocols and their application in automotive systems</li>
            <li>Experience in developing integration templates for sensor communication</li>
            <li>Enhanced communication and problem-solving abilities through peer collaboration</li>
            <li>Improved understanding of autonomous vehicle systems and sensor integration</li>
          </ul>

          <p>
            This project not only improved the performance of the autonomous race car but also enriched my technical and interpersonal skills, preparing me for future challenges in the field of autonomous systems.
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
    img: "/grid.svg", //TODO - change to a gif of the planets orbiting
    spareImg: "/b4.svg", //TODO - add commets to the background
    link: "https://www.google.com",
    content: () => {
      return (
        <div>
          <h2>Project Summary</h2>
          <p>
            This project involved simulating planetary orbits using Python, with a focus on achieving mathematical accuracy. The simulation utilized Kepler's laws to calculate the positions of the planets, providing a realistic representation of their movements.
          </p>

          <h2>Technical Implementation</h2>
          <p>
            The project was implemented in Python, leveraging its computational capabilities to model the complex motions of celestial bodies. Kepler's laws were applied to ensure that the simulation accurately reflected the elliptical orbits and varying speeds of the planets.
          </p>

          <h2>Skills and Knowledge Gained</h2>
          <ul>
            <li>Proficiency in using Python for scientific simulations</li>
            <li>Understanding of Kepler's laws and their application in orbital mechanics</li>
            <li>Experience in mathematical modeling and simulation accuracy</li>
            <li>Enhanced problem-solving skills through debugging and optimizing code</li>
          </ul>

          <p>
            This project not only deepened my understanding of orbital mechanics but also enhanced my programming skills, particularly in using Python for scientific applications. It provided valuable insights into the mathematical principles governing planetary motion.
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
    img: "/b5.svg", //TODO - change to flappy bird image
    spareImg: "/grid.svg",
    link: "https://www.google.com",
    content: () => {
      return (
        <div>
          <h2>Project Summary</h2>
          <p>
            This project involves developing an AI that learns to play Flappy Bird using TensorFlow and Python. The AI simulates neural networks and evolves through generations of 10 birds at a time, learning to navigate the game environment effectively.
          </p>

          <h2>Technical Implementation</h2>
          <p>
            The project utilizes TensorFlow to create and train neural networks for each bird. The AI employs a genetic algorithm to simulate evolution, selecting the best-performing birds from each generation and introducing mutations to improve performance. The neural networks decide when a bird should flap based on inputs from the game environment.
          </p>

          <h2>Skills and Knowledge Gained</h2>
          <ul>
            <li>Proficiency in using TensorFlow for neural network development</li>
            <li>Understanding of genetic algorithms and their application in AI</li>
            <li>Experience in simulating neural networks for game AI</li>
            <li>Enhanced communication and problem-solving abilities through peer collaboration</li>
          </ul>

          <p>
            This project not only improved my technical skills in AI and machine learning but also provided valuable insights into the processes of neural network training and genetic evolution.
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
      "Jamie has shown remarkable self-motivation and skill. Despite limited local resources in rural Scotland, he has developed into a highly capable young man, demonstrating his innate talent and dedication to coding.",
    name: "Lesley Ellis",
    title: "Managing Trustee at Cromar Future Group, Charity SC04703",
    image: "/testimonials/les.jpeg",
  },
  {
    quote:
      "Jamie has demonstrated exceptional capabilities in designing and developing complex software projects, mastering new technologies, and mentoring others. His achievements highlight his outstanding abilities and potential.",
    name: "David Harper",
    title: "??? not putting retired",
    image: "/testimonials/dave.jpeg",
  }, // add quotes from jono, jake, mark, and maybe meet and code?
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
    title: "Edinburgh University",
    desc: "As a second-year Masters student in Informatics at the University of Edinburgh, I am focused on specializing in AI or robotics. The curriculum and opportunities, like a guest lecture by Haskell founder Philip Wadler, have enriched my understanding and inspired further exploration in these fields.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Formula Student",
    desc: "In FS, I am part of a 150+ member team focused on designing a high-performance race car. This experience has greatly improved my communication and teamwork skills, emphasizing the importance of collaboration in achieving shared goals.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelancing",
    desc: "Freelancing has offered me the chance to travel internationally and meet new people, while engaging in fascinating projects. This experience has broadened my horizons and enriched my professional journey.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Personal Interests",
    desc: "Outside of work, I enjoy staying active by going to the gym and have recently developed an interest in Formula 1. Music is another passion of mine, providing a great source of relaxation and inspiration.",
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

export const heroProjects = [
  {
    title: "Studycat Library",
    thumbnail:
      "/Projects/Library.svg",
  },
  {
    title: "Room Scanner",
    thumbnail:
      "/Projects/Room Scanner.png",
  },
  {
    title: "Planetary Orbit Simulator",
    thumbnail:
      "/Projects/Planetary-Orbits.png",
  },
  {
    title: "Formula Student",
    thumbnail:
      "/Projects/vs-code.png",
  },
  {
    title: "Formula Student",
    thumbnail:
      "/Projects/slam-analysis.png",
  },
];