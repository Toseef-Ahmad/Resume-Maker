import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import { withStyles } from '@mui/styles';
// import Link  from 'react-router-dom';

const styles = {
  root: {},
  grow: {
    flexGrow: 1,
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-around',
  },
};

const Navbar = (props) => {
  const { classes } = props;
  return (
    <>
      <AppBar color="default">
        <Toolbar>
          <IconButton>
            <span>Icon</span>
          </IconButton>
          <Typography>Resume Maker</Typography>
          <div className={classes.grow} />
          <Button variant="contained" color="error">
            Example
          </Button>
        </Toolbar>
        <Toolbar className={classes.menu}>
          <Button variant="outlined">HEADER</Button>
          <Button variant="outlined">EXPERIENCE</Button>
          <Button variant="outlined">EDUCATION</Button>
          <Button variant="outlined">SKILL</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default withStyles(styles)(Navbar);
