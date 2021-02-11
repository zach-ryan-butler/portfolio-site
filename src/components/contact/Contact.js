import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';

import ContactForm from '../contactForm/ContactForm';
import ContactDetails from '../contactDetails/ContactDetails';
import useStyles from './Contact.styles';

export default function Contact() {
  const classes = useStyles();
  return (
    <Container
      fixed
      compoenent='section'
      id='section-contact'
      className={classes.root}
    >
      <Grid container direction='column'>
        <Grid item>
          <Typography
            className={classes.headerText}
            variant='h3'
            component='h1'
            xs={12}
          >
            Get <span style={{ fontWeight: 600 }}>In Touch</span>
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item container xs={12} md={7}>
            <Grid item xs={12}>
              <Typography
                className={classes.subHeaderText}
                variant='h5'
                compoenent='h2'
              >
                Get in Touch
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ContactForm />
            </Grid>
          </Grid>
          <Grid item xs={12} md={5}>
            <ContactDetails />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
