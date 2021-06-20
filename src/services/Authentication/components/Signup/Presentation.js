import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../../styles/Signup";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import {
  EmailValadation,
  NameValadation,
  PasswordValadation,
} from "../../../../shared/V/Valadation";

const Presentation = (props) => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    buttonDisble,
    handleSubmitSignUP,
    auth,
  } = props;
  const classes = useStyles();
  return (
    <div>
      <div>{auth.uid ? <Redirect to="/" /> : null}</div>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={handleSubmitSignUP}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  helperText={
                    firstName.length && !NameValadation(firstName)
                      ? "Enter valid Name"
                      : null
                  }
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={lastName}
                  helperText={
                    lastName.length && !NameValadation(lastName)
                      ? "Enter valid Name"
                      : null
                  }
                  onChange={(e) => setLastName(e.target.value)}
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  helperText={
                    email.length && !EmailValadation(email)
                      ? "Enter valid email"
                      : null
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  helperText={
                    password.length &&
                    password.length > 6 &&
                    PasswordValadation(password)
                      ? null
                      : "password must contain 6 digits"
                  }
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={!buttonDisble()}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/Login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Presentation;
