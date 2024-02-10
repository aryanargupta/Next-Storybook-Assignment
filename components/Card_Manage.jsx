// Card_manage.jsx
import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import Box from "@mui/material/Box";

const cardStyle = {
  width: 348,
  height: 140,
  padding: 16,
  backgroundColor: "#FFFFFF",
  borderRadius: 12,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const titleStyle = {
  fontSize: 24,
  fontWeight: "normal",
  color: "#656565",
  marginLeft: 8,
  marginTop: 8,
  fontFamily: "Roboto",
};

const manageStyle = {
  textAlign: "right",
  fontSize: 14,
  fontWeight: "600",
  color: "#656565",
  cursor: "pointer",
  marginRight: 30,
  fontFamily: "Roboto",
  marginBottom: 8,
  border: "none",
  background: "none",
  textDecoration: "none",
  transition: "color 0.3s",
  fontFamily: "Roboto",
  alignSelf: "flex-end",
};

const CardManage = ({ title }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div style={cardStyle}>
        <div>
          <Box marginLeft={1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
            >
              <path
                fill="#222222"
                d="M13.986 4a2.25 2.25 0 0 0-2.236-2h-3.5a2.25 2.25 0 0 0-2.236 2H4.25A2.25 2.25 0 0 0 2 6.25v13.5A2.25 2.25 0 0 0 4.25 22h8.56a6.518 6.518 0 0 1-1.078-1.5H4.25a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75h2.129c.404.603 1.091 1 1.871 1h3.5c.78 0 1.467-.397 1.871-1h2.129a.75.75 0 0 1 .75.75v4.826a6.554 6.554 0 0 1 1.5-.057V6.25A2.25 2.25 0 0 0 15.75 4zm.009.096L14 4.25c0-.052-.002-.103-.005-.154M8.25 3.5h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5m3.707 10.604a6.535 6.535 0 0 1 2.147-2.147l.926-.927a.75.75 0 1 0-1.06-1.06L9 14.94l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0zM23 17.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0m-5 .5l.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z"
              />
            </svg>
          </Box>
          <Typography style={titleStyle}>{title}</Typography>
        </div>
        <button
          style={manageStyle}
          onClick={() => console.log("Manage clicked")}
          onMouseEnter={(e) => (e.target.style.color = "#4285F4")}
          onMouseLeave={(e) => (e.target.style.color = "#656565")}
        >
          Manage
        </button>
      </div>
    </>
  );
};

CardManage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CardManage;
