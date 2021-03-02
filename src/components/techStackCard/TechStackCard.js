import React from 'react';
import { Card, CardContent, Box, Typography } from '@material-ui/core';

import useStyles from './TechStack.styles';

export default function TechStackCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.boxContainer}>
        <Box className={classes.boxSubContainer}>
          <Box className={classes.box}>
            <Typography className={classes.titleText}>Languages</Typography>
            <Typography className={classes.bodyText}>HTML5</Typography>
            <Typography className={classes.bodyText}>CSS</Typography>
            <Typography className={classes.bodyText}>JavaScript</Typography>
          </Box>
          <Box className={classes.rightBoxes}>
            <Typography className={classes.titleText}>Dev Practices</Typography>
            <Typography className={classes.bodyText}>
              TDD with Jest/Enzyme
            </Typography>
            <Typography className={classes.bodyText}>
              React testing library
            </Typography>
          </Box>
        </Box>
        <Box className={classes.boxSubContainer}>
          <Box className={classes.box}>
            <Typography className={classes.titleText}>
              Frameworks/Libraries
            </Typography>
            <Typography className={classes.bodyText}>React/Redux</Typography>
            <Typography className={classes.bodyText}>NodeJS/Express</Typography>
            <Typography className={classes.bodyText}>Material-UI</Typography>
            <Typography className={classes.bodyText}>React Native</Typography>
            <Typography className={classes.bodyText}>Socket.io</Typography>
          </Box>
          <Box className={classes.rightBoxes}>
            <Typography className={classes.titleText}>Databases</Typography>
            <Typography className={classes.bodyText}>MongoDB</Typography>
            <Typography className={classes.bodyText}>Firebase</Typography>
            <Typography className={classes.bodyText}>PostgreSQL</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
