import React, { useMemo } from 'react';
import { NavHashLink as RouterLink } from 'react-router-hash-link';
import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  link: {
    color: 'inherit',
    fontFamily: 'Arial',
    fontSize: '.6em',
    letterSpacing: '.2em',
    textTransform: 'uppercase',
    '&:hover': {
      textDecoration: 'none',
    },
  },
});

export default function AppLink({ path, title }) {
  const classes = useStyles();

  return (
    <Link
      className={classes.link}
      smooth
      activeClassName='selected'
      activeStyle={{ color: 'red' }}
      to={path}
      component={RouterLink}
    >
      {title}
    </Link>
  );
}
