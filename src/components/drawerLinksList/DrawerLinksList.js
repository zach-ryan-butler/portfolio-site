import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { NavHashLink as RouterLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';

import { APP_LINKS } from '../../constants';

const useStyles = makeStyles(theme => ({
  listItemActive: {
    color: theme.palette.success.main,
  },
  listItem: {
    '&:hover': {
      color: theme.palette.success.main,
      transition: 'color 250ms ease-in',
    },
  },
}));

export default function DrawerLinksList() {
  const classes = useStyles();

  return (
    <>
      {APP_LINKS.map(({ path, title }, index) => (
        <ListItem
          button
          key={index}
          to={path}
          smooth
          className={classes.listItem}
          activeClassName={classes.listItemActive}
          component={RouterLink}
        >
          <ListItemText primary={title} />
        </ListItem>
      ))}
    </>
  );
}
