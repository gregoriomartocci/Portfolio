import React, { useCallback, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Modal.css";

function Modal({ showModal, setShowModal, content, title, project, children }) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <div onClick={closeModal}>
      {showModal && (
        <div className="modal-wrapper" ref={modalRef}>
          <div className={`modal-container ${project && `custom`}  `}>
            <div className={`cancel ${project && `cancel-custom`}`}>
              <i onClick={setShowModal}>
                <AiOutlineClose />
              </i>
            </div>
            {title && <h2 className="modal-title">{title}</h2>}
            {content}
            {project && children}
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
