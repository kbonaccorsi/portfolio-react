import React from "react";
import BudgetTracker from "../public/budget-tracker.gif";
import CodeQuiz from "../public/code-quiz.gif";
import EmployeeTracker from "../public/employee-tracker.png";

export default function Portfolio() {

  return (
    <div className="page-container p-2">
      <h2 className="page-heading">Portfolio</h2>
      {/* insert menu: front-end (#frontEnd), back-end (#backEnd), full-stack (#fullStack) */}
      <div className="page-content d-flex flex-column">

        <div className="front-end-projects" id="frontEnd">
          <h3>Front End Projects</h3>
          <div className="front-end-container d-flex flex-row">
            <div className="project-card w-25 m-2 p-1">
              <img src={CodeQuiz} type="image/gif" className="project-img card-img-top" alt="gif of javascript code quiz"></img>
              <h3 className="project-heading card-title">JavaScript Code Quiz</h3>
              <p className="card-text"> Timed JavaScript quiz that stores highscores and provides colored feedback after each question is answered.
                <br></br>
                <br></br>
                Technology Used: HTML, JavaScript, CSS, local storage
              </p>
              <a href="https://github.com/kbonaccorsi/4-code-quiz" target="_blank">
                <button className="project-btn m-1 github-link">GitHub Repo</button>
              </a>
              <a href="https://kbonaccorsi.github.io/4-code-quiz/ " target="_blank">
                <button className="project-btn m-1 deployed-link">Deployed Application</button>
              </a>
            </div>
          </div>
        </div>

        <div className="back-end-projects" id="backEnd">
          <h3>Back End Projects</h3>
          <div className="back-end-container d-flex flex-row">
            <div className="project-card w-25 m-2 p-1">
              <img src={EmployeeTracker} type="image/png" className="project-img card-img-top" alt="screenshot of employee tracker"></img>
              <h3 className="project-heading card-title">Employee Tracker</h3>
              <p className="card-text"> A command-line application to manage a company's employee database.
                <br></br>
                <br></br>
                Technology Used: Node.js, Inquirer, MySQL
              </p>
              <a href="https://github.com/kbonaccorsi/12-employee-tracker" target="_blank">
                <button className="project-btn m-1 github-link">GitHub Repo</button>
              </a>
              <a href="https://watch.screencastify.com/v/GWRjxP6ZX8mtJJonY0b0" target="_blank">
                <button className="project-btn m-1 deployed-link">Walkthrough Video</button>
              </a>
            </div>
          </div>
        </div>

        <div className="full-stack-projects" id="fullStack">
          <h3>Full Stack Projects</h3>
          <div className="full-stack-container d-flex flex-row">
          <div className="project-card w-25 m-2 p-1">
            <img src={BudgetTracker} type="image/gif" className="project-img card-img-top" alt="gif of budget tracker"></img>
            <h3 className="project-heading card-title">Budget Tracker</h3>
            <p className="card-text"> Budget tracker that allows adding and subtracting funds online/offline.
              <br></br>
              <br></br>
              Technology Used: PWA
            </p>
            <a href="https://github.com/kbonaccorsi/online-offline-budget-tracker" target="_blank">
              <button className="project-btn m-1 github-link">GitHub Repo</button>
            </a>
            <a href="https://frozen-garden-43795.herokuapp.com/ " target="_blank">
              <button className="project-btn m-1 deployed-link">Deployed Application</button>
            </a>
          </div>
          </div>
        </div>

      </div>
    </div>
  )
}