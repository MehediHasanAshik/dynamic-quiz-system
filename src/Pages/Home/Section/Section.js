import { Alert, Button, Container, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Categories from "../../Data/Categories";

const Section = () => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (!category || !difficulty) {
      setError(true);
      return;
    } else {
      navigate("/quiz", { state: { category, difficulty } });
    }

    e.preventDefault();
  };

  return (
    <Container sx={{ mb: 5 }}>
      <h2>Ready for your quiz? </h2>
      <h1>Quiz Settings</h1>
      <hr />

      {error && (
        <Alert sx={{ width: "50%", m: "auto", my: 2 }} severity="error">
          Please, Select All the Fields
        </Alert>
      )}

      <TextField
        id="select-category"
        required
        select
        label="Select Category"
        variant="outlined"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        style={{ marginBottom: 30, width: "30%" }}
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
        variant="outlined"
        onChange={(e) => setDifficulty(e.target.value)}
        value={difficulty}
        style={{ marginBottom: 30, width: "30%" }}
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

      <Button onClick={handleSubmit} variant="contained">
        Start Quiz
      </Button>
    </Container>
  );
};

export default Section;
