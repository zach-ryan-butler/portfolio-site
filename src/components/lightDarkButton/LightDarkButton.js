import React from 'react';
import { IconButton } from '@material-ui/core';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import PropTypes from 'prop-types';

import useStyles from './LightDarkButton.styles';

function LightDarkButton({ lightOrDark, setLightOrDark }) {
  const classes = useStyles();
  return (
    <>
      {lightOrDark ? (
        <IconButton
          className={classes.iconButton}
          onClick={event => {
            setLightOrDark(false);
            event.stopPropagation();
          }}
        >
          <Brightness7Icon className={classes.icon} />
        </IconButton>
      ) : (
        <IconButton
          className={classes.iconButton}
          onClick={event => {
            setLightOrDark(true);
            event.stopPropagation();
          }}
        >
          <Brightness4Icon className={classes.icon} />
        </IconButton>
      )}
    </>
  );
}

LightDarkButton.propTypes = {
  lightOrDark: PropTypes.bool,
  setLightOrDark: PropTypes.func,
};

export default LightDarkButton;
