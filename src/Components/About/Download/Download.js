import React from "react";
import { Link } from "react-router-dom";
import cv from "../../../assets/Resume/Gregorio_Martocci_-_EN.pdf";
import Button from "../../Button/Button";

const Download = () => {
  return (
    <Link to={cv} target="_blank" download>
      <Button message="Download CV"></Button>
    </Link>
  );
};

export default Download;
