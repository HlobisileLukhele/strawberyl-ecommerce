import { useState } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { FaBars, FaMoon } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import strawberylLogo from "../assets/Strawberyl-logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="bg-white shadow-md w-full">
      {/* Main Nav */}
      <nav className="flex justify-between items-center px-4 lg:px-20 py-2">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={strawberylLogo}
            alt="Logo"
            className="w-14 h-14 rounded-md object-contain"
          />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex gap-10 text-gray-500 font-medium text-lg items-center">
          <li>
            <a href="#" className="text-[#ab7c68] font-bold">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-[#ab7c68]">About</a>
          </li>
          <li className="relative group">
            <button
              className="hover:text-[#ab7c68]"
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
                <li><a href="#" className="hover:text-[#ab7c68]">Earings</a></li>
                <li><a href="#" className="hover:text-[#ab7c68]">Bags</a></li>
                <li><a href="#" className="hover:text-[#ab7c68]">Straw-hats</a></li>
                <li><a href="#" className="hover:text-[#ab7c68]">Belts</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#" className="hover:text-[#ab7c68]">Contact</a>
          </li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4 text-xl text-gray-700">
          <FaUser className="cursor-pointer hover:text-[#ab7c68]-500" />
          <FaSearch className="cursor-pointer hover:text-[#ab7c68]-500" />
          <FaShoppingCart className="cursor-pointer hover:text-[#ab7c68]-500" />

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
            <li><a href="#" className="text-[#ab7c68] font-bold">Home</a></li>
            <li><a href="#" className="hover:text-[#ab7c68]-500">About</a></li>
            <li className="flex flex-col">
              <span className="hover:text-[#ab7c68] ">Shop</span>
              <ul className="pl-4 mt-2 text-sm text-gray-500">
                <li><a href="#" className="block py-1 hover:text-[#ab7c68]">Earings</a></li>
                <li><a href="#" className="block py-1 hover:text-[#ab7c68]">Bags</a></li>
                <li><a href="#" className="block py-1 hover:text-[#ab7c68]">Straw-hats</a></li>
                <li><a href="#" className="block py-1 hover:text-[#ab7c68]">Belts</a></li>
              </ul>
            </li>
            <li><a href="#" className="hover:text-[#ab7c68]-500">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;