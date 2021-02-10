import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    border: '3px solid pink',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
    },
  },
  headerText: {
    fontWeight: 100,
    paddingBottom: '30px',
    textAlign: 'center',
  },
  subHeaderText: {
    paddingLeft: '16px',
  },
}));

export default useStyles;
