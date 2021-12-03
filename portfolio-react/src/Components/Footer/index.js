import React from 'react';
import GitHubImg from '../../public/GitHub-Mark-64px.png';
import LinkedInImg from '../../public/linkedin-logo.png';
import './footer.css'

export default function Footer() {

  // footer contains "Created by Kaileigh Bonaccorsi using React", github icon linked to profile, linkedin icon linked to profile
  return (
    <div className="footer-container">
      <h6>
        Created by Kaileigh Bonaccorsi using React
      </h6>
      <div className="social-media-platforms">
        <a className="link" href="https://github.com/kbonaccorsi" target="_blank" rel="noopener noreferrer">
          <img src={GitHubImg} className="footer-img" alt="Git hub icon" />
        </a>
        <a className="link" href="https://www.linkedin.com/in/kaileigh-bonaccorsi/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInImg} className="footer-img" alt="Linked in icon" />
        </a>
      </div>
    </div>
  );
} 