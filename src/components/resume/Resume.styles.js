import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
    },
    [theme.breakpoints.up('xl')]: {
      padding: 0,
      margin: 0,
      paddingLeft: 200,
      paddingRight: 200,
      minWidth: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  educationContainer: {
    [theme.breakpoints.down('md')]: {
      paddingBottom: theme.spacing(4),
    },
    [theme.breakpoints.up('md')]: {
      padding: 0,
    },
  },
  experienceContainer: {
    paddingBottom: theme.spacing(4),
  },
  headerText: {
    fontWeight: 100,
    paddingBottom: theme.spacing(4),
    textAlign: 'center',
    [theme.breakpoints.up('xl')]: {
      paddingBottom: theme.spacing(6.25),
    },
  },
  subHeaderText: {
    paddingLeft: theme.spacing(2),
  },
  techStackContainer: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(4),
    },
  },
}));

export default useStyles;
