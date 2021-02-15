import React from 'react';
import { IconButton, Link } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { NavHashLink as RouterLink } from 'react-router-hash-link';

import useStyles from './BackToTopButton.styles';

export default function BackToTopButton() {
  const classes = useStyles();

  return (
    <Link smooth to='/#section-home' component={RouterLink}>
      <IconButton>
        <ArrowBackIosIcon className={classes.icon} />
      </IconButton>
    </Link>
  );
}
