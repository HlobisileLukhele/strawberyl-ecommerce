import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {FaSearch, FaShoppingCart, FaUser} from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import Footer from './Footer';
import strawberylLogo from "../assets/Strawberyl-logo.png";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
              <Link to="/" className="text-[#c8937b] font-bold">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#c8937b]">About</Link>
            </li>
            <li className="relative group">
              <Link to="/shop" className="hover:text-[#c8937b]">Shopping</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#c8937b]">Contact</Link>
            </li>
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-4 text-xl text-gray-700">
            <Link to="/login">
              <FaUser className="cursor-pointer hover:text-[#c8937b]" />
            </Link>
            <FaSearch className="cursor-pointer hover:text-[#c8937b]" />
            <FaShoppingCart className="cursor-pointer hover:text-[#c8937b]" />

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
              <li><Link to="/" className="text-[#c8937b] font-bold" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/about" className="hover:text-[#c8937b]" onClick={toggleMenu}>About</Link></li>
              <li><Link to="/shop" className="hover:text-[#c8937b]" onClick={toggleMenu}>Shop</Link></li>
              <li><Link to="/contact" className="hover:text-[#c8937b]" onClick={toggleMenu}>Contact</Link></li>
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