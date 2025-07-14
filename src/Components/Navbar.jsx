import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FaPhoneAlt, FaEnvelope, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import { LiaTimesSolid } from 'react-icons/lia';

const Header = () => {
    const isSmallDevice = useMediaQuery({ query: 'only screen and (max-width: 1024px)' });
    const [isMenuToggled, setIsMenuToggled] = useState(false);

    const handletoggleMenu = () => {
        setIsMenuToggled(!isMenuToggled);
    };

    return (
        <header className="bg-white shadow-md">
            {/* Top bar for logo, search, and contact information */}
            <div className="hidden lg:flex flex-col md:flex-row items-center justify-between bg-[#FFFBD6]">
                {/* Logo */}
                <div className="hidden lg:flex items-center space-x-2 mx-3">
                    <img
                        src="/images/logo.png"
                        alt="Logo"
                        className="w-12 h-12 object-cover rounded-full"
                    />
                </div>

                {/* Search bar with icon visible on larger screens */}
                {!isSmallDevice && (
                    <div className="flex items-center w-full md:w-1/3 bg-white rounded-full p-2 my-2 md:my-0 relative">
                        <input
                            type="text"
                            placeholder="Type to search..."
                            className="w-full bg-transparent focus:outline-none pl-4 text-black"
                        />
                        <FaSearch className="absolute right-4 text-green-600" />
                    </div>
                )}
            </div>

            {/* Contact info and Login/Register (visible on larger screens) */}
            {!isSmallDevice && (
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-2 text-black">
                    <div className="flex items-center space-x-2">
                        <FaPhoneAlt className="text-red-600" />
                        <span>Strawberyl-baamboo.co.za</span>
                    </div>
                    <div className="flex items-center space-x-2 my-2">
                        <FaEnvelope className="text-red-600" />
                        <span>Login</span>/<span>Register</span>
                    </div>
                </div>
            )}

            {/* Navigation bar */}
            <nav className="bg-red-600">
                <div className="container mx-auto flex items-center justify-between p-4">
                    {/* Logo for navigation bar */}
                    {!isSmallDevice && (
                        <div className="flex items-center space-x-2">
                            <img
                                src="/images/logo.png"
                                alt="Logo"
                                className="w-12 h-12 object-cover rounded-full"
                            />
                        </div>
                    )}

                    {/* Nav list for large screen */}
                    {!isSmallDevice ? (
                        <div className="flex space-x-4 items-center text-white font-semibold mx-20">
                            <a href="#" className="hover:text-yellow-400">Home</a>
                            <a href="#" className="hover:text-yellow-400">About Us</a>
                            <a href="#" className="hover:text-yellow-400">Shop</a>
                            <a href="#" className="hover:text-yellow-400">Contact Us</a>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-4">
                            {/* Search icon for small screens */}
                            <FaSearch className="text-white text-2xl cursor-pointer" />

                            {/* Cart icon for small screens */}
                            <FaShoppingCart className="text-white text-2xl cursor-pointer" />

                            {/* Menu bar icon for small screens */}
                            <button
                                className="rounded-md p-4"
                                onClick={handletoggleMenu}
                            >
                                <FaBars className="text-2xl text-white" />
                            </button>
                        </div>
                    )}
                </div>

                {/* Mobile Menu */}
                {isSmallDevice && isMenuToggled && (
                    <div className="fixed top-0 right-0 z-40 h-full w-[300px] bg-red-700 text-white drop-shadow-xl">
                        <div className="flex justify-end p-4">
                            <button onClick={handletoggleMenu}>
                                <LiaTimesSolid className="text-3xl text-gray-300" />
                            </button>
                        </div>
                        <div className="flex flex-col items-center gap-6 text-lg uppercase font-semibold">
                            <a href="#" className="hover:text-yellow-400">Home</a>
                            <a href="#" className="hover:text-yellow-400">About Us</a>
                            <a href="#" className="hover:text-yellow-400">Shop</a>
                            <a href="#" className="hover:text-yellow-400">Contact Us</a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;