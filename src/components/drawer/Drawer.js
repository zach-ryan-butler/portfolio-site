import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, IconButton } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import PropTypes from 'prop-types';

import AppLink from '../appLink/AppLink';

const useStyles = makeStyles({
  list: {
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: '20px',
    marginRight: '20px',
  },
  icon: {
    width: '30px',
    height: '30px',
  },
  iconButton: {
    width: '50px',
    height: '50px',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

function AppDrawer({ setLight, light }) {
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
        <DehazeIcon className={classes.icon} />
      </IconButton>
      <Drawer anchor={'top'} open={open} onClose={toggleDrawer(false)}>
        <List
          onClick={toggleDrawer(false)}
          className={classes.list}
          onKeyDown={toggleDrawer(false)}
        >
          <div className={classes.iconContainer}>
            <IconButton className={classes.iconButton}>
              <DehazeIcon className={classes.icon} />
            </IconButton>
            {light ? (
              <IconButton
                className={classes.iconButton}
                onClick={event => {
                  setLight(false);
                  event.stopPropagation();
                }}
              >
                <Brightness7Icon className={classes.icon} />
              </IconButton>
            ) : (
              <IconButton
                className={classes.iconButton}
                onClick={event => {
                  setLight(true);
                  event.stopPropagation();
                }}
              >
                <Brightness4Icon className={classes.icon} />
              </IconButton>
            )}
          </div>
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

AppDrawer.propTypes = {
  setLight: PropTypes.func,
  light: PropTypes.bool,
};

export default AppDrawer;
