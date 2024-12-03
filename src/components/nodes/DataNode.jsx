import { useState } from "react";
import { Handle, Position, useReactFlow } from "@xyflow/react";
import PropTypes from "prop-types";
import { IoCloseOutline } from "react-icons/io5";

const DataNode = ({ id, data }) => {
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);

  const { setNodes, setEdges } = useReactFlow();

  const handleDelete = () => {
    setNodes((nodes) => nodes.filter((node) => node.id !== id));
    setEdges((edges) => edges.filter((edge) => edge.source !== id));
  };

  return (
    <div
      onMouseEnter={() => setShowDeleteIcon(true)}
      onMouseLeave={() => setShowDeleteIcon(false)}
      className="border focus:border-cyan-300 relative bg-gray-950 border-white border-solid rounded-md p-8"
    >
      {showDeleteIcon && (
        <div
          className="absolute cursor-pointer -top-2 -right-2 p-0 border-2 rounded-full border-solid border-white hover:bg-red-400"
          onClick={handleDelete}
        >
          <IoCloseOutline
            className="bg-gray-950  hover:bg-red-400 text-white rounded-full"
            size={32}
          />
        </div>
      )}
      <Handle
        className="!w-6 !h-6 !border-2 !border-teal-300 !border-solid !bg-gray-950"
        type="source"
        position={Position.Right}
      />
      <div>
        <p className="text-3xl text-white font-rubik">{data.label}</p>
      </div>
    </div>
  );
};

export default DataNode;

DataNode.propTypes = {
  id: PropTypes.string,
  data: PropTypes.object,
};
