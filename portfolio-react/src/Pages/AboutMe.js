import React from "react";
import Selfie from '../public/selfie.jpg';

export default function AboutMe() {
  return (
    <div className="aboutme-container">
      <h2 className="heading">About Me</h2>
      <div className="aboutme-cotent d-flex flex-row" >
        <img src={Selfie} className="selfie" alt="selfie of Kaileigh Bonaccorsi" />
        <p className="aboutme-bio">
          I began my software engineering journey in September of 2021 after deciding to make a career change
          from teaching elementary school. There are many applications I'm thinking of making, but, my main
          goal for the future is to make a program for teachers and students to use in the classroom to help
          differentiate learning. I might be making a career change, but education will always be an important
          aspect of my life. I live in San Antonio, Texas with my family, and I am looking forward to what
          life brings.
        </p>
        </div>
    </div>
  )
}