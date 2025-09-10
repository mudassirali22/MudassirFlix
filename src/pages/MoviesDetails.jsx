import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

// Movies detail Component
const MoviesDetails = () => {
  const loaderData = useLoaderData(); // useLoaderData hook to get data of (movieDetailApi) from utils
  const navigate = useNavigate();

  console.log("loader data", loaderData);

  const {
    Title,
    Type,
    imdbRating,
    Writer,
    Actors,
    Awards,
    BoxOffice,
    Country,
    Director,
    Genre,
    Language,
    Plot,
    Poster,
    Released,
    Runtime,
  } = loaderData;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      
      <div className="w-full max-w-4xl">
        <div className="bg-white shadow-lg border border-gray-100 rounded-3xl p-6 flex flex-col md:flex-row gap-6">
          {/* Poster */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              className="rounded-3xl shadow-lg w-full h-auto object-cover"
              src={Poster}
              alt={Title}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col space-y-4 w-full md:w-2/3">
            {/* Title + Rating */}
            <div className="flex justify-between items-start flex-wrap gap-2">
              <h2 className="text-2xl md:text-3xl font-bold">{Title}</h2>
              <div className="bg-yellow-400 font-bold rounded-xl px-3 py-1">
                Imdb: {imdbRating}
              </div>
            </div>

            {/* Basic Info */}
            <div className="space-y-1">
              <div className="text-sm text-gray-400">{Type}</div>
              <div className="text-lg text-gray-800">
                <strong>Released On:</strong> {Released}
              </div>
              <div>
                <strong>Country:</strong> {Country}
              </div>
            </div>

            {/* Plot + Genre */}
            <div>
              <p className="text-gray-500 text-sm md:text-base">{Plot}</p>
              <p className="text-xl md:text-2xl font-bold mt-2">{Genre}</p>
            </div>

            {/* Other Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm md:text-base">
              <div>
                <strong>Caste:</strong> {Actors}
              </div>
              <div>
                <strong>Writer:</strong> {Writer}
              </div>
              <div>
                <strong>Director:</strong> {Director}
              </div>
              <div>
                <strong>Language:</strong> {Language}
              </div>
              <div>
                <strong>Runtime:</strong> {Runtime}
              </div>
              <div>
                <strong>Awards:</strong> {Awards}
              </div>
              <div>
                <strong>BoxOffice:</strong> {BoxOffice}
              </div>
            </div>

            <button
              onClick={() => navigate(-1)}
              className="bg-gray-700 py-2 px-2 rounded-3xl text-white cursor-pointer hover:bg-gray-600 hover:scale-102 transform transition duration-500"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesDetails;
