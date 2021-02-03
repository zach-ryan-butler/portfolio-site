import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, IconButton } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';
import PropTypes from 'prop-types';

import DrawerLinksList from '../drawerLinksList/DrawerLinksList';
import DrawerIcons from '../drawerIcons/DrawerIcons';

const useStyles = makeStyles({
  list: {
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  icon: {
    width: '50px',
    height: '50px',
  },
  iconButton: {
    width: '70px',
    height: '70px',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

function AppDrawer({ setLightOrDark, lightOrDark }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <>
      <IconButton className={classes.iconButton} onClick={toggleDrawer(true)}>
        <DehazeIcon className={classes.icon} />
      </IconButton>

      <Drawer anchor={'top'} open={open} onClose={toggleDrawer(false)}>
        <List
          onClick={toggleDrawer(false)}
          className={classes.list}
          onKeyDown={toggleDrawer(false)}
        >
          <DrawerIcons
            lightOrDark={lightOrDark}
            setLightOrDark={setLightOrDark}
          />
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
