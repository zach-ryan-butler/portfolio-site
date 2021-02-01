import React from 'react';

import styles from './app.css';
import Header from '../header/Header';
import Home from '../home/Home';
import About from '../about/About';
import Projects from '../projects/Projects';
import Resume from '../resume/Resume';
import Contact from '../contact/Contact';

export default function App() {
  return (
    <div className={styles.root}>
      <Header />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}
