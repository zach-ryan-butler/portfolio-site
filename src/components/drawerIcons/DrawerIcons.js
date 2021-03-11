import React from 'react';
import { Box, IconButton } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';

import useStyles from './DrawerIcons.styles';

function DrawerIcons() {
  const classes = useStyles();
  return (
    <Box className={classes.iconContainer}>
      <IconButton className={classes.iconButton}>
        <DehazeIcon className={classes.icon} />
      </IconButton>
    </Box>
  );
}

export default DrawerIcons;
