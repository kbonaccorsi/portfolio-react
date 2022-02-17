import React from "react";
import PasswordGenerator from "../public/password-generator.gif";
import CodeQuiz from "../public/code-quiz.gif";
import EmployeeTracker from "../public/employee-tracker.png";
import BudgetTracker from "../public/budget-tracker.gif";


export default function Portfolio() {

  return (
    <div className="page-container">
      <h2 className="page-heading">Portfolio</h2>

      <nav className="nav-container">
        <ul className="nav">
          <li className="nav-choice">
            <a href="#frontEnd" className="nav-link">
              <button type="button" className="btns">
                Front End Projects
              </button>
            </a>
          </li>
          <li className="nav-choice">
            <a href="#backEnd" className="nav-link">
              <button type="button" className="btns">
                Back End Projects
              </button>
            </a>
          </li>
          <li className="nav-choice">
            <a href="#fullStack" className="nav-link">
              <button type="button" className="btns">
                Full Stack Projects
              </button>
            </a>
          </li>
        </ul>
      </nav>

      <div className="page-content d-flex flex-column">
        <div className="projects-container" id="frontEnd">
          <h3>Front End Projects</h3>
          <div className="front-end-container d-flex flex-wrap justify-content-center">
            <div className="project-card">
              <img src={PasswordGenerator} type="image/gif" className="project-img card-img-top" alt="gif of password generator"></img>
              <h4 className="project-heading card-title">Password Generator</h4>
              <p className="card-text"> Application generates a random password after a user determines the length and what characters will be allowed.
                <br></br>
                <br></br>
                Technology Used: HTML, JavaScript, CSS
              </p>
              <a href="https://github.com/kbonaccorsi/Password-Generator" target="_blank">
                <button type="button" className="btns github-link">GitHub Repo</button>
              </a>
              <a href="https://kbonaccorsi.github.io/Password-Generator/" target="_blank">
                <button type="button" className="btns deployed-link">Deployed Application</button>
              </a>
            </div>
            <div className="project-card">
              <img src={CodeQuiz} type="image/gif" className="project-img card-img-top" alt="gif of javascript code quiz"></img>
              <h4 className="project-heading card-title">JavaScript Code Quiz</h4>
              <p className="card-text"> Timed JavaScript quiz that stores highscores and provides colored feedback after each question is answered.
                <br></br>
                <br></br>
                Technology Used: HTML, JavaScript, CSS, local storage
              </p>
              <a href="https://github.com/kbonaccorsi/4-code-quiz" target="_blank">
                <button type="button" className="btns github-link">GitHub Repo</button>
              </a>
              <a href="https://kbonaccorsi.github.io/4-code-quiz/" target="_blank">
                <button type="button" className="btns deployed-link">Deployed Application</button>
              </a>
            </div>
            <div className="project-card">
              <img src="https://user-images.githubusercontent.com/86372011/138792816-28729a8d-c76f-44ce-85e8-c3a3b3d02d91.gif" type="image/gif" className="project-img card-img-top" alt="gif of chopsticks and chill"></img>
              <h4 className="project-heading card-title">Chopsticks And Chill</h4>
              <p className="card-text"> Group project application that allows a user to choose a cuisine ethnicity, generating a recipe to match, along with a random movie suggestion.
                <br></br>
                <br></br>
                Technology Used: HTML, JavaScript, CSS, local storage
              </p>
              <a href="https://github.com/kbonaccorsi/group-project-1" target="_blank">
                <button type="button" className="btns github-link">GitHub Repo</button>
              </a>
              <a href="https://kbonaccorsi.github.io/group-project-1/" target="_blank">
                <button type="button" className="btns deployed-link">Deployed Application</button>
              </a>
            </div>
          </div>
        </div>

        <div className="projects-container" id="backEnd">
          <h3>Back End Projects</h3>
          <div className="back-end-container d-flex justify-content-center">
            <div className="project-card">
              <img src="https://user-images.githubusercontent.com/86372011/138600371-2de5e32c-f21a-40d8-a0c3-5a16b3756500.png" type="image/png" className="project-img card-img-top" alt="screenshot of employee tracker"></img>
              <h4 className="project-heading card-title">Team Profile Generator</h4>
              <p className="card-text"> A command-line application that takes in information about members of a team, and then generates a webpage that displays a summary for each person.
                <br></br>
                <br></br>
                Technology Used: Node.js, Inquirer
              </p>
              <a href="https://github.com/kbonaccorsi/10-oop-team-profile-generator" target="_blank">
                <button type="button" className="btns github-link">GitHub Repo</button>
              </a>
              <a href="https://watch.screencastify.com/v/VUYEcu2T9OYTvehNk5uM" target="_blank">
                <button type="button" className="btns deployed-link">Walkthrough Video</button>
              </a>
            </div>
            <div className="project-card">
              <img src={EmployeeTracker} type="image/png" className="project-img card-img-top" alt="screenshot of employee tracker"></img>
              <h4 className="project-heading card-title">Employee Tracker</h4>
              <p className="card-text"> A command-line application to manage a company's employee database.
                <br></br>
                <br></br>
                Technology Used: Node.js, Inquirer, MySQL
              </p>
              <a href="https://github.com/kbonaccorsi/12-employee-tracker" target="_blank">
                <button type="button" className="btns github-link">GitHub Repo</button>
              </a>
              <a href="https://watch.screencastify.com/v/GWRjxP6ZX8mtJJonY0b0" target="_blank">
                <button type="button" className="btns deployed-link">Walkthrough Video</button>
              </a>
            </div>
          </div>
        </div>

        <div className="projects-container" id="fullStack">
          <h3>Full Stack Projects</h3>
          <div className="full-stack-container d-flex justify-content-center">
            <div className="project-card">
              <img src={BudgetTracker} type="image/gif" className="project-img card-img-top" alt="gif of budget tracker"></img>
              <h4 className="project-heading card-title">Budget Tracker</h4>
              <p className="card-text"> Budget tracker that allows adding and subtracting funds online/offline.
                <br></br>
                <br></br>
                Technology Used: PWA
              </p>
              <a href="https://github.com/kbonaccorsi/online-offline-budget-tracker" target="_blank">
                <button type="button" className="btns github-link">GitHub Repo</button>
              </a>
              <a href="https://frozen-garden-43795.herokuapp.com/ " target="_blank">
                <button type="button" className="btns deployed-link">Deployed Application</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}