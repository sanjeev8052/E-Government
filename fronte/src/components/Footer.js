import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          My Awesome Footer
        </Typography>
        <div className={classes.grow} />
        <Typography variant="subtitle1">
          Made with ❤️ by Your Name
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;