import React from "react";
import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import header from "../../../Images/header.jpg";

const Banner = () => {
  return (
    <Container sx={{ width: "90%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Grid item xs={12} md={6}>
          <Box>
            <h1>
              Welcome to the <br />
              <span style={{ color: "#315741" }}>Dynamic Quiz System</span>
            </h1>
            <p style={{ fontWeight: 500, fontSize: "20px" }}>
              Here, You can perform quiz tests and justify your knowledge Select
              any category and difficulty and start your quiz
            </p>
          </Box>
        </Grid>
        <Grid item sx={{ py: 3 }} xs={12} md={6}>
          <img
            style={{ borderRadius: "5px" }}
            width="90%"
            src={header}
            alt=""
          />
        </Grid>
      </Box>
    </Container>
  );
};

export default Banner;
