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
      width: '60px',
      height: '60px',
    },
    width: '60px',
    height: '60px',
  },
}));

export default useStyles;
