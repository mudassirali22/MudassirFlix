import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaGithub,FaLinkedin  } from "react-icons/fa";

const Footer = () => {

  return (
    <footer className="bg-gray-900 text-gray-400 py-8 pb-0 pl-0 ">
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white"><img src="/clapperboard.svg" className="h-7 w-7" alt="clapperboard" />  MudassirFlix</h2>
          <p className="mt-3 text-sm">
            Your ultimate destination for movies and shows. Discover, stream, and
            enjoy the best cinema worldwide.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink  to="/home"  className="hover:text-red-500">Home</NavLink></li>
            <li><NavLink  to="/movies" className="hover:text-red-500">Movies</NavLink></li>
            <li><NavLink  to="/about" className="hover:text-red-500">About Us</NavLink></li>
            <li><NavLink  to="/contact" className="hover:text-red-500">Contact</NavLink></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Social Links</h3>
          <div className="flex  space-x-4 ">
            <NavLink to="https://www.linkedin.com/in/mudassir-a-ba721830b/"  target="_blank" rel="noopener noreferrer" className="hover:text-red-500"> <span><FaLinkedin/></span>Linkdin</NavLink>
            <NavLink to="https://github.com/mudassirali22" target="_blank" rel="noopener noreferrer" className="hover:text-red-500"> <span><FaGithub/></span> Github</NavLink>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 border-t border-gray-700 mt-8 pt-4">
        © {new Date().getFullYear()} MudassirFlix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
