import React from "react";
import Selfie from '../public/selfie.jpg';

export default function AboutMe() {
  return (
    <div className="page-container">
      <h2 className="page-heading">About Me</h2>
      <div className="page-content d-flex flex-row" >
        <img src={Selfie} className="aboutme-selfie" alt="selfie of Kaileigh Bonaccorsi" />
        <p className="p">
          Full Stack Web Developer with a background in Education providing a first-hand perspective to improve classroom applications. I have recently earned a certificate in full stack web development from Northwestern University honing my skills with React.js, MongoDb, and Javascript. There are many applications I dream of making. However, my main goal for the future is to create a program for teachers and students to use in the classroom to help differentiate learning. I might be making a career change, but education will always be an important aspect of my life. I live in San Antonio, Texas with my family, and I am looking forward to what life brings.
        </p>
      </div>
    </div>
  )
}

        </p>
        </div>
    </div>
  )
}