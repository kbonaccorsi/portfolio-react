import React from 'react';




export default function Nav({ currentPage, handlePageChange }) {
  return (
    <div>
      <ul className="nav">
        <li className="nav-choice">
          <a href="#HomePage" onClick={() => handlePageChange("HomePage")} className={currentPage === "HomePage" ? "nav-link active" : "nav-link"}>
            <button className="nav-btn">
              Home Page
            </button>
          </a>
        </li>
        <li className="nav-choice">
          <a href="#AboutMe" onClick={() => handlePageChange("AboutMe")} className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}>
            <button className="nav-btn">
              About Me
            </button>
          </a>
        </li>
        <li className="nav-choice">
          <a href="#ContactMe" onClick={() => handlePageChange("ContactMe")} className={currentPage === "ContactMe" ? "nav-link active" : "nav-link"}>
            <button className="nav-btn">
              Contact Me
            </button>
          </a>
        </li>
        <li className="nav-choice">
          <a href="#Portfolio" onClick= {() => handlePageChange("Portfolio")} className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}>
            <button className="nav-btn">
              Portfolio
            </button>
          </a>
        </li>
        <li className="nav-choice">
          <a href="#Resume" onClick={() => handlePageChange("Resume")} className={currentPage === "Resume" ? "nav-link active" : "nav-link"}>
            <button className="nav-btn">
              Resume
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
}