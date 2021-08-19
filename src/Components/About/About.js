import React from "react";
import "./About.css";
import photo from "../../assets/profile.jpg";
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
            My experience has been mainly in the academic field, for 7 years I
            worked as a Multimedia Design student where I learned the basic
            concepts and fundamental laws of design.
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
