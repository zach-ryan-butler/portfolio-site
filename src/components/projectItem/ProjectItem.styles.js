import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2.5),
    backgroundColor: theme.palette.secondaryPaper,
  },
  buttonContainer: {
    justifyContent: 'center',
  },
  media: {
    height: '200px',
    backgroundSize: 'contain',
  },
  link: {
    color: 'inherit',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

export default useStyles;
