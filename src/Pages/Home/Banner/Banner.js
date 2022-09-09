import React from "react";
import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import header from "../../../Images/header.jpg";

const Banner = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Grid item xs={12} md={6}>
            <Box>
              <h1>Welcome to the Dynamic Quiz System</h1>
              <h4>
                Here, You can perform quiz tests and justify your knowledge
              </h4>
            </Box>
          </Grid>
          <Grid item sx={{ py: 3 }} xs={12} md={6}>
            <img width="90%" src={header} alt="" />
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
};

export default Banner;
