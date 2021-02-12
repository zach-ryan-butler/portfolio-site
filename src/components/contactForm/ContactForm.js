import React from 'react';
import { TextField, Button, Typography, Box } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactFormSchema } from './ContactForm.schema';

import useStyles from './ContactForm.styles';
import { postMessage } from '../../services/messageApi';

export default function ContactForm() {
  const classes = useStyles();

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(contactFormSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const handleSend = formValues => {
    postMessage(formValues).then(res => console.log(res));
    reset();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(handleSend)}>
      <TextField
        id='name'
        name='name'
        inputRef={register}
        variant='outlined'
        label='Your Name'
        size='small'
        color='primary'
      />
      {errors.name ? (
        <Typography variant='body2' className={classes.errorMessage}>
          {errors.name.message}
        </Typography>
      ) : (
        <Box className={classes.emptyBox}></Box>
      )}
      <TextField
        id='email'
        name='email'
        inputRef={register}
        variant='outlined'
        label='Your Email'
        size='small'
      />
      {errors.email ? (
        <Typography variant='body2' className={classes.errorMessage}>
          {errors.email.message}
        </Typography>
      ) : (
        <Box className={classes.emptyBox}></Box>
      )}
      <TextField
        id='message'
        name='message'
        inputRef={register}
        variant='outlined'
        multiline={true}
        rows={4}
        label='Write a Message'
        size='small'
      />
      {errors.message ? (
        <Typography variant='body2' className={classes.errorMessage}>
          {errors.message.message}
        </Typography>
      ) : (
        <Box className={classes.emptyBox}></Box>
      )}
      <Button
        variant='contained'
        size='large'
        className={classes.button}
        type='submit'
      >
        Send Message
      </Button>
    </form>
  );
}
