import React from 'react';
import { Toolbar, Box } from '@material-ui/core';
import PropTypes from 'prop-types';

import HeaderLinks from '../headerLinks/HeaderLinks';
import LightDarkButton from '../lightDarkButton/LightDarkButton';
import AppDrawer from '../appDrawer/AppDrawer';
import useStyles from './HeaderContents.styles';

function HeaderContents({ lightOrDark, setLightOrDark, isScreenSizeMedium }) {
  const classes = useStyles();
  return (
    <>
      {isScreenSizeMedium ? (
        <Toolbar className={classes.toolbar}>
          <Box style={{ width: '50px' }} />
          <Box className={classes.linksContainer}>
            <HeaderLinks />
          </Box>
          <LightDarkButton
            lightOrDark={lightOrDark}
            setLightOrDark={setLightOrDark}
          />
        </Toolbar>
      ) : (
        <Toolbar className={classes.toolbar}>
          <AppDrawer
            setLightOrDark={setLightOrDark}
            lightOrDark={lightOrDark}
          />
          <LightDarkButton
            lightOrDark={lightOrDark}
            setLightOrDark={setLightOrDark}
          />
        </Toolbar>
      )}
    </>
  );
}

HeaderContents.propTypes = {
  setLightOrDark: PropTypes.func,
  lightOrDark: PropTypes.bool,
  isScreenSizeMedium: PropTypes.bool,
};

export default HeaderContents;
