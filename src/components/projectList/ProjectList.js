import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

import { APP_LOGOS } from '../../constants';
import ProjectItem from '../projectItem/ProjectItem';

function ProjectList({ value }) {
  return (
    <>
      {APP_LOGOS.filter(item => {
        if (item.type === value) {
          return item;
        } else if (value === '') {
          return item;
        }
      }).map(
        ({ image, title, alt, githubUrl, deployedUrl, isDeployed }, index) => (
          <Grid item style={{ margin: 0 }} xs={12} md={4} key={index}>
            <ProjectItem
              image={image}
              title={title}
              alt={alt}
              githubUrl={githubUrl}
              deployedUrl={deployedUrl}
              isDeployed={isDeployed}
            />
          </Grid>
        )
      )}
    </>
  );
}

ProjectList.propTypes = {
  value: PropTypes.string,
};

export default ProjectList;
