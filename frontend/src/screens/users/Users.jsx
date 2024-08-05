import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Users = () => {
  const [users, setUsers] = useState([]);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/users")
      .then((response) => {
        setUsers(response.data.users);
        if (response.data.users.length > 0) {
          // Extract headers from the first user object
          const firstUser = response.data.users[0];
          setHeaders(Object.keys(firstUser));
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <StyledTableCell key={header}>{header}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow key={user.id}>
              {headers.map((header) => (
                <StyledTableCell key={header} align="center">
                  {typeof user[header] === "object" && user[header] !== null
                    ? JSON.stringify(user[header])  // Convert objects to string
                    : user[header]}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Users;
