import React from 'react';
import { AppBar } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PropTypes from 'prop-types';

import HeaderContents from '../headerContents/HeaderContents';
import HideOnScroll from '../hideOnScroll/HideOnScroll';
import useStyles from './Header.styles';
import { useScroll } from './headerHooks';

function Header({ setLightOrDark, lightOrDark }) {
  const classes = useStyles();

  const isScrolled = useScroll();

  const theme = useTheme();
  const isScreenSizeMedium = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });

  return (
    <HideOnScroll>
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
    </HideOnScroll>
  );
}

Header.propTypes = {
  setLightOrDark: PropTypes.func,
  lightOrDark: PropTypes.bool,
};

export default Header;
