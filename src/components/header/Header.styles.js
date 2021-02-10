import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    background: 'transparent',
    color: 'inherit',
    height: '10%',
    justifyContent: 'center',
  },
  navScrolled: {
    background: theme.palette.background.default,
    color: 'inherit',
    height: '10%',
    justifyContent: 'center',
  },
}));

export default useStyles;
