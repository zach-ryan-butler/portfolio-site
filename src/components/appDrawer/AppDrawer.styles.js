import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  list: {
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  icon: {
    width: '35px',
    height: '35px',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default useStyles;
