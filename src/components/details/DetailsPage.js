import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const DetailsPage = ({ singleMovie }) => {
  console.log(">>>", singleMovie);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <Box
        sx={{
          height: "300px",
          backgroundColor: "#102840",
          borderRadius: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontSize: "30px" }}>Poster</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "30px" }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                height: "370px",
                overflow: "hidden",
                borderRadius: "30px",
                width: "250px",
              }}
            >
              <img
                src={singleMovie.Poster}
                alt={singleMovie.title}
                loading="lazy"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                color: "lightgray",
                overflow: "hidden",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                {singleMovie.Plot}
              </Typography>
              <Box>
                <Typography sx={{ fontSize: "16px", whiteSpace: "wrap" }}>
                  Type
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    whiteSpace: "wrap",
                    textTransform: "capitalize",
                  }}
                >
                  {singleMovie.Type}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "16px", whiteSpace: "wrap" }}>
                  Released Date
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    whiteSpace: "wrap",
                    textTransform: "capitalize",
                  }}
                >
                  {singleMovie.Released}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "16px", whiteSpace: "wrap" }}>
                  Runtime
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    whiteSpace: "wrap",
                    textTransform: "capitalize",
                  }}
                >
                  {singleMovie.Runtime}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "16px", whiteSpace: "wrap" }}>
                  Genre
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    whiteSpace: "wrap",
                    textTransform: "capitalize",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  {singleMovie.Genre}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DetailsPage;
