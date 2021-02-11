import React from 'react';
import {
  Container,
  Link,
  Grid,
  Typography,
  IconButton,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import pictureOfMe from '../../assets/monochromatic profile pic.jpg';
import useStyles from './About.styles';

const About = () => {
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
            <Typography style={{ fontWeight: 100 }} variant='h3' component='h1'>
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
          <Grid item className={classes.textItem}>
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
                style={{ color: '#2867B2' }}
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
};

export default About;
