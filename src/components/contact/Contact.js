import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ContactForm from '../contactForm/ContactForm';
import ContactDetails from '../contactDetails/ContactDetails';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: theme.palette.secondaryBackground,
    border: '3px solid blue',
    paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
    },
    [theme.breakpoints.up('xl')]: {
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  gridContainer: {
    border: '3px solid orange',
  },
  headerText: {
    fontWeight: 100,
    textAlign: 'center',
    marginBottom: theme.spacing(6),
  },
  subHeaderText: {
    marginBottom: theme.spacing(4),
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <Container
      fixed
      compoenent='section'
      id='section-contact'
      className={classes.root}
    >
      <Grid container className={classes.gridContainer} direction='column'>
        <Grid item style={{ border: '3px solid red' }}>
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
          <Grid
            item
            container
            xs={12}
            md={7}
            style={{ border: '3px solid black' }}
          >
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
          <Grid item xs={12} md={5} style={{ border: '3px solid green' }}>
            <ContactDetails />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
