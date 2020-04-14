import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    marginBottom: 20
  },
  paper: {
    padding: theme.spacing(2),
    color: 'white',
    backgroundColor: theme.palette.text.hint,
    marginBottom: 20
  },
  papernd: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.text.secondry,
    marginBottom: 20
  }
}));

const UserInfo = props => {
  const classes = useStyles();
  const { username, password } = useSelector(state => state);
  console.log('from user info', username);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>User Data</Paper>
      <Paper className={classes.papernd}>
        <p>User Name : {username}</p>
        <p>Password : {password}</p>
      </Paper>
    </div>
  );
};

export default UserInfo;
