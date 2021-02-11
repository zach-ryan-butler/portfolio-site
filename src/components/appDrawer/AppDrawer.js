import React from 'react';
import { Drawer, List, IconButton } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';
import PropTypes from 'prop-types';

import DrawerLinksList from '../drawerLinksList/DrawerLinksList';
import DrawerIcons from '../drawerIcons/DrawerIcons';
import useStyles from './AppDrawer.styles';
import { useDrawer } from './appDrawerHooks';

function AppDrawer({ setLightOrDark, lightOrDark }) {
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
        <DrawerIcons
          lightOrDark={lightOrDark}
          setLightOrDark={setLightOrDark}
        />
        <List className={classes.list}>
          <DrawerLinksList />
        </List>
      </Drawer>
    </>
  );
}

AppDrawer.propTypes = {
  setLightOrDark: PropTypes.func,
  lightOrDark: PropTypes.bool,
};

export default AppDrawer;
