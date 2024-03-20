import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";
import { useState } from "react";
import { motion } from "framer-motion"; 
import "../css/urbanNest.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { isLoggedIn } = useAppContext();

  return (
    <motion.div // motion animation wrapper
      initial={{ opacity: 0, y: -50 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animation when component is mounted
      transition={{ duration: 0.5 }} // Animation duration
      className="bg-gray-800 py-6 shadow-lg" 
    >
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl pl-5 md:text-xl text-orange font-bold tracking-tight">
          <Link to="/">
            <img
              src="src/assets/UrbanNestLogo.png"
              alt="UrbanNest.com"
              className="w-32 h-14 rounded-md"
            />
          </Link>
        </span>

        {/* Mobile menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-orange font-bold bg-white px-2 py-2"
          >
            Menu
          </button>
          {isMenuOpen && (
            <motion.div // motion animation wrapper
              initial={{ opacity: 0, y: -20 }} // Initial animation state
              animate={{ opacity: 1, y: 0 }} // Animation when menu is opened
              transition={{ duration: 0.3 }} // Animation duration
              className="absolute top-16 right-0 bg-white p-4 shadow-md"
            >
              {/* Menu items */}
              <Link
                to="/aboutus"
                className="block mb-2 text-orange font-bold"
              >
                About&nbsp;us
              </Link>
              <Link
                to="/contactus"
                className="block mb-2 text-orange font-bold"
              >
                Contact&nbsp;us
              </Link>
              {isLoggedIn ? (
                <>
                  <Link
                    to="/my-bookings"
                    className="block mb-2 text-orange font-bold"
                  >
                    My Bookings
                  </Link>
                  <Link
                    to="/my-hotels"
                    className="block mb-2 text-orange font-bold"
                  >
                    My Hotels
                  </Link>
                  <SignOutButton />
                </>
              ) : (
                <Link
                  to="/sign-in"
                  className="block mb-2 text-orange font-bold"
                >
                  Login
                </Link>
              )}
            </motion.div>
          )}
        </div>

        {/* Desktop and Tablet view */}
        <span className="hidden md:flex space-x-2">
          {/* Menu items */}
          <Link
            className="flex items-center text-orange px-3 md:px-6 font-bold hover:bg-white"
            to="/aboutus"
          >
            About us
          </Link>
          <Link
            className="flex items-center text-orange px-3 md:px-6 font-bold hover:bg-white"
            to="/contactus"
          >
            Contact us
          </Link>
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-orange px-3 md:px-6 font-bold hover:bg-white"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-orange px-3 md:px-6 font-bold hover:bg-white"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex items-center rounded-md p-2 bg-white text-orange px-3 md:px-6 font-bold"
            >
              Login
            </Link>
          )}
        </span>
      </div>
    </motion.div>
  );
};

export default Header;
