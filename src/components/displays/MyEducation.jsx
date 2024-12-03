import useGlobalStore from "../../store";

const MyEducation = () => {
  const connectedInputIds = useGlobalStore((state) => state.connectedInputIds);

  return (
    <div
      className={`bg-black text-white ${
        !connectedInputIds.includes("fullResume") &&
        connectedInputIds.includes("education")
          ? "h-[1650px] p-4 lg:p-8 lg:px-18"
          : "h-0 p-0"
      } flex flex-col overflow-hidden gap-y-8 z-10 items-center transition-all duration-1000 flex-shrink-0 ease-in-out`}
    >
      <h1 className="text-start w-full text-4xl">My Education</h1>

      {/* Education 01 */}
      <div className="w-full p-4 rounded-lg flex flex-col gap-y-4 border border-white border-solid bg-neutral-700">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h2 className="text-xl">Full Stack Development Course</h2>
            <p className="text-sm">Internshala / NSDC</p>
          </div>
          <div className="flex flex-col">
            <p className="text-xl text-end">Nov,2023 - May,2024</p>
            <p className="text-sm text-end">Online</p>
          </div>
        </div>
        <p className="text-base">
          I have successfully completed the Fullstack Development Course from
          Internshala in association with National Skill Development Corporation
          and achieved a grade of 98%.
        </p>
        <img
          className="w-3/4 h-fit mx-auto bg-blue-300 rounded-md"
          src="/images/certificates/internshala.jpg"
          alt="Internshala Certificate"
        />

        <img
          className="w-3/4 h-fit mx-auto bg-blue-300 rounded-md"
          src="/images/certificates/nsdc.jpg"
          alt="NSDC Certificate"
        />
      </div>

      {/* Education 02 */}
      <div className="w-full p-4 rounded-lg flex flex-col gap-y-4 border border-white border-solid bg-neutral-700">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h2 className="text-xl">Web Development Bootcamp</h2>
            <p className="text-sm">Angela Yu | Udemy</p>
          </div>
          <div className="flex flex-col">
            <p className="text-xl text-end">Dec,2022 - Mar,2023</p>
            <p className="text-sm text-end">Online</p>
          </div>
        </div>
        <p className="text-base">
          I have completed the bootcamp conducted by Dr. Angela Yu on Udemy. It
          covers the core fundamentals of web development and introduces the
          students to modern frameworks.
        </p>
        <img
          className="w-3/4 h-fit mx-auto bg-blue-300 rounded-md"
          src="/images/certificates/udemy.jpg"
          alt="Udemy Certificate"
        />
      </div>

      {/* Education 03 */}
      <div className="w-full p-4 rounded-lg flex flex-col gap-y-4 border border-white border-solid bg-neutral-700">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h2 className="text-xl">Bachelers of Commerce</h2>
            <p className="text-sm">Indira Gandhi National University</p>
          </div>
          <div className="flex flex-col">
            <p className="text-xl text-end">Jun,2019 - May,2022</p>
            <p className="text-sm text-end">Visakhapatnam</p>
          </div>
        </div>
        <p className="text-base">
          I have completed my Bachelors from Indira Gandhi National University
          with a CGPA of 6.2.
        </p>
      </div>
    </div>
  );
};

export default MyEducation;
