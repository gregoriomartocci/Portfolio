import React from "react";
import "./ButtonSlider.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ButtonSlider = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? (
        <MdKeyboardArrowRight />
      ) : (
        <MdKeyboardArrowLeft />
      )}
    </button>
  );
};

export default ButtonSlider;
