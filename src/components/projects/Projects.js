import React, { useState } from 'react';
import { Container, Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ProjectsRadioGroup from '../projectsRadioGroup/ProjectsRadioGroup';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    boxSizing: 'border-box',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    border: '4px solid blue',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
    },
  },
  radioGroupContainer: {
    justifyContent: 'center',
  },
  paper: {
    height: '300px',
    backgroundColor: 'pink',
    margin: '20px',
  },
  gridItem: {
    paddingTop: '20px',
    paddingBottom: '20px',
  },
}));

export default function Projects() {
  const [value, setValue] = useState(null);

  const handleChange = ({ target }) => {
    setValue(target.value);
    console.log(target.value);
  };

  const classes = useStyles();
  return (
    <Container
      fixed
      id='section-projects'
      className={classes.root}
      component='section'
    >
      <Grid
        container
        style={{
          border: '3px solid black',
        }}
      >
        <Grid
          style={{ border: '3px solid green' }}
          className={classes.gridItem}
          item
          xs={12}
        >
          <Typography style={{ fontWeight: 100 }} variant='h3'>
            Featured <span style={{ fontWeight: 600 }}>Projects</span>
          </Typography>
        </Grid>

        <Grid
          style={{
            border: '3px solid pink',
            justifyContent: 'center',
          }}
          className={classes.gridItem}
          item
          container
          xs={12}
        >
          <ProjectsRadioGroup value={value} handleChange={handleChange} />
        </Grid>

        <Grid
          style={{ border: '3px solid red' }}
          className={classes.gridItem}
          item
          container
          xs={12}
        >
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}></Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
