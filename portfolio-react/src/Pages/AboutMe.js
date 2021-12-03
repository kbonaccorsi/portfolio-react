import React from "react";
import Selfie from '../public/selfie.jpg';

export default function AboutMe() {
  return (
    <div>
      <header>
        <h2>About Me</h2>
        <img src={Selfie} className="selfie" alt="selfie of Kaileigh Bonaccorsi" />
        <p>
          I began my software engineering journey in September of 2021 after deciding to make a career change
          from teaching elementary school. There are many applications I'm thinking of making, but, my main
          goal for the future is to make a program for teachers and students to use in the classroom to help
          differentiate learning. I might be making a career change, but education will always be an important
          aspect of my life. I live in San Antonio, Texas with my family, and I am looking forward to what
          life brings.
        </p>
      </header>
    </div>
  )
}