import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ user = "Guest", setUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoutMessage, setLogoutMessage] = useState(""); // State for logout message
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    setUser("Guest"); // Reset user to "Guest" on logout
    localStorage.removeItem("token"); // Remove token if stored
    setLogoutMessage("You have logged out."); // Show logout message
    setTimeout(() => {
      setLogoutMessage(""); // Hide message after 3 seconds
    }, 3000);
    navigate("/login"); // Redirect to login page
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 to-black shadow-lg z-10">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide text-white">
          TPR Wealth
        </h1>

        {/* User Info */}
        <h2 className="hidden sm:block text-xl font-bold text-gray-300">
          {user}
        </h2>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } sm:flex sm:items-center sm:justify-center bg-gray-800 sm:bg-transparent`}
      >
        <ul className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 px-4 py-2 sm:p-0 text-center">
          <li>
            <Link
              to="/"
              className="block text-white hover:text-gray-300 px-4 py-2 rounded-lg"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/mutual-funds"
              className="block text-white hover:text-gray-300 px-4 py-2 rounded-lg"
            >
              Learn
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block text-white hover:text-gray-300 px-4 py-2 rounded-lg"
            >
              Contact
            </Link>
          </li>

          {/* Profile and Logout Buttons (Only if user is not "Guest") */}
          {user !== "Guest" && (
            <>
              
              <li>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-white hover:text-gray-300 px-4 py-2 rounded-lg"
                >
                  Logout
                </button>
              </li>
            </>
          )}

          {/* Login Button (Only if user is "Guest") */}
          {user === "Guest" && (
            <li>
              <Link
                to="/login"
                className="block text-white hover:text-gray-300 px-4 py-2 rounded-lg"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>

      {/* Logout Message */}
      {logoutMessage && (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg">
          {logoutMessage}
        </div>
      )}
    </header>
  );
};

export default Navbar;
