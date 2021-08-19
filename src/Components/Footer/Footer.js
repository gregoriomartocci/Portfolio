import React from "react";
import { Link as Hyperlink } from "react-router-dom";
import { Link } from "react-scroll";
import "./Footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-main footer-element">
          <h3 className="footer-main-item title">Gregorio Martocci</h3>
          <p className="footer-main-item">Frontend Developer</p>
        </div>
        <div className="footer-main footer-element">
          <ul className="footer-direct-access">
            <li className="footer-direct-access-item">
              <Link
                activeClass="active"
                to="services"
                smooth={true}
                duration={500}
                offset={-100}
              >
                Services
              </Link>
            </li>
            <li className="footer-direct-access-item">
              <Link
                activeClass="active"
                to="portfolio"
                smooth={true}
                duration={500}
                offset={-100}
              >
                Portfolio
              </Link>
            </li>
            <li className="footer-direct-access-item">
              <Link
                activeClass="active"
                to="contact"
                smooth={true}
                duration={500}
                offset={-100}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-main footer-element">
          <ul className="footer-social">
            <li className="footer-social-item">
              <Hyperlink
                to={{
                  pathname:
                    "https://www.linkedin.com/in/gregorio-martocci-b082a71a9/",
                }}
                target="_blank"
              >
                <i className="footer-social-icon">
                  <FaLinkedinIn />
                </i>
              </Hyperlink>
            </li>
            <li className="footer-social-item">
              <Hyperlink
                to={{
                  pathname: "https://github.com/gregoriomartocci",
                }}
                target="_blank"
              >
                <i className="footer-social-icon">
                  <AiFillGithub />
                </i>
              </Hyperlink>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>© Gregorio Martocci. All rights Reserved </p>
        </div>
      </div>
    </div>
  );
}
