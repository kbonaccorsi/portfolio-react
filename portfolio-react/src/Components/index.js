import React, { useState } from "react";
import './index.css';
import Header from './Header';
import Footer from './Footer';
import AboutMe from '../Pages/AboutMe';
import Contact from '../Pages/Contact';

export default function setup() {
  return (
    <div className="webpage-container">
      <div>
        <Header />
      </div>
      <p>
        Hello
      </p>
      <div>
      <AboutMe />
      <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
} 