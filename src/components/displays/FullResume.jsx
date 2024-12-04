import { useState, useRef } from "react";
import useGlobalStore from "../../store";
import emailjs from "emailjs-com";
import { MdWavingHand, MdEmail, MdPictureAsPdf } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { IoGridOutline, IoCodeSlashOutline } from "react-icons/io5";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { BiSend } from "react-icons/bi";
import ProjectCard from "./ProjectCard";
import { projectCardsData, skillsData } from "../../data.jsx";
import SkillCard from "./SkillCard.jsx";
import { toast } from "react-toastify";

const FullResume = () => {
  const connectedInputIds = useGlobalStore((state) => state.connectedInputIds);
  const [isExperience, setIsExperience] = useState(true);
  const testRef = useRef();
  const introRef = useRef();
  const projectsRef = useRef();
  const skillsRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_ji3ie5n", // Replace with your service ID
        "template_gg49zv7", // Replace with your template ID
        formData,
        "zE-pfdl1qiyU3sWqk" // Replace with your user ID
      )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        toast.success("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Failed to send message.");
      });
  };

  return (
    <div
      ref={testRef}
      className={`bg-black relative text-white ${
        window.innerHeight > window.innerWidth
          ? "h-fit p-4 lg:p-8 lg:px-18"
          : connectedInputIds.includes("fullResume")
          ? "h-[194rem] p-4 lg:p-8 lg:px-18"
          : "h-0 p-0"
      } rounded-none z-10 w-full flex flex-col overflow-hidden gap-y-12 justify-start items-start transition-all font-rubik flex-shrink-0 duration-1000 ease-in-out`}
    >
      {/* Scroll Helper Section */}
      <div
        ref={introRef}
        className={`${
          connectedInputIds.includes("fullResume") ? "visible" : "hidden"
        } w-full flex justify-center`}
      >
        <div className="w-fit fixed z-20 top-4 p-2 px-6 cursor-pointer h-fit rounded-full justify-center items-center bg-neutral-700 text-white flex gap-x-8 font-rubik">
          <div className="p-2 rounded-full hover:bg-neutral-500">
            <CiBoxList
              onClick={() =>
                introRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              size={32}
            />
          </div>
          <div className="p-2 rounded-full hover:bg-neutral-500">
            <IoGridOutline
              onClick={() =>
                projectsRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              size={28}
            />
          </div>
          <div className="p-2 rounded-full hover:bg-neutral-500">
            <IoCodeSlashOutline
              onClick={() =>
                skillsRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              size={30}
            />
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="flex flex-col mt-12 gap-y-8 w-full">
        {/* Name and Tagline */}
        <div>
          <h1 className="font-rubik w-full text-4xl">
            Hi, I am Revanth{" "}
            <MdWavingHand className="animate-waving-hand inline-block text-primary-500" />
          </h1>
          <h1 className="font-rubik w-full text-4xl text-primary-500">
            Fullstack Developer
          </h1>
        </div>

        {/* Links */}
        <div className="flex w-full justify-between items-center">
          {/* GitHub */}
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

          {/* LinkedIn */}
          <div
            onClick={() =>
              window.open(
                "http://www.linkedin.com/in/revanth-m-bontha",
                "_blank"
              )
            }
            className="bg-neutral-700 hover:bg-neutral-500 p-2 md:px-4 rounded-full flex items-center gap-x-2 cursor-pointer"
          >
            <FaLinkedinIn
              className="text-black p-1 bg-primary-500 rounded-md"
              size={24}
            />{" "}
            <span className="font-rubik text-sm  lg:text-lg">LinkedIn</span>
          </div>

          {/* CV */}
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

        {/* About */}
        <p className="text-base text-justify lg:text-base">
          I’m a passionate Software Developer with a knack for creating
          seamless, user-centric applications. With expertise in React, Node.js,
          and MongoDB, I enjoy transforming ideas into impactful digital
          solutions. My experience spans building high-performance platforms,
          and I thrive on exploring distributed systems, data visualization, and
          cutting-edge technologies. As a lifelong learner and a team player,
          I’m always eager to innovate, collaborate, and deliver exceptional
          results.
        </p>
      </div>

      <hr className="text-neutral-700 w-full" />

      {/* Education / Experience Section */}
      <div className="flex flex-col gap-y-8 w-full">
        <h2 className="text-3xl">My Timeline</h2>
        {/* Experience/Education Button */}
        <div className="flex w-full justify-center items-center">
          <div className="flex justify-center items-center">
            <button
              className={`p-2 px-4 border ${
                isExperience ? "bg-primary-500" : "bg-black"
              } border-solid hover:bg-neutral-500 border-white rounded-md rounded-r-none`}
              onClick={() => setIsExperience(true)}
            >
              Experience
            </button>
            <button
              className={`p-2 px-4 border ${
                !isExperience ? "bg-primary-500" : "bg-black"
              } border-solid hover:bg-neutral-500 border-white rounded-md rounded-l-none border-l-0`}
              onClick={() => setIsExperience(false)}
            >
              Education
            </button>
          </div>
        </div>

        {/* Items for Education/Experience */}
        <div className="w-full relative flex flex-col gap-y-8 h-fit">
          {/* First Row */}
          <div className="w-full flex items-start h-fit gap-x-2">
            {/* L-1 */}
            <div
              className={`w-full ${
                !isExperience ? "visible" : "invisible"
              } bg-black h-full flex flex-col gap-y-4`}
            >
              <div className="flex flex-col">
                <span className="text-xl text-end">
                  Fullstack Developer Course
                </span>
                <span className="text-sm text-end">Internshala</span>
              </div>
              <div className="text-base text-end">Dec,2023 - May,2024</div>
            </div>
            {/* Dot */}
            <div className="w-7 flex-shrink-0 bg-white h-7 rounded-full"></div>
            {/* R-1 */}
            <div
              className={`w-full ${
                isExperience ? "visible" : "invisible"
              } bg-black h-full flex flex-col gap-y-4`}
            >
              <div className="flex flex-col">
                <span className="text-xl">Fullstack Developer</span>
                <span className="text-sm">Root Enroute</span>
              </div>
              <div className="text-base">Oct,2023 - Present</div>
            </div>
          </div>

          {/* Second Row */}
          <div className="w-full flex items-start h-fit gap-x-2">
            {/* L-2 */}
            <div
              className={`w-full ${
                isExperience ? "visible" : "invisible"
              } bg-black h-full flex flex-col gap-y-4`}
            >
              <div className="flex flex-col">
                <span className="text-xl text-end">
                  Frontend Developer Intern
                </span>
                <span className="text-sm text-end">56 Secure</span>
              </div>
              <div className="text-base text-end">Jul,2023 - Sept,2023</div>
            </div>
            {/* Dot */}
            <div className="w-7 flex-shrink-0 bg-white h-7 rounded-full"></div>
            {/* R-2 */}
            <div
              className={`w-full ${
                !isExperience ? "visible" : "invisible"
              } bg-black h-full flex flex-col gap-y-4`}
            >
              <div className="flex flex-col">
                <span className="text-xl">WebDev Bootcamp - Angela Yu</span>
                <span className="text-sm">Udemy</span>
              </div>
              <div className="text-base">Jul,2022 - Aug,2022</div>
            </div>
          </div>

          {/* Third Row */}
          <div className="w-full flex items-start h-fit gap-x-2">
            {/* L-3 */}
            <div
              className={`w-full ${
                !isExperience ? "visible" : "invisible"
              } bg-black h-full  flex flex-col gap-y-4`}
            >
              <div className="flex flex-col">
                <span className="text-xl text-end">Bachelor of Commerce</span>
                <span className="text-sm text-end">IGNOU</span>
              </div>
              <div className="text-base text-end">Jun,2019 - May,2022</div>
            </div>
            {/* Dot */}
            <div className="w-7 flex-shrink-0 bg-white h-7 rounded-full"></div>
            {/* R-3 */}
            <div
              className={`w-full ${
                isExperience ? "visible" : "invisible"
              } bg-black h-full flex flex-col gap-y-4`}
            >
              <div className="flex flex-col">
                <span className="text-xl">Freelancing</span>
                <span className="text-sm">Multiple Clients</span>
              </div>
              <div className="text-base">Oct,2022 - Jul,2023</div>
            </div>
          </div>

          {/* Vertical Line */}
          <div className="w-[1px] bg-white h-full absolute left-1/2 -translate-x-1/2"></div>
        </div>
      </div>

      <hr ref={projectsRef} className="text-neutral-700 w-full" />

      {/* Projects Section */}
      <div className="w-full flex flex-col gap-y-4">
        <h2 className="text-3xl">My Best Projects</h2>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {projectCardsData.slice(0, 4).map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                name={project.name}
                description={project.description}
                link={project.link}
                images={project.images}
                techStack={project.techstack}
                icons={project.icons}
              />
            ))}
          </div>
        </div>
      </div>

      <hr ref={skillsRef} className="text-neutral-700 w-full" />

      {/* Skills Section */}
      <div className="w-full flex flex-col gap-y-4">
        <h2 className="text-3xl">My Skills</h2>
        <div className="container mx-auto">
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">
            {skillsData.map((skill, index) => (
              <SkillCard key={`skill-${index}`}>{skill}</SkillCard>
            ))}
          </div>
        </div>
      </div>

      <hr className="text-neutral-700 w-full" />

      {/* Contact Me Section */}
      <div className="w-full mb-12">
        <h2 className="text-3xl">Contact Me</h2>
        <div className="flex w-full h-fit">
          {/* For quick mail or message */}
          <div className="flex w-2/5 h-96  p-2 flex-col items-center justify-evenly">
            <div className="h-fit w-full rounded-md bg-black flex flex-col items-center justify-center gap-y-2 p-4 border border-white border-solid">
              <MdEmail
                className="text-white bg-primary-500 p-2 rounded-md"
                size={48}
              />
              <p className="text-white">Send me a Mail:</p>
              <a
                className="cursor-pointer text-primary-500 hover:underline hover:underline-offset-4"
                href="mailto:revanthmbontha@gmail.com"
                target="_blank"
              >
                Click Here
              </a>
            </div>
            <div className="h-fit w-full rounded-md bg-black flex flex-col items-center justify-center gap-y-2 p-4 border border-white border-solid">
              <FaWhatsapp
                className="text-white bg-primary-500 p-2 rounded-md"
                size={48}
              />
              <p className="text-white">Connect on Whatsapp:</p>
              <a
                className="cursor-pointer text-primary-500 hover:underline hover:underline-offset-4"
                href="https://api.whatsapp.com/send?phone=918309805502&text=Hello!"
                target="_blank"
              >
                Click Here
              </a>
            </div>
          </div>

          {/* To send a message for a contract */}
          <form
            onSubmit={handleSubmit}
            className="flex relative w-3/5 p-2 flex-col justify-evenly gap-y-4"
          >
            <div className="relative w-full">
              <label
                className="absolute bg-black px-3 -top-3 left-5 text-white"
                htmlFor="name"
              >
                Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="h-16 w-full focus:border-primary-500 rounded-md outline-none bg-black p-4 text-white border-white border border-solid"
              />
            </div>
            <div className=" relative w-full">
              <label
                className="absolute bg-black px-3 -top-3 left-5 text-white"
                htmlFor="email"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="h-16 w-full rounded-md focus:border-primary-500 outline-none bg-black p-4 text-white border-white border border-solid"
              />
            </div>
            <div className=" relative w-full">
              <label
                className="absolute bg-black px-3 -top-3 left-5 text-white"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                placeholder="Detail your project idea here!"
                value={formData.message}
                onChange={handleChange}
                className="bg-black border w-full border-white border-solid outline-none focus:border-primary-500 text-white rounded-md p-4"
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-300 p-4 px-8 text-lg mx-auto w-fit h-fit rounded-md flex items-center gap-x-4"
            >
              Send Message <BiSend className="inline-block" size={32} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FullResume;
