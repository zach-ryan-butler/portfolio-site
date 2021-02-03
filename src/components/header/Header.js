import React, { useState, useEffect } from 'react';
import { AppBar, Box } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppDrawer from '../appDrawer/AppDrawer';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PropTypes from 'prop-types';

import HeaderContents from '../headerContents/HeaderContents';

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
    transition: '250ms ease-in',
  },
  drawerContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
}));

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
      {isScreenSizeMedium ? (
        <HeaderContents
          lightOrDark={lightOrDark}
          setLightOrDark={setLightOrDark}
        />
      ) : (
        <Box className={classes.drawerContainer}>
          <AppDrawer
            setLightOrDark={setLightOrDark}
            lightOrDark={lightOrDark}
          />
        </Box>
      )}
    </AppBar>
  );
}

Header.propTypes = {
  setLightOrDark: PropTypes.func,
  lightOrDark: PropTypes.bool,
};

export default Header;
