import { useRef, useCallback } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  applyEdgeChanges,
} from "@xyflow/react";
import { ToastContainer } from "react-toastify";
import DataNode from "./components/nodes/DataNode";
import OutputNode from "./components/nodes/OutputNode";
import DisplayData from "./components/DisplayData";
import DashEdge from "./components/edges/DashEdge";
import NodeTray from "./components/NodeTray";
import useGlobalStore from "./store";
import { useDnD } from "./DnDContext";

import "react-toastify/dist/ReactToastify.css";

const nodeTypes = {
  dataNode: DataNode,
  outputNode: OutputNode,
};

const edgeTypes = {
  dashEdge: DashEdge,
};

const initialNodes = [
  {
    id: "fullResume",
    position: { x: 400, y: 300 },
    type: "dataNode",
    data: { label: "Full Resume" },
  },
  {
    id: "output",
    position: { x: 1050, y: 50 },
    type: "outputNode",
    data: { label: "View Details" },
  },
];

const initialEdges = [
  {
    id: "e_fullResume_output",
    source: "fullResume",
    target: "output",
    type: "dashEdge",
    animated: true,
  },
];

const idNameLink = {
  fullResume: "Full Resume",
  about: "Who Am I?",
  experience: "What am I up to?",
  projects: "Stuff I worked on",
  education: "My Qualifications",
  skills: "What am I good at?",
  contact: "Ring me up!",
  output: "View Details",
};

function App() {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);
  const {
    addEdges: addGlobalEdges,
    setEdges: setGlobalEdges,
    checkConnections,
  } = useGlobalStore();
  const { getEdges, getNodes, screenToFlowPosition } = useReactFlow();
  const { type, id } = useDnD();

  const onEdgesChange = useCallback(
    (newEdges) => {
      setEdges((eds) => applyEdgeChanges(newEdges, eds));
      setGlobalEdges(applyEdgeChanges(newEdges, getEdges()));

      // Check which input node is connected to the output node
      checkConnections("output");
    },
    [getEdges, setEdges, checkConnections, setGlobalEdges]
  );

  const processConnections = useCallback(() => {
    // Check which input node is connected to the output node
    checkConnections("output");
  }, [checkConnections]);

  const onConnect = ({ type = "dashEdge", animated = true, ...params }) => {
    setEdges((eds) => addEdge({ type, animated, ...params }, eds));
    addGlobalEdges({ type: "dashEdge", animated: true, ...params });
    processConnections();
  };

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      // check if the dropped element is valid
      if (!type) {
        console.log("Invalid Type: ", type);
        return;
      }

      // Check if the dropped element is already present in the flow
      if (
        getNodes()
          .map((node) => node.id)
          .includes(id)
      ) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: id,
        type,
        position,
        data: { label: `${idNameLink[id]}` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, getNodes, id, setNodes, type]
  );

  return (
    <>
      <div className="relative scrollbar-thin scrollbar-thumb-primary-500 scrollbar-track-gray-500 w-screen h-screen overflow-y-auto">
        {window.innerWidth >= 200 ? (
          <div className="h-screen w-screen flex overflow-y-auto">
            <div className="flex flex-col w-[55%] overflow-y-auto">
              <div className="w-full h-full" ref={reactFlowWrapper}>
                <ReactFlow
                  nodes={nodes}
                  edges={edges}
                  nodeTypes={nodeTypes}
                  edgeTypes={edgeTypes}
                  onNodesChange={onNodesChange}
                  onEdgesChange={onEdgesChange}
                  onConnect={onConnect}
                  onDragOver={onDragOver}
                  onDrop={onDrop}
                  fitView
                >
                  <Controls />
                  <MiniMap nodeColor="#0CCA8A" maskColor="#525252" zoomable />
                  <Background
                    className="!bg-neutral-900"
                    variant="dots"
                    gap={12}
                    size={1}
                  />
                </ReactFlow>
              </div>
              <NodeTray />
            </div>
            <div className="w-[45%] h-screen overflow-y-auto">
              <DisplayData />
            </div>
          </div>
        ) : (
          <DisplayData />
        )}
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
