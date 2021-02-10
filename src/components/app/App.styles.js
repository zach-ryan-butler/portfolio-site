import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    left: 0,
    boxSizing: 'border-box',
    minWidth: '100vw',
    maxWidth: '100vw',
    minHeight: '100vh',
  },
});

export default useStyles;
