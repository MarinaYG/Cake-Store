import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./ComStyles.scss";

const SliderBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    { url: "./img/Tiramisu.jpg" },
    { url: "./img/Strawberry shortcake 3.jpg" },
    { url: "./img/Original Mille crepe cake 4.jpg" },
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0].url} alt="" />
        <img src={data[1].url} alt="" />
        <img src={data[2].url} alt="" />
      </div>

      <div className="icons">
        <div className="icon">
          <ArrowBackIosNewIcon sx={{ fontSize: 60 }} onClick={prevSlide} />
        </div>
        <div className="icon">
          <ArrowForwardIosIcon sx={{ fontSize: 60 }} onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default SliderBanner;
