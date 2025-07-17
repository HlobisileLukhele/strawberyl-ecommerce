import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import strawberylLogo from "../assets/Strawberyl-logo.png";

const Footer = () => {
  return (
    <div className="w-full" id="footer">
      <footer className="w-full text-whie bg-[#7c8c7d]  body-font">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description Column */}
            <div className="text-center md:text-left">
              <a className="flex items-center justify-center md:justify-start">
                <img src={strawberylLogo} 
                alt="strawberyl bamboo logo" 
                className="max-w-[60px] my-auto " />
              </a>
              <p className=" md:text-md text-white pt-2">
              Handcrafted bamboo accessories that blend elegance with sustainability. Each piece tells a story of craftsmanship and environmental consciousness.              </p>
            </div>

            {/* Quick Links Column */}
            <div className="text-center md:text-left text-white">
              <h2 className="text-base md:text-lg font-bold tracking-widest uppercase title-font mb-4">Quick Links</h2>
              <nav className="flex flex-col space-y-3">
                <Link to="/About" className="text-base md:text-lg text-white hover:text-[#c8937b]">About</Link>
                <Link to="/Shop" className="text-base md:text-lg text-white hover:text-[#c8937b]">Shop</Link>
                <Link to="/Contact" className="text-base md:text-lg text-white hover:text-[#c8937b]">Contact</Link>
              </nav>
            </div>

            {/* Services Column */}
            <div className="text-center md:text-left">
              <h2 className="text-base md:text-lg  text-white font-bold tracking-widest uppercase title-font mb-4">Products</h2>
              <nav className="flex flex-col space-y-3">
                <Link to="/Earings" className="text-base md:text-lg text-white hover:text-[#c8937b]">Earings</Link>
                <Link to="/Bags" className="text-base md:text-lg text-white hover:text-[#c8937b]">Bags</Link>
                <Link to="/Strawhats" className="text-base md:text-lg text-white hover:text-[#c8937b]">Straw Hats</Link>
                <Link to="/Belts" className="text-base md:text-lg text-white hover:text-[#c8937b]">Belts</Link>
              </nav>
            </div>

            {/* Contact Column */}
            <div className="text-center md:text-left">
              <h2 className="text-base md:text-lg font-bold text-white tracking-widest uppercase title-font mb-4">Contact</h2>
              <nav className="flex flex-col space-y-3">
                <a href="mailto:hello@konceptagency.co.za" 
                   className="flex items-center justify-center md:justify-start text-base md:text-lg text-white hover:text-[#c8937b]">
                  <FaEnvelope className="w-3 h-3 mr-2" />
                  strawberylbamboo.co.za
                </a>
                <a className="flex items-center justify-center md:justify-start text-base md:text-lg text-white hover:text-[#c8937b]">
                  <FaPhoneAlt className="w-3 h-3 mr-2" />
                  +27 68 692 0418
                </a>
                <div className="flex justify-center md:justify-start space-x-4 mt-4">
                  <a href="http://www.facebook.com/konceptagency" 
                     target="_blank" 
                     className="text-white hover:text-[#c8937b]">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a href="http://www.instagram.com/konceptagency" 
                     target="_blank" 
                     className="text-white hover:text-[#c8937b]">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className=" bg-white font-semi-bold text-[#ab7c68]">
          <div className="container mx-auto px-4 py-4">
            <p className="text-base md:text-lg text-[#c8937b] font-bold text-center">
             &copy; 2025  Strawberyl-bamboo
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;