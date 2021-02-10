import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

import ProjectsRadioGroup from '../projectsRadioGroup/ProjectsRadioGroup';
import ProjectList from '../projectList/ProjectList';
import { useProjects } from './projectHooks';
import useStyles from './Projects.styles';

export default function Projects() {
  const [value, handleChange] = useProjects();

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
            className={classes.headerText}
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
