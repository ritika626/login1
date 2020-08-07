import React from "react";
import LandingPage from "./landingPage";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import AdminPage from "../login/adminPage";
import SignUp from "./signup";

const Login = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <LandingPage {...props} />}
          />
          <Route path="/login" render={(props) => <LandingPage {...props} />} />
          <Route
            path="/adminpage"
            render={(props) => <AdminPage {...props} />}
          />
          <Route path="/signup" render={(props) => <SignUp {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Login;
