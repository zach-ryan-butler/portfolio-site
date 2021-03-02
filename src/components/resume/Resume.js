import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

import ResumeItem from '../resumeItem/ResumeItem';
import TechStackCard from '../techStackCard/TechStackCard';
import useStyles from './Resume.styles';

export default function Resume() {
  const classes = useStyles();
  return (
    <Container
      fixed
      component='section'
      className={classes.root}
      id='section-resume'
    >
      <Typography className={classes.headerText} variant='h3' component='h1'>
        My <span style={{ fontWeight: 600 }}>Resume</span>
      </Typography>
      <Grid container>
        <Grid
          xs={12}
          md={6}
          item
          container
          style={{ minHeight: '100%' }}
          direction='column'
        >
          <Grid item container className={classes.experienceContainer}>
            <Grid item xs={12}>
              <Typography
                className={classes.subHeaderText}
                variant='h5'
                component='h2'
              >
                Experience
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ResumeItem
                date='October 2020 - present'
                title='Front End Engineer'
                where='Rapid Health Oregon'
              >
                Developed and maintained an accessibility first social media
                platform on a dynamic team of volunteers. Implemented React,
                React Native, and Redux code across three seperate web portals
                and a mobile application. Worked closely with remote team
                members to intergrate application objectives into sustainable
                design practices.
              </ResumeItem>
            </Grid>
          </Grid>
          <Grid item container className={classes.educationContainer}>
            <Grid item>
              <Typography
                className={classes.subHeaderText}
                variant='h5'
                component='h2'
              >
                Education
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ResumeItem
                date='April 2020 - September 2020'
                title='Software Engineering'
                where='Alchemy Code Lab'
              >
                Rigorous full stack development course with a focus on depth of
                knowledge and agile practices. Taught fundamental programming
                concepts entirely through JavaScript with an emphasis on test
                and design driven development.
              </ResumeItem>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={6}
          direction='column'
          className={classes.techStackContainer}
        >
          <Grid item>
            <Typography
              className={classes.subHeaderText}
              variant='h5'
              component='h2'
            >
              Tech Stack
            </Typography>
          </Grid>
          <Grid item style={{ flex: 1 }}>
            <TechStackCard />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
