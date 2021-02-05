import React from 'react';
import {
  Container,
  Link,
  Grid,
  Typography,
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import pictureOfMe from '../../assets/monochromatic profile pic.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    padding: '80px 10px 80px 10px',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '80px',
      paddingRight: '80px',
    },
  },
  icon: {
    width: '35px',
    height: '35px',
  },
  iconButton: {
    width: '50px',
    height: '50px',
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'contain',
  },
  textContainer: {
    width: '100%',
    minHeight: '100%',
    justifyContent: 'space-evenly',
  },
  textItem: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: '16px',
      paddingBottom: '16px',
    },
  },
  textColor: {
    color: theme.palette.text.secondary,
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <Container
      fixed
      component='section'
      id='section-about'
      className={classes.root}
    >
      <Grid container spacing={4}>
        <Grid item md={6} className={classes.gridItem}>
          <img className={classes.image} src={pictureOfMe} />
        </Grid>
        <Grid
          item
          container
          md={6}
          className={classes.textContainer}
          direction='column'
        >
          <Grid item className={classes.textItem}>
            <Typography style={{ fontWeight: 100 }} variant='h3'>
              About <span style={{ fontWeight: 600 }}>Me</span>
            </Typography>
          </Grid>
          <Grid item className={(classes.textItem, classes.textColor)}>
            <Typography variant='body1'>
              Primarily working with the MERN development stack but am always
              curious about learning new technologies and looking for ways to
              grow in tech.
            </Typography>
          </Grid>
          <Grid
            item
            className={[classes.textItem, classes.textColor].join(' ')}
          >
            <Typography variant='body1'>
              Excited to work collaboratively on a motivated team and solve real
              world problems. When not happily coding away, I&apos;m usually
              hiking trails or chasing that perfect powder day on the mountain.
            </Typography>
          </Grid>
          <Grid
            item
            className={[classes.textItem, classes.textColor].join(' ')}
          >
            <Link href='https://github.com/zach-ryan-butler'>
              <IconButton
                className={classes.iconButton}
                aria-label='github link'
              >
                <GitHubIcon className={classes.icon} />
              </IconButton>
            </Link>
            <Link href='https://www.linkedin.com/in/zach-ryan-butler/'>
              <IconButton
                className={classes.iconButton}
                aria-label='Linkedin link'
              >
                <LinkedInIcon className={classes.icon} />
              </IconButton>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
