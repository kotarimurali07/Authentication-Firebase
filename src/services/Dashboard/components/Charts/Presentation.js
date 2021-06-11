import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ChatEngine } from "react-chat-engine";
import { Redirect } from "react-router";
import { useStyles } from "../../styles/Charts";

const Presentation = (props) => {
  const classes = useStyles();
  const { logout, auth } = props;
  return (
    <div>
      {!auth.uid ? <Redirect to="/Login" /> : null}
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              CHAT-APPLICATION
            </Typography>
            <Button color="inherit" onClick={logout}>
              LOGOUT
            </Button>
          </Toolbar>
        </AppBar>
      </div>

      <ChatEngine
        height="calc(97vh - 66px)"
        projectID="630174bb-ca86-4fc6-925b-04db6402ebbe"
        userName="murali kotari"
        userSecret="9014182442"
      />
    </div>
  );
};

export default Presentation;
