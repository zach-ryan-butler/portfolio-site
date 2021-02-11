import React from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import useStyles from './ProjectsRadioGroup.styles';

function ProjectsRadioGroup({ value, handleChange }) {
  const classes = useStyles();
  return (
    <RadioGroup
      row
      className={classes.radioGroup}
      value={value}
      onChange={handleChange}
    >
      <FormControlLabel
        classes={{ label: classes.label }}
        className={classes.formLabel}
        value=''
        control={
          <Radio
            classes={{ checked: classes.checked }}
            style={{ display: 'none' }}
          />
        }
        label={
          <Typography className={classes.text} variant='body1'>
            All
          </Typography>
        }
      />
      <FormControlLabel
        classes={{ label: classes.label }}
        value='API'
        control={
          <Radio
            classes={{ checked: classes.checked }}
            style={{ display: 'none' }}
          />
        }
        label={
          <Typography className={classes.text} variant='body1'>
            API&apos;s
          </Typography>
        }
      />
      <FormControlLabel
        classes={{ label: classes.label }}
        value='Fullstack'
        control={
          <Radio
            classes={{ checked: classes.checked }}
            style={{ display: 'none' }}
          />
        }
        label={
          <Typography className={classes.text} variant='body1'>
            Full Stack
          </Typography>
        }
      />
    </RadioGroup>
  );
}

ProjectsRadioGroup.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default ProjectsRadioGroup;
