import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";

const ManageUser = () => {

    const [user, setUser] = useState([]);

    useEffect(()=> {
        fetch('https://shrouded-temple-83886.herokuapp.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])

      return (
    <Container>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        Available Users: {user?.length}
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="Appointments Table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Role</TableCell>
              {/* <TableCell align="right"></TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" align="center" scope="row">
                  {row.displayName}
                </TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ManageUser;
