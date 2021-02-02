import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, IconButton } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';

import AppLink from '../appLink/AppLink';

const useStyles = makeStyles({
  list: {
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: '20px',
  },
  iconButton: {
    width: '25px',
    height: '25px',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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
        <DehazeIcon />
      </IconButton>
      <Drawer anchor={'top'} open={open} onClose={toggleDrawer(false)}>
        <List
          className={classes.list}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <IconButton
            className={classes.iconButton}
            onClick={toggleDrawer(false)}
          >
            <DehazeIcon />
          </IconButton>
          <AppLink path='/#section-home' title='Home' />
          <AppLink path='/about#section-about' title='About' />
          <AppLink path='/projects#section-projects' title='Projects' />
          <AppLink path='/resume#section-resume' title='Resume' />
          <AppLink path='/contact#section-contact' title='Contact' />
        </List>
      </Drawer>
    </>
  );
}
