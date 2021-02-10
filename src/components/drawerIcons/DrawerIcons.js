import React from 'react';
import { Box, IconButton } from '@material-ui/core';
import LightDarkButton from '../lightDarkButton/LightDarkButton';
import DehazeIcon from '@material-ui/icons/Dehaze';
import PropTypes from 'prop-types';

import useStyles from './DrawerIcons.styles';

function DrawerIcons({ lightOrDark, setLightOrDark }) {
  const classes = useStyles();
  return (
    <Box className={classes.iconContainer}>
      <IconButton className={classes.iconButton}>
        <DehazeIcon className={classes.icon} />
      </IconButton>

      <LightDarkButton
        lightOrDark={lightOrDark}
        setLightOrDark={setLightOrDark}
      />
    </Box>
  );
}

DrawerIcons.propTypes = {
  setLightOrDark: PropTypes.func,
  lightOrDark: PropTypes.bool,
};

export default DrawerIcons;
