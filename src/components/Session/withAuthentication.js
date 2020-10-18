import React, { useState, useEffect } from "react";
import { AuthUserContext } from "../Session";
import { withFirebase } from "../Firebase";

const withAuthentication = (Component) => {
  function WithAuthentication(props) {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
      let listener = props.firebase.auth.onAuthStateChanged((authUser) => {
        authUser ? setAuthUser(authUser) : setAuthUser(null);
      });

      return () => listener();
    });

    return (
      <AuthUserContext.Provider value={authUser}>
        <Component {...props}></Component>
      </AuthUserContext.Provider>
    );
  }

  return withFirebase(WithAuthentication);
};

export default withAuthentication;
