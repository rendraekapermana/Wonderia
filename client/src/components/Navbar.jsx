import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-5 px-5 md:px-10 lg:px-16 xl:px-20 z-50">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img
            src="https://ihqqppufevqblzjtbdrn.supabase.co/storage/v1/object/public/logos//Logo%20Wonderia.png"
            alt="Logo Wonderia"
            className="w-24 md:w-28 lg:w-32"
          />

          {/* Desktop Navbar */}
          <ul className="hidden md:flex flex-row gap-5 lg:gap-8 text-sm lg:text-base">
            <li className="text-gray-800 hover:text-[#975DC1] hover:underline transition-all duration-300">
              <a href="/">Tickets</a>
            </li>
            <li className="text-gray-800 hover:text-[#975DC1] hover:underline transition-all duration-300">
              <a href="/attractions">Attractions</a>
            </li>
            <li className="text-gray-800 hover:text-[#975DC1] hover:underline transition-all duration-300">
              <a href="/about">About Us</a>
            </li>
            <li className="text-gray-800 hover:text-[#975DC1] hover:underline transition-all duration-300">
              <a href="/help">Help</a>
            </li>
          </ul>

          {/* Desktop Auth Buttons */}
          <ul className="hidden md:flex flex-row gap-2 lg:gap-4">
            <li className="px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-2 text-sm sm:text-base border-2 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all">
              <Link to="/login">Login</Link>
            </li>
            <li className="bg-[#975DC1] text-white px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-2 text-sm sm:text-base border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all">
              <Link to="/register">Create free account</Link>
            </li>
          </ul>

          {/* Burger Menu Button (Mobile & Tablet) */}
          <button onClick={toggleMenu} className="md:hidden text-2xl">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-md md:hidden transition-all duration-300 ${
            isOpen ? "max-h-[400px] py-5" : "max-h-0 py-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col items-center gap-4 text-sm">
            <li
              onClick={closeMenu}
              className="text-gray-800 hover:text-[#975DC1] hover:underline transition-all duration-300"
            >
              <a href="/">Tickets</a>
            </li>
            <li
              onClick={closeMenu}
              className="text-gray-800 hover:text-[#975DC1] hover:underline transition-all duration-300"
            >
              <a href="/attractions">Attractions</a>
            </li>
            <li
              onClick={closeMenu}
              className="text-gray-800 hover:text-[#975DC1] hover:underline transition-all duration-300"
            >
              <a href="/about">About Us</a>
            </li>
            <li
              onClick={closeMenu}
              className="text-gray-800 hover:text-[#975DC1] hover:underline transition-all duration-300"
            >
              <a href="/help">Help</a>
            </li>
            <li className="px-4 py-1.5 border-2 border-black rounded-xl shadow-md hover:shadow-none transition-all">
              <Link to="/login" onClick={closeMenu}>
                Login
              </Link>
            </li>
            <li className="bg-[#975DC1] text-white px-4 py-1.5 border-2 border-black rounded-xl shadow-md hover:shadow-none transition-all">
              <Link to="/register" onClick={closeMenu}>
                Create free account
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Spacer agar konten tidak tertutup oleh navbar */}
      <div className="pt-[80px]"></div>
    </>
  );
};

export default Navbar;
