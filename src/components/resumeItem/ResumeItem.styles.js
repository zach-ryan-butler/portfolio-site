import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100%',
  },
  bodyText: {
    paddingBottom: theme.spacing(1.2),
    color: theme.palette.text.secondary,
  },
  dateContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(1.2),
    paddingBottom: theme.spacing(1.2),
  },
  dateText: {
    paddingLeft: theme.spacing(0.5),
    fontWeight: 600,
  },
  icon: {
    height: '15px',
    width: '15px',
  },
  titleText: {
    color: theme.palette.text.secondary,
    paddingBottom: theme.spacing(1.2),
  },
  whereText: {
    color: theme.palette.success.main,
    paddingBottom: theme.spacing(1.2),
  },
}));

export default useStyles;
