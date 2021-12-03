import React from "react";
import project1 from "../../../public/logo192.png";

export default function Portfolio() {

  return (
    <div className="portfolio-container">
      <h2>Portfolio</h2>
      <div className="project-card">
        <h3>project 1</h3>
        <img src={ project1 } type="image/jpg" className="project-img" alt="project 1 thumbnail or gif"></img>
        <a href="www.google.com" target="_blank">
          <button className="project-btn github-link">GitHub Repo</button>
        </a>
        <a href="www.pandora.com" target="_blank">
          <button className="project-btn deployed-link">Deployed Application</button>
        </a>
      </div>

    </div>
  )
}