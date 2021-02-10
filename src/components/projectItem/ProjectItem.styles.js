import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: '20px',
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
});

export default useStyles;
