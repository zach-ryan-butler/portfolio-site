import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondaryBackground,
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
      paddingTop: 64,
      paddingBottom: 64,
      paddingLeft: 200,
      paddingRight: 200,
      minWidth: '100%',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  headerText: {
    fontWeight: 100,
  },
  gridItem: {
    paddingTop: theme.spacing(2.5),
  },
}));

export default useStyles;
