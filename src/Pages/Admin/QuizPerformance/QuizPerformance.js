import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";

const QuizPerformance = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://shrouded-temple-83886.herokuapp.com/quizInfo")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <Container>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        Quiz Information
      </Typography>

      <TableContainer component={Paper} sx={{ px: 2 }}>
        <Table sx={{ minWidth: 300 }} aria-label="Appointments Table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Difficulty</TableCell>
              <TableCell align="center">Questions</TableCell>
              <TableCell align="center">Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" align="center" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.category}</TableCell>
                <TableCell align="center">{row.difficulty}</TableCell>
                <TableCell align="center">{row.score}</TableCell>
                <TableCell align="center">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default QuizPerformance;
