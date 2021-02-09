import React, { useState } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ProjectsRadioGroup from '../projectsRadioGroup/ProjectsRadioGroup';
import ProjectList from '../projectList/ProjectList';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    boxSizing: 'border-box',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
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
    margin: '20px',
  },
  gridItem: {
    paddingTop: '20px',
    paddingBottom: '20px',
  },
}));

export default function Projects() {
  const [value, setValue] = useState('');

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
      <Grid container>
        <Grid
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
          className={classes.gridItem}
          item
          xs={12}
        >
          <Typography
            style={{ fontWeight: 100, paddingBottom: '25px' }}
            variant='h3'
            component='h1'
          >
            Featured <span style={{ fontWeight: 600 }}>Projects</span>
          </Typography>
        </Grid>

        <Grid
          style={{
            justifyContent: 'center',
          }}
          className={classes.gridItem}
          item
          container
          xs={12}
        >
          <ProjectsRadioGroup value={value} handleChange={handleChange} />
        </Grid>
        <Grid className={classes.gridItem} item container xs={12}>
          <ProjectList value={value} />
        </Grid>
      </Grid>
    </Container>
  );
}
