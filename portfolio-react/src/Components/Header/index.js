import React from 'react';
import './header.css';
import Nav from '../Nav';

export default function Header() {

  return (
    <div className="header-container">
      <h1 className="name">
          Kaileigh Bonaccorsi
        </h1>
        <h2 className="certification">
          Full Stack Web Developer
        </h2>
      <nav className="nav-container">
        <Nav />
      </nav>
    </div>
  );
  
}