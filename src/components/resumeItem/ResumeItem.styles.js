import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100%',
  },
  bodyText: {
    paddingBottom: '10px',
    color: theme.palette.text.secondary,
  },
  dateContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  dateText: {
    paddingLeft: '5px',
    fontWeight: 600,
  },
  icon: {
    height: '15px',
    width: '15px',
  },
  titleText: {
    paddingBottom: '10px',
    color: theme.palette.success.main,
  },
  whereText: {
    color: theme.palette.text.secondary,
  },
}));

export default useStyles;
