import React, { useState } from "react";
import "./Service.css";
import { BsArrowRight } from "react-icons/bs";
import Modal from "../../Modal/Modal";

function Service({ children, title }) {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <div className="service" onClick={() => setShowModal((prev) => !prev)}>
        <i className="service-icon">{children[0]}</i>
        <span className="service-title">{title}</span>
        <span className="service-link">
          View More <BsArrowRight />
        </span>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={closeModal}
        title={title}
        content={children[1]}
      ></Modal>
    </>
  );
}

export default Service;
