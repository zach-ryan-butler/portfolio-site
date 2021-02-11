import React from 'react';
import { NavHashLink as RouterLink } from 'react-router-hash-link';
import { Link } from '@material-ui/core';
import PropTypes from 'prop-types';

import useStyles from './AppLink.styles';

function AppLink({ path, title }) {
  const classes = useStyles();

  return (
    <Link
      className={classes.link}
      smooth
      activeClassName={classes.color}
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
