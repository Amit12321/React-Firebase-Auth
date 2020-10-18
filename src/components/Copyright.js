import React from "react";
import Typography from "@material-ui/core/Typography";
import HyperLink from "@material-ui/core/Link";

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <HyperLink color="inherit" href="#">
        SimpleAuth
      </HyperLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
