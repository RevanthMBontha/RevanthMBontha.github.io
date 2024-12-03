import PropTypes from "prop-types";

const SkillCard = ({ children }) => {
  return (
    <div className="bg-neutral-700 hover:bg-neutral-500 cursor-pointer rounded-md text-white flex flex-col items-center justify-center aspect-square">
      {children}
    </div>
  );
};

export default SkillCard;

SkillCard.propTypes = {
  children: PropTypes.element,
};
