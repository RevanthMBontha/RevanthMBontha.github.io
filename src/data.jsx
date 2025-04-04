import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiJquery,
  SiRedux,
  SiAnaconda,
} from "react-icons/si";
import { IoLogoJavascript, IoGitNetworkOutline } from "react-icons/io5";
import { DiPostgresql, DiSqllite } from "react-icons/di";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaPython,
  FaGithub,
  FaDocker,
  FaJava,
} from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";

export const projectCardsData = [
  {
    name: "This Website ;)",
    description:
      "Created a unique website with a node-based workflow that showcases my skills as a Fullstack Developer. Used React Flow to create and update the nodes and edges. Leveraged the drap and drop browser API to allow nodes to be dropped into the node graph. Added beautiful animations to make the website aesthetically pleasing.",
    images: [
      { key: "website-01", img: "/images/projects/website/01.gif" },
      { key: "website-02", img: "/images/projects/website/02.png" },
      { key: "website-03", img: "/images/projects/website/03.png" },
      { key: "website-04", img: "/images/projects/website/04.png" },
      { key: "website-05", img: "/images/projects/website/05.png" },
    ],
    techstack: ["React", "React Flow", "Zustand", "Git", "GitHub"],
    link: "https://revanthmbontha.github.io/",
    icons: [
      <div key="react01" className="p-2 bg-black rounded-md">
        <FaReact size={20} />
      </div>,
      <div key="tailwind01" className="p-2 bg-black rounded-md">
        <SiTailwindcss size={20} />
      </div>,
      <div key="github01" className="p-2 bg-black rounded-md">
        <TbBrandGithubFilled size={20} />
      </div>,
    ],
  },
  {
    name: "Proctor Pro",
    description:
      "ProctorPro is a dynamic question paper designer application that allows users to create, manage, and share customizable tests. The platform supports multiple question types, including multiple-choice, fill-in-the-blank, categorization, and comprehension questions with nested MCQs. Once a test is created, a unique shareable link is generated, enabling others to take the test and receive instant scoring based on correct answers. ProctorPro streamlines the assessment process, making it ideal for educators, recruiters, and trainers seeking an efficient and user-friendly test creation experience.",
    images: [
      { key: "proctorpro-01", img: "/images/projects/proctor-pro/01.gif" },
      { key: "proctorpro-02", img: "/images/projects/proctor-pro/02.png" },
      { key: "proctorpro-03", img: "/images/projects/proctor-pro/03.png" },
      { key: "proctorpro-04", img: "/images/projects/proctor-pro/04.png" },
      { key: "proctorpro-05", img: "/images/projects/proctor-pro/05.png" },
    ],
    techstack: [
      "React",
      "TailwindCSS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "React Query",
      "Git",
      "Github",
    ],
    link: "https://proctorpro-revanth.netlify.app/",
    icons: [
      <div key="react01" className="p-2 bg-black rounded-md">
        <FaReact size={20} />
      </div>,
      <div key="tailwind01" className="p-2 bg-black rounded-md">
        <SiTailwindcss size={20} />
      </div>,
      <div key="github01" className="p-2 bg-black rounded-md">
        <TbBrandGithubFilled size={20} />
      </div>,
    ],
  },
  {
    name: "Twitter Clone",
    description:
      "Developed a Twitter clone with React, Node, Express, and MongoDB, supporting tweeting, liking, replying, retweeting, and viewing user profiles. Implemented JWT authentication, bcrypt encryption, and secure image upload middleware. Improved UX with real-time user handle validation during sign-up and optimized database performance using Mongoose.",
    link: "https://twitter-rmb.netlify.app/",
    images: [
      { key: "twtcln-01", img: "/images/projects/twitter-clone/01.gif" },
      { key: "twtcln-02", img: "/images/projects/twitter-clone/02.png" },
      { key: "twtcln-03", img: "/images/projects/twitter-clone/03.png" },
    ],
    techstack: [
      "React",
      "TailwindCSS",
      "React Query",
      "ExpressJS",
      "MongoDB",
      "NodeJS",
      "Git",
      "GitHub",
    ],
    icons: [
      <div key="react02" className="p-2 bg-black rounded-md">
        <FaReact size={20} />
      </div>,
      <div key="tailwind02" className="p-2 bg-black rounded-md">
        <SiTailwindcss size={20} />
      </div>,
      <div key="express01" className="p-2 bg-black rounded-md">
        <SiExpress size={20} />
      </div>,
      <div key="mongo01" className="p-2 bg-black rounded-md">
        <SiMongodb size={20} />
      </div>,
      <div key="node01" className="p-2 bg-black rounded-md">
        <FaNodeJs size={20} />
      </div>,
      <div key="github02" className="p-2 bg-black rounded-md">
        <TbBrandGithubFilled size={20} />
      </div>,
    ],
  },
  {
    name: "UrbanForge",
    description:
      "Programmed a dynamic e-Commerce platform with React, Node, and Express, featuring JWT authentication, PayPal payments, and an intuitive Admin Dashboard. Developed scalable RESTful APIs and ensured efficient collaboration through comprehensive documentation and best practices.",
    link: "https://urbanforge-rmb.netlify.app",
    images: [
      { key: "urbnfrg-01", img: "/images/projects/urban-forge/01.gif" },
      { key: "urbnfrg-02", img: "/images/projects/urban-forge/02.png" },
      { key: "urbnfrg-03", img: "/images/projects/urban-forge/03.png" },
      { key: "urbnfrg-04", img: "/images/projects/urban-forge/04.png" },
      { key: "urbnfrg-05", img: "/images/projects/urban-forge/05.png" },
      { key: "urbnfrg-06", img: "/images/projects/urban-forge/06.png" },
    ],
    techstack: [
      "React",
      "TailwindCSS",
      "React Query",
      "ExpressJS",
      "MongoDB",
      "NodeJS",
      "Git",
      "GitHub",
    ],
    icons: [
      <div key="react03" className="p-2 bg-black rounded-md">
        <FaReact size={20} />
      </div>,
      <div key="03" className="p-2 bg-black rounded-md">
        <SiTailwindcss size={20} />
      </div>,
      <div key="express02" className="p-2 bg-black rounded-md">
        <SiExpress size={20} />
      </div>,
      <div key="mongo02" className="p-2 bg-black rounded-md">
        <SiMongodb size={20} />
      </div>,
      <div key="node02" className="p-2 bg-black rounded-md">
        <FaNodeJs size={20} />
      </div>,
      <div key="github03" className="p-2 bg-black rounded-md">
        <TbBrandGithubFilled size={20} />
      </div>,
    ],
  },
  {
    name: "The Cocktail Database",
    description:
      "Created a database of all the IBA certified cocktails numbering over 80. Architectured a database to serve that data to the client. Designed and implemented a custom loading screen in line with the theme of the website. Each cocktail also has a dedicated page with steps on how to create that cocktail and a button to read more about that cocktail.",
    link: "https://the-cocktail-database-revanthmbontha.netlify.app",
    images: [
      { key: "cktldb-01", img: "/images/projects/cocktail-database/01.gif" },
      { key: "cktldb-02", img: "/images/projects/cocktail-database/02.png" },
      { key: "cktldb-03", img: "/images/projects/cocktail-database/03.png" },
      { key: "cktldb-04", img: "/images/projects/cocktail-database/04.png" },
      { key: "cktldb-05", img: "/images/projects/cocktail-database/05.png" },
    ],
    techstack: [
      "React",
      "Bootstrap",
      "ExpressJS",
      "MongoDB",
      "NodeJS",
      "Git",
      "GitHub",
    ],
    icons: [
      <div key="react04" className="p-2 bg-black rounded-md">
        <FaReact size={20} />
      </div>,
      <div key="bootstrap01" className="p-2 bg-black rounded-md">
        <FaBootstrap size={20} />
      </div>,
      <div key="express03" className="p-2 bg-black rounded-md">
        <SiExpress size={20} />
      </div>,
      <div key="mongo03" className="p-2 bg-black rounded-md">
        <SiMongodb size={20} />
      </div>,
      <div key="node03" className="p-2 bg-black rounded-md">
        <FaNodeJs size={20} />
      </div>,
      <div key="github04" className="p-2 bg-black rounded-md">
        <TbBrandGithubFilled size={20} />
      </div>,
    ],
  },
  {
    name: "React Components",
    description:
      "Created a set of commonly used React Components from scratch that can be dropped into any website and used within the website.",
    link: "https://revanthmbontha-react-components-hold.netlify.app/",
    images: [
      { key: "rctcomp-01", img: "/images/projects/react-components/01.gif" },
      { key: "rctcomp-02", img: "/images/projects/react-components/02.png" },
      { key: "rctcomp-03", img: "/images/projects/react-components/03.png" },
      { key: "rctcomp-04", img: "/images/projects/react-components/04.png" },
      { key: "rctcomp-05", img: "/images/projects/react-components/05.png" },
    ],
    techstack: ["React", "Tailwind", "Git", "GitHub"],
    icons: [
      <div key="react04" className="p-2 bg-black rounded-md">
        <FaReact size={20} />
      </div>,
      <div key="bootstrap02" className="p-2 bg-black rounded-md">
        <SiTailwindcss size={20} />
      </div>,
      <div key="node04" className="p-2 bg-black rounded-md">
        <IoGitNetworkOutline size={20} />
      </div>,
      <div key="github05" className="p-2 bg-black rounded-md">
        <TbBrandGithubFilled size={20} />
      </div>,
    ],
  },
  {
    name: "NatureWalks website",
    description:
      "Created a website for an eco-tourism website with a unique twist to the landing page where the core philosophies are rendered recursively.",
    link: "https://nature-walks-revanthmbontha.netlify.app/",
    images: [
      { key: "natwlks-01", img: "/images/projects/nature-walks/01.gif" },
      { key: "natwlks-02", img: "/images/projects/nature-walks/02.png" },
      { key: "natwlks-03", img: "/images/projects/nature-walks/03.png" },
      { key: "natwlks-04", img: "/images/projects/nature-walks/04.png" },
    ],
    techstack: ["HTML", "CSS", "JS", "jQuery", "Git", "GitHub"],
    icons: [
      <div key="react04" className="p-2 bg-black rounded-md">
        <FaHtml5 size={20} />
      </div>,
      <div key="bootstrap03" className="p-2 bg-black rounded-md">
        <FaCss3Alt size={20} />
      </div>,
      <div key="express05" className="p-2 bg-black rounded-md">
        <IoLogoJavascript size={20} />
      </div>,
      <div key="mongo05" className="p-2 bg-black rounded-md">
        <SiJquery size={20} />
      </div>,
      <div key="node05" className="p-2 bg-black rounded-md">
        <IoGitNetworkOutline size={20} />
      </div>,
      <div key="github06" className="p-2 bg-black rounded-md">
        <TbBrandGithubFilled size={20} />
      </div>,
    ],
  },
];

export const skillsData = [
  <>
    <FaHtml5 size={60} />
    <span>HTML5</span>
  </>,
  <>
    <FaCss3Alt size={60} />
    <span>CSS3</span>
  </>,
  <>
    <IoLogoJavascript size={60} />
    <span>Javascript</span>
  </>,
  <>
    <SiJquery size={60} />
    <span>jQuery</span>
  </>,
  <>
    <FaBootstrap size={60} />
    <span>Bootstrap</span>
  </>,
  <>
    <FaSass size={60} />
    <span>SASS</span>
  </>,
  <>
    <FaReact size={60} />
    <span>React</span>
  </>,
  <>
    <SiMongodb size={60} />
    <span>MongoDB</span>
  </>,
  <>
    <DiPostgresql size={60} />
    <span>PostGreSQL</span>
  </>,
  <>
    <DiSqllite size={60} />
    <span>SQLite</span>
  </>,
  <>
    <SiExpress size={60} />
    <span>ExpressJS</span>
  </>,
  <>
    <FaNodeJs size={60} />
    <span>NodeJS</span>
  </>,
  <>
    <SiTailwindcss size={60} />
    <span>TailwindCSS</span>
  </>,
  <>
    <SiRedux size={60} />
    <span>Redux</span>
  </>,
  <>
    <FaPython size={60} />
    <span>Python</span>
  </>,
  <>
    <SiAnaconda size={60} />
    <span>Anaconda</span>
  </>,
  <>
    <FaJava size={60} />
    <span>Java</span>
  </>,
  <>
    <IoGitNetworkOutline size={60} />
    <span>Git</span>
  </>,
  <>
    <FaGithub size={60} />
    <span>GitHub</span>
  </>,
  <>
    <FaDocker size={60} />
    <span>Docker</span>
  </>,
];
