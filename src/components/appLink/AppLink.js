import React from 'react';
import { NavHashLink as RouterLink } from 'react-router-hash-link';
import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  link: {
    color: 'inherit',
    fontSize: '1em',
    letterSpacing: '.2em',
    textTransform: 'uppercase',
    '&:hover': {
      textDecoration: 'none',
    },
  },
});

function AppLink({ path, title }) {
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

AppLink.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
};

export default AppLink;
