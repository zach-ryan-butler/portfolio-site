import React, { useState, useEffect } from 'react';
import { AppBar } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PropTypes from 'prop-types';

import HeaderContents from '../headerContents/HeaderContents';

const useStyles = makeStyles({
  root: {
    boxShadow: 'none',
    height: '10%',
    justifyContent: 'center',
  },
});

function Header({ setLightOrDark, lightOrDark }) {
  const classes = useStyles();
  const theme = useTheme();
  const isScreenSizeMedium = useMediaQuery(theme.breakpoints.up('md'));

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
    <AppBar component='nav' color={isTransparent} className={classes.root}>
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
