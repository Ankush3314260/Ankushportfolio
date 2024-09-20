import React from "react";
import Slider from "react-slick";

// Custom arrow components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
  <></>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
   <></>
  );
};

export default function Crousal() {
  const settings = {
    infinite: true,
    speed: 500,
    dots:false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className=" w-full min-h-full flex items-center ">
        <div className="w-full h-full ">
    <Slider {...settings}>
      <div className="">
        <img className=" w-full h-full " src="./Images/Screenshot 2024-09-16 193602.png" alt="Slide 1" />
      </div>
      <div className="w-full h-full flex items-center">
        <img src="./Images/Screenshot 2024-09-16 193808.png" alt="Slide 2" />
      </div>
    </Slider>
    </div>
    </div>
  );
}
