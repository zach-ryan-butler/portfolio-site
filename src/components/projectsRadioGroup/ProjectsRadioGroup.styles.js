import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  checked: {
    '&, & + $label': {
      color: theme.palette.success.main,
    },
  },
  text: {
    width: '100px',
  },
  label: {
    textAlign: 'center',
    '&:hover': {
      color: theme.palette.success.main,
      transition: 'color 250ms ease-in',
    },
  },
  radioGroup: {
    width: '400px',
    justifyContent: 'center',
  },
}));

export default useStyles;
