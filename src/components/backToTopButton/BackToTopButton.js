import React from 'react';
import { IconButton, Link } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { NavHashLink as RouterLink } from 'react-router-hash-link';

import useStyles from './BackToTopButton.styles';

export default function BackToTopButton() {
  const classes = useStyles();

  return (
    <Link smooth to='/#section-home' component={RouterLink}>
      <IconButton>
        <ArrowUpwardIcon className={classes.icon} />
      </IconButton>
    </Link>
  );
}
