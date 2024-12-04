import useGlobalStore from "../../store";
import SkillCard from "./SkillCard";
import { skillsData } from "../../data";

const MySkills = () => {
  const connectedInputIds = useGlobalStore((state) => state.connectedInputIds);

  return (
    <div
      className={`bg-black text-white ${
        !connectedInputIds.includes("fullResume") &&
        connectedInputIds.includes("skills")
          ? "h-[39rem] p-4 lg:p-8 lg:px-18"
          : "h-0 p-0"
      } flex flex-col overflow-hidden gap-y-8 z-10 items-center transition-all duration-1000 flex-shrink-0 ease-in-out`}
    >
      <h1 className="text-start w-full text-4xl">My Skills</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">
          {skillsData.map((skill, index) => (
            <SkillCard key={`skill-${index}`}>{skill}</SkillCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
