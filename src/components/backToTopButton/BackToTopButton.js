import React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { NavHashLink as RouterLink } from 'react-router-hash-link';

import useStyles from './BackToTopButton.styles';

export default function BackToTopButton() {
  const classes = useStyles();

  return (
    <RouterLink className={classes.link} smooth to='/#section-home'>
      <ArrowUpwardIcon
        className={classes.icon}
        fontSize='large'
        color='inherit'
      />
    </RouterLink>
  );
}
