import PropTypes from "prop-types";
import { useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import Modal from "../../Modal";
import Carousel from "./Carousel";

const ProjectCard = ({
  name,
  description,
  link,
  images,
  techStack,
  icons,
  features,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-neutral-700 relative hover:bg-neutral-500 cursor-pointer rounded-md text-white flex items-center justify-center aspect-square">
        <div className="w-full h-full p-2 flex flex-col justify-between items-start">
          <div className="flex flex-col gap-y-2 items-start">
            <h3 className="text-2xl">{name}</h3>
            <p className="text-start text-sm">
              {description.length > 200
                ? `${description.substring(0, 150)}...`
                : description}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-primary-500 flex items-center gap-x-2 text-sm hover:underline hover:underline-offset-4"
            >
              Read more <FaAnglesRight className="inline-block" size={12} />
            </button>
          </div>
          <div className="flex gap-x-2 items-center">
            {icons.map((icon) => icon)}
          </div>
        </div>
      </div>

      {/* Modal to show more details */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col gap-y-8">
          <div className="flex justify-between items-center h-fit w-full">
            <h3 className="text-4xl">{name}</h3>
            <a
              className="text-primary-500 text-lg hover:underline hover:underline-offset-4"
              href={link}
              target="_blank"
            >
              {"Try it here!"}
            </a>
          </div>
          <div className="flex gap-x-4 gap-y-4 flex-wrap">
            {techStack.map((tech, index) => (
              <span
                className="border cursor-pointer hover:bg-neutral-500 bg-neutral-700 border-solid border-white rounded-md p-2 px-4"
                key={index}
              >
                {tech}
              </span>
            ))}
          </div>
          <Carousel slides={images} />
          <p>{description}</p>
          {/* Add stuff here */}
          {features && (
            <div className="w-full">
              <h3 className="text-xl">Salient Features</h3>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  images: PropTypes.array,
  techStack: PropTypes.array,
  icons: PropTypes.array,
  features: PropTypes.array,
};
