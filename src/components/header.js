import React, { useState } from 'react';
import Navigation from '../components/navigation';
import About from '../components/about';
import Contact from '../components/contact';
import Portfolio from '../components/portfolio';
import Resume from '../components/resume';

function Header() {
  const [page, setPage] = useState("portfolio")
  return (
    <>
      <Navigation setPage={setPage} />
      {page === "portfolio" && <Portfolio />}
      {page === "about" && <About />}
      {page === "contact" && <Contact />}
      {page === "resume" && <Resume />}
    </>
  )
}

export default Header;