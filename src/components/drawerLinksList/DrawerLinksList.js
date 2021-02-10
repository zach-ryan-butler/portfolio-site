import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { NavHashLink as RouterLink } from 'react-router-hash-link';

import { APP_LINKS } from '../../constants';
import useStyles from './DrawerLinksList.styles';

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
