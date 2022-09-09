import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Questions from "../Questions/Questions";

const Quiz = () => {
  const [questions, setQuestions] = useState();

  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  const { state } = useLocation();
  const { category, difficulty } = state;

  console.log(category, difficulty)

  useEffect(() => {
    const url = `https://shrouded-temple-83886.herokuapp.com/quizzes?category=${category}&difficulty=${difficulty}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  useEffect(() => {
    setOptions(
      questions &&
        handleSuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [questions, currQues]);

  const handleSuffle = (option) => {
    return option.sort(() => Math.random() - 0.5);
  };

  return (
    <Container>
      <h1>Welcome to the Quiz</h1>
      {questions ? (
        <>
          <span>Category: {questions[currQues]?.category}</span>
          <br />
          <span>Difficulty: {difficulty}</span>
          <Questions
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
          />
        </>
      ) : (
        <CircularProgress size={100} />
      )}
    </Container>
  );
};

export default Quiz;
