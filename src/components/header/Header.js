import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import AppDrawer from '../drawer/Drawer';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import AppLink from '../appLink/AppLink';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: 'none',
      paddingLeft: '20px',
      paddingRight: '20px',
      height: '56px',
    },
    [theme.breakpoints.down('sm')]: {
      boxShadow: 'none',
      paddingLeft: '20px',
    },
  },
  drawerContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '56px',
  },
  toolbar: {
    width: '40vw',
    justifyContent: 'space-between',
  },
  link: {
    color: 'default',
    fontFamily: 'Arial',
    fontSize: '.6em',
    letterSpacing: '.2em',
    textTransform: 'uppercase',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  iconButton: {
    width: '25px',
    height: '25px',
  },
}));

export default function Header({ setLight, light }) {
  const classes = useStyles();
  const theme = useTheme();
  const showSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const [isTransparent, setTransparent] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 15;
      show ? setTransparent('default') : setTransparent('transparent');
    };
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar color={isTransparent} className={classes.root}>
      {showSmUp ? (
        <>
          <div />
          <Toolbar className={classes.toolbar}>
            <AppLink path='/#section-home' title='Home' />
            <AppLink path='/about#section-about' title='About' />
            <AppLink path='/projects#section-projects' title='Projects' />
            <AppLink path='/resume#section-resume' title='Resume' />
            <AppLink path='/contact#section-contact' title='Contact' />
          </Toolbar>

          {light ? (
            <IconButton
              className={classes.iconButton}
              onClick={() => setLight(false)}
            >
              <Brightness7Icon />
            </IconButton>
          ) : (
            <IconButton
              className={classes.iconButton}
              onClick={() => setLight(true)}
            >
              <Brightness4Icon />
            </IconButton>
          )}
        </>
      ) : (
        <div className={classes.drawerContainer}>
          <AppDrawer />
        </div>
      )}
    </AppBar>
  );
}
