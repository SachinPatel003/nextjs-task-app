import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";
import { AppLayout } from "@/layouts/AppLayout";
import { client } from "@/utils/api-client";
import {
  Box,
  Typography,
  TextField,
  Grid,
  InputAdornment,
} from "@mui/material";
import debounce from "lodash.debounce";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Card from "@/components/card/Card";
import Link from "next/link";

function TvShow({ initialMovies, initialSearchTerm }) {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [movies, setMovies] = useState(initialMovies);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm || "");

  useEffect(() => {
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);

  const fetchMovies = async (search) => {
    try {
      setLoading(true);
      let data;
      if (search.trim() === "") {
        data = await client("", { params: { s: "series" } });
      } else {
        data = await client("", { params: { s: search, type: "series" } });
      }
      setMovies(data.Search ? data.Search.slice(0, 8) : []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const debouncedFetchMovies = useCallback(debounce(fetchMovies, 1000), []);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    debouncedFetchMovies(value);
  };

  return (
    <AppLayout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography fontSize="44px">MailrHeroco</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography fontSize="10px">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type 😊
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid xs={12} md={6} lg={4}>
              <TextField
                placeholder="Search TV shows"
                value={searchTerm}
                onChange={handleSearchChange}
                fullWidth
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchRoundedIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    fontSize: "14px",
                    fontWeight: 500,
                    borderRadius: "16px",
                    border: "2px solid #102840",
                    textColor: "red",
                  },
                  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                    {
                      borderWidth: "4px",
                    },
                  "& .MuiSvgIcon-root": {
                    color: "#102840",
                    height: "30px",
                    width: "30px",
                  },
                  "& .css-8j6b76-MuiInputBase-root-MuiOutlinedInput-root": {
                    color: "white !important",
                  },
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "30px",
              justifyContent: "center",
            }}
          >
            {movies?.map((movie, index) => (
              <Link
                href={`/tv-shows/${movie.imdbID}`}
                style={{ textDecoration: "none" }}
              >
                <Card key={index} movie={movie} isLoading={isLoading} />
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>
    </AppLayout>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const search = query.search || "";

  try {
    let data;
    if (search.trim() === "") {
      data = await client("", { params: { s: "series" } });
    } else {
      data = await client("", { params: { s: search, type: "series" } });
    }

    return {
      props: {
        initialMovies: data.Search ? data.Search : [],
        initialSearchTerm: search,
      },
    };
  } catch (error) {
    return {
      props: {
        initialMovies: [],
        initialSearchTerm: search,
      },
    };
  }
}

export default TvShow;
