import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation to track the active route
import { FaBars, FaTimes } from "react-icons/fa"; // for icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current location/path
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to determine if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-blue-100 p-4 sticky top-0 z-10 shadow-2xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-black text-2xl font-bold">
          Grocery App
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Links for Desktop and Mobile */}
        <div
          className={`flex flex-col md:flex md:flex-row md:space-x-4 absolute md:static bg-blue-100 w-full md:w-auto left-0 md:left-auto top-14 md:top-0 p-4 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          <Link
            to="/"
            className={`text-black py-2 md:py-0 ${
              isActive("/") ? "underline text-blue-500" : "hover:text-gray-700"
            }`}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`text-black py-2 md:py-0 ${
              isActive("/products")
                ? "underline text-blue-500"
                : "hover:text-gray-700"
            }`}
          >
            Products
          </Link>
          <Link
            to="/about"
            className={`text-black py-2 md:py-0 ${
              isActive("/about")
                ? "underline text-blue-500"
                : "hover:text-gray-700"
            }`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`text-black py-2 md:py-0 ${
              isActive("/contact")
                ? "underline text-blue-500"
                : "hover:text-gray-700"
            }`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
