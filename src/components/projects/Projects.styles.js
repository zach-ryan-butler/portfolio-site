import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
    },
  },
  radioGroupContainer: {
    justifyContent: 'center',
  },
  paper: {
    height: '300px',
    margin: '20px',
  },
  gridItem: {
    paddingTop: '20px',
    paddingBottom: '20px',
  },
}));

export default useStyles;
