import React, { useState, useEffect } from 'react';
import { AppBar } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PropTypes from 'prop-types';

import HeaderContents from '../headerContents/HeaderContents';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    background: 'transparent',
    color: 'inherit',
    height: '10%',
    justifyContent: 'center',
  },
  navScrolled: {
    background: theme.palette.background.default,
    color: 'inherit',
    height: '10%',
    justifyContent: 'center',
  },
}));

function Header({ setLightOrDark, lightOrDark }) {
  const classes = useStyles();
  const theme = useTheme();
  const isScreenSizeMedium = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 15;
      show ? setIsScrolled(true) : setIsScrolled(false);
    };
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      component='header'
      className={isScrolled ? classes.navScrolled : classes.root}
    >
      <HeaderContents
        lightOrDark={lightOrDark}
        setLightOrDark={setLightOrDark}
        isScreenSizeMedium={isScreenSizeMedium}
      />
    </AppBar>
  );
}

Header.propTypes = {
  setLightOrDark: PropTypes.func,
  lightOrDark: PropTypes.bool,
};

export default Header;
