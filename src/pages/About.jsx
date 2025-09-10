import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-full cursor-default bg-white shadow-xl rounded-2xl p-10">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 text-center break-words mb-6">
        About <span className="text-red-500">MudassirFlix</span>
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-600 text-center mb-8">
        Welcome to
        <span className="inline-flex items-center gap-2 font-semibold text-gray-800 mx-1">
          MudassirFlix
          <img
            src="/clapperboard.svg"
            className="h-6 w-6"
            alt="clapperboard"
          />
        </span>
        your one-stop destination for movies, reviews, and entertainment
        updates. Our mission is to bring the magic of cinema closer to you with
        curated content, trending titles, and community-driven recommendations.
      </p>

      {/* Sections */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Mission */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold flex justify-center gap-2 text-gray-800 mb-3">
            <img src="/src/assets/direct-hit.svg" className="h-8 w-9" alt="direct-hit" /> Our Mission
          </h2>
          <p className="text-gray-600">
            At MudassirFlix, we aim to connect movie lovers with stories that
            inspire, entertain, and spark conversations. Whether you're a fan of
            Hollywood blockbusters or indie films, we've got you covered.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold flex justify-center gap-2 text-gray-800 mb-3">
             <img src="/src/assets/globe.svg" className="h-8 w-9" alt="globe" /> Our Vision
          </h2>
          <p className="text-gray-600">
            To become the most trusted platform for movie enthusiasts worldwide,
            providing access to authentic reviews, trending updates, and a
            vibrant community.
          </p>
        </div>
      </div>

      {/* Call to action */}
      <div className="mt-10 text-center">
        <NavLink to="/movies">
          <button className="px-6 py-3 bg-red-500 text-white rounded-lg text-lg cursor-pointer font-semibold hover:bg-red-700 transition">
            Explore Movies
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default About;
