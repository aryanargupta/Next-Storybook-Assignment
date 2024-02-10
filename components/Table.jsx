import Head from "next/head";
import React from "react";
import PropTypes from "prop-types";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const CustomTable = ({ data }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#F2F2F2" }}>
              <TableCell align="center">
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  fontFamily="Noto Sans"
                  color="#7A7A7A"
                >
                  Name
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  fontFamily="Noto Sans"
                  color="#7A7A7A"
                >
                  Email
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  fontFamily="Noto Sans"
                  color="#7A7A7A"
                >
                  Role
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  fontFamily="Noto Sans"
                  color="#7A7A7A"
                  marginLeft={3}
                >
                  Locations
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  fontFamily="Noto Sans"
                  color="#7A7A7A"
                >
                  Last Active
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  fontFamily="Noto Sans"
                  color="#7A7A7A"
                >
                  Permissions
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  fontFamily="Noto Sans"
                  color="#7A7A7A"
                >
                  Status
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  fontFamily="Noto Sans"
                  color="#7A7A7A"
                  marginLeft={3}
                >
                  Action
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center">
                  <Typography
                    variant="body1"
                    fontWeight="600"
                    fontFamily="Noto Sans"
                    color="#242424"
                  >
                    {row.name}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    variant="body1"
                    fontWeight="600"
                    fontFamily="Noto Sans"
                    color="#242424"
                  >
                    {row.email}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    variant="body1"
                    fontWeight="600"
                    fontFamily="Noto Sans"
                    color="#242424"
                  >
                    {row.role}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body1"
                    fontWeight="600"
                    fontFamily="Noto Sans"
                    color="#242424"
                    marginLeft={3}
                  >
                    {row.locations}
                  </Typography>
                  <Typography
                    variant="body2"
                    fontFamily="Noto Sans"
                    color="#242424"
                    marginLeft={3}
                  >
                    {row.locationSubtitle}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    variant="body1"
                    fontWeight="600"
                    fontFamily="Noto Sans"
                    color="#242424"
                  >
                    {row.lastActive}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    variant="body1"
                    fontWeight="600"
                    fontFamily="Noto Sans"
                    color="#242424"
                  >
                    {row.permissions}
                  </Typography>
                </TableCell>
                <TableCell alignItems="center">
                  <Box
                    borderRadius={2}
                    bgcolor={row.status === "Active" ? "#4CAF50" : "#ED1C24"}
                    color="white"
                    p={0.5}
                    textAlign="center"
                    width={60}
                  >
                    <Typography variant="caption" fontFamily="Noto Sans">
                      {row.status}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box display="flex">
                    <Button disableRipple>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2em"
                        height="2em"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="#000"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1" />
                          <path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3" />
                        </g>
                      </svg>
                    </Button>
                    <Button disableRipple>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2em"
                        height="2em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#ED1C24"
                          d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
                        />
                      </svg>
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

CustomTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      locations: PropTypes.string.isRequired,
      locationSubtitle: PropTypes.string.isRequired,
      lastActive: PropTypes.string.isRequired,
      permissions: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CustomTable;
