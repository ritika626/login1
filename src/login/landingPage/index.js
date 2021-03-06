import React, { useState, useEffect } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import Adminpage from "../adminPage";
import "../login.css";

const LandingPage = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const axios = require("axios");
  const history = useHistory();

  const inputChangeName = (e) => {
    setName(e.target.value);
  };

  const inputChangePassword = (e) => {
    setPassword(e.target.value);
  };

  if (loggedIn === true) {
    return <Redirect to="/adminpage" />;
  }

  // const submitLogin = (e) => {
  //   e.preventDefault();
  //   if (name === "ritika" && password === "sharma") {
  //     localStorage.setItem("token", "udguisfusdhfihfsdihdsi");
  //     setLoggedIn(true);
  //   }
  // };

  const submitLogin = () => {
    axios
      .post("http://localhost:3000/login", {
        email: name,
        password: password,
      })
      .then(function (response) {
        console.log("response", response);
        localStorage.setItem("token", response.data.accessToken);
        if (response.data.accessToken) {
          setLoggedIn(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };

  const signupbtn = () => {
    history.push("/signup");
  };

  return (
    <div className="body">
      <div className="login-box">
        <h3 className="login-text">Login</h3>
        <div>
          <input
            type="email"
            name="name"
            placeholder="username"
            className="login-input"
            onChange={inputChangeName}
          ></input>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="login-input"
            onChange={inputChangePassword}
          ></input>
        </div>
        <Button variant="" className="login-button" onClick={submitLogin}>
          Log In
        </Button>
        <p className="text-center">or</p>
        <Button variant="" className="login-button" onClick={signupbtn}>
          signup
        </Button>
        {/* <Link to="/signup" className="btn login-button ">
          Sign Up
        </Link> */}
      </div>
    </div>
  );
};

export default LandingPage;
