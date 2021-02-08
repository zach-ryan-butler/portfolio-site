import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardMedia,
  Typography,
  CardActions,
  Button,
  CardContent,
} from '@material-ui/core';

import KanbanifyGreenLogo from '../../assets/KanbanifyGreen.jpg';

const useStyles = makeStyles({
  root: {
    height: '300px',
    margin: '20px',
  },
  media: {
    height: '100%',
    width: '100%',
    objectFit: 'contain',
  },
});

export default function ProjectItem() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent style={{ height: '80%' }}>
        <CardMedia
          className={classes.media}
          image={KanbanifyGreenLogo}
          title='Kanbanify logo'
        />
        <Typography variant='h5' component='h2'>
          Kanbanify
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' color='inherit'>
          Github
        </Button>
        <Button size='small' color='inherit'>
          Deployed site
        </Button>
      </CardActions>
    </Card>
  );
}
