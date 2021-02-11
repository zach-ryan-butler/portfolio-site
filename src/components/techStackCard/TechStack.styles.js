import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  box: {
    width: '50%',
  },
  boxContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  boxSubContainer: {
    display: 'flex',
    width: '100%',
  },
  bodyText: {
    paddingBottom: theme.spacing(1.2),
    color: theme.palette.text.secondary,
  },
  rightBoxes: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(3.75),
    },
  },
  titleText: {
    paddingBottom: theme.spacing(1.2),
    color: theme.palette.success.main,
  },
}));

export default useStyles;
