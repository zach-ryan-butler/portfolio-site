import React from 'react';
import { Drawer, List, IconButton } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';

import DrawerLinksList from '../drawerLinksList/DrawerLinksList';
import DrawerIcons from '../drawerIcons/DrawerIcons';
import useStyles from './AppDrawer.styles';
import { useDrawer } from './appDrawerHooks';

function AppDrawer() {
  const classes = useStyles();

  const [open, toggleDrawer] = useDrawer();

  return (
    <>
      <IconButton className={classes.iconButton} onClick={toggleDrawer(true)}>
        <DehazeIcon className={classes.icon} />
      </IconButton>

      <Drawer
        anchor={'top'}
        open={open}
        onClick={toggleDrawer(false)}
        onClose={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <DrawerIcons />
        <List className={classes.list}>
          <DrawerLinksList />
        </List>
      </Drawer>
    </>
  );
}

export default AppDrawer;
