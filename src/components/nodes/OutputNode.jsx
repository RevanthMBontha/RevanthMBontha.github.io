import { Handle, Position } from "@xyflow/react";
import PropTypes from "prop-types";

const OutputNode = ({ data }) => {
  return (
    <div className="p-8 bg-gray-950 border border-white border-solid rounded-md">
      <Handle
        className="!w-6 !h-6 !border-2 !border-solid !border-indigo-300 !bg-gray-950"
        position={Position.Left}
        type="target"
      />
      <p className="text-3xl text-white font-rubik">{data.label}</p>
    </div>
  );
};

export default OutputNode;

OutputNode.propTypes = {
  data: PropTypes.object,
};
