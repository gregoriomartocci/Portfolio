import React, { useState } from "react";
import "./Accordion.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function Accordion({ children, title, description }) {
  const [selected, setSelected] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div
          className="accordion-title"
          onClick={() => setSelected((prev) => !prev)}
        >
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>

          <span>{selected ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </div>
        <div
          className={
            selected ? `accordion-content accordion-show` : `accordion-content`
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
