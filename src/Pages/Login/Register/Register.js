import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import loginBanner from "../../../Images/login.png";

const Register = () => {
  const [loginData, setLoginData] = useState({});

  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleFormSUbmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name);

    e.preventDefault();
  };

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: "info.main" }}>
            Register
          </Typography>
          {!isLoading && <form onSubmit={handleFormSUbmit}>
            <TextField
              sx={{ width: "80%", my: 2 }}
              type="text"
              label="Your Name"
              name="name"
              onBlur={handleOnBlur}
              size="small"
              variant="standard"
            />
            <TextField
              sx={{ width: "80%", my: 2 }}
              type="email"
              label="Your Email"
              name="email"
              onBlur={handleOnBlur}
              size="small"
              variant="standard"
            />
            <TextField
              sx={{ width: "80%", mb: 2 }}
              label="Password"
              name="password"
              onBlur={handleOnBlur}
              type="password"
              size="small"
              variant="standard"
            />
            <TextField
              sx={{ width: "80%", mb: 2 }}
              id="outlined-size-small"
              label=" Confirm Password"
              name="password2"
              onBlur={handleOnBlur}
              type="password"
              size="small"
              variant="standard"
            />
            <br />
            <Button
              sx={{ width: "80%", mb: 2 }}
              variant="contained"
              type="submit"
            >
              SUBMIT
            </Button>
            <br />
            <NavLink style={{ textDecoration: "none" }} to="/login">
              <Button variant="text">Already Registered? Login</Button>
            </NavLink>
          </form>}

          {isLoading && <CircularProgress />}
          {user.email && (
            <Alert severity="info">
              You Have Successfully Registered to The Site
            </Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "90%", borderRadius: "5px" }}
            src={loginBanner}
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
