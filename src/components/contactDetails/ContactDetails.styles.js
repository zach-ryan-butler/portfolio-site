import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('xs')]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(4),
      marginTop: 0,
      marginBottom: 0,
    },
  },
  bodyTwo: {
    color: theme.palette.text.secondary,
  },
  bodyOne: {
    color: theme.palette.success.main,
    paddingBottom: theme.spacing(0.5),
  },
  subHeaderText: {
    marginBottom: theme.spacing(4),
  },
  topBox: {
    marginBottom: theme.spacing(1.6),
  },
}));

export default useStyles;
