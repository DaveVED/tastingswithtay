import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function MyApp() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.grow}>
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Recipes</Button>
          <Button color="inherit">Blog</Button>
          <Button color="inherit">Shop</Button>
          <Button color="inherit">About Me</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MyApp;
