import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { AuthUserContext } from "./Session";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function AuthNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Home" to={ROUTES.HOME} component={Link}></Tab>
        <Tab label="Account" to={ROUTES.ACCOUNT} component={Link}></Tab>
      </Tabs>
    </Paper>
  );
}

function NonAuthNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Home" to={ROUTES.LANDING} component={Link}></Tab>
        <Tab label="Authentication" to={ROUTES.SIGN_IN} component={Link}></Tab>
      </Tabs>
    </Paper>
  );
}

export default function Navigation() {
  return (
    <div>
      <AuthUserContext.Consumer>
        {(authUser) => (authUser ? <AuthNavigation /> : <NonAuthNavigation />)}
      </AuthUserContext.Consumer>
    </div>
  );
}
