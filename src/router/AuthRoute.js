import React from "react";
import { Route, Redirect } from "react-router-dom";
import Dashboard from "../modules/Dashboard";

export default function AuthRoute(props) {
  const { isValidUser } = props;
  return (
    <div>
      {isValidUser ? (
        <Route exact path="/dash" component={Dashboard} />
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
}
