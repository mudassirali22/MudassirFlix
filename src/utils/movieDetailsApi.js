export const moviesDetailApi = async ({ params }) => {
  const movieID = params.moviedetails; // Here, the dynamic parameter from  route will come (movie id)
  console.log(movieID);

  try {
    const res = await fetch(
      `https://www.omdbapi.com/?i=${movieID}&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("data not found");
  }
};
