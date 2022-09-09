import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Result = () => {
  const { state } = useLocation();
  const { score } = state;

  const {user} = useAuth();

  return (
    <Container>
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Congratulations, {user?.displayName}
        </Typography>
        <Typography variant="h6">Your Score is: {score}</Typography>
      </Box>
      <Box>
        <Button variant="contained" color="success">
          <Link style={{textDecoration: 'none', color: 'white'}} to='/home'>Back to Home Page</Link>
        </Button>
      </Box>
    </Container>
  );
};

export default Result;
