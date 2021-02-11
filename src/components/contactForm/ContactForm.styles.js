import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& label.Mui-focused': {
      color: 'inherit',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'inherit',
      },
    },
  },
  button: {
    width: '170px',
    marginTop: theme.spacing(4),
    backgroundColor: theme.palette.success.main,
    color: 'inherit',
    '&:hover': {
      backgroundColor: theme.palette.success.main,
    },
  },
  emptyBox: {
    height: theme.spacing(3.5),
  },
  errorMessage: {
    height: theme.spacing(3.5),
    paddingLeft: '14px',
    color: theme.palette.error.main,
  },
}));

export default useStyles;
