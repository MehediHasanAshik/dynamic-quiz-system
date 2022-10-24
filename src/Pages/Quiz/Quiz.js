import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Questions from "../Questions/Questions";
import { Box } from "@mui/material";

const Quiz = () => {
  const [questions, setQuestions] = useState();

  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  const { state } = useLocation();
  const { category, difficulty, amount } = state;

  // const url = `https://shrouded-temple-83886.herokuapp.com/quizzes?category=${category}&difficulty=${difficulty}`;
  useEffect(() => {
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, [category, difficulty, amount]);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [questions, currQues]);

  const handleShuffle = (option) => {
    return option.sort(() => Math.random() - 0.5);
  };

  return (
    <Container>
      <h1 style={{ color: "#315741" }}>Welcome to the Quiz</h1>
      {questions ? (
        <Box
          sx={{
            border: 2,
            borderColor: "primary.main",
            borderRadius: 1,
            mb: 2,
          }}
        >
          <span style={{ float: "left", padding: 10 }}>
            <b>Category:</b> {questions[currQues]?.category}
          </span>

          <span style={{ float: "right", padding: 10 }}>
            <b>Difficulty:</b> {difficulty}
          </span>
          <br />

          <Questions
            amount={amount}
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            difficulty={difficulty}
            cat={questions[currQues]?.category}
          />
        </Box>
      ) : (
        <CircularProgress size={100} />
      )}
    </Container>
  );
};

export default Quiz;
