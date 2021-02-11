import React from 'react';
import { TextField, Button, Typography, Box } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactFormSchema } from './ContactForm.schema';

import useStyles from './ContactForm.styles';

export default function ContactForm() {
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(contactFormSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const handleSend = formValues => {
    console.log(formValues);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(handleSend)}>
      <TextField
        className={classes.textField}
        id='name'
        name='name'
        inputRef={register}
        variant='outlined'
        label='Your Name'
        size='small'
        color='primary'
      ></TextField>
      {errors.name ? (
        <Typography>{errors.name.message}</Typography>
      ) : (
        <Box></Box>
      )}
      <TextField
        className={classes.textField}
        id='email'
        name='email'
        inputRef={register}
        variant='outlined'
        label='Your Email'
        size='small'
      ></TextField>
      <TextField
        className={classes.textField}
        id='message'
        name='message'
        inputRef={register}
        variant='outlined'
        multiline={true}
        rows={4}
        label='Write a Message'
        size='small'
      ></TextField>
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
