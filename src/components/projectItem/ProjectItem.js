import React from 'react';
import {
  Card,
  CardMedia,
  Typography,
  CardActions,
  Button,
  CardContent,
  Link,
  Zoom,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import useStyles from './ProjectItem.styles';

function ProjectItem({
  image,
  title,
  alt,
  githubUrl,
  deployedUrl,
  isDeployed,
}) {
  const classes = useStyles();
  return (
    <Zoom in={true}>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={image} title={alt} />
        <CardContent>
          <Typography
            style={{ textAlign: 'center' }}
            variant='h5'
            component='h2'
          >
            {title}
          </Typography>
        </CardContent>
        <CardActions className={classes.buttonContainer}>
          <Link className={classes.link} href={githubUrl}>
            <Button size='small' color='inherit'>
              Github
            </Button>
          </Link>
          {isDeployed ? (
            <Link className={classes.link} href={deployedUrl}>
              <Button size='small' color='inherit'>
                Deployed site
              </Button>
            </Link>
          ) : (
            <></>
          )}
        </CardActions>
      </Card>
    </Zoom>
  );
}

ProjectItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string,
  githubUrl: PropTypes.string,
  deployedUrl: PropTypes.string,
  isDeployed: PropTypes.bool,
};

export default ProjectItem;
