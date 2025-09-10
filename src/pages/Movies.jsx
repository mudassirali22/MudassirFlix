import React from "react";
import { useLoaderData, NavLink } from "react-router-dom";

const Movies = () => {
  const movies = useLoaderData(); // array of movies

  return (
    <div className="bg-gray-100 min-h-screen  p-14">

      {/* Page Heading */}
      <div className="text-5xl font-bold text-center p-8 flex items-center  justify-center gap-2">
        <img
          src="/clapperboard.svg"
          alt="Clapper Board"
          className="h-12 w-12"
        />
        <h1 className="pt-2">Movies</h1>
      </div>

      {/* Movies Grid */}
      <ul className="grid grid-cols-1 lg:w-6xl xl:w-full  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 cursor-pointer">
        {movies.map((curmovie, index) => {
          const { Poster, Title, imdbID, Year } = curmovie;

          return (
            <li
              key={index}
              className="bg-white  rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 flex flex-col h-[500px]"
            >
              {/* Poster */}
              <img
                className="w-full h-80 object-fill bg-gray-100"
                src={Poster}
                alt={Title}
              />
              {/* Content */}
              <div className="p-4 flex flex-col flex-1 items-center text-center">
                <h2 className="text-lg font-bold mb-2">{Title}</h2>

                {/* Year with Icon */}
                <p className="text-gray-500 mb-4 flex items-center gap-2">
                  <img
                    src="assets/calendar.svg"
                    className="w-5 h-5"
                    alt="calendar"
                  />
                  {Year}
                </p>

                {/* Button pinned to bottom */}
                <div className="mt-auto">
                  <NavLink to={`/movies/${imdbID}`}>
                    <button className="bg-gray-800 text-white px-4 py-2 rounded-xl shadow cursor-pointer hover:bg-gray-700 transition">
                      More Info
                    </button>
                  </NavLink>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
