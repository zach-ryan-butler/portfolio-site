import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles({
  root: {
    margin: '20px',
  },
  buttonContainer: {
    justifyContent: 'center',
  },
  media: {
    height: '200px',
    backgroundSize: 'contain',
  },
  link: {
    color: 'inherit',
    '&:hover': {
      textDecoration: 'none',
    },
  },
});

export default function ProjectItem({
  image,
  title,
  alt,
  githubUrl,
  deployedUrl,
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
          <Link className={classes.link} href={deployedUrl}>
            <Button size='small' color='inherit'>
              Deployed site
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Zoom>
  );
}
