import React from 'react';
import './nav.css';

export default function Nav({ currentPage, handlePageChange }) {

  return (
    <div className="navbar">
      <ul className="nav">
        <li className="nav-choice">
          <a href="#AboutMe" onClick={() => handlePageChange("AboutMe")} className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}>
            <button type="button" className="btns">
              About Me
            </button>
          </a>
        </li>
        <li className="nav-choice">
          <a href="#ContactMe" onClick={() => handlePageChange("Contact")} className={currentPage === "Contact" ? "nav-link active" : "nav-link"}>
            <button type="button" className="btns">
              Contact Me
            </button>
          </a>
        </li>
        <li className="nav-choice">
          <a href="#Portfolio" onClick={() => handlePageChange("Portfolio")} className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}>
            <button type="button" type="button" className="btns">
              Portfolio
            </button>
          </a>
        </li>
        <li className="nav-choice">
          <a href="#Resume" onClick={() => handlePageChange("Resume")} className={currentPage === "Resume" ? "nav-link active" : "nav-link"}>
            <button type="button" className="btns">
              Resume
            </button>
          </a>
        </li>
      </ul>
    </div>
  );

}