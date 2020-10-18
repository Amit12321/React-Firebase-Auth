import React from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "./Firebase";
import { SignUpLink } from "./SignUp";
import { PasswordForgetLink } from "./PasswordForget";
import { compose } from "recompose";
import * as ROUTES from "../constants/routes";

import Copyright from "./Copyright";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignInPage() {
  const classes = useStyles();
  return (
    <div>
      <SignInForm classes={classes} />
    </div>
  );
}

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class SignInFormBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    const { email, password } = this.state;

    this.props.firebase
      .signIn(email, password)
      .then((authUser) => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => this.setState({ error }));

    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = email === "" || password === "";

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={this.props.classes.paper}>
          <Avatar className={this.props.classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={this.props.classes.form} onSubmit={this.onSubmit}>
            <TextField
              onChange={this.onChange}
              value={email}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={this.onChange}
              value={password}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {error && (
              <Alert variant="filled" severity="error">
                {error.message}
              </Alert>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.props.classes.submit}
              disabled={isInvalid}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <PasswordForgetLink />
              </Grid>
              <Grid item>
                <SignUpLink />
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

function SignInLink() {
  return (
    <p>
      Already have an account? <Link to={ROUTES.SIGN_IN}>Sign in</Link>
    </p>
  );
}

export default SignInPage;

export { SignInForm, SignInLink };
