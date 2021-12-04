import React from "react";
import PasswordGenerator from "../public/password-generator.gif";
import CodeQuiz from "../public/code-quiz.gif";
import EmployeeTracker from "../public/employee-tracker.png";
import BudgetTracker from "../public/budget-tracker.gif";


export default function Portfolio() {

  return (
    <div className="page-container p-2">
      <h2 className="page-heading">Portfolio</h2>
      <nav className="project-nav navbar justify-content-center">
        <a href="#frontEnd">
          <button type="button" className="btns border-2 rounded-3">Front End Projects</button>
        </a>
        <a href="#backEnd">
          <button type="button" className="btns border-2 rounded-3">Back End Projects</button>
        </a>
        <a href="#fullStack">
          <button type="button" className="btns border-2 rounded-3">Full Stack Projects</button>
        </a>
      </nav>
      <div className="page-content d-flex flex-column">

                <div className="front-end-projects" id="frontEnd">
          <h3>Front End Projects</h3>
          <div className="front-end-container d-flex flex-row">

          <div className="project-card w-25 m-2 p-1">
              <img src={PasswordGenerator} type="image/gif" className="project-img card-img-top" alt="gif of password generator"></img>
              <h3 className="project-heading card-title">Password Generator</h3>
              <p className="card-text"> Application generates a random password after a user determines the length and what characters will be allowed.
                <br></br>
                <br></br>
                Technology Used: HTML, JavaScript, CSS
              </p>
              <a href="https://github.com/kbonaccorsi/Password-Generator" target="_blank">
                <button type="button" className="btns border-2 rounded-3 m-1 github-link">GitHub Repo</button>
              </a>
              <a href="https://kbonaccorsi.github.io/Password-Generator/" target="_blank">
                <button type="button" className="btns border-2 rounded-3 m-1 deployed-link">Deployed Application</button>
              </a>
            </div>

            <div className="project-card w-25 m-2 p-1">
              <img src={CodeQuiz} type="image/gif" className="project-img card-img-top" alt="gif of javascript code quiz"></img>
              <h3 className="project-heading card-title">JavaScript Code Quiz</h3>
              <p className="card-text"> Timed JavaScript quiz that stores highscores and provides colored feedback after each question is answered.
                <br></br>
                <br></br>
                Technology Used: HTML, JavaScript, CSS, local storage
              </p>
              <a href="https://github.com/kbonaccorsi/4-code-quiz" target="_blank">
              <button type="button" className="btns border-2 rounded-3 m-1 github-link">GitHub Repo</button>
              </a>
              <a href="https://kbonaccorsi.github.io/4-code-quiz/" target="_blank">
                <button type="button" className="btns border-2 rounded-3 m-1 deployed-link">Deployed Application</button>
              </a>
            </div>

            <p>Day Planner</p>

            <p>Weather Dashboard</p>

            <div className="project-card w-25 m-2 p-1">
              <img src="https://user-images.githubusercontent.com/86372011/138792816-28729a8d-c76f-44ce-85e8-c3a3b3d02d91.gif" type="image/gif" className="project-img card-img-top" alt="gif of chopsticks and chill"></img>
              <h3 className="project-heading card-title">Chopsticks And Chill</h3>
              <p className="card-text"> Group project application that allows a user to choose a cuisine ethnicity, generating a recipe to match, along with a random movie suggestion.
                <br></br>
                <br></br>
                Technology Used: HTML, JavaScript, CSS, local storage
              </p>
              <a href="https://github.com/kbonaccorsi/group-project-1" target="_blank">
                <button type="button" className="btns border-2 rounded-3 m-1 github-link">GitHub Repo</button>
              </a>
              <a href="https://kbonaccorsi.github.io/group-project-1/" target="_blank">
                <button type="button" className="btns border-2 rounded-3 m-1 deployed-link">Deployed Application</button>
              </a>
            </div>

          </div>
        </div>

        <div className="back-end-projects" id="backEnd">
          <h3>Back End Projects</h3>
          <div className="back-end-container d-flex flex-row">

            <p>Good README Generator</p>

            <div className="project-card w-25 m-2 p-1">
              <img src="https://user-images.githubusercontent.com/86372011/138600371-2de5e32c-f21a-40d8-a0c3-5a16b3756500.png" type="image/png" className="project-img card-img-top" alt="screenshot of employee tracker"></img>
              <h3 className="project-heading card-title">Team Profile Generator</h3>
              <p className="card-text"> A command-line application that takes in information about members of a team, and then generates a webpage that displays a summary for each person.
                <br></br>
                <br></br>
                Technology Used: Node.js, Inquirer
              </p>
              <a href="https://github.com/kbonaccorsi/10-oop-team-profile-generator" target="_blank">
                <button type="button" className="btns border-2 rounded-3 m-1 github-link">GitHub Repo</button>
              </a>
              <a href="https://watch.screencastify.com/v/VUYEcu2T9OYTvehNk5uM" target="_blank">
                <button type="button" className="btns border-2 rounded-3 m-1 deployed-link">Walkthrough Video</button>
              </a>
            </div>

            <p>Note Taker</p>

            <div className="project-card w-25 m-2 p-1">
              <img src={EmployeeTracker} type="image/png" className="project-img card-img-top" alt="screenshot of employee tracker"></img>
              <h3 className="project-heading card-title">Employee Tracker</h3>
              <p className="card-text"> A command-line application to manage a company's employee database.
                <br></br>
                <br></br>
                Technology Used: Node.js, Inquirer, MySQL
              </p>
              <a href="https://github.com/kbonaccorsi/12-employee-tracker" target="_blank">
              <button type="button" className="btns border-2 rounded-3 m-1 github-link">GitHub Repo</button>
              </a>
              <a href="https://watch.screencastify.com/v/GWRjxP6ZX8mtJJonY0b0" target="_blank">
              <button type="button" className="btns border-2 rounded-3 m-1 deployed-link">Walkthrough Video</button>
              </a>
            </div>

            <p>E-Commerce</p>

            <p>Tech Blog</p>

          </div>
        </div>

        <div className="full-stack-projects" id="fullStack">
          <h3>Full Stack Projects</h3>
          <div className="full-stack-container d-flex flex-row">
            
          <p>Fitness Tracker</p>

<div className="project-card w-25 m-2 p-1">
  <img src={BudgetTracker} type="image/gif" className="project-img card-img-top" alt="gif of budget tracker"></img>
  <h3 className="project-heading card-title">Budget Tracker</h3>
  <p className="card-text"> Budget tracker that allows adding and subtracting funds online/offline.
    <br></br>
    <br></br>
    Technology Used: PWA
  </p>
  <a href="https://github.com/kbonaccorsi/online-offline-budget-tracker" target="_blank">
    <button type="button" className="btns border-2 rounded-3 m-1 github-link">GitHub Repo</button>
  </a>
  <a href="https://frozen-garden-43795.herokuapp.com/ " target="_blank">
    <button type="button" className="btns border-2 rounded-3 m-1 deployed-link">Deployed Application</button>
  </a>
</div>

  <p>Redux Store</p>

  <p>Book Search Engine</p>

</div>
</div>

</div>
</div>
)
}