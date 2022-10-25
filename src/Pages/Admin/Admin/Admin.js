import { Button, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Admin = () => {
  const { admin } = useAuth();

  return (
    <Container sx={{ px: { xs: 0, sm: 5, md: 5 }, my: 2 }}>
      <Box>
        <Grid container spacing={2}>
          <Grid md={6} xs={12}>
            <Box sx={{ textAlign: "left", mx: 5 }}>
              <h2>Welcome to Admin Page</h2>
              <h4>Only Admin can perform Operations on this Page.</h4>
              <h4>!!Read the instructions carefully!!</h4>
              <Box>
                <h3>Operations Admin can perform:</h3>
                <ul>
                  <li>Manage Users</li>
                  <li>Appoint an user as an Admin</li>
                  <li>Create a quiz</li>
                  <li>Manage quizzes</li>
                  <li>Many Mores</li>
                </ul>
              </Box>
            </Box>
          </Grid>
          <Grid md={6} xs={12}>
            {admin && (
              <Box sx={{ mt: 4 }}>
                <h3>Operations: </h3>
                <Button
                  sx={{ my: 1, width: { xs: "50%", sm: "40%", md: "40%" } }}
                  variant="contained"
                >
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="appointAdmin"
                  >
                    Appoint an Admin
                  </Link>
                </Button>
                <br />
                <Button sx={{ my: 1, width: { xs: "50%", sm: "40%", md: "40%" } }} variant="contained">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="addQuiz"
                  >
                    Add Quiz
                  </Link>
                </Button>
                <br />
                <Button sx={{ my: 1, width: { xs: "50%", sm: "40%", md: "40%" } }} variant="contained">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="quizPerformance"
                  >
                    Quiz Performance
                  </Link>
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
      <hr />
      <Outlet />
    </Container>
  );
};

export default Admin;
