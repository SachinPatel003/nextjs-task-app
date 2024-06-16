import React from "react";
import { Header } from "@/components/Header";
import { Box } from "@mui/material";

function AppLayout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <Box
        sx={(theme) => ({
          minHeight: "100vh",
          padding: "50px",
          boxSizing: "border-box",
          backgroundColor: "#14192F",
          color: "white",
          paddingTop: "160px",
          [theme.breakpoints.down("md")]: {
            padding: "10px",
            paddingTop: "90px",
          },
        })}
      >
        {children}
      </Box>
    </React.Fragment>
  );
}

export { AppLayout };
