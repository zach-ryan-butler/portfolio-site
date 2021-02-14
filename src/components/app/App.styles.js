import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    top: 0,
    left: 0,
    boxSizing: 'border-box',
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100vh',
  },
});

export default useStyles;
