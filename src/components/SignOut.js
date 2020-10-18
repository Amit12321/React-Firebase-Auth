import React from "react";
import Button from "@material-ui/core/Button";
import { withFirebase } from "./Firebase";

const SignOut = ({ firebase }) => (
  <Button variant="contained" color="primary" onClick={firebase.signOut}>
    Sign Out
  </Button>
);

export default withFirebase(SignOut);
