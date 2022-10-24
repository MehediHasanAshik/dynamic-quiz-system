import { Alert, Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Timer from "../TImer/Timer";

const Questions = ({
  amount,
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  difficulty,
  cat,
}) => {
  const [selected, setSelected] = useState();
  const [error, SetError] = useState("");
  const [score, setScore] = useState(0);

  const { user } = useAuth();

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
    if (currQues > amount - 2) {
      saveQuizInfo(cat, difficulty, amount, score);
      navigate("/result", { state: { score } });
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else {
      SetError("Please Select an Option First");
    }
  };

  const saveQuizInfo = (category, difficulty, amount, score) => {
    const quizInfo = {
      name: user.displayName,
      category,
      difficulty,
      amount,
      score,
    };
    fetch("http://localhost:5000/quizInfo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(quizInfo),
    }).then();
  };

  return (
    <Container sx={{ mb: 5 }}>
      <h1 style={{ color: "#315741" }}>Question : {currQues + 1} </h1>
      <Box>
        <Typography
          variant="h5"
          sx={{
            padding: "10px",
            width: '50%',
            m: 'auto',
            backgroundColor: "DarkCyan",
            fontWeight: 600,
          }}
        >
          Score : {score}
        </Typography>

        <Box
          sx={{
            m: "auto",
            my: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 80,
            width: 80,
            backgroundColor: "#315741",
            color: "white",
            borderRadius: "50%",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            <Timer score={score} difficulty={difficulty} />
          </Typography>
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
          {questions[currQues]?.question}
        </Typography>
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
                    color: "black",
                  }}
                  variant="outlined"
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
