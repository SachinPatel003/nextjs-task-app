import { Box, Skeleton, Typography } from "@mui/material";
import React from "react";

const Card = ({ movie, isLoading }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "250px",
          overflow: "hidden",
          borderRadius: "14px",
          padding: "5px",
          backgroundColor: "#102840",
          height: "410px",
          boxSizing: "border-box",
        }}
      >
        {isLoading ? (
          <React.Fragment>
            <Skeleton variant="rounded" height="80%" animation="wave" />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          </React.Fragment>
        ) : (
          <>
            <Box
              sx={{
                height: "350px",
                overflow: "hidden",
                borderRadius: "10px",
              }}
            >
              <img src={movie.Poster} alt={movie.title} loading="lazy" />
            </Box>
            <Box
              sx={{
                display: "flex",
                height: "60px",
                padding: "20px",
                boxSizing: "border-box",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  whiteSpace: "nowrap",
                  color: "lightgrey",
                  fontWeight: 600,
                  fontSize: "15px",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  textDecorationLine: "none",
                }}
              >
                {movie.Title}
              </Typography>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default Card;
