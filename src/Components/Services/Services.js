import React from "react";
import "./Services.css";
import Service from "./Service/Service";
import { RiLayout3Line } from "react-icons/ri";
import { BiCode, BiCheckCircle } from "react-icons/bi";
import Accordion from "../Accordion/Accordion";
import ProgressBar from "../ProgressBar/ProgressBar";
import Header from "../Header/Header";

const service_1 = [
  "I develop the  user interface.",
  "Web page developement.",
  "I create ux element interactions.",
];

const service_2 = [
  "Friendly and clean interfaces.",
  "Web developed with the lastest technologies.",
  "Clean code and good practices.",
];

function Services() {
  return (
    <div id="services" className="services">
      <Header title="Services" subtitle="what I offer" />
      <div className="services-bot">
        <div className="services-cards">
          <Service title="UI/UX Designer">
            <RiLayout3Line />
            <div className="service-content-1">
              {service_1.map((e, index) => (
                <div key={index} className="service-row">
                  <i className="checked-icon">
                    <BiCheckCircle />
                  </i>
                  <p className="service-p">{e}</p>
                </div>
              ))}
            </div>
          </Service>

          <Service title="Full Stack Developer">
            <BiCode />
            <div className="service-content-2">
              {service_2.map((e, index) => (
                <div key={index} className="service-row">
                  <i className="checked-icon">
                    <BiCheckCircle />
                  </i>
                  <p className="service-p">{e}</p>
                </div>
              ))}
            </div>
          </Service>
        </div>
      </div>

      <Header title="Skills" subtitle="technologies I use" />

      <div className="services-technologies">
        <Accordion title="Frontend Developer" description="3 years">
          <ProgressBar done={80} name="Javascript" />
          <ProgressBar done={100} name="HTML" />
          <ProgressBar done={100} name="CSS" />
          <ProgressBar done={85} name="React" />
          <ProgressBar done={100} name="Redux" />
        </Accordion>
        <Accordion title="Designer" description="3 years">
          <ProgressBar done={90} name="Figma" />
          <ProgressBar done={75} name="Adobe Photoshop" />
          <ProgressBar done={75} name="Adobe Illustrator" />
        </Accordion>
        <Accordion title="Backend Developer" description="2 years">
          <ProgressBar done={75} name="Postgres" />
          <ProgressBar done={70} name="Node" />
          <ProgressBar done={95} name="Express" />
          <ProgressBar done={95} name="Sequelize" />
          <ProgressBar done={85} name="Mongo" />
          <ProgressBar done={95} name="Mongoose" />
          <ProgressBar done={80} name="MySQL" />
        </Accordion>
      </div>
    </div>
  );
}

export default Services;
