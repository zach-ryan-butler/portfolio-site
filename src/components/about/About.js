import React from 'react';
import {
  Container,
  Box,
  Paper,
  Typography,
  Link,
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import backgroundImage from '../../assets/zach.png';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    padding: '80px',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '15px',
      paddingRight: '15px',
      paddingTop: '50px',
    },
  },
  aboutContainer: {
    [theme.breakpoints.up('md')]: {
      width: '100%',
      display: 'flex',
      flexDiretion: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    width: '100%',
    flexDiretion: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    [theme.breakpoints.up('md')]: {
      height: '450px',
      width: '450px',
    },
    [theme.breakpoints.up('sm')]: {
      height: '450px',
      width: '600px',
    },
    height: '450px',
    width: '450px',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    boxShadow: 'none',
    backgroundColor: theme.palette.background.default,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '50%',
  },
  image: {
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  icon: {
    width: '30px',
    height: '30px',
  },
  iconButton: {
    width: '50px',
    height: '50px',
  },
  iconContainer: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <Container
      maxWidth={false}
      component='section'
      id='section-about'
      className={classes.root}
    >
      <Box className={classes.aboutContainer}>
        <Paper className={classes.paper}>
          <img className={classes.image} src={backgroundImage} />
        </Paper>
        <Paper className={classes.paper}>
          <Typography style={{ fontSize: '4rem' }} variant='h1' component='h1'>
            Zach Butler
          </Typography>
          <Typography style={{ fontSize: '2rem' }} variant='h2' component='h2'>
            Software Engineer
          </Typography>
          <Typography>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi,
          </Typography>
          <Box className={classes.iconContainer}>
            <Link href='https://github.com/zach-ryan-butler'>
              <IconButton
                className={classes.iconButton}
                aria-label='github link'
              >
                <GitHubIcon className={classes.icon} />
              </IconButton>
            </Link>
            <Link href='https://www.linkedin.com/in/zach-ryan-butler/'>
              <IconButton
                className={classes.iconButton}
                aria-label='Linkedin link'
              >
                <LinkedInIcon className={classes.icon} />
              </IconButton>
            </Link>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
