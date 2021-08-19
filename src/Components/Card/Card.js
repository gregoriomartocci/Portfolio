/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./Card.css";
import img from "../../assets/Ecommerce-Product-Photography-blog-644x349.jpg";
import Modal from "../Modal/Modal";
import Slider from "../Slider/Slider";

export default function Card({ data }) {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <div className="card" onClick={() => setShowModal((prev) => !prev)}>
        <img className="card-img" src={img}></img>
        <div className="project-details">
          <h3 className="project-title">{data.title}</h3>
          <p className="project-description">{data.description}</p>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={closeModal} project={true}>
        <div className="project-container">
          <Slider></Slider>
          <div className="about-project">
            <h1>{data.title}</h1>
            <p className="about-description">{data.description}</p>
            <p className="about-large-text">{data.large_text}</p>
          </div>
        </div>
      </Modal>
    </>
  );
}
