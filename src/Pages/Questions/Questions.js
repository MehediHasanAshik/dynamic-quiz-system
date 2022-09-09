import { Alert, Box, Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Timer from "../TImer/Timer";

const Questions = ({ currQues, setCurrQues, questions, options, correct }) => {
  const [selected, setSelected] = useState();
  const [error, SetError] = useState("");
  const [score, setScore] = useState(0);

  const navigate = useNavigate();

  const rightBG = {
    backgroundColor: "green",
    color: "white",
  };

  const wrongBG = {
    backgroundColor: "red",
    color: "white",
  };

  const handleSelect = (op) => {
    if (selected === op && selected === correct) {
      return rightBG;
    } else if (selected === op && selected !== correct) {
      return wrongBG;
    } else if (op === correct) {
      return rightBG;
    }
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    SetError(false);
  };

  const handleQuit = () => {
    navigate("/result", { state: { score } });
  };

  const handleNext = () => {
    if (currQues > 8) {
      navigate("/result", { state: { score } });
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else {
      SetError("Please Select an Option First");
    }
  };

  return (
    <Container sx={{ mb: 5 }}>
      <h1>Question {currQues + 1} </h1>
      <Box>
        <h3
          style={{
            padding: "10px 15px",
            backgroundColor: "darkgrey",
            borderRadius: "5px",
            display: "inline",
          }}
        >
          Score : {score}
        </h3>
        <h4>
          Time Left: <Timer score={score}/> Sec
        </h4>
        <h4>{questions[currQues]?.question}</h4>
        <Box>
          {error && (
            <Alert sx={{ width: "50%", m: "auto", my: 2 }} severity="error">
              {error}
            </Alert>
          )}

          {options &&
            options.map((op) => (
              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Button
                  key={op}
                  sx={{
                    width: "50%",
                    mb: 2,
                  }}
                  variant="contained"
                  onClick={() => handleCheck(op)}
                  style={selected && handleSelect(op)}
                  disabled={selected}
                >
                  {op}
                </Button>
              </Grid>
            ))}
        </Box>
        <Box>
          <Button
            onClick={handleQuit}
            sx={{ mx: 3, width: "20%" }}
            size="small"
            variant="outlined"
          >
            QUIT
          </Button>
          <Button
            onClick={handleNext}
            sx={{ mx: 3, width: "20%" }}
            size="small"
            variant="outlined"
          >
            NEXT
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Questions;
