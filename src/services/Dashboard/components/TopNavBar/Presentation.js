import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router";
import { useStyles } from "../../styles/Charts";
import TodoList from "../TodoList";
import { ChatEngine } from "react-chat-engine";
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
      <ChatEngine
        height="calc(100vh - 66px)"
        projectID="630174bb-ca86-4fc6-925b-04db6402ebbe"
        userName="admin@Chat.com"
        userSecret="123456"
      />
    </div>
  );
};

export default Presentation;
