import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./images/LOGO.png";

function Header() {
  // State to track the mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Render the Header component
  return (
    <>
      {/* Navigation */}
      <nav className="bg-gray-800 border border-black shadow-lg mt-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          {/* Logo */}
          <Link to="/templete" className="flex items-center bg-white p-2 opacity-85">
            <img src={logo} className="h-8 mr-3" alt="Almabetter Logo" />
          </Link>
          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {/* Mobile Menu */}
          <div className={`w-full md:flex md:w-auto ${isMobileMenuOpen ? "block" : "hidden"}`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0 md:border-0">
              {/* Resume Templates NavLink */}
              <li>
                <NavLink
                  exact
                  to="/templete"
                  className="block py-2 pl-3 pr-4  md:border-0  md:p-0 dark:text-white transform-gpu hover:rotate-3 "
                  onClick={toggleMobileMenu} // Close the mobile menu when clicked
                >
                  Resume Templates
                </NavLink>
              </li>
              {/* My Resumes NavLink */}
              <li>
                <NavLink
                  exact
                  to="/myresume"
                  className="block py-2 pl-3 pr-4  md:border-0  md:p-0 dark:text-white transform-gpu hover:rotate-3"
                  activeClassName="bg-blue-700"
                  onClick={toggleMobileMenu} // Close the mobile menu when clicked
                >
                  My Resumes
                </NavLink>
              </li>
              {/* About Us NavLink */}
              <li>
                <NavLink
                  exact
                  to="/about-us"
                  className="block py-2 pl-3 pr-4  md:border-0  md:p-0 dark:text-white transform-gpu hover:rotate-3"
                  activeClassName="bg-blue-700"
                  onClick={toggleMobileMenu} // Close the mobile menu when clicked
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
