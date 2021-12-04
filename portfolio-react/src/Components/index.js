import React, { useState } from "react";
import './index.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import AboutMe from '../Pages/AboutMe';
import Contact from '../Pages/Contact';
import HomePage from '../Pages/HomePage';
import Portfolio from '../Pages/Portfolio';
import Resume from '../Pages/Resume';

export default function Setup() {
  const [currentPage, setCurrentPage] = useState('homePage');

const renderPage = () => {
  if(currentPage === 'AboutMe') {
    return <AboutMe />
  }
  else if(currentPage === 'Contact') {
    return <Contact />
  }
  else if(currentPage === 'Portfolio') {
    return <Portfolio />
  }
  else if(currentPage === 'Resume') {
    return <Resume />
  }
  return <HomePage />
};

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="webpage-container">
      <div>
        <Header />
        <nav className="nav-container">
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </nav>
      </div>
      <body>
        {renderPage()}
      {/* <AboutMe /> */}
      {/* <Contact /> */}
      {/* <HomePage /> */}
      {/* <Portfolio /> */}
      {/* <Resume /> */}
      </body>
      <div>
        <Footer />
      </div>
    </div>
  )
}