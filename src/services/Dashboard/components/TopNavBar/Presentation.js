import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router";
import { useStyles } from "../../styles/Charts";
import TodoList from "../TodoList";
const Presentation = (props) => {
  const { email, uid } = props;
  const classes = useStyles();
  const { logout, auth } = props;

  return (
    <div>
      {!auth.uid ? <Redirect to="/Login" /> : null}
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              TODO-LIST
            </Typography>
            <Button color="inherit" onClick={logout}>
              LOGOUT
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <TodoList />
    </div>
  );
};

export default Presentation;
