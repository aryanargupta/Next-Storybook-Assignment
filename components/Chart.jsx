import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Container, Box } from "@mui/material";
import Head from "next/head";
import Button from "@mui/material/Button";

const data = [
  { label: "Super Healthy", value: 56, color: "#19A01E" },
  { label: "Healthy", value: 35, color: "#00DB4A" },
  { label: "Warning", value: 27, color: "#FB8B34" },
  { label: "Danger", value: 6, color: "#ED1C24" },
];

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 36,
  fontWeight: 700,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

function PieChartWithCenterLabel() {
  return (
    <PieChart
      series={[
        {
          innerRadius: 80,
          data,
          startAngle: -60,
        },
      ]}
      margin={{ right: 5 }}
      width={200}
      height={200}
      legend={{ hidden: true }}
    >
      <StyledText
        x={size.width / 4}
        y={size.height / 2 - 10}
        textAnchor="middle"
        dominantBaseline="central"
        sx={{ fontWeight: "600", fontSize: "36px" }}
        fontFamily="Roboto"
      >
        124
      </StyledText>
      <StyledText
        x={size.width / 4}
        y={size.height / 2 + 25}
        textAnchor="middle"
        dominantBaseline="central"
        sx={{ fontWeight: "500", fontSize: "16px" }}
        fontFamily="Roboto"
      >
        Cameras
      </StyledText>
    </PieChart>
  );
}

export default function Charts() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container maxWidth="xl">
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "0px solid black",
            padding: "15px",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            borderRadius: "16px",
            width: "fit-content",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "500",
              marginBottom: "20px",
            }}
          >
            Camera Health
          </Typography>

          <Box
            sx={{
              display: { xs: "block", md: "flex" },
              alignItems: "center",
              border: "0px solid black",
              borderRadius: "16px",
              gap: "20px",
              width: "100%",
            }}
          >
            <PieChartWithCenterLabel />
            <Box>
              <Box
                sx={{
                  backgroundColor: "#F1F1F1",
                  borderRadius: "6px",
                  padding: "16px",

                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5.12274 1.4251C4.42805 1.42477 3.69708 1.5256 2.92796 1.75003C2.92568 1.7508 2.92342 1.75158 2.92116 1.75238C2.91334 1.75486 2.90558 1.75757 2.89791 1.76049C2.89176 1.76273 2.88567 1.7651 2.87963 1.76761C2.87219 1.77082 2.86485 1.77422 2.8576 1.77783C2.85153 1.78071 2.84553 1.78373 2.8396 1.78688C2.83224 1.79094 2.82501 1.7952 2.81789 1.79967C2.81248 1.803 2.80713 1.80643 2.80186 1.80999C2.79492 1.81479 2.78813 1.81979 2.78147 1.82499C2.77632 1.82888 2.77126 1.83288 2.76628 1.83699C2.75993 1.84239 2.75372 1.84797 2.74767 1.85372C2.74294 1.85815 2.73829 1.86268 2.73375 1.86731C2.72779 1.87347 2.72201 1.8798 2.71641 1.8863C2.71246 1.8908 2.7086 1.89538 2.70483 1.90003C2.69927 1.9071 2.69392 1.91434 2.6888 1.92174C2.68534 1.92659 2.68198 1.93151 2.67872 1.9365C2.6741 1.94375 2.66969 1.95113 2.6655 1.95863C2.66237 1.96409 2.65935 1.96963 2.65646 1.97522C2.65259 1.98288 2.64895 1.99065 2.64553 1.99852C2.64298 2.0042 2.64054 2.00994 2.63822 2.01572C2.63521 2.02364 2.63243 2.03164 2.62988 2.03972C2.62784 2.04571 2.62594 2.05174 2.62416 2.05781C2.6211 2.06846 2.61844 2.07922 2.61619 2.09006L1.56657 7.33828C1.54647 7.43889 1.56174 7.54336 1.60978 7.63401C1.65783 7.72467 1.7357 7.79595 1.83024 7.83581L5.67507 9.45666L7.15725 17.0566L1.69472 18.2432C1.59621 18.2644 1.50779 18.3184 1.44394 18.3963C1.38008 18.4743 1.34455 18.5716 1.34316 18.6724L1.29338 22.2569C1.2924 22.3274 1.30819 22.3972 1.33946 22.4605C1.37073 22.5237 1.41658 22.5786 1.47322 22.6207C1.52987 22.6627 1.5957 22.6907 1.66528 22.7023C1.73487 22.7139 1.80622 22.7089 1.87346 22.6875L8.73914 20.4931L9.86991 20.2739C9.87821 20.274 9.88646 20.2746 9.89475 20.2746C10.3614 20.2746 10.8009 20.0523 11.1079 19.69C11.4146 19.3279 11.575 18.8561 11.5746 18.37V18.3688C11.5748 18.0606 11.5103 17.7577 11.385 17.4849L10.2003 11.3645L16.0959 13.8498C16.0984 13.8507 16.1008 13.8516 16.1032 13.8525C16.1116 13.8558 16.1201 13.8589 16.1288 13.8617C16.1342 13.8636 16.1397 13.8653 16.1452 13.8669C16.1536 13.8693 16.1621 13.8715 16.1706 13.8734C16.1771 13.8749 16.1836 13.8762 16.1901 13.8774C16.1976 13.8787 16.2052 13.8799 16.2128 13.8808C16.2203 13.8818 16.2278 13.8826 16.2353 13.8832C16.2421 13.8836 16.2488 13.8839 16.2555 13.8841C16.2639 13.8844 16.2724 13.8845 16.2808 13.8843C16.2865 13.8842 16.2922 13.8841 16.2978 13.8838L20.2075 13.6363C20.2868 13.6311 20.3634 13.6046 20.4291 13.5598C20.4948 13.515 20.5472 13.4534 20.5811 13.3814L22.9493 8.36794L22.9497 8.36728C22.9497 8.36725 22.9497 8.36722 22.9497 8.36719C22.95 8.36646 22.9503 8.36572 22.9506 8.36499C22.9781 8.30814 22.9932 8.24609 22.9949 8.18296C22.9966 8.11982 22.9848 8.05706 22.9604 7.99882C22.936 7.94058 22.8994 7.8882 22.8532 7.84517C22.807 7.80213 22.7522 7.76941 22.6923 7.74919C22.3395 7.55533 21.9616 7.41103 21.5694 7.32038L7.1378 1.71975C7.12546 1.71501 7.11292 1.71082 7.10021 1.70719C6.47597 1.52705 5.81747 1.42547 5.12274 1.4251ZM3.88772 2.06836C3.947 2.06799 4.00576 2.07947 4.06055 2.10211L17.6895 7.56446C17.7869 7.60344 17.8674 7.67554 17.9169 7.76806C17.9663 7.86058 17.9816 7.96758 17.9599 8.07024C17.9469 8.09206 17.9359 8.11496 17.9268 8.13867L17.8876 8.23571C17.8298 8.31742 17.7461 8.37728 17.6501 8.40565C17.5541 8.43402 17.4513 8.42924 17.3584 8.39208L3.72952 2.92828C3.63324 2.89056 3.55309 2.82051 3.50281 2.73015C3.45254 2.63979 3.43528 2.53475 3.454 2.43306C3.47271 2.33136 3.52624 2.23935 3.60538 2.1728C3.68453 2.10626 3.78432 2.06933 3.88772 2.06836ZM20.6365 8.08556C20.8428 8.08735 21.0467 8.10938 21.2491 8.15138L21.94 8.4195L20.8305 10.7686C20.8733 10.5784 20.8951 10.3898 20.8931 10.2129C20.8884 9.80358 20.7553 9.46524 20.5253 9.29588C20.2954 9.12652 19.9775 9.13275 19.664 9.3076C19.5867 9.35072 19.5091 9.4043 19.434 9.4658C19.4628 9.42727 19.4898 9.38517 19.5131 9.33985C19.5795 9.21061 19.6185 9.06085 19.6172 8.92828C19.6157 8.79539 19.5729 8.68252 19.497 8.625C19.4602 8.59655 19.4147 8.58157 19.3681 8.58253C19.3208 8.58328 19.2696 8.5981 19.2202 8.62646C19.1214 8.68327 19.029 8.79146 18.9624 8.92092C18.896 9.05049 18.8569 9.19974 18.8585 9.33258C18.8599 9.46538 18.9028 9.5783 18.9786 9.63586C19.0544 9.69328 19.1566 9.68963 19.2554 9.63286C19.0953 9.79983 18.9486 10.0032 18.8292 10.2291C18.6132 10.6377 18.4905 11.1103 18.4952 11.5196C18.4999 11.9289 18.6359 12.2686 18.8658 12.438C19.0957 12.6075 19.4107 12.5998 19.7241 12.4249C19.92 12.3156 20.1127 12.1428 20.2824 11.9289L19.8882 12.7633L16.9468 12.9508L18.693 8.61999C19.379 8.25689 20.0183 8.08031 20.6366 8.08561L20.6365 8.08556ZM6.66413 9.87361L7.41478 10.1901L8.80847 16.7318C8.66658 16.6882 8.519 16.6659 8.37057 16.6657C8.24288 16.6657 8.11744 16.6828 7.99613 16.7143L6.66413 9.87361ZM8.41505 10.6118L9.21272 10.9481L10.2908 16.5182C10.1619 16.4825 10.0287 16.4643 9.89489 16.464C9.81788 16.464 9.7418 16.4706 9.66685 16.4823L8.4151 10.6117L8.41505 10.6118ZM9.89485 17.3578C10.0759 17.3578 10.2819 17.4505 10.4326 17.6284C10.5833 17.8063 10.6873 18.092 10.6868 18.3688C10.6868 18.3692 10.6868 18.3696 10.6868 18.37C10.6873 18.6468 10.5833 18.9325 10.4326 19.1104C10.3651 19.1904 10.2825 19.2564 10.1895 19.3045L9.9015 19.3603C10.0002 19.1131 10.0508 18.8446 10.0505 18.5715V18.5704C10.0507 18.3949 10.0296 18.2201 9.98757 18.0497C9.98875 18.0144 9.98571 17.979 9.97852 17.9444L9.85402 17.3604C9.86761 17.3594 9.88139 17.3578 9.89485 17.3578ZM8.37057 17.5594C8.55169 17.5594 8.75775 17.6521 8.90846 17.83C9.05911 18.0079 9.16299 18.2936 9.16261 18.5704C9.16261 18.5708 9.16261 18.5712 9.16261 18.5715C9.16299 18.8483 9.05902 19.134 8.90841 19.3119C8.75771 19.4898 8.55169 19.5826 8.37052 19.5826C8.18944 19.5826 7.9846 19.4898 7.83394 19.3119C7.68328 19.1341 7.5781 18.8483 7.57847 18.5715C7.57847 18.5712 7.57847 18.5708 7.57847 18.5704C7.5781 18.2936 7.68328 18.0079 7.83394 17.83C7.9846 17.6521 8.18944 17.5594 8.37052 17.5594H8.37057ZM6.75357 18.0558C6.71248 18.2242 6.69183 18.397 6.69207 18.5704V18.5715C6.6916 19.0576 6.85191 19.5295 7.15861 19.8915C7.19789 19.938 7.23938 19.982 7.28274 20.0236L2.19282 21.6504L2.22947 19.0385L6.75357 18.0557V18.0558Z"
                    fill="#0043C4"
                  />
                </svg>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "500",
                    fontFamily: "Roboto",
                    fontSize: "14px",
                  }}
                >
                  Totally&nbsp;
                  <Typography
                    component="span"
                    variant="inherit"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    124
                  </Typography>
                  &nbsp;Cameras are in 9 NVRs and installed in 12 Locations
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#FFBFCC",
                  borderRadius: "6px",
                  padding: "16px",
                  marginTop: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21.17 15.4L15.26 5.55C14.48 4.25 13.3 3.51 12 3.51C10.7 3.51 9.52001 4.25 8.74001 5.54L2.83001 15.4C2.39001 16.13 2.17001 16.89 2.17001 17.61C2.17001 18.18 2.31001 18.74 2.59001 19.23C3.23001 20.35 4.47001 21 6.00001 21H18C19.53 21 20.77 20.35 21.41 19.23C21.69 18.74 21.83 18.21 21.83 17.65C21.84 16.91 21.62 16.14 21.17 15.4ZM12 8.45C12.85 8.45 13.55 9.15 13.55 10C13.55 10.85 12.86 11.55 12 11.55C11.15 11.55 10.45 10.85 10.45 10C10.45 9.14 11.14 8.45 12 8.45ZM13.69 16.91C13.66 16.95 12.89 17.83 11.62 17.83H11.47C10.96 17.8 10.54 17.58 10.29 17.2C9.98001 16.73 9.93001 16.09 10.17 15.38L10.58 14.16C10.81 13.48 10.59 13.37 10.47 13.31L10.33 13.29C10.08 13.29 9.73001 13.44 9.62001 13.5C9.52001 13.55 9.39001 13.53 9.31001 13.43C9.24001 13.33 9.24001 13.2 9.32001 13.11C9.35001 13.07 10.19 12.12 11.54 12.2C12.05 12.23 12.47 12.45 12.72 12.83C13.04 13.3 13.08 13.94 12.84 14.66L12.43 15.88C12.2 16.56 12.42 16.67 12.54 16.73L12.68 16.75C12.93 16.75 13.28 16.6 13.39 16.55C13.5 16.49 13.62 16.52 13.7 16.62C13.77 16.69 13.77 16.82 13.69 16.91Z"
                    fill="#ED1C46"
                  />
                </svg>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "500",
                    fontFamily: "Roboto",
                    fontSize: "14px",
                  }}
                >
                  <Typography
                    component="span"
                    variant="inherit"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    6
                  </Typography>
                  &nbsp;Cameras were experiencing downtime in Last 30 days
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    alignSelf: "flex-end",
                    padding: "10px",
                    backgroundColor: "#FFFFFF",
                    color: "#222222",
                    borderRadius: "6px",
                    fontWeight: "600",
                    fontSize: "12px",
                    cursor: "pointer",
                    marginLeft: "250px",
                    fontFamily: "Roboto",
                    textTransform: "none", // Prevents text from being in all caps
                    "&:hover": {
                      backgroundColor: "#CCCCCC", // Change to grey on hover
                    },
                  }}
                >
                  View Cameras
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Typography
                  sx={{
                    marginTop: "15px",
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      width: "15px",
                      height: "15px",
                      backgroundColor: "#19A01E",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                    }}
                  ></span>
                  <span
                    style={{
                      marginRight: "5px",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    Super Healthy (56)
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8 1.5C6.71442 1.5 5.45772 1.88122 4.3888 2.59545C3.31988 3.30968 2.48676 4.32484 1.99479 5.51256C1.50282 6.70028 1.37409 8.00721 1.6249 9.26809C1.8757 10.529 2.49477 11.6872 3.40381 12.5962C4.31285 13.5052 5.47104 14.1243 6.73192 14.3751C7.99279 14.6259 9.29973 14.4972 10.4874 14.0052C11.6752 13.5132 12.6903 12.6801 13.4046 11.6112C14.1188 10.5423 14.5 9.28558 14.5 8C14.4982 6.27665 13.8128 4.62441 12.5942 3.40582C11.3756 2.18722 9.72335 1.50182 8 1.5ZM7.75 4.5C7.89834 4.5 8.04334 4.54399 8.16668 4.6264C8.29002 4.70881 8.38615 4.82594 8.44291 4.96299C8.49968 5.10003 8.51453 5.25083 8.48559 5.39632C8.45665 5.5418 8.38522 5.67544 8.28033 5.78033C8.17544 5.88522 8.04181 5.95665 7.89632 5.98559C7.75083 6.01453 7.60003 5.99968 7.46299 5.94291C7.32595 5.88614 7.20881 5.79001 7.1264 5.66668C7.04399 5.54334 7 5.39834 7 5.25C7 5.05109 7.07902 4.86032 7.21967 4.71967C7.36032 4.57902 7.55109 4.5 7.75 4.5ZM8.5 11.5C8.23479 11.5 7.98043 11.3946 7.7929 11.2071C7.60536 11.0196 7.5 10.7652 7.5 10.5V8C7.36739 8 7.24022 7.94732 7.14645 7.85355C7.05268 7.75979 7 7.63261 7 7.5C7 7.36739 7.05268 7.24021 7.14645 7.14645C7.24022 7.05268 7.36739 7 7.5 7C7.76522 7 8.01957 7.10536 8.20711 7.29289C8.39465 7.48043 8.5 7.73478 8.5 8V10.5C8.63261 10.5 8.75979 10.5527 8.85356 10.6464C8.94732 10.7402 9 10.8674 9 11C9 11.1326 8.94732 11.2598 8.85356 11.3536C8.75979 11.4473 8.63261 11.5 8.5 11.5Z"
                      fill="#8F90A6"
                    />
                  </svg>
                </Typography>

                <Typography
                  sx={{
                    marginTop: "15px",
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      width: "15px",
                      height: "15px",
                      backgroundColor: "#00DB4A",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                    }}
                  ></span>
                  <span
                    style={{
                      marginRight: "5px",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    Healthy (35)
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8 1.5C6.71442 1.5 5.45772 1.88122 4.3888 2.59545C3.31988 3.30968 2.48676 4.32484 1.99479 5.51256C1.50282 6.70028 1.37409 8.00721 1.6249 9.26809C1.8757 10.529 2.49477 11.6872 3.40381 12.5962C4.31285 13.5052 5.47104 14.1243 6.73192 14.3751C7.99279 14.6259 9.29973 14.4972 10.4874 14.0052C11.6752 13.5132 12.6903 12.6801 13.4046 11.6112C14.1188 10.5423 14.5 9.28558 14.5 8C14.4982 6.27665 13.8128 4.62441 12.5942 3.40582C11.3756 2.18722 9.72335 1.50182 8 1.5ZM7.75 4.5C7.89834 4.5 8.04334 4.54399 8.16668 4.6264C8.29002 4.70881 8.38615 4.82594 8.44291 4.96299C8.49968 5.10003 8.51453 5.25083 8.48559 5.39632C8.45665 5.5418 8.38522 5.67544 8.28033 5.78033C8.17544 5.88522 8.04181 5.95665 7.89632 5.98559C7.75083 6.01453 7.60003 5.99968 7.46299 5.94291C7.32595 5.88614 7.20881 5.79001 7.1264 5.66668C7.04399 5.54334 7 5.39834 7 5.25C7 5.05109 7.07902 4.86032 7.21967 4.71967C7.36032 4.57902 7.55109 4.5 7.75 4.5ZM8.5 11.5C8.23479 11.5 7.98043 11.3946 7.7929 11.2071C7.60536 11.0196 7.5 10.7652 7.5 10.5V8C7.36739 8 7.24022 7.94732 7.14645 7.85355C7.05268 7.75979 7 7.63261 7 7.5C7 7.36739 7.05268 7.24021 7.14645 7.14645C7.24022 7.05268 7.36739 7 7.5 7C7.76522 7 8.01957 7.10536 8.20711 7.29289C8.39465 7.48043 8.5 7.73478 8.5 8V10.5C8.63261 10.5 8.75979 10.5527 8.85356 10.6464C8.94732 10.7402 9 10.8674 9 11C9 11.1326 8.94732 11.2598 8.85356 11.3536C8.75979 11.4473 8.63261 11.5 8.5 11.5Z"
                      fill="#8F90A6"
                    />
                  </svg>
                </Typography>

                <Typography
                  sx={{
                    marginTop: "15px",
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      width: "15px",
                      height: "15px",
                      backgroundColor: "#FB8B34",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                    }}
                  ></span>
                  <span
                    style={{
                      marginRight: "5px",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    Warning (27)
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8 1.5C6.71442 1.5 5.45772 1.88122 4.3888 2.59545C3.31988 3.30968 2.48676 4.32484 1.99479 5.51256C1.50282 6.70028 1.37409 8.00721 1.6249 9.26809C1.8757 10.529 2.49477 11.6872 3.40381 12.5962C4.31285 13.5052 5.47104 14.1243 6.73192 14.3751C7.99279 14.6259 9.29973 14.4972 10.4874 14.0052C11.6752 13.5132 12.6903 12.6801 13.4046 11.6112C14.1188 10.5423 14.5 9.28558 14.5 8C14.4982 6.27665 13.8128 4.62441 12.5942 3.40582C11.3756 2.18722 9.72335 1.50182 8 1.5ZM7.75 4.5C7.89834 4.5 8.04334 4.54399 8.16668 4.6264C8.29002 4.70881 8.38615 4.82594 8.44291 4.96299C8.49968 5.10003 8.51453 5.25083 8.48559 5.39632C8.45665 5.5418 8.38522 5.67544 8.28033 5.78033C8.17544 5.88522 8.04181 5.95665 7.89632 5.98559C7.75083 6.01453 7.60003 5.99968 7.46299 5.94291C7.32595 5.88614 7.20881 5.79001 7.1264 5.66668C7.04399 5.54334 7 5.39834 7 5.25C7 5.05109 7.07902 4.86032 7.21967 4.71967C7.36032 4.57902 7.55109 4.5 7.75 4.5ZM8.5 11.5C8.23479 11.5 7.98043 11.3946 7.7929 11.2071C7.60536 11.0196 7.5 10.7652 7.5 10.5V8C7.36739 8 7.24022 7.94732 7.14645 7.85355C7.05268 7.75979 7 7.63261 7 7.5C7 7.36739 7.05268 7.24021 7.14645 7.14645C7.24022 7.05268 7.36739 7 7.5 7C7.76522 7 8.01957 7.10536 8.20711 7.29289C8.39465 7.48043 8.5 7.73478 8.5 8V10.5C8.63261 10.5 8.75979 10.5527 8.85356 10.6464C8.94732 10.7402 9 10.8674 9 11C9 11.1326 8.94732 11.2598 8.85356 11.3536C8.75979 11.4473 8.63261 11.5 8.5 11.5Z"
                      fill="#8F90A6"
                    />
                  </svg>
                </Typography>

                <Typography
                  sx={{
                    marginTop: "15px",
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      width: "15px",
                      height: "15px",
                      backgroundColor: "#ED1C24",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                    }}
                  ></span>
                  <span
                    style={{
                      marginRight: "5px",
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  >
                    Danger (6)
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8 1.5C6.71442 1.5 5.45772 1.88122 4.3888 2.59545C3.31988 3.30968 2.48676 4.32484 1.99479 5.51256C1.50282 6.70028 1.37409 8.00721 1.6249 9.26809C1.8757 10.529 2.49477 11.6872 3.40381 12.5962C4.31285 13.5052 5.47104 14.1243 6.73192 14.3751C7.99279 14.6259 9.29973 14.4972 10.4874 14.0052C11.6752 13.5132 12.6903 12.6801 13.4046 11.6112C14.1188 10.5423 14.5 9.28558 14.5 8C14.4982 6.27665 13.8128 4.62441 12.5942 3.40582C11.3756 2.18722 9.72335 1.50182 8 1.5ZM7.75 4.5C7.89834 4.5 8.04334 4.54399 8.16668 4.6264C8.29002 4.70881 8.38615 4.82594 8.44291 4.96299C8.49968 5.10003 8.51453 5.25083 8.48559 5.39632C8.45665 5.5418 8.38522 5.67544 8.28033 5.78033C8.17544 5.88522 8.04181 5.95665 7.89632 5.98559C7.75083 6.01453 7.60003 5.99968 7.46299 5.94291C7.32595 5.88614 7.20881 5.79001 7.1264 5.66668C7.04399 5.54334 7 5.39834 7 5.25C7 5.05109 7.07902 4.86032 7.21967 4.71967C7.36032 4.57902 7.55109 4.5 7.75 4.5ZM8.5 11.5C8.23479 11.5 7.98043 11.3946 7.7929 11.2071C7.60536 11.0196 7.5 10.7652 7.5 10.5V8C7.36739 8 7.24022 7.94732 7.14645 7.85355C7.05268 7.75979 7 7.63261 7 7.5C7 7.36739 7.05268 7.24021 7.14645 7.14645C7.24022 7.05268 7.36739 7 7.5 7C7.76522 7 8.01957 7.10536 8.20711 7.29289C8.39465 7.48043 8.5 7.73478 8.5 8V10.5C8.63261 10.5 8.75979 10.5527 8.85356 10.6464C8.94732 10.7402 9 10.8674 9 11C9 11.1326 8.94732 11.2598 8.85356 11.3536C8.75979 11.4473 8.63261 11.5 8.5 11.5Z"
                      fill="#8F90A6"
                    />
                  </svg>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
