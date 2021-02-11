import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  link: {
    color: 'inherit',
    fontSize: '1em',
    letterSpacing: '.2em',
    textTransform: 'uppercase',
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.success.main,
      transition: 'color 250ms ease-in',
    },
  },
  color: {
    color: theme.palette.success.main,
  },
}));

export default useStyles;
