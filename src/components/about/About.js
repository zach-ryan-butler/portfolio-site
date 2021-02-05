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
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    paddingLeft: theme.spacing(1.5),
    padding: theme.spacing(1.5),
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
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
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
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
        <Grid item md={6}>
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
          <Grid
            item
            className={[classes.textItem, classes.textColor].join(' ')}
          >
            <Typography variant='body1'>
              Primarily working with the MERN/PERN development stack but am
              always curious about learning new technologies and looking for
              ways to grow in tech.
            </Typography>
          </Grid>
          <Grid
            item
            className={[classes.textItem, classes.textColor].join(' ')}
          >
            <Typography variant='body2'>
              I&apos;m excited to work collaboratively on a motivated team and
              solve real world problems. When not happily coding away, I&apos;m
              usually hiking trails or chasing that perfect powder day on the
              mountain.
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
