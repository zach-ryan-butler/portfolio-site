import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  listItemActive: {
    color: theme.palette.success.main,
  },
  listItem: {
    '&:hover': {
      color: theme.palette.success.main,
      transition: 'color 250ms ease-in',
    },
  },
}));

export default useStyles;
