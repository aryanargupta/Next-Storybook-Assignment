// Card_Camera.jsx
import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import cardCameraImage from "../assets/card_camera_image.jpg";
import cardCameraImageOverlay from "../assets/card_camera_image_overlay.jpg";

const cardStyle = {
  width: 348,
  height: 400,
  backgroundColor: "#FFFFFF",
  borderRadius: 12,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  display: "flex",
  flexDirection: "column",
};

const imageContainerStyle = {
  width: "100%",
  height: "70%",
  borderBottom: "1px solid #E0E0E0",
  overflow: "hidden",
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const overlayImageStyle = {
  position: "relative",
  top: "-100%",
  left: "40%",
  width: "5em",
  height: "5em",
  objectFit: "cover",
};

const contentContainerStyle = {
  padding: "8px",
  paddingLeft: "32px",
};

const textContainerStyle = {
  display: "flex",
  alignItems: "center",
  padding: "2px",
};

const titleStyle = {
  fontSize: 16,
  fontWeight: "500",
  color: "#000000",
};

const textStyle = {
  fontSize: 13,
  fontWeight: "400",
  color: "#757575",
  fontFamily: "Roboto",
};

const iconStyle = {
  marginRight: "8px",
};

const iconsBottomStyle = {
  paddingRight: "8px",
};

const statusContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "auto",
  paddingLeft: "32px",
  paddingBottom: "16px",
};

const statusButtonStyle = {
  borderRadius: "4px",
  backgroundColor: "#00DB4A",
  color: "white",
  padding: "4px 8px",
  fontFamily: "Roboto",
  fontSize: "12px",
};

const iconContainerStyle = {
  display: "flex",
  alignItems: "center",
  marginRight: "12px",
};

const CardCamera = ({ title, recipes, detection, location }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div style={cardStyle}>
        <div style={imageContainerStyle}>
          <Image src={cardCameraImage} alt="Camera Feed" style={imageStyle} />
          {/* Add the overlay image */}
          <Image
            src={cardCameraImageOverlay}
            alt="Overlay"
            style={overlayImageStyle}
          />
        </div>
        <div style={contentContainerStyle}>
          <Typography variant="subtitle1" style={titleStyle} gutterBottom>
            {title}
          </Typography>
          <div style={textContainerStyle}>
            <Typography variant="body2" style={{ ...textStyle, ...iconStyle }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3em"
                height="1.3em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="black"
                  d="M28.5 32a3.476 3.476 0 0 1-2.475-1.025l-4.128-4.128a6.496 6.496 0 0 1-7.348-8.956l.588-1.34l4.156 4.156a1.023 1.023 0 0 0 1.414 0a.999.999 0 0 0 0-1.414l-4.156-4.157l1.34-.588a6.497 6.497 0 0 1 8.956 7.349l4.128 4.128A3.5 3.5 0 0 1 28.5 32m-6.03-7.409l4.97 4.97a1.535 1.535 0 0 0 2.12 0a1.499 1.499 0 0 0 0-2.121l-4.969-4.97l.188-.583A4.496 4.496 0 0 0 20.5 16q-.126 0-.25.007l1.872 1.872a3 3 0 0 1 0 4.242a3.072 3.072 0 0 1-4.243 0l-1.872-1.872Q16 20.374 16 20.5a4.497 4.497 0 0 0 5.888 4.28Z"
                />
                <path
                  fill="black"
                  d="M25 5h-3V4a2.006 2.006 0 0 0-2-2h-8a2.006 2.006 0 0 0-2 2v1H7a2.006 2.006 0 0 0-2 2v21a2.006 2.006 0 0 0 2 2h7v-2H7V7h3v3h12V7h3v5h2V7a2.006 2.006 0 0 0-2-2m-5 3h-8V4h8Z"
                />
              </svg>
            </Typography>
            <Typography variant="body2" style={textStyle}>
              {recipes}
            </Typography>
          </div>
          <div style={textContainerStyle}>
            <Typography variant="body2" style={{ ...textStyle, ...iconStyle }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3em"
                height="1.3em"
                viewBox="0 0 16 16"
              >
                <path
                  fill="black"
                  d="M5.085 2A1.5 1.5 0 0 1 6.5 1h3a1.5 1.5 0 0 1 1.415 1h.585A1.5 1.5 0 0 1 13 3.5v2.1a5.465 5.465 0 0 0-1-.393V3.5a.5.5 0 0 0-.5-.5h-.585A1.5 1.5 0 0 1 9.5 4h-3a1.5 1.5 0 0 1-1.415-1H4.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h1.757c.314.38.677.716 1.08 1H4.5A1.5 1.5 0 0 1 3 13.5v-10A1.5 1.5 0 0 1 4.5 2zM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm8.5 8.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M10.5 8a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m0 5.125a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25"
                />
              </svg>
            </Typography>
            <Typography variant="body2" style={textStyle}>
              {detection}
            </Typography>
          </div>
          <div style={textContainerStyle}>
            <Typography variant="body2" style={{ ...textStyle, ...iconStyle }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.3em"
                height="1.3em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="black"
                  d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26.158 26.158 0 0 0 12 20.758a26.14 26.14 0 0 0 3.262-2.994C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7m0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053a25.34 25.34 0 0 1-1.214-.94a28.157 28.157 0 0 1-2.853-2.698C5.218 16.876 3 13.637 3 10a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28.145 28.145 0 0 1-3.796 3.44a16.794 16.794 0 0 1-.345.251l-.021.014l-.006.005l-.002.001zM12 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0"
                />
              </svg>
            </Typography>
            <Typography variant="body2" style={textStyle}>
              {location}
            </Typography>
          </div>
        </div>
        <div style={statusContainerStyle}>
          <div style={statusButtonStyle}>Active</div>
          <div style={iconContainerStyle}>
            <div style={iconsBottomStyle}>
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ED1C24"
                    d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
                  />
                </svg>
              </button>
            </div>
            <div style={iconsBottomStyle}>
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="black"
                    d="M18 9c0-1.103-.897-2-2-2h-1.434l-2.418-4.029A2.008 2.008 0 0 0 10.434 2H5v2h5.434l1.8 3H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-3l4 2v-7l-4 2zm-1.998 9H4V9h12l.001 4H16v1l.001.001z"
                  />
                  <path fill="currentColor" d="M6 14h6v2H6z" />
                </svg>
              </button>
            </div>
            <div style={iconsBottomStyle}>
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="black"
                    d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 17H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CardCamera.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  recipes: PropTypes.string.isRequired,
  detection: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default CardCamera;
