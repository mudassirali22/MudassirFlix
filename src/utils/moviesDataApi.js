const moviesdata = async () => {
  try {
    const movieQueries = [
      "batman",
      "titanic",
      "avengers",
      "superman",
      "marvels",
      "dark",
      "game",
    ];

    // Parallel fetch
    const requests = movieQueries.map(async (query) => {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      return res.json();
    });

    const results = await Promise.all(requests);

    // Merge all valid movies
    const allMovies = results
      .filter((data) => data.Response === "True")
      .flatMap((data) => data.Search);

    //  Remove duplicates
    const uniqueMovies = allMovies.filter(
      (movie, index, self) =>
        index === self.findIndex((dupmovie) => dupmovie.imdbID === movie.imdbID)
    );

    return uniqueMovies;
  } catch (error) {
    throw new Error("Data not found");
  }
};

export default moviesdata;
