import React from 'react';
import { Card, CardContent, Box, Typography } from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

import useStyles from './ResumeItem.styles';

export default function ResumeItem({ date, title, body, where }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Box className={classes.dateContainer}>
          <CalendarTodayIcon className={classes.icon} />
          <Typography variant='subtitle2' className={classes.dateText}>
            {date}
          </Typography>
        </Box>
        <Typography className={classes.titleText}>{title}</Typography>
        <Typography variant='body2' className={classes.bodyText}>
          {body}
        </Typography>
        <Typography variant='body2' className={classes.whereText}>
          {where}
        </Typography>
      </CardContent>
    </Card>
  );
}
