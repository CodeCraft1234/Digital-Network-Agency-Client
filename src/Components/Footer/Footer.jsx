import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowUp,
  FaArrowDown,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import useLogo from "../../Hook/useLogo";
import { FaWebAwesome } from "react-icons/fa6";

const Footer = () => {
  const [logo, setLogo] = useLogo();
  const [latestLogo, setLatestLogo] = useState(null);
  const [isAtTop, setIsAtTop] = useState(true); // State to toggle icons

  useEffect(() => {
    if (logo && logo.length > 0) {
      const sortedLogo = [...logo].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      const latest = sortedLogo[0];
      setLogo(sortedLogo);
      setLatestLogo(latest);
    }
  }, [logo, setLogo]);

  const scrollToTopOrBottom = () => {
    if (isAtTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
    setIsAtTop(!isAtTop); // Toggle between top and bottom
  };

  return (
    <footer className="bg-gray-900 px-4 md:px-16 text-white py-10 relative">
      <div className="">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/5 md:w-1/2 mb-8">
            <div className="text-lg font-bold mb-2 -mt-10">
              {latestLogo && (
                <img
                  className="h-10 w-10 mt-2 sm:h-16 sm:w-16 md:h-14 md:w-14 lg:h-16 lg:w-16 transition-transform transform hover:scale-110"
                  src={latestLogo.photo}
                  alt="Logo"
                />
              )}
            </div>
            <p className="text-white">
              Grursus mal suada faci Lorem to the ipsum dolarorit more ametion
              more consectetur elit.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-[#1877F2]">
                <FaFacebookF className="rounded-lg" size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#1DA1F2]">
                <FaTwitter className="rounded-lg" size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#C13584]">
                <FaInstagram className="rounded-lg" size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#E60023]">
                <FaPinterestP className="rounded-lg" size={20} />
              </a>
              <a href="#" className="text-white hover:text-red-600">
                <FaYoutube className="rounded-lg" size={20} />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/5 md:w-1/2 mb-8 -mt-8">
            <h4 className="text-lg font-bold mb-4">Important Links</h4>
            <ul className="space-y-2 -mt-2">
              <li>
                <Link to="/about" className="text-white hover:text-blue-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-blue-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-white hover:text-blue-500">
                  FAQ & Policies
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/5 md:w-1/2 mb-8 -mt-8">
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 -mt-2">
              <li>
                <a href="#" className="text-white hover:text-blue-500">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-500">
                  Graphic Design
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-500">
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/5 md:w-1/2 mb-8 -mt-8">
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 -mt-2">
              <li className="flex items-center text-white">
                <FaMapMarkerAlt className="mr-2" size={18} />
                Samnagar, Satkhira, Khulna, Bangladesh
              </li>
              <li className="flex items-center text-white hover:text-blue-500">
                <FaWebAwesome className="mr-2" size={18} />
                <Link
                  to="https://hellodigitalnetwork.com/"
                  className="text-white hover:text-blue-500 ml-2"
                >
                  Portfolio Website
                </Link>
              </li>
              <li className="flex items-center text-white">
                <FaPhone className="mr-2" size={18} />
                +880 1718 767 738
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-gray-800 text-center text-white py-4">
          © 2024{" "}
          <a href="https://hellodigitalnetwork.com/" className="text-blue-500">
            Digital Network
          </a>
          . All Rights Reserved
        </div>
      </div>
      {/* Scroll to Top/Bottom Button */}
      <button
        onClick={scrollToTopOrBottom}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-[#05a0db] to-[#05a0db] text-white p-3 rounded-full shadow-lg hover:bg-[#05a0db] focus:outline-none focus:ring-2 focus:ring-[#05a0db] transition-transform transform hover:scale-110"
      >
        {isAtTop ? <FaArrowUp size={20} /> : <FaArrowDown size={20} />}
      </button>
    </footer>
  );
};

export default Footer;
