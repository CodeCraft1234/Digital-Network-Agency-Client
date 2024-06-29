import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-16 text-gray-800 py-10">
      <div className=" ">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/5 md:w-1/2 mb-8">
            <div className="text-lg font-bold mb-2">
              DigeCo.
            </div>
            <p className="text-gray-600">
              Grursus mal suada faci Lorem to the ipsum dolarorit more ametion more consectetur elit.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/5 md:w-1/2 mb-8">
            <h4 className="text-lg font-bold mb-4">Workflows</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Management</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Reporting</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Community</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Customers</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/5 md:w-1/2 mb-8">
            <h4 className="text-lg font-bold mb-4">Important Link</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">How to work</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Our Media</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Privacy</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/5 md:w-1/2 mb-8">
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Web Design</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Development</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Graphic Design</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Branding</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Creative Solution</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/5 md:w-1/2 mb-8">
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <p className="text-gray-600">
              Grursus mal suada faci lisis Lorem to ipsum consectetur.
            </p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-center text-gray-600 hover:text-blue-500">
                <i className="fas fa-map-marker-alt mr-2"></i>
                113 Sassnex, White House, New Jersey, USA
              </li>
              <li className="flex items-center text-gray-600 hover:text-blue-500">
                <i className="fas fa-envelope mr-2"></i>
                info@yourdomain.com
              </li>
              <li className="flex items-center text-gray-600 hover:text-blue-500">
                <i className="fas fa-phone mr-2"></i>
                +001 548 159 2491
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-600 mt-8">
          © 2020 RadiusTheme. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
