import { useState, useContext, createContext } from "react";
import PropTypes from "prop-types";

const DnDContext = createContext();

export const DnDProvider = ({ children }) => {
  const [type, setType] = useState(null);
  const [id, setId] = useState(null);

  return (
    <DnDContext.Provider value={{ type, setType, id, setId }}>
      {children}
    </DnDContext.Provider>
  );
};

DnDProvider.propTypes = {
  children: PropTypes.element,
};

export default DnDContext;

// eslint-disable-next-line react-refresh/only-export-components
export const useDnD = () => {
  return useContext(DnDContext);
};
