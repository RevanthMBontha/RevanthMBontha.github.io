import Slider from "react-slick";
import PropTypes from "prop-types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#737373",
      }}
      onClick={onClick}
    />
  );
}

CustomNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#737373",
      }}
      onClick={onClick}
    />
  );
}

CustomPrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

const Carousel = ({ slides }) => {
  const settings = {
    dots: true,
    className: "mx-3 lg:mx-8 border bg-black h-auto border-white border-solid",
    infinite: true,
    lazyload: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div className="p-0 w-full h-full" key={slide.key}>
          <img className="w-full lg:w-[600px] h-auto mx-auto" src={slide.img} />
        </div>
      ))}
    </Slider>
  );
};

Carousel.propTypes = {
  slides: PropTypes.array,
};

export default Carousel;
