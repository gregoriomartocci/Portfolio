import React from "react";
import "./About.css";
import photo from "../../assets/Profile/profile.jpg";
import Header from "../Header/Header";
import Download from "./Download/Download";

function About() {
  return (
    <div className="about">
      <Header title="About Me" subtitle="my introducction" />
      <div className="about-content">
        <div className="about-left">
          <img src={photo} className="about-img" alt=""></img>
        </div>

        <div className="about-right">
          <p className="about-description">
            I am passionate about design, development and creating friendly
            interfaces to generate the best user experiences, as well as making
            scalable and modularized applications always trying to follow best
            practices. I really like working in a team and transmitting my
            knowledge to others.
          </p>

          <div className="about-badget">
            <div className="badget"></div>
            <div className="badget"></div>
            <div className="badget"></div>
          </div>
          <Download />
        </div>
      </div>
    </div>
  );
}

export default About;
