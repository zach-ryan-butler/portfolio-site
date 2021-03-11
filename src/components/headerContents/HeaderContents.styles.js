import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  linksContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%',
  },
  toolbar: {
    height: '100%',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
}));

export default useStyles;
