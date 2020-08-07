import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const axios = require("axios");

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10,
    width: 300,
    padding: 20,
    top: "30%",
    left: "40%",
    position: "absolute",
    background: "white",
  },
  input: {
    marginBottom: 10,
  },
}));

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactnumber, setContactNumber] = useState("");

  const history = useHistory();

  const signupbtn = () => {
    axios
      .post("http://localhost:3000/users", {
        firstname: firstName,
        email: email,
        lastname: lastName,
        contactnumber: contactnumber,
        password: password,
      })
      .then(function (response) {
        alert("you have successfully signup ");
        history.push("/login");
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };
  const classes = useStyles();

  const inputChangefirstName = (e) => {
    setFirstName(e.target.value);
  };

  const inputChangelastName = (e) => {
    setLastName(e.target.value);
  };

  const inputemail = (e) => {
    setEmail(e.target.value);
  };

  const inputpassword = (e) => {
    setPassword(e.target.value);
  };

  const inputNumber = (e) => {
    setContactNumber(e.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <h3>Sign Up</h3>
      <div>
        <TextField
          id="first name"
          type="text"
          label="first name"
          variant="outlined"
          color="primary"
          size="small"
          className={classes.input}
          onChange={inputChangefirstName}
        />
        <TextField
          id="last name"
          label="last name"
          type="text"
          variant="outlined"
          color="primary"
          size="small"
          className={classes.input}
          onChange={inputChangelastName}
        />
        <TextField
          id="email"
          label="email"
          type="email"
          variant="outlined"
          color="primary"
          className={classes.input}
          onChange={inputemail}
        />
        <TextField
          id="contact number"
          label="contact number"
          variant="outlined"
          color="primary"
          type="number"
          className={classes.input}
          onChange={inputNumber}
        />
        <TextField
          id="contact number"
          label="password"
          variant="outlined"
          color="primary"
          type="password"
          className={classes.input}
          onChange={inputpassword}
        />
        <Button variant="outlined" color="primary" onClick={signupbtn}>
          sign up
        </Button>
      </div>
    </form>
  );
}
