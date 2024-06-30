import React, { useEffect, useState } from "react";
import useLogo from "../../Hook/useLogo";
import { Link } from "react-router-dom";

const Footer = () => {
  const [logo, setLogo] = useLogo();
  const [latestLogo, setLatestLogo] = useState(null);

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

  return (
    <footer className="bg-gray-100 px-16 text-gray-800 py-10">
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
            <p className="text-gray-600">
              Grursus mal suada faci Lorem to the ipsum dolarorit more ametion
              more consectetur elit.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 hover:underline"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 hover:underline"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 hover:underline"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 hover:underline"
              >
                <i className="fab fa-pinterest"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 hover:underline"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          {/* <div className="w-full lg:w-1/5 md:w-1/2 mb-8">
            <h4 className="text-lg font-bold mb-4">Workflows</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 hover:underline">
                  Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 hover:underline">
                  Reporting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 hover:underline">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 hover:underline">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 hover:underline">
                  Customers
                </a>
              </li>
            </ul>
          </div> */}
          <div className="w-full lg:w-1/5 md:w-1/2 mb-8">
            <h4 className="text-lg font-bold mb-4">Important Link</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-blue-500 hover:underline"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-blue-500 hover:underline"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/faq"
                  className="text-gray-600 hover:text-blue-500 hover:underline"
                >
                  Faq & Policies
                </Link>
              </li>

              {/* <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 hover:underline">
                  S
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 hover:underline">
                  Privacy
                </a>
              </li> */}
            </ul>
          </div>
          <div className="w-full lg:w-1/5 md:w-1/2 mb-8">
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 hover:underline"
                >
                  Web Design
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 hover:underline"
                >
                  Graphic Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 hover:underline"
                >
                  Digital Marketing
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-gray-600 hover:text-blue-500 hover:underline">
                  Creative Solution
                </a>
              </li> */}
            </ul>
          </div>
          <div className="w-full lg:w-1/5 md:w-1/2 mb-8">
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            {/* <p className="text-gray-600">
              Grursus mal suada faci lisis Lorem to ipsum consectetur.
            </p> */}
            <ul className="spaoce-y-2 mt-4">
              <li className="flex items-center text-gray-600 hover:text-blue-500 ">
                <i className="fas fa-map-marker-alt mr-2"></i>
                Samnagar, Satkhira, Khulna, Bangladesh
              </li>
              <li className="flex items-center text-gray-600 hover:text-blue-500 hover:underline">
                <Link
                  to="https://hellodigitalnetwork.com/"
                  className="text-gray-600 hover:text-blue-500 hover:underline ml-2"
                >
                  Portfolio Website
                </Link>
              </li>
              <li className="flex items-center text-gray-600 hover:text-blue-500">
                <i className="fas fa-phone mr-2"></i>
                +880 1718 767 738
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-600 mt-8">
          © 2024{" "}
          <a
            href="https://hellodigitalnetwork.com/"
            className="text-gray-600 hover:text-blue-500 hover:underline"
          >
            Digital Network
          </a>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
