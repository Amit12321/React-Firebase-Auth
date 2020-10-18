import React from "react";
import { withAuthorization } from "./Session";
import SignOut from "./SignOut";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <SignOut />
    </div>
  );
}

const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(HomePage);
