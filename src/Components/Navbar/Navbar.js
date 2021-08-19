/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar({ children }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          GM
          {/* <img src="/img/logo2-reverse.svg"></img> */}
        </div>
        <div className="menu">
          <ul className="menu-items">
            <li className="menu-item">
              <Link
                activeClass="active"
                to="main"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                Home
              </Link>
            </li>

            <li className="menu-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                About
              </Link>
            </li>

            <li className="menu-item">
              <Link
                activeClass="active"
                to="journey"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                Skills
              </Link>
            </li>
            <li className="menu-item">
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                Services
              </Link>
            </li>

            <li className="menu-item">
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                Portfolio
              </Link>
            </li>

            <li className="menu-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                Contact
              </Link>
            </li>
          </ul>

          <i className="set-mode">{children}</i>

          <i className="menu-icon" onClick={() => setToggle((prev) => !prev)}>
            {!toggle ? <HiMenuAlt3 /> : <IoCloseSharp />}
          </i>

          <div className={!toggle ? `menu-mobile` : `menu-mobile-active`}>
            <li className="menu-item-mobile">
              <Link
                activeClass="active"
                to="main"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                Home
              </Link>
            </li>
            <li className="menu-item-mobile">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                About
              </Link>
            </li>
            <li className="menu-item-mobile">
              <Link
                activeClass="active"
                to="journey"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                Skills
              </Link>
            </li>
            <li className="menu-item-mobile">
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                Services
              </Link>
            </li>
            <li className="menu-item-mobile">
              {" "}
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                Portfolio
              </Link>
            </li>
            <li className="menu-item-mobile">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                Contact
              </Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
