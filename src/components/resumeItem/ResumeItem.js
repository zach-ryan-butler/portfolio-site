import React from 'react';
import { Card, CardContent, Box, Typography } from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PropTypes from 'prop-types';

import useStyles from './ResumeItem.styles';

function ResumeItem(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Box className={classes.dateContainer}>
          <CalendarTodayIcon className={classes.icon} />
          <Typography variant='subtitle2' className={classes.dateText}>
            {props.date}
          </Typography>
        </Box>
        <Typography className={classes.whereText}>{props.where}</Typography>
        <Typography variant='body2' className={classes.titleText}>
          {props.title}
        </Typography>
        <Typography variant='body2' className={classes.bodyText}>
          {props.children}
        </Typography>
      </CardContent>
    </Card>
  );
}

ResumeItem.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.string,
  where: PropTypes.string,
};

export default ResumeItem;
