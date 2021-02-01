import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';

import styles from './header.css';

export default function Header() {
  return (
    <div className={styles.root}>
      <Link
        activeClassName='selected'
        activeStyle={{ color: 'yellow' }}
        smooth
        to='/#section-home'
      >
        Home
      </Link>
      <Link
        activeClassName='selected'
        activeStyle={{ color: 'yellow' }}
        smooth
        to='/about#section-about'
      >
        About
      </Link>
      <Link
        activeClassName='selected'
        activeStyle={{ color: 'yellow' }}
        smooth
        to='/projects#section-projects'
      >
        Projects
      </Link>
      <Link
        activeClassName='selected'
        activeStyle={{ color: 'yellow' }}
        smooth
        to='/resume#section-resume'
      >
        Resume
      </Link>
      <Link
        activeClassName='selected'
        activeStyle={{ color: 'yellow' }}
        smooth
        to='/contact#section-contact'
      >
        Contact
      </Link>
    </div>
  );
}
