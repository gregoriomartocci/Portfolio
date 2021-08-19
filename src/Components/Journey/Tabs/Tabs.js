/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";

import "./Tabs.css";
import { HiOutlineAcademicCap, HiOutlineShoppingBag } from "react-icons/hi";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="tabs-container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <i className="tabs-icon">
            <HiOutlineAcademicCap />
          </i>
          Education
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <i className="tabs-icon">
            <HiOutlineShoppingBag />
          </i>
          Experience
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={
            toggleState === 1 ? "tabs-content  active-content" : "tabs-content"
          }
        >
          <div className="tabs-content-wrapper">
            <div className="tabs-content-left">
              <div className="tabs-content-block align-right">
                <span className="tabs-content-title">Bachelor's degree in design</span>
                <span className="tabs-content-place">
                  National University of La Plata
                </span>
                <span className="tabs-content-date">2011 - 2020</span>
                <div className="tabs-dot-left" />
              </div>
              <div className="tabs-content-block align-right">
                <span className="tabs-content-title">Full Stack</span>
                <span className="tabs-content-place">Digital House</span>
                <span className="tabs-content-date">2020</span>
                <div className="tabs-dot-left" />
              </div>
              <div className="tabs-content-block align-right">
                <span className="tabs-content-title">Advanced English</span>
                <span className="tabs-content-place">Project One</span>
                <span className="tabs-content-date">2018</span>
                <div className="tabs-dot-left" />
              </div>
            </div>

            <div className="tabs-bar-education" />

            <div className="tabs-content-right">
              <div className="tabs-content-block align-left">
                <span className="tabs-content-title">Computer Science (1 year)</span>
                <span className="tabs-content-place">
                  National University of La Plata
                </span>
                <span className="tabs-content-date">2019 - 2020</span>
                <div className="tabs-dot-right" />
              </div>

              <div className="tabs-content-block align-left">
                <span className="tabs-content-title">Coding Bootcamp</span>
                <span className="tabs-content-place">Henry</span>
                <span className="tabs-content-date">2021</span>
                <div className="tabs-dot-right" />
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            toggleState === 2 ? "tabs-content  active-content" : "tabs-content"
          }
        >
          <div className="tabs-content-wrapper">
            <div className="tabs-content-left">
              <div className="tabs-content-block align-right">
                <span className="tabs-content-title">Frontend Developer</span>
                <span className="tabs-content-place">Vendo Online</span>
                <span className="tabs-content-date">2020</span>
                <div className="tabs-dot-left" />
              </div>

              <div className="tabs-content-block align-right">
                <span className="tabs-content-title">Frontend Developer</span>
                <span className="tabs-content-place">Ecommerce</span>
                <span className="tabs-content-date">2021</span>
                <div className="tabs-dot-left" />
              </div>
            </div>

            <div className="tabs-bar-education" />

            <div className="tabs-content-right">
              <div className="tabs-content-block align-left">
                <span className="tabs-content-title">Full Stack Developer</span>
                <span className="tabs-content-place">Pokemon App</span>
                <span className="tabs-content-date">2011 - 2020</span>
                <div className="tabs-dot-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
