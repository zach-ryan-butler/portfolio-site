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
  bodyText: {
    paddingBottom: theme.spacing(1.2),
    color: theme.palette.text.secondary,
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
  titleText: {
    paddingBottom: theme.spacing(1.2),
    color: theme.palette.success.main,
  },
}));

export default useStyles;
