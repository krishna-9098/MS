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

// Styling for TableCell
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

// Styling for TableRow
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/admin")
      .then((response) => {
        // Check if the response data is an array or a single object
        const userData = Array.isArray(response.data) ? response.data : [response.data];
        setUsers(userData);

        if (userData.length > 0) {
          // Extract headers from the first user object
          const firstUser = userData[0];
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
            <StyledTableRow key={user._id}> {/* Use _id as unique key */}
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

export default Admin;
