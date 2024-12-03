import useGlobalStore from "../../store";

const MyExperience = () => {
  const connectedInputIds = useGlobalStore((state) => state.connectedInputIds);

  return (
    <div
      className={`bg-black text-white ${
        !connectedInputIds.includes("fullResume") &&
        connectedInputIds.includes("experience")
          ? "h-[670px] p-4 lg:p-8 lg:px-18"
          : "h-0 p-0"
      } flex flex-col overflow-hidden gap-y-8 z-10 items-center transition-all duration-1000 flex-shrink-0 ease-in-out`}
    >
      <h1 className="text-start w-full text-4xl">My Experience</h1>
      {/* Experience 01 */}
      <div className="w-full flex flex-col gap-y-4">
        {/* Role details */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl">Full-Stack Developer</h2>
            <a
              href="https://www.root-enroute.com/"
              className="text-primary-500 hover:underline hover:underline-offset-4 text-sm"
            >
              Root-Enroute
            </a>
          </div>
          <div>
            <p className="text-xl text-end">Oct,2023 - Present</p>
            <p className="text-sm text-end">Hyderabad</p>
          </div>
        </div>
        {/* Achivements in the role */}
        <div>
          <ul className="list-none space-y-3">
            <li className="flex items-center gap-2 group">
              <span className="flex-shrink-0 w-3 h-3 bg-primary-500 rounded-full transition-all" />
              <p className="text-white transition-colors">
                Engineered an e-commerce platform using React, MongoDB, and
                Spring Boot, contributing to the design, development, and
                deployment phases.
              </p>
            </li>
            <li className="flex items-center gap-2 group">
              <span className="flex-shrink-0 w-3 h-3 bg-primary-500 rounded-full transition-all" />
              <p className="text-white transition-colors">
                Boosted community engagement by 28% with a dynamic recipe
                creation and rating system, driving increased sales.
              </p>
            </li>
            <li className="flex items-center gap-2 group">
              <span className="flex-shrink-0 w-3 h-3 bg-primary-500 rounded-full transition-all" />
              <p className="text-white transition-colors">
                Optimized backend services using Spring Boot, reducing server
                downtime by 75% and enhancing scalability.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Experience 02 */}
      <div className="w-full flex flex-col gap-y-4">
        {/* Role details */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl">Frontend Developer Intern</h2>
            <a
              href="https://www.56secure.com/"
              className="text-primary-500 hover:underline hover:underline-offset-4 text-sm"
            >
              56Secure
            </a>
          </div>
          <div>
            <p className="text-xl text-end">Jul,2023 - Sept,2023</p>
            <p className="text-sm text-end">Bengaluru</p>
          </div>
        </div>
        {/* Achivements in the role */}
        <div>
          <ul className="list-none space-y-3">
            <li className="flex items-center gap-2 group">
              <span className="flex-shrink-0 w-3 h-3 bg-primary-500 rounded-full transition-all" />
              <p className="text-white transition-colors">
                Built a Guard Management System with React, improving hiring of
                guards from an average of 4 per day to 10 per day.
              </p>
            </li>
            <li className="flex items-center gap-2 group">
              <span className="flex-shrink-0 w-3 h-3 bg-primary-500 rounded-full transition-all" />
              <p className="text-white transition-colors">
                Developed a geo-fencing tool with Google Maps API for real-time
                location tracking and automated guard notifications.
              </p>
            </li>
            <li className="flex items-center gap-2 group">
              <span className="flex-shrink-0 w-3 h-3 bg-primary-500 rounded-full transition-all" />
              <p className="text-white transition-colors">
                Accelerated data retrieval by 40% through React Query
                optimizations, enhancing system responsiveness.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
