import React from 'react';

import Home from '../home/Home';
import About from '../about/About';
import Projects from '../projects/Projects';
import Resume from '../resume/Resume';
import Contact from '../contact/Contact';

export default function Container() {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
}
