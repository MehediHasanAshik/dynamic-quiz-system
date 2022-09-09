import {
  Alert,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import loginBanner from "../../../Images/login.png";

const Login = () => {
  const [loginData, setLoginData] = useState({});

  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleFormSUbmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(navigate);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: "info.main" }}>
            Login
          </Typography>
          <form onSubmit={handleFormSUbmit}>
            <TextField
              sx={{ width: "80%", my: 2 }}
              id="filled-basic"
              label="Your Email"
              type="email"
              name="email"
              onBlur={handleOnChange}
              size="small"
              variant="standard"
            />
            <TextField
              sx={{ width: "80%", mb: 2 }}
              id="outlined-size-small"
              label="Password"
              name="password"
              onBlur={handleOnChange}
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
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <Button variant="text">New User? Register</Button>
            </NavLink>
          </form>
          <hr />
          <Button
            sx={{ mb: 3 }}
            onClick={handleGoogleSignIn}
            variant="contained"
          >
            Sign In with Google
          </Button>
          <br />
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

export default Login;
