import React, { useState } from "react";
import HomePage from './Pages/HomePage';
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

export default function Index() {
  //allows current page to have a state change and be a dynamic element
  const [currentPage, setCurrentPage] = useState('HomePage');

  const renderPage = () => {
    if(currentPage === 'AboutMe') {
      return <AboutMe />
    }
    if(currentPage === 'Contact') {
      return <Contact />
    }
    if(currentPage === 'Portfolio') {
      return <Portfolio />
    }
    if(currentPage === 'Resume') {
      return <Resume />
    }
    return <HomePage />
  };

  const handlePageChange = (page) => setCurrentPage(page);  


  //the webpage needs to display...
  return (
    <div>
      <header>
        {/* header links to header file containing styling and jsx */}
        <Header />
        <nav>
          {/* nav bar within header- nav links to nav file containing styling and jsx */}
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        </nav>
      </header>
      <body>
        {/* body changes based on what page is being accessed using the renderPage function above */}
        {renderPage()}
      </body>
      <footer>
        {/* footer links to footer file with styling and jsx */}
        <Footer />
      </footer>
    </div>
  );
} 