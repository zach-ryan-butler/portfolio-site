import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    background: 'transparent',
    color: 'inherit',
    height: '70px',
    justifyContent: 'center',
    position: 'absolute',
    [theme.breakpoints.up('xl')]: {
      height: 90,
    },
  },
  navScrolled: {
    background: theme.palette.background.default,
    color: 'inherit',
    height: '70px',
    justifyContent: 'center',
    position: 'fixed',
    [theme.breakpoints.up('xl')]: {
      height: 90,
    },
  },
}));

export default useStyles;
