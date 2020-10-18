import React from "react";
import { AuthUserContext, withAuthorization } from "./Session";
import PasswordChangeForm from "./PasswordChange";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <p>User Id: {authUser.uid}</p>
        <div>Change password: </div>
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(AccountPage);
