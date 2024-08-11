import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowUp, FaArrowDown } from "react-icons/fa"; // Import icons
import useLogo from "../../Hook/useLogo";

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
    <footer className="bg-gray-900 px-16 text-white py-10 relative">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/5 md:w-1/2 mb-8">
          <div className="text-lg font-bold mb-2">
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
              <a
                href="#"
                className="text-white hover:text-blue-500 hover:underline"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-500 hover:underline"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-500 hover:underline"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-500 hover:underline"
              >
                <i className="fab fa-pinterest"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-500 hover:underline"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/5 md:w-1/2 mb-8">
            <h4 className="text-lg font-bold mb-4">Important Link</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-blue-500 hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-blue-500 hover:underline"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-white hover:text-blue-500 hover:underline"
                >
                  Faq & Policies
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/5 md:w-1/2 mb-8">
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-500 hover:underline"
                >
                  Web Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-500 hover:underline"
                >
                  Graphic Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-500 hover:underline"
                >
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/5 md:w-1/2 mb-8">
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 mt-4">
              <li className="flex items-center text-white hover:text-blue-500">
                <i className="fas fa-map-marker-alt mr-2"></i>
                Samnagar, Satkhira, Khulna, Bangladesh
              </li>
              <li className="flex items-center text-white hover:text-blue-500 hover:underline">
                <Link
                  to="https://hellodigitalnetwork.com/"
                  className="text-white hover:text-blue-500 hover:underline ml-2"
                >
                  Portfolio Website
                </Link>
              </li>
              <li className="flex items-center text-white hover:text-blue-500">
                <i className="fas fa-phone mr-2"></i>
                +880 1718 767 738
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-white mt-8">
          © 2024{" "}
          <a
            href="https://hellodigitalnetwork.com/"
            className="text-white hover:text-blue-500 hover:underline"
          >
            Digital Network
          </a>
          . All Rights Reserved
        </div>
      </div>
      {/* Scroll to Top/Bottom Button */}
      <button
        onClick={scrollToTopOrBottom}
        className="fixed bottom-4 right-4 bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 transition transform hover:scale-110"
      >
        {isAtTop ? <FaArrowUp size={20} /> : <FaArrowDown size={20} />}
      </button>
    </footer>
  );
};

export default Footer;
