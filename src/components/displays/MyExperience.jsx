import useGlobalStore from "../../store";

const MyExperience = () => {
  const connectedInputIds = useGlobalStore((state) => state.connectedInputIds);

  return (
    <div
      className={`bg-black text-white ${
        !connectedInputIds.includes("fullResume") &&
        connectedInputIds.includes("experience")
          ? "h-[60rem] p-4 lg:p-8 lg:px-18"
          : "h-0 p-0"
      } flex flex-col overflow-hidden gap-y-8 z-10 items-center transition-all duration-1000 flex-shrink-0 ease-in-out`}
    >
      <h1 className="text-start w-full text-4xl">My Experience</h1>
      {/* Experience 01 */}
      <div className="w-full flex flex-col gap-y-4">
        {/* Role details */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl">Fullstack Developer</h2>
            <a
              href="https://www.root-enroute.com/"
              className="text-primary-500 hover:underline hover:underline-offset-4 text-sm"
            >
              Root-Enroute
            </a>
          </div>
          <div>
            <p className="text-xl text-end">Oct,2023 - Present</p>
            <p className="text-sm text-end">Remote</p>
          </div>
        </div>
        {/* Achivements in the role */}
        <div>
          <ul className="list-none space-y-3">
            <li className="flex items-center gap-2 group">
              <span className="flex-shrink-0 w-3 h-3 bg-primary-500 rounded-full transition-all" />
              <p className="text-white transition-colors">
                Contributed to developing an E-Commerce platform using React,
                Zustandand React-Query, from concept to deployment.
              </p>
            </li>
            <li className="flex items-center gap-2 group">
              <span className="flex-shrink-0 w-3 h-3 bg-primary-500 rounded-full transition-all" />
              <p className="text-white transition-colors">
                Designed a dynamic recipe creation system that increased
                community participation and purchases by 28%.
              </p>
            </li>
            <li className="flex items-center gap-2 group">
              <span className="flex-shrink-0 w-3 h-3 bg-primary-500 rounded-full transition-all" />
              <p className="text-white transition-colors">
                Debugged REST APIs and resolved errors and edge cases in the
                backend, making it more robust and secure.
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
            <h2 className="text-xl">Fullstack Freelancer</h2>
            <a
              href="https://histare.net"
              className="text-primary-500 hover:underline hover:underline-offset-4 text-sm"
            >
              Histare Group
            </a>
          </div>
          <div>
            <p className="text-xl text-end">Aug,2023 - Present</p>
            <p className="text-sm text-end">Remote</p>
          </div>
        </div>
        {/* Achivements in the role */}
        <div>
          <ul className="list-none space-y-3">
            <li className="flex items-center gap-2 group">
              <span className="flex-shrink-0 w-3 h-3 bg-primary-500 rounded-full transition-all" />
              <p className="text-white transition-colors">
                Designed and developed Histare’s website, crafting an intuitive
                UI/UX for a seamless user experience.
              </p>
            </li>
            <li className="flex items-center gap-2 group">
              <span className="flex-shrink-0 w-3 h-3 bg-primary-500 rounded-full transition-all" />
              <p className="text-white transition-colors">
                Built an internal management system to streamline employee,
                vendor and customer operations, improving efficiency.
              </p>
            </li>
            <li className="flex items-center gap-2 group">
              <span className="flex-shrink-0 w-3 h-3 bg-primary-500 rounded-full transition-all" />
              <p className="text-white transition-colors">
                Developed a QR code-based event management platform that enables
                unique ticket generation and secure verification for attendees.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Experience 03 */}
      <div className="w-full flex flex-col gap-y-4">
        {/* Role details */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl">Frontend Developer</h2>
            <a
              href="https://www.56secure.com/"
              className="text-primary-500 hover:underline hover:underline-offset-4 text-sm"
            >
              56Secure
            </a>
          </div>
          <div>
            <p className="text-xl text-end">Sept,2022 - Oct,2023</p>
            <p className="text-sm text-end">Bengaluru</p>
          </div>
        </div>
        {/* Achivements in the role */}
        <div>
          <ul className="list-none space-y-3">
            <li className="flex items-center gap-2 group">
              <span className="flex-shrink-0 w-3 h-3 bg-primary-500 rounded-full transition-all" />
              <p className="text-white transition-colors">
                Co-engineered a Guard Management System using React,
                streamlining operations and increasing hiring efficiency of
                guards from an average of 4 per day to 10 per day.
              </p>
            </li>
            <li className="flex items-center gap-2 group">
              <span className="flex-shrink-0 w-3 h-3 bg-primary-500 rounded-full transition-all" />
              <p className="text-white transition-colors">
                Developed an advanced geofence tool utilizing the Google Maps
                API, enabling real-time guard monitoring every 5 seconds and
                automatic updates for geofence entry and exit by guards.
              </p>
            </li>
            <li className="flex items-center gap-2 group">
              <span className="flex-shrink-0 w-3 h-3 bg-primary-500 rounded-full transition-all" />
              <p className="text-white transition-colors">
                Worked with the design team to make the application more
                aesthetically pleasing and intuitive to the user.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
