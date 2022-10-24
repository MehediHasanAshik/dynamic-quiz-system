import { Alert, Button, Container, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Categories from "../../Data/Categories";

const Section = () => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (!category || !difficulty || !amount) {
      setError(true);
      return;
    } else {
      navigate("/quiz", { state: { category, difficulty, amount } });
    }

    e.preventDefault();
  };

  return (
    <Container sx={{ mb: 5 }}>
      <h2>Ready for your quiz? </h2>
      <h1 style={{color: '#315741'}}>Quiz Settings</h1>
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
        sx={{ mb: 3, width: { xs: "60%", md: "40%" } }}
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
        sx={{ mb: 3, width: { xs: "60%", md: "40%" } }}
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
        id="select-amount"
        required
        select
        label="Question Amount"
        variant="outlined"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        sx={{ mb: 3, width: { xs: "60%", md: "40%" } }}
      >
        <MenuItem key="10" value="10">
          10
        </MenuItem>
        <MenuItem key="15" value="15">
          15
        </MenuItem>
        <MenuItem key="20" value="20">
          20
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
