import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="w-screen p-4 lg:p-10 h-screen absolute flex justify-center items-center top-0 right-0 z-20 overflow-y-auto">
      {/* Div to blur the background */}
      <div className="opacity-70 backdrop-blur-md bg-neutral-700 w-screen h-screen absolute top-0 right-0 z-30"></div>
      {/* The div containing data */}
      <div className="z-40 bg-black lg:w-3/4 w-5/6 h-fit  overflow-y-auto max-h-full text-white p-8 rounded-xl relative">
        <div
          onClick={onClose}
          className="absolute cursor-pointer hover:bg-red-400 top-3 right-3 p-1 border border-solid border-white rounded-full"
        >
          <IoClose size={18} />
        </div>
        <div className="w-full p-4 rounded-xl mt-4 bg-neutral-700 h-fit max-h-[600px] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.element,
};
