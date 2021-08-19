import React from "react";
import Button from "../Button/Button";
import "./Main.css";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { Link } from "react-scroll";
import { Link as Hyperlink } from "react-router-dom";

export default function Main() {
  return (
    <div id="main" className="main">
      <div className="main-container">
        <div className="social-media">
          <Hyperlink
            to={{
              pathname:
                "https://www.linkedin.com/in/gregorio-martocci-b082a71a9/",
            }}
            target="_blank"
          >
            <i className="main-icon">
              <FaLinkedinIn />
            </i>
          </Hyperlink>
          <i className="main-icon">
            <Hyperlink
              to={{
                pathname: "https://github.com/gregoriomartocci",
              }}
              target="_blank"
            >
              <i className="main-icon">
                <AiFillGithub />
              </i>
            </Hyperlink>
          </i>
        </div>
        <div className="main-box">
          <h1 className="main-title">Hi! I'am Gregorio Martocci</h1>
          <h1 className="main-subtitle">Love building awesome experiences!</h1>

          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
          >
            <Button message="See my work" color="#e91e63"></Button>
          </Link>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}
