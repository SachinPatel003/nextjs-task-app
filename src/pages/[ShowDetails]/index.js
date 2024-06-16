import DetailsPage from "@/components/details/DetailsPage";
import { AppLayout } from "@/layouts/AppLayout";
import { client } from "@/utils/api-client";
import { Box } from "@mui/material";

function AllDetails({ notFound, singleMovie }) {
  if (notFound)
    return (
      <Box as="h1" textAlign="center">
        Lol Something went wrong ...
      </Box>
    );

  return (
    <AppLayout>
      <DetailsPage singleMovie={singleMovie} />
    </AppLayout>
  );
}

export async function getServerSideProps({ params }) {
  const uuid = params?.ShowDetails;
  let singleMovie = null;

  try {
    singleMovie = await client("", { params: { i: uuid } });
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }

  if (!singleMovie) {
    return {
      props: { notFound: true }, // It will be passed to the page component as props
    };
  }

  return {
    props: { singleMovie }, // It will be passed to the page component as props
  };
}

export default AllDetails;
