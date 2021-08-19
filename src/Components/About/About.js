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
            I am a Full Stack Web Developer and Designer for the National
            University of La Plata, I have taken many web development courses
            and my passion is to create full stack applications with clean and
            friendly interfaces. I love to be constantly growing and learning
            new technologies, and working in teams. Here you can see all my
            projects, right now I'm looking for new job opportunities either as a
            freelancer or as an employee.
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
