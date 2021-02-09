import React from 'react';
import { Grid } from '@material-ui/core';

import { APP_LOGOS } from '../../constants';
import ProjectItem from '../projectItem/ProjectItem';

export default function ProjectList({ value }) {
  return (
    <>
      {APP_LOGOS.filter(item => {
        if (item.type === value) {
          return item;
        } else if (value === '') {
          return item;
        }
      }).map(({ image, title, alt, githubUrl, deployedUrl }, index) => (
        <Grid item style={{ margin: 0 }} xs={12} md={4} key={index}>
          <ProjectItem
            image={image}
            title={title}
            alt={alt}
            githubUrl={githubUrl}
            deployedUrl={deployedUrl}
          />
        </Grid>
      ))}
    </>
  );
}
