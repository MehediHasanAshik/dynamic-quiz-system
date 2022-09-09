import { Alert, Button, Input, MenuItem, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Categories from "../../Data/Categories";

const AddQuiz = () => {
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [question, setQuestion] = useState("");
  const [correctAns, setCorrectAns] = useState("");
  const [wrongAns1, setWrongAns1] = useState("");
  const [wrongAns2, setWrongAns2] = useState("");
  const [wrongAns3, setWrongAns3] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("category", category);
    formData.append("difficulty", difficulty);
    formData.append("question", question);
    formData.append("correct_answer", correctAns);
    formData.append("incorrect_answers", wrongAns1);
    formData.append("incorrect_answers", wrongAns2);
    formData.append("incorrect_answers", wrongAns3);

    fetch(`http://localhost:5000/quizzes`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess("Question Added Successfully");
        }
      });
  };

  return (
    <Container>
      <h2>Add a Quiz Question to the Database</h2>
      <form onSubmit={handleSubmit}>
        <Input
          sx={{ width: "50%" }}
          accept="image/*"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <TextField
          id="select-category"
          required
          select
          label="Select Category"
          variant="standard"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          sx={{ m: 1, width: "50%" }}
        >
          {Categories.map((cat) => (
            <MenuItem key={cat.category} value={cat.value}>
              {cat.category}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <TextField
          id="select-difficulty"
          required
          select
          label="Select Difficulty"
          variant="standard"
          onChange={(e) => setDifficulty(e.target.value)}
          value={difficulty}
          sx={{ m: 1, width: "50%" }}
        >
          <MenuItem key="Easy" value="easy">
            Easy
          </MenuItem>
          <MenuItem key="Medium" value="medium">
            Medium
          </MenuItem>
          <MenuItem key="Hard" value="hard">
            Hard
          </MenuItem>
        </TextField>
        <br />
        <TextField
          sx={{ width: "50%", m: 1 }}
          required
          onChange={(e) => setQuestion(e.target.value)}
          label="Question"
          variant="standard"
          multiline
        />
        <br />
        <TextField
          sx={{ width: "50%" }}
          onChange={(e) => setCorrectAns(e.target.value)}
          required
          label="correct answer"
          variant="standard"
        />
        <br />
        <TextField
          sx={{ width: "50%" }}
          onChange={(e) => setWrongAns1(e.target.value)}
          required
          label="wrong ans-1"
          variant="standard"
        />
        <br />
        <TextField
          sx={{ width: "50%" }}
          onChange={(e) => setWrongAns2(e.target.value)}
          required
          label="wrong ans-2"
          variant="standard"
        />
        <br />
        <TextField
          sx={{ width: "50%" }}
          onChange={(e) => setWrongAns3(e.target.value)}
          required
          label="wrong ans-3"
          variant="standard"
        />
        <br />
        <Button
          sx={{ width: "25%", my: 2 }}
          size="small"
          variant="contained"
          type="submit"
        >
          Add Question
        </Button>
        <br />
        {success && (
          <Alert sx={{ width: "50%", m: "auto", mb: 5 }} severity="success">
            {success}
          </Alert>
        )}
      </form>
    </Container>
  );
};

export default AddQuiz;
