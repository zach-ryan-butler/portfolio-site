import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

import ResumeItem from '../resumeItem/ResumeItem';
import useStyles from './Resume.styles';

export default function Resume() {
  const classes = useStyles();
  return (
    <Container
      fixed
      component='section'
      id='section-resume'
      className={classes.root}
    >
      <Typography className={classes.headerText} variant='h3' component='h1'>
        My <span style={{ fontWeight: 600 }}>Resume</span>
      </Typography>
      <Grid container style={{ border: '3px solid green' }}>
        <Grid
          xs={12}
          md={6}
          item
          container
          style={{ border: '3px solid black', minHeight: '100%' }}
          direction='column'
        >
          <Grid
            item
            container
            style={{ border: '3px solid blue', mindHeight: '50%' }}
          >
            <Grid item xs={12} style={{ border: '3px solid pink' }}>
              <Typography
                className={classes.subHeaderText}
                variant='h5'
                component='h2'
              >
                Experience
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ border: '3px solid pink' }}>
              <ResumeItem
                date='October 2020 - present'
                title='Front End Engineer'
                body='Developed and maintained an accessibility first social media
                    platform on a dynmaic team of volunteers. Implemented React,
                    React Native, and Redux code across three seperate web
                    portals and a mobile application. Worked closely with remote
                    team members to intergrate application objectives into
                    sustainable design practices.'
                where='Rapid Health Oregon'
              />
            </Grid>
          </Grid>
          <Grid item container style={{ border: '3px solid orange' }}>
            <Grid item>
              <Typography
                className={classes.subHeaderText}
                variant='h5'
                component='h2'
              >
                Education
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ border: '3px solid pink' }}>
              <ResumeItem
                date='July 2019 - January 2020'
                title='Software Engineering'
                body='                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                where='Vocational School'
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} style={{ border: '3px solid red' }}>
          <Grid item>
            <Typography variant='h5' component='h2'>
              Tech Stack
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
