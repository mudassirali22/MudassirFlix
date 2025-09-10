import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="bg-gray-100">
      
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16 md:py-15">
          <div className="w-full md:w-1/2 text-center md:text-left px-4">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Welcome to <span className="text-red-500">MudassirFlix</span>
            </h1>

            {/* Paragraph */}
            <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-xl mx-auto md:mx-0">
              Explore the latest movies, find details, and enjoy your favorite
              films with us.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <NavLink
                to="/movies"
                className="px-6 py-3 bg-red-600 rounded-lg font-semibold hover:bg-red-700 transition text-center"
              >
                Browse Movies
              </NavLink>
              <NavLink
                to="/about"
                className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-black transition text-center"
              >
                Learn More
              </NavLink>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 h-[20rem] md:mt-0 pl-2 pt-10 flex justify-center">
            <img
              src="/movie banner.jpg"
              alt="Movies Banner"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose <span className="text-red-600">MudassirFlix?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold flex gap-2 justify-center mb-2">
               <img src="/clapperboard.svg" className="h-6 w-6" alt="clapperboard" /> Huge Collection</h3>
            <p className="text-gray-600">
              Browse thousands of movies across all genres and categories.
            </p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold flex justify-center gap-2 mb-2">
              <img src="src/assets/movie-camera.svg" className="h-7 w-7" alt="movie-camera" /> Movie Details</h3>
            <p className="text-gray-600">
              Get full information including posters, release year, and more.
            </p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold flex justify-center gap-2 mb-2">
              <img src="src/assets/star-shine.svg" className="h-9 w-9" alt="shine-star" /> Ratings & Details</h3>
            <p className="text-gray-600">
              Get complete movie details, cast info, and user ratings.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Start Your Movie Journey Today
        </h2>
        <p className="mt-4 text-lg text-gray-100">
          Sign up now and enjoy unlimited access to MudassirFlix.
        </p>

        <div className="mt-6">
          <NavLink
            to="/signUP"
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
          >
            Get Started
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;
