import useGlobalStore from "../../store";
import ProjectCard from "./ProjectCard";
import { projectCardsData } from "../../data";

const MyProjects = () => {
  const connectedInputIds = useGlobalStore((state) => state.connectedInputIds);

  return (
    <div
      className={`bg-black text-white ${
        !connectedInputIds.includes("fullResume") &&
        connectedInputIds.includes("projects")
          ? "h-[1025px] p-4 lg:p-8 lg:px-18"
          : "h-0 p-0"
      } flex flex-col overflow-hidden gap-y-8 z-10 items-center transition-all duration-1000 flex-shrink-0 ease-in-out`}
    >
      <h1 className="text-start w-full text-4xl">My Projects</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projectCardsData.map((project, index) => (
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
  );
};

export default MyProjects;
