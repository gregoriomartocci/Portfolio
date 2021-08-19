import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import "./Portfolio.css";
import Header from "../Header/Header";
import projects from "../../data/projects";

export default function Portfolio() {
  const [data, setData] = useState([]);

  const filter = (e) => {
    let filteredProjects;
    if (e.toLowerCase() === "all") {
      filteredProjects = projects;
    } else {
      filteredProjects = projects.filter(
        (p) => p.type.toLowerCase() === e.toLowerCase()
      );
    }
    setData(filteredProjects);
  };

  useEffect(() => {
    setData(projects);
  }, []);

  return (
    <div id="portfolio" className="portfolio">
      <Header title="Portfolio" subtitle="see my work" />
      <div className="portfolio-container">
        <div className="wrapper">
          <nav>
            <ul className="portfolio-menu">
              <li className="portfolio-menu-item" onClick={() => filter("all")}>
                All
              </li>

              <li
                className="portfolio-menu-item"
                onClick={() => filter("ecommerce")}
              >
                Ecommerce
              </li>

              <li
                className="portfolio-menu-item"
                onClick={() => filter("social-network")}
              >
                Social Network
              </li>

              <li
                className="portfolio-menu-item"
                onClick={() => filter("other")}
              >
                Other
              </li>
            </ul>
          </nav>

          <Cards data={data}></Cards>
          <div className="cards"></div>
        </div>
      </div>
    </div>
  );
}
