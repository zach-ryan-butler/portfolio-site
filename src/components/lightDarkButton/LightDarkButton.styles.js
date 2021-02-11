import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  icon: {
    [theme.breakpoints.up('md')]: {
      width: '35px',
      height: '35px',
    },
    width: '35px',
    height: '35px',
  },
  iconButton: {
    [theme.breakpoints.up('md')]: {
      width: '50px',
      height: '50px',
    },
    width: '50px',
    height: '50px',
  },
}));

export default useStyles;
