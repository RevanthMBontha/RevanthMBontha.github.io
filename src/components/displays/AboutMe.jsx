import useGlobalStore from "../../store";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdPictureAsPdf } from "react-icons/md";

const AboutMe = () => {
  const connectedInputIds = useGlobalStore((state) => state.connectedInputIds);

  return (
    <div
      className={`bg-black text-white ${
        !connectedInputIds.includes("fullResume") &&
        connectedInputIds.includes("about")
          ? "h-[45rem] p-4 lg:p-8 lg:px-18"
          : "h-0 p-0"
      } flex flex-col z-10 gap-y-8 overflow-hidden justify-evenly items-center transition-all flex-shrink-0 duration-1000 ease-in-out`}
    >
      {/* Intro */}
      <div className="w-full">
        <h1 className="text-start w-full text-4xl">
          Hi, I am <span className="text-primary-500">Revanth</span>,
        </h1>
        <h2 className="text-start text-primary-500 w-full text-4xl">
          A Fullstack Developer.
        </h2>
      </div>

      {/* Profile Picture */}
      <div
        className={`${
          !connectedInputIds.includes("fullResume") &&
          connectedInputIds.includes("about")
            ? "h-48"
            : "h-0"
        } w-48 rounded-full relative bg-blue-300 duration-1000 transition-all`}
      >
        <img
          className={`${
            !connectedInputIds.includes("fullResume") &&
            connectedInputIds.includes("about")
              ? "h-48"
              : "h-0"
          } absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 rounded-full duration-1000 transition-all`}
          src="/images/about/profile.jpg"
          alt="revanth bontha profile"
        />
      </div>
      {/* Professional */}
      <p className="text-base w-full text-justify">
        I am a versatile Software Engineer with 1.5 years of experience in
        full-stack development, proficient in React, Node.js, Express, and
        MongoDB. I am passionate about solving complex problems and building
        scalable, user-centric applications. I want to contribute to innovative
        projects by leveraging expertise in distributed computing, system
        design, and UI engineering.
      </p>

      {/* Hobbies */}
      <p className="text-base w-full text-justify">
        In my free time I like to play the piano, and dabble in 3D development.
        I have also published a game on Itch.io. I like to be more open with my
        hobbies and see where they take me. I like adventures and tend to enjoy
        outdoor activities more than just staying indoors.
      </p>

      {/* Links */}
      <div className="flex w-full justify-evenly items-center">
        <div
          onClick={() =>
            window.open("http://www.github.com/revanthmbontha", "_blank")
          }
          className="bg-neutral-700 hover:bg-neutral-500 p-2 md:px-4 rounded-full flex items-center gap-x-2 cursor-pointer"
        >
          <TbBrandGithubFilled
            className="text-black p-1 bg-primary-500 rounded-md"
            size={24}
          />{" "}
          <span className="font-rubik text-sm lg:text-lg">Github</span>
        </div>

        <div
          onClick={() =>
            window.open("http://www.linkedin.com/in/revanth-bontha", "_blank")
          }
          className="bg-neutral-700 hover:bg-neutral-500 p-2 md:px-4 rounded-full flex items-center gap-x-2 cursor-pointer"
        >
          <FaLinkedinIn
            className="text-black p-1 bg-primary-500 rounded-md"
            size={24}
          />{" "}
          <span className="font-rubik text-sm  lg:text-lg">LinkedIn</span>
        </div>

        <div
          onClick={() => window.open("/pdfs/resume.pdf", "_blank")}
          className="bg-neutral-700 hover:bg-neutral-500 p-2 md:px-4 rounded-full flex items-center gap-x-2 cursor-pointer"
        >
          <MdPictureAsPdf
            className="text-black p-1 bg-primary-500 rounded-md"
            size={24}
          />{" "}
          <span className="font-rubik text-sm lg:text-lg">Download CV</span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
