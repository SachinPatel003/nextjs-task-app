import { Box } from "@mui/material";
import React from "react";
import Link from "next/link";
import MovieIcon from "@mui/icons-material/Movie";
import { StyledButton } from "./style";
import EastIcon from "@mui/icons-material/East";

function Header() {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        height: "60px",
        backgroundColor: "#121829",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 50px",
        position: "fixed",
        top: "0",
        width: "100vw",
        zIndex: 100,
      }}
    >
      <Link href={`/`}>
        <Box>
          <svg width="40px" height="40px" viewBox="0 0 1000 1000">
            <path
              fill="#1EA5FC"
              d="M231.4,394.07L669.5,119.2C752.42,67.18,860,126.99,860,225.13v549.74c0,98.13-107.58,157.95-190.5,105.93
		L231.4,605.93C153.41,556.99,153.41,443.01,231.4,394.07z"
              class="color-secondary"
            ></path>{" "}
            <path
              fill="#5A4AF4"
              d="M768.6,394.07L330.5,119.2C247.58,67.18,140,126.99,140,225.13v549.74c0,98.13,107.58,157.95,190.5,105.93
		l438.1-274.87C846.59,556.99,846.59,443.01,768.6,394.07z"
              class="color-primary"
            ></path>
          </svg>
        </Box>
      </Link>
      <Box
        sx={(theme) => ({
          display: "flex",
          gap: "30px",
          [theme.breakpoints.down("sm")]: {
            gap: "5px",
          },
        })}
      >
        <Link href={`/`}>
          <StyledButton variant="text" disableRipple size="small">
            All
          </StyledButton>
        </Link>
        <Link href={`/movie`}>
          <StyledButton variant="text" disableRipple size="small">
            Movie
          </StyledButton>
        </Link>
        <Link href={`/tv-shows`}>
          <StyledButton variant="text" disableRipple size="small">
            TV Show
          </StyledButton>
        </Link>
        {/* <StyledButton variant="text" disableRipple size="small">
          Suggest me <EastIcon fontSize="Small" />
        </StyledButton> */}
      </Box>
    </Box>
  );
}

export { Header };
