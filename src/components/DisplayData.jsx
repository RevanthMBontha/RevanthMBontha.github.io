import { lazy, Suspense } from "react";
import useGlobalStore from "../store";
const FullResume = lazy(() => import("./displays/FullResume"));
const AboutMe = lazy(() => import("./displays/AboutMe"));
const MyExperience = lazy(() => import("./displays/MyExperience"));
const MyProjects = lazy(() => import("./displays/MyProjects"));
const MyEducation = lazy(() => import("./displays/MyEducation"));
const MySkills = lazy(() => import("./displays/MySkills"));
const ContactMe = lazy(() => import("./displays/ContactMe"));

const DisplayData = () => {
  const connectedInputIds = useGlobalStore((state) => state.connectedInputIds);
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen bg-black flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-500"></div>
        </div>
      }
    >
      <div className="w-full scrollbar-thin scrollbar-thumb-primary-500 scrollbar-track-gray-500 font-rubik h-screen relative bg-neutral-600 overflow-y-auto flex flex-col p-0 gap-y-0">
        {/* If no nodes are connected */}
        {connectedInputIds.length === 0 && (
          <div className="w-4/5 h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white gap-y-2 flex flex-col justify-center items-center">
            <p className="text-center text-sm">
              You can drag and drop nodes from the Node Tray to see more
              specific information about me. Click on the arrow at the bottom to
              get started!
            </p>
            <div className="border border-white border-solid rounded-md w-full flex flex-col items-center gap-y-1 p-1 bg-gray-950">
              <img
                className="w-[60%] h-fit border border-neutral-400 border-solid"
                src="/images/tute01.gif"
                alt="Step 01"
              />
              <p className="text-sm">Delete Edges or Nodes to remove data.</p>
            </div>
            <div className="border border-white border-solid rounded-md w-full flex flex-col items-center gap-y-1 bg-gray-950 p-1">
              <img
                className="w-[60%] h-fit border border-neutral-400 border-solid"
                src="/images/tute02.gif"
                alt="Step 02"
              />
              <p className="text-sm">
                Drag Nodes from Tray and connect to see more information.
              </p>
            </div>

            <div className="border border-white border-solid rounded-md w-full flex flex-col items-center gap-y-1 p-1 bg-gray-950">
              <img
                className="w-[60%] h-fit border border-neutral-400 border-solid"
                src="/images/tute03.gif"
                alt="Step 03"
              />
              <p className="text-sm">
                Multiple nodes can be connected at once, except for &lsquo;Full
                Resume&rsquo;.
              </p>
            </div>
          </div>
        )}

        {/* Full Resume */}
        <FullResume />

        {/* About Me Node */}
        <AboutMe />

        {/* Experience Node */}
        <MyExperience />

        {/* Projects Node */}
        <MyProjects />

        {/* Education Node */}
        <MyEducation />

        {/* Skills Node */}
        <MySkills />

        {/* Contact Me Node */}
        <ContactMe />
      </div>
    </Suspense>
  );
};

export default DisplayData;
