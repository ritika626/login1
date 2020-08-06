import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const AdminPage = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    localStorage.removeItem("token");
    if (token == null) {
      setLoggedIn(false);
    }
  }, [token]);

  console.log("loggedIn", loggedIn);

  if (loggedIn === false) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <div>welcome you successfully logged in.</div>
      <Link to="/login">Logout</Link>
    </>
  );
};

export default AdminPage;
