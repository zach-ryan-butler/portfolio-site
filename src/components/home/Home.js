import React from 'react';
import { Container, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import backgroundImage from '../../assets/mountains-at-night.jpg';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: 'white',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      component='section'
      id='section-home'
      className={classes.root}
    >
      <Box component='header' className={classes.contentContainer}>
        <Typography style={{ fontWeight: 600 }} variant='h1' component='h1'>
          Zach Butler
        </Typography>
        <Typography style={{ fontWeight: 100 }} variant='h2' component='h2'>
          Software Engineer
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
