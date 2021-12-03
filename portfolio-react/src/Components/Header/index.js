import React from 'react';
import Selfie from '../../public/selfie.jpg';

export default function Header(props) {

  //header contains "Kaileigh Bonaccorsi", self image, nav bar including: about me, portfolio, contact, and resume
  return (
    <div className="header-container">
      <h1>
        Kaileigh bonaccorsi
      </h1>
      <img src={Selfie} className="selfie" alt="selfie of Kaileigh Bonaccorsi" />
      <div className="nav-container">
        <button
          type="button"
          className="btn"
          onClick={props.homepage}
        >
          Homepage
        </button>

        <button
          type="button"
          className="btn"
          onClick={props.aboutMe}
        >
          About Me
        </button>
        <button
          type="button"
          className="btn"
          onClick={props.portfolio}
        >
          Portfolio
        </button>
        <button
          type="button"
          className="btn"
          onClick={props.contactMe}
        >
          Contact Me
        </button>
        <button
          type="button"
          className="btn"
          onClick={props.Resume}
        >
          Resume
        </button>
      </div >
    </div>
  );
}

// Static header: jumbotron
//     -displays on EVERY page
//     -including:
//         -developer's name
//         -navigation including:
//             -About Me
//             -Portfolio
//             -Contact
//             -Resume
//         -::hover (highlight currection section)
//         -onClick: relocate page to that section without refreshing page
//       -blank page (background color/ hero image?)