import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useDnD } from "../DnDContext";

const NodeTray = () => {
  const [showTray, setShowTray] = useState(false);
  const { setType, setId } = useDnD();

  const nodesList = [
    { id: "fullResume", nodeType: "dataNode", label: "Full Resume" },
    { id: "about", nodeType: "dataNode", label: "About Me" },
    { id: "experience", nodeType: "dataNode", label: "My Experience" },
    { id: "projects", nodeType: "dataNode", label: "My Projects" },
    { id: "education", nodeType: "dataNode", label: "My Education" },
    { id: "skills", nodeType: "dataNode", label: "My Skills" },
    { id: "contact", nodeType: "dataNode", label: "Contact Me" },
    { id: "output", nodeType: "outputNode", label: "View Details" },
  ];

  const onDragStart = (event, nodeType, nodeId) => {
    console.log("onDragStart Triggered!");
    console.log("Node Type: ", nodeType);
    console.log("Id: ", nodeId);
    setType(nodeType);
    setId(nodeId);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="custom_shadow">
      <div className="w-full h-fit cursor-pointer bg-neutral-600 flex justify-center py-3 transition-all duration-300">
        <div
          onClick={() => setShowTray(!showTray)}
          className="border border-solid border-primary-500 bg-black text-primary-500 rounded-full px-4 w-fit animate-bounce"
        >
          {showTray ? <FaChevronDown size={24} /> : <FaChevronUp size={24} />}
        </div>
      </div>
      <div
        className={`duration-300 ${
          showTray ? "p-0" : "p-0"
        } flex flex-col gap-4 transition-all w-full ${
          showTray ? "h-[11.5rem]" : "h-0"
        } bg-black overflow-x-auto`}
        onMouseEnter={() => {
          setId(null);
          setType(null);
        }}
      >
        <div className="flex justify-center items-center bg-black">
          <p className="p-2 text-white bg-black font-rubik">
            You can drag these nodes to the node graph above to view more
            details about me!
          </p>
        </div>
        <div className="flex p-4 pb-8 gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-primary-500 bg-black scrollbar-track-gray-500">
          {nodesList.map((node) => (
            <div
              key={node.id}
              className={`h-fit flex justify-center border ${
                node.nodeType === "dataNode"
                  ? "border-teal-300"
                  : "border-indigo-300"
              } border-solid w-48 cursor-pointer ${
                showTray ? "opacity-100" : "opacity-0"
              } bg-gray-900 text-white font-rubik p-4 rounded-md flex-shrink-0 transition-all duration-300`}
              onDragStart={(e) => onDragStart(e, node.nodeType, node.id)}
              draggable
            >
              {node.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NodeTray;
