import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import pageBigCamera from "../assets/page_big_camera.jpeg";
import pageSmallCamera1 from "../assets/page_small_camera_1.jpeg";
import pageSmallCamera2 from "../assets/page_small_camera_2.jpeg";
import pageSmallCamera3 from "../assets/page_small_camera_3.jpeg";
import pageSmallCamera4 from "../assets/page_small_camera_4.jpeg";
import Head from "next/head";

function Page() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          color: "black",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 1,
          }}
        >
          <Toolbar disableGutters>
            <Button
              sx={{
                marginRight: "20px",
                display: "flex",
                padding: "12px",
                alignItems: "flex-start",
                gap: "10px",
                borderRadius: "6px",
                background: "#EFEFEF",
                cursor: "pointer",
                justifyContent: { xs: "center", md: "none" },
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                style={{ backgroundColor: "#EFEFEF" }}
              >
                <path
                  d="M21.3333 9.33333H5.10667L12.56 1.88L10.6667 0L0 10.6667L10.6667 21.3333L12.5467 19.4533L5.10667 12H21.3333V9.33333Z"
                  fill="black"
                />
              </svg>
            </Button>
            <Typography
              variant="h1"
              fontSize="36px"
              noWrap
              sx={{
                mr: 2,
                fontFamily: "Roboto",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              VMS
            </Typography>
            <Typography
              variant="h5"
              fontSize="16px"
              noWrap
              sx={{
                fontFamily: "Roboto",
                fontWeight: 500,
                textDecoration: "none",
                letterSpacing: "0.5px",
                marginBottom: "-15px",
                marginLeft: "-10px",
              }}
            >
              / Cameras / Camera Details
            </Typography>
          </Toolbar>

          <Toolbar sx={{ gap: 2.3, display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{
                borderRadius: "8px",
                color: "#333333",
                fontSize: "14px",
                fontWeight: "500",
                textTransform: "none",
                fontFamily: "Roboto",
                padding: "10px 24px",
                border: "1.4px solid #333",
                "&:hover": {
                  backgroundColor: "#EFEFEF",
                  color: "#000000",
                },
              }}
            >
              Edit Camera
            </Button>
            <Button
              sx={{
                borderRadius: "8px",
                color: "#333333",
                fontSize: "14px",
                fontWeight: "500",
                textTransform: "none",
                fontFamily: "Roboto",
                padding: "10px 24px",
                border: "1.4px solid #333",
                "&:hover": {
                  backgroundColor: "#EFEFEF",
                  color: "#000000",
                },
              }}
            >
              Deactivate
            </Button>
            <Button
              sx={{
                borderRadius: "8px",
                color: "#ED1C24",
                fontSize: "14px",
                fontWeight: "500",
                textTransform: "none",
                fontFamily: "Roboto",
                padding: "10px 24px",
                border: "1.4px solid #ED1C24",
                "&:hover": {
                  backgroundColor: "#FF7F7F",
                  color: "#000000",
                },
              }}
            >
              Delete Camera
            </Button>
          </Toolbar>
        </Container>

        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            textIndent: { xs: "0px", md: "20px" },
            gap: "12px",
            marginTop: "-1em",
            py: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontWeight: 500,
              letterSpacing: "0.5px",
              fontSize: "12px",
              color: "rgba(0, 0, 0, 0.47)",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Bank Entrance-front-view Camera1
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontWeight: 400,
              letterSpacing: "0.5px",
              fontSize: "14px",
              color: "#000",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            View and manage camera details, recordings and connection details
          </Typography>
        </Container>
      </AppBar>

      <Container
        maxWidth="lg"
        sx={{
          marginTop: "28px",
          background: "#fff",
          padding: "35px 23px 47.329px 23px",
          borderRadius: "4px",
          border: "1px solid #EFEFEF",
        }}
      >
        <Box display="flex" justifyContent="start">
          <Button
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 9C18 7.897 17.103 7 16 7H14.566L12.148 2.971C11.9698 2.67552 11.7185 2.43095 11.4183 2.26087C11.118 2.09079 10.779 2.00095 10.434 2H5V4H10.434L12.234 7H4C2.897 7 2 7.897 2 9V18C2 19.103 2.897 20 4 20H16C17.103 20 18 19.103 18 18V15L22 17V10L18 12V9ZM16.002 18H4V9H16L16.001 13L16 14L16.001 14.001L16.002 18Z"
                  fill="#222222"
                />
                <path d="M6 14H12V16H6V14Z" fill="#222222" />
              </svg>
            }
            sx={{
              background: "#EFEFEF",
              color: "#222222",
              borderRadius: "8px",
              padding: "12px 22px",
              fontWeight: "500",
              letterSpacing: "0.5px",
              fontSize: "14px",
              textTransform: "capitalize",
              "&:hover": { backgroundColor: "gray", color: "#FFFFFF" },
            }}
          >
            View Recorded Videos
          </Button>

          <Button
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  fill="#222222"
                />
                <path
                  d="M12 2C9.38021 2.00663 6.86729 3.03944 5.00001 4.877V3C5.00001 2.73478 4.89465 2.48043 4.70712 2.29289C4.51958 2.10536 4.26523 2 4.00001 2C3.73479 2 3.48044 2.10536 3.2929 2.29289C3.10537 2.48043 3.00001 2.73478 3.00001 3V7.5C3.00001 7.76522 3.10537 8.01957 3.2929 8.20711C3.48044 8.39464 3.73479 8.5 4.00001 8.5H8.50001C8.76523 8.5 9.01958 8.39464 9.20712 8.20711C9.39465 8.01957 9.50001 7.76522 9.50001 7.5C9.50001 7.23478 9.39465 6.98043 9.20712 6.79289C9.01958 6.60536 8.76523 6.5 8.50001 6.5H6.21801C7.31622 5.33699 8.7386 4.53086 10.3006 4.18621C11.8626 3.84155 13.4922 3.97427 14.9778 4.56715C16.4634 5.16003 17.7366 6.1857 18.6322 7.5111C19.5277 8.83649 20.0043 10.4004 20 12C20 12.2652 20.1054 12.5196 20.2929 12.7071C20.4804 12.8946 20.7348 13 21 13C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8947 12.5196 22 12.2652 22 12C21.9968 9.34881 20.9422 6.80712 19.0676 4.93244C17.1929 3.05776 14.6512 2.00318 12 2ZM19.989 15.5H15.489C15.2238 15.5 14.9694 15.6054 14.7819 15.7929C14.5944 15.9804 14.489 16.2348 14.489 16.5C14.489 16.7652 14.5944 17.0196 14.7819 17.2071C14.9694 17.3946 15.2238 17.5 15.489 17.5H17.782C16.6838 18.663 15.2614 19.4691 13.6994 19.8138C12.1374 20.1585 10.5079 20.0257 9.02222 19.4328C7.53657 18.84 6.26339 17.8143 5.36785 16.4889C4.47231 15.1635 3.99575 13.5996 4.00001 12C4.00001 11.7348 3.89465 11.4804 3.70712 11.2929C3.51958 11.1054 3.26523 11 3.00001 11C2.73479 11 2.48044 11.1054 2.2929 11.2929C2.10537 11.4804 2.00001 11.7348 2.00001 12C1.99722 13.9693 2.57675 15.8954 3.66571 17.5362C4.75468 19.177 6.30447 20.4592 8.12019 21.2215C9.93592 21.9839 11.9365 22.1923 13.8704 21.8207C15.8043 21.4491 17.5851 20.514 18.989 19.133V21C18.989 21.2652 19.0944 21.5196 19.2819 21.7071C19.4694 21.8946 19.7238 22 19.989 22C20.2542 22 20.5086 21.8946 20.6961 21.7071C20.8837 21.5196 20.989 21.2652 20.989 21V16.5C20.989 16.2348 20.8837 15.9804 20.6961 15.7929C20.5086 15.6054 20.2542 15.5 19.989 15.5Z"
                  fill="#222222"
                />
              </svg>
            }
            sx={{
              background: "#EFEFEF",
              color: "#222222",
              borderRadius: "8px",
              padding: "12px 22px",
              fontWeight: "500",
              letterSpacing: "0.5px",
              fontSize: "14px",
              marginLeft: "12px",
              textTransform: "capitalize",
              "&:hover": { backgroundColor: "gray", color: "#FFFFFF" },
            }}
          >
            Refetch Camera
          </Button>
        </Box>

        <Box
          sx={{
            marginTop: "32px",
            display: "grid",
            gridTemplateColumns: { xs: "repeat(1,1fr)", md: "repeat(2,1fr)" },
            alignItems: "stretch",
            borderRadius: "6px",
            gap: "20px",
          }}
        >
          <Image src={pageBigCamera} className={"image"} />

          <Box
            sx={{
              background: "#fff",
              padding: "22px 23px",
              borderRadius: "4px",
              border: "1px solid #EFEFEF",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <Typography
                fontSize="20px"
                noWrap
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: 600,
                  textDecoration: "none",
                  letterSpacing: "0.5px",
                }}
              >
                Camera Details
              </Typography>

              <Box
                sx={{
                  background: "#00DB4ADE",
                  color: "#FFFFFF",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontWeight: "400",
                  fontSize: "12px",
                  textTransform: "capitalize",
                  fontFamily: "Roboto",
                  "&:hover": { backgroundColor: "#00DB4ADE", color: "#FFFFFF" },
                }}
              >
                Active
              </Box>
            </div>

            <Typography sx={{ marginBottom: "5px" }}>
              <span
                style={{
                  fontWeight: "500",
                  color: "#222",
                  fontSize: "14px",
                  fontFamily: "Roboto",
                }}
              >
                Location:
              </span>
              <span
                style={{
                  color: "#757575",
                  fontSize: "13px",
                  fontWeight: "400",
                  marginLeft: "10px",
                  fontFamily: "Roboto",
                }}
              >
                {" "}
                Coimbatore{" "}
              </span>
            </Typography>

            <Typography sx={{ marginBottom: "5px" }}>
              <span
                style={{
                  fontWeight: "500",
                  color: "#222",
                  fontSize: "14px",
                  fontFamily: "Roboto",
                }}
              >
                City:
              </span>{" "}
              <span
                style={{
                  color: "#757575",
                  fontSize: "13px",
                  fontWeight: "400",
                  marginLeft: "10px",
                  fontFamily: "Roboto",
                }}
              >
                {" "}
                Coimbatore
              </span>
            </Typography>

            <Typography sx={{ marginBottom: "5px" }}>
              <span
                style={{
                  fontWeight: "500",
                  color: "#222",
                  fontSize: "14px",
                  fontFamily: "Roboto",
                }}
              >
                Timezone:
              </span>{" "}
              <span
                style={{
                  color: "#757575",
                  fontSize: "13px",
                  fontWeight: "400",
                  marginLeft: "10px",
                  fontFamily: "Roboto",
                }}
              >
                Delhi-India{" "}
              </span>
            </Typography>

            <Typography sx={{ marginBottom: "5px" }}>
              <span
                style={{
                  fontWeight: "500",
                  color: "#222",
                  fontSize: "14px",
                  fontFamily: "Roboto",
                }}
              >
                Date added:
              </span>
              <span
                style={{
                  color: "#757575",
                  fontSize: "13px",
                  fontWeight: "400",
                  marginLeft: "10px",
                  fontFamily: "Roboto",
                }}
              >
                {" "}
                Aug 03, 2023 12:01:42 PM
              </span>
            </Typography>

            <Typography sx={{ marginBottom: "19px" }}>
              <span
                style={{
                  fontWeight: "500",
                  color: "#222",
                  fontSize: "14px",
                  fontFamily: "Roboto",
                }}
              >
                Last update:
              </span>
              <span
                style={{
                  color: "#757575",
                  fontSize: "13px",
                  fontWeight: "400",
                  marginLeft: "10px",
                  fontFamily: "Roboto",
                }}
              >
                {" "}
                Aug 03, 2023 12:01:42 PM
              </span>
            </Typography>

            <Typography sx={{ marginBottom: "12px" }}>
              <span
                style={{
                  fontWeight: "500",
                  color: "#222",
                  fontSize: "14px",
                  fontFamily: "Roboto",
                }}
              >
                Manufacture details:
              </span>
              <span
                style={{
                  color: "#757575",
                  fontSize: "13px",
                  fontWeight: "400",
                  marginLeft: "10px",
                  fontFamily: "Roboto",
                }}
              >
                ADT
              </span>
            </Typography>

            <Typography>
              <span
                style={{
                  fontWeight: "500",
                  color: "#222",
                  fontSize: "14px",
                  fontFamily: "Roboto",
                }}
              >
                RTSP/HLS URL:
              </span>
              <span
                style={{
                  color: "#0043C4",
                  fontSize: "13px",
                  fontWeight: "400",
                  marginLeft: "10px",
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontFamily: "Roboto",
                }}
              >
                Copy URL
              </span>
            </Typography>
          </Box>
        </Box>

        <Typography
          sx={{
            color: "#000",
            fontWeight: "600",
            fontSize: "20px",
            marginTop: "30px",
          }}
        >
          Camera Health and Alert
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(1,1fr)", md: "repeat(3,1fr)" },
            gap: "20px",
            marginTop: "18px",
          }}
        >
          <Box
            sx={{
              padding: "18px 20px 18px 21px",
              background: "#fff",
              borderRadius: "4px",
              border: "1px solid #EFEFEF",
            }}
          >
            <Typography
              sx={{
                color: "#222",
                fontSize: "14px",
                fontWeight: "500",
                fontFamily: "Roboto",
              }}
            >
              Offline Alert
            </Typography>
            <p
              style={{
                color: "#757575",
                fontSize: "13px",
                fontWeight: "400",
                fontFamily: "Roboto",
              }}
            >
              If camera is continuously offline for
            </p>
            <Typography
              sx={{
                color: "#222",
                fontSize: "20px",
                fontWeight: "500",
                fontFamily: "Roboto",
              }}
            >
              12 minutes
            </Typography>
            <p
              style={{
                color: "#757575",
                fontSize: "13px",
                fontWeight: "400",
                fontFamily: "Roboto",
              }}
            >
              Send an email to
            </p>
            <Typography
              sx={{
                color: "#222",
                fontSize: "13px",
                fontWeight: "500",
                fontFamily: "Roboto",
              }}
            >
              email.com
            </Typography>
          </Box>

          <Box
            sx={{
              padding: "18px 20px 18px 21px",
              background: "#fff",
              borderRadius: "4px",
              border: "1px solid #EFEFEF",
            }}
          >
            <Typography
              sx={{
                color: "#222",
                fontSize: "14px",
                fontWeight: "500",
                fontFamily: "Roboto",
              }}
            >
              Health Grade
            </Typography>
            <Typography
              sx={{
                color: "#222",
                fontSize: "28px",
                fontWeight: "500",
                marginTop: "12px",
              }}
            >
              96%
            </Typography>
            <p
              style={{
                color: "#757575",
                fontSize: "13px",
                fontWeight: "400",
                width: "244px",
                fontFamily: "Roboto",
              }}
            >
              Cheers, this camera had no offline time in the last 30 days
            </p>

            <Typography
              sx={{ color: "#4CAF50", fontSize: "13px", fontWeight: "600" }}
            >
              Grade A
            </Typography>
          </Box>

          <Box
            sx={{
              padding: "18px 20px 18px 21px",
              background: "#fff",
              borderRadius: "4px",
              border: "1px solid #EFEFEF",
            }}
          >
            <Typography
              sx={{
                color: "#222",
                fontSize: "14px",
                fontWeight: "500",
                fontFamily: "Roboto",
              }}
            >
              Health Logs
            </Typography>
            <p
              style={{
                color: "#757575",
                fontSize: "13px",
                fontWeight: "400",
                fontFamily: "Roboto",
              }}
            >
              Today, 04:37 pm: Activated
            </p>
            <p
              style={{
                color: "#757575",
                fontSize: "13px",
                fontWeight: "400",
                fontFamily: "Roboto",
              }}
            >
              23 Aug, 02:22 pm: Deactivated
            </p>
            <p
              style={{
                color: "#757575",
                fontSize: "13px",
                fontWeight: "400",
                fontFamily: "Roboto",
              }}
            >
              21 Aug, 05:12 am: Activated
            </p>
            <p
              style={{
                color: "#757575",
                fontSize: "13px",
                fontWeight: "400",
                fontFamily: "Roboto",
              }}
            >
              20 Aug, 02:12 am: Deactivated
            </p>
            <p
              style={{
                color: "#757575",
                fontSize: "13px",
                fontWeight: "400",
                fontFamily: "Roboto",
              }}
            >
              19 Aug, 02:12 am: Deactivated
            </p>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              color: "#000",
              fontWeight: "600",
              fontSize: "20px",
              marginTop: "30px",
            }}
          >
            Recent Recordings
          </Typography>

          <Typography
            sx={{
              color: "#3C3C3C",
              fontWeight: "600",
              fontSize: "16px",
              marginTop: "30px",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            View All
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(4,1fr)",
            },
            gap: "20px",
            marginTop: "18px",
          }}
        >
          <Box
            sx={{
              padding: "18px 20px 18px 21px",
              background: "#fff",
              borderRadius: "4px",
              border: "1px solid #EFEFEF",
            }}
          >
            <Image src={pageSmallCamera1} className={"image"} />
            <Typography
              sx={{ color: "#222", fontSize: "14px", fontWeight: "600" }}
            >
              Recording_0121
            </Typography>
            <Typography
              sx={{ color: "#757575", fontSize: "13px", fontWeight: "400" }}
            >
              Today, 04:42 pm
            </Typography>
          </Box>

          <Box
            sx={{
              padding: "18px 20px 18px 21px",
              background: "#fff",
              borderRadius: "4px",
              border: "1px solid #EFEFEF",
            }}
          >
            <Image src={pageSmallCamera2} className={"image"} />
            <Typography
              sx={{ color: "#222", fontSize: "14px", fontWeight: "600" }}
            >
              Recording_0121
            </Typography>
            <Typography
              sx={{ color: "#757575", fontSize: "13px", fontWeight: "400" }}
            >
              Today, 02:14 pm
            </Typography>
          </Box>

          <Box
            sx={{
              padding: "18px 20px 18px 21px",
              background: "#fff",
              borderRadius: "4px",
              border: "1px solid #EFEFEF",
            }}
          >
            <Image src={pageSmallCamera3} className={"image"} />
            <Typography
              sx={{ color: "#222", fontSize: "14px", fontWeight: "600" }}
            >
              Recording_0121
            </Typography>
            <Typography
              sx={{ color: "#757575", fontSize: "13px", fontWeight: "400" }}
            >
              Today, 02:09 pm
            </Typography>
          </Box>

          <Box
            sx={{
              padding: "18px 20px 18px 21px",
              background: "#fff",
              borderRadius: "4px",
              border: "1px solid #EFEFEF",
            }}
          >
            <Image src={pageSmallCamera4} className={"image"} />
            <Typography
              sx={{ color: "#222", fontSize: "14px", fontWeight: "600" }}
            >
              Recording_0121
            </Typography>
            <Typography
              sx={{ color: "#757575", fontSize: "13px", fontWeight: "400" }}
            >
              Today, 01:11 pm
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Page;
