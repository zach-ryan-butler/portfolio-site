import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import AppDrawer from '../drawer/Drawer';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PropTypes from 'prop-types';

import AppLink from '../appLink/AppLink';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: 'none',
      paddingLeft: '20px',
      paddingRight: '20px',
      height: '10%',
    },
    [theme.breakpoints.down('md')]: {
      height: '10%',
      boxShadow: 'none',
      paddingLeft: '20px',
    },
  },
  drawerContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  toolbar: {
    width: '50vw',
    justifyContent: 'space-between',
  },
  icon: {
    width: '30px',
    height: '30px',
  },
  iconButton: {
    width: '50px',
    height: '50px',
  },
}));

function Header({ setLight, light }) {
  const classes = useStyles();
  const theme = useTheme();
  const showMdUp = useMediaQuery(theme.breakpoints.up('md'));

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
      {showMdUp ? (
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
              <Brightness7Icon className={classes.icon} />
            </IconButton>
          ) : (
            <IconButton
              className={classes.iconButton}
              onClick={() => setLight(true)}
            >
              <Brightness4Icon className={classes.icon} />
            </IconButton>
          )}
        </>
      ) : (
        <div className={classes.drawerContainer}>
          <AppDrawer
            setLight={setLight}
            light={light}
            className={classes.drawerIcon}
          />
        </div>
      )}
    </AppBar>
  );
}

Header.propTypes = {
  setLight: PropTypes.func,
  light: PropTypes.bool,
};

export default Header;
