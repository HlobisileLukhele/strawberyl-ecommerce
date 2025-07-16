import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {FaSearch, FaShoppingCart, FaUser} from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import Footer from './Footer';
import strawberylLogo from "../assets/Strawberyl-logo.png";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <>
      <header className="bg-white shadow-md w-full">
        {/* Main Nav */}
        <nav className="flex justify-between items-center px-4 lg:px-20 py-2">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/">
              <img
                src={strawberylLogo}
                alt="Logo"
                className="w-14 h-14 rounded-md object-contain"
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex gap-10 text-gray-500 font-medium text-lg items-center">
            <li>
              <Link to="/" className="text-green-400 font-bold">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-400">About</Link>
            </li>
            <li className="relative group">
              <button
                className="hover:text-green-500"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                Shopping
              </button>
              {/* Dropdown */}
              <div
                className={`absolute top-full left-0 mt-2 bg-white shadow-md rounded-md w-40 p-2 z-50 transition duration-300 ${
                  isDropdownOpen ? "block" : "hidden"
                }`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <ul className="flex flex-col gap-2 text-sm text-gray-700">
                  <li><Link to="/earings" className="hover:text-green-500">Earings</Link></li>
                  <li><Link to="/bags" className="hover:text-green-500">Bags</Link></li>
                  <li><Link to="#" className="hover:text-green-500">Straw-hats</Link></li>
                  <li><Link to="#" className="hover:text-green-500">Belts</Link></li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-500">Contact</Link>
            </li>
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-4 text-xl text-gray-700">
            <Link to="/login">
              <FaUser className="cursor-pointer hover:text-green-500" />
            </Link>
            <FaSearch className="cursor-pointer hover:text-green-500" />
            <FaShoppingCart className="cursor-pointer hover:text-green-500" />

            {/* Hamburger Icon */}
            <FaBars
              className="lg:hidden cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-5 transition-transform">
            <div className="flex justify-end mb-4">
              <LiaTimesSolid
                className="text-2xl cursor-pointer"
                onClick={toggleMenu}
              />
            </div>
            <ul className="flex flex-col gap-5 text-gray-700 text-lg">
              <li><Link to="/" className="text-green-500 font-bold" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/about" className="hover:text-green-500" onClick={toggleMenu}>About</Link></li>
              <li className="flex flex-col">
                <span className="hover:text-green-500">Shop</span>
                <ul className="pl-4 mt-2 text-sm text-gray-500">
                  <li><Link to="/earings" className="block py-1 hover:text-green-500" onClick={toggleMenu}>Earings</Link></li>
                  <li><Link to="/bags" className="block py-1 hover:text-green-500" onClick={toggleMenu}>Bags</Link></li>
                  <li><Link to="#" className="block py-1 hover:text-green-500" onClick={toggleMenu}>Straw-hats</Link></li>
                  <li><Link to="#" className="block py-1 hover:text-green-500" onClick={toggleMenu}>Belts</Link></li>
                </ul>
              </li>
              <li><Link to="/contact" className="hover:text-green-500" onClick={toggleMenu}>Contact</Link></li>
            </ul>
          </div>
        )}
      </header>
      <Outlet />  
      <Footer />
    </>
  );
};

export default Navbar;