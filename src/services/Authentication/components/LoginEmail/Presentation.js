import { Redirect } from "react-router";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "../../styles/Login";
import { Link } from "react-router-dom";
import {
  EmailValadation,
  PasswordValadation,
} from "../../../../shared/V/Valadation";
const Presentation = (props) => {
  const classes = useStyles();

  const { email, setEmail, password, setPassword, handleLogin, auth } = props;
  const enabled = email.length > 0 && password.length > 6;
  return (
    <div>
      {auth.uid ? <Redirect to="/" /> : null}
      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                helperText={
                  email.length && !EmailValadation(email)
                    ? "Enter valid email"
                    : null
                }
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                helperText={
                  password.length &&
                  password.length > 6 &&
                  PasswordValadation(password)
                    ? null
                    : "password must contain 6 digits"
                }
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleLogin}
                disabled={!enabled}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/ForgotPassword" variant="body2">
                    {" Forgot password?"}
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/Signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Presentation;
