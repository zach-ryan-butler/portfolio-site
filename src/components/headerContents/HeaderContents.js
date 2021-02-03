import React from 'react';
import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import HeaderLinks from '../headerLinks/HeaderLinks';
import LightDarkButton from '../lightDarkButton/LightDarkButton';

const useStyles = makeStyles({
  toolbar: {
    width: '50vw',
    justifyContent: 'space-between',
  },
});

function HeaderContents({ lightOrDark, setLightOrDark }) {
  const classes = useStyles();
  return (
    <>
      <div />
      <Toolbar className={classes.toolbar}>
        <HeaderLinks />
      </Toolbar>
      <LightDarkButton
        lightOrDark={lightOrDark}
        setLightOrDark={setLightOrDark}
      />
    </>
  );
}

HeaderContents.propTypes = {
  setLightOrDark: PropTypes.func,
  lightOrDark: PropTypes.bool,
};

export default HeaderContents;
