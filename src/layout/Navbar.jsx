import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-md">

      {/* login And SignUp buttons */}
      <div className="flex justify-end items-center px-4 sm:px-6 py-2 bg-gray-700 text-white">
        <div className="space-x-2 sm:space-x-3 mt-2">
          
          <NavLink
            to="/logIn"
            className={({ isActive }) =>
              `px-3 py-1 border border-white rounded-lg transition ${
                isActive
                  ? " text-blue-500 hover:bg-white"
                  : "hover:bg-white hover:text-black "
              }`
            }
          >
            Log In
          </NavLink>

          <NavLink
            to="/signUP"
            className={({ isActive }) =>
              `px-3 py-1 rounded-lg transition hover:bg-red-800 bg-red-700 ${
                isActive
                  ? " text-blue-500 "
                  : ""
              }`
            }
          >
            Sign Up
          </NavLink>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-gray-800 text-gray-300">
        <div className="flex items-center justify-between py-4 px-4 sm:px-10">
          {/* Logo */}
          <NavLink to="/">
            <h1 className="text-2xl font-bold text-white">MudassirFlix</h1>
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "hover:text-white transition"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "hover:text-white transition"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "hover:text-white transition"
              }
            >
              Movies
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "hover:text-white transition"
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <RxCross2 size={28} /> : <CiMenuFries size={28} />}
          </button>
        </div>

        {/* Mobile Links */}
        {isOpen && (
          <div className="flex flex-col items-center md:hidden bg-gray-900 py-4 space-y-4">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "hover:text-white transition"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "hover:text-white transition"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/movies"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "hover:text-white transition"
              }
            >
              Movies
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "hover:text-white transition"
              }
            >
              Contact
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
