import React from "react";
import Navigation from "../Components/Navigation";
import './projects.css'
import img1 from "../img/img1.png"

const Projects = () => {
  return (
    <div className="projects">
      <Navigation />
      <div className="projects-page">
        <ul>
          <li>
            <img src={img1} alt="" />

            <h1>TGDatacenter</h1>
            <p>Like wikipeadia.</p>
            <a href="https://tgdatacenter.onrender.com/">Visit site</a>
          </li>
        </ul>
      </div>
      {/* project-page */}
    </div>
    // project
  );
};

export default Projects;
