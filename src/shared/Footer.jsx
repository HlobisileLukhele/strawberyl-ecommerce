import { BsEnvelopeAt } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom';

import strawberylLogo from "@/assets/Strawberyl-logo.png";

const Footer = () => {

  const linkClass = "text-sm text-white mb-4 hover:text-white/70  duration-200";

  return (
    <div className="w-full" id="footer">
      <footer className="w-full bg-[#7c8c7d]">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <a className="flex items-center justify-center md:justify-start">
                <img src={strawberylLogo} 
                alt="strawberyl bamboo logo" 
                className="max-w-[60px] my-auto " />
              </a>
              <p className=" text-sm text-white pt-2">
              Handcrafted bamboo accessories that blend elegance with sustainability. Each piece tells a story of craftsmanship and environmental consciousness.</p>
            </div>

            <div className="text-center md:text-left text-white">
              <h2 className="text-base md:text-lg font-medium tracking-widest uppercase mb-4">Quick Links</h2>
              <nav className="flex flex-col space-y-3">
                <Link to="#" className={linkClass}>Privacy Policy</Link>
                <Link to="#" className={linkClass}>Returns Policy</Link>
                <Link to="#" className={linkClass}>Terms & Conditions</Link>
                <Link to="#" className={linkClass}>Contact Us</Link>
              </nav>
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-base md:text-lg  text-white font-medium tracking-widest uppercase mb-4">Categories</h2>
              <nav className="flex flex-col space-y-3">
                <Link to="#" className={linkClass}>Earings</Link>
                <Link to="#" className={linkClass}>Bags</Link>
                <Link to="#" className={linkClass}>Straw Hats</Link>
                <Link to="#" className={linkClass}>Belts</Link>
              </nav>
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-base md:text-lg font-medium text-white tracking-widest uppercase mb-4">Contact</h2>
              <nav className="flex flex-col space-y-3">
                <a href="mailto:hello@konceptagency.co.za" 
                   className="flex items-center justify-center md:justify-start text-sm text-white group">
                  <BsEnvelopeAt className="size-4 mr-2" />
                  <span className="group-hover:text-white/70 duration-200">strawberylbamboo.co.za</span>
                </a>
                <a href="#" className="flex items-center justify-center md:justify-start text-sm text-white group">
                  <FiPhoneCall className="size-4 mr-2" />
                  <span className="group-hover:text-white/70 duration-200"> +27 68 692 0418</span>
                </a>
                <div className="flex justify-center md:justify-start space-x-4 mt-4">
                  <a href="#" 
                     target="_blank" 
                     className="text-white hover:text-white/70 duration-200">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" 
                     target="_blank" 
                     className="text-white hover:text-white/70 duration-200">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className=" bg-[#7c8c7d] border-t border-gray-100">
          <div className="mx-auto px-4 py-4">
            <p className="text-sm text-white text-center">
             &copy; 2025  Strawberyl-bamboo. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;