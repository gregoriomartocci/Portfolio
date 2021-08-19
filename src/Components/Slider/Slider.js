import React, { useState } from "react";
import "./Slider.css";
import ButtonSlider from "./ButtonSlider/ButtonSlider";

export default function Slider({ data }) {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== data.img.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === data.img.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(data.img.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {data.img.map((_, index) => {
        return (
          <div
            key={index}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={data.img[index]} alt=""></img>
          </div>
        );
      })}

      <ButtonSlider moveSlide={nextSlide} direction={"next"} />
      <ButtonSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {data.img.map((_, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
