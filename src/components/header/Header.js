import React from 'react';
import { NavHashLink as RouterLink } from 'react-router-hash-link';
import { AppBar, Toolbar, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
  },
  toolbar: {
    width: '40%',
    justifyContent: 'space-between',
  },
  link: {
    color: 'inherit',
    fontFamily: 'Arial',
    fontSize: '.6em',
    letterSpacing: '.2em',
    textTransform: 'uppercase',
    '&:hover': {
      textDecoration: 'none',
    },
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Link
          className={classes.link}
          smooth
          activeClassName='selected'
          activeStyle={{ color: 'red' }}
          to='/#section-home'
          component={RouterLink}
        >
          Home
        </Link>
        <Link
          className={classes.link}
          smooth
          activeClassName='selected'
          activeStyle={{ color: 'red' }}
          to='/about#section-about'
          component={RouterLink}
        >
          About
        </Link>
        <Link
          className={classes.link}
          smooth
          activeClassName='selected'
          activeStyle={{ color: 'red' }}
          to='/projects#section-projects'
          component={RouterLink}
        >
          Projects
        </Link>
        <Link
          className={classes.link}
          activeClassName='selected'
          activeStyle={{ color: 'red' }}
          smooth
          to='/resume#section-resume'
          component={RouterLink}
        >
          Resume
        </Link>
        <Link
          className={classes.link}
          activeClassName='selected'
          activeStyle={{ color: 'red' }}
          smooth
          to='/contact#section-contact'
          component={RouterLink}
        >
          Contact
        </Link>
      </Toolbar>
    </AppBar>
  );
}
