import { Alert, Button, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import ManageUser from "../ManageUser/ManageUser";

const AppointAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [alreadyAdmin, setAlreadyAdmin] = useState(false);
  const [error, setError] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://shrouded-temple-83886.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          setSuccess(true);
        } else if (data.acknowledged === true && data.matchedCount === 1) {
          setAlreadyAdmin(true);
        } else if (data.matchedCount === 0) {
          setError(true);
        }
      });
    e.preventDefault();
  };
  return (
    <Container sx={{ pb: 5 }}>
      <h2>Make an Admin</h2>
      {success && (
        <Alert sx={{ width: "50%", m: "auto", my: 2 }} severity="success">
          Successfully added as an Admin
        </Alert>
      )}
      {alreadyAdmin && (
        <Alert sx={{ width: "50%", m: "auto", my: 2 }} severity="info">
          This email is already an Admin
        </Alert>
      )}
      {error && (
        <Alert sx={{ width: "50%", m: "auto", my: 2 }} severity="error">
          This email is not available in Database
        </Alert>
      )}
      <form onSubmit={handleAdminSubmit}>
        <TextField
          type="email"
          id="standard-basic"
          label="Email"
          onBlur={handleOnBlur}
          sx={{ width: "60%", my: 2 }}
          variant="standard"
        />
        <br />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      <br />
      <ManageUser/>
    </Container>
  );
};

export default AppointAdmin;
