import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WebDesignMarketing = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="flex flex-col px-10 md:flex-row items-center md:justify-between bg-white">
      {/* Image section with animation */}
      <div
        className="w-full order-2 md:w-1/2 flex justify-center"
        data-aos="fade-up"
      >
        <img
          src="https://i.ibb.co/bPRLS1X/designer-designing-web-page-3d-character-illustration-png.webp"
          alt="Marketing"
          className="w-full h-auto"
        />
      </div>
      
      {/* Content section with animation */}
      <div
        className="w-full order-1 text-black md:w-1/2 mt-4 md:mt-0 md:pl-6"
        data-aos="fade-down"
      >
        <h2 className="text-xl md:text-2xl font-bold text-black mb-3">
          Our Web Design Services
        </h2>
        <p className="text-gray-600 mb-4 text-sm md:text-base">
          At Digital Network, we create stunning and responsive websites that
          are tailored to meet your business needs. Our expert team of designers
          ensures your site is not only visually appealing but also
          user-friendly and optimized for conversions.
        </p>
        <div className="flex items-start mb-3">
          <div className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
            </svg>
          </div>
          <div>
            <h3 className="text-md font-semibold text-gray-800">
              Responsive Design
            </h3>
            <p className="text-gray-600 text-sm">
              Our designs ensure that your website looks great on all devices,
              providing a seamless experience for your users whether they are on
              a desktop, tablet, or smartphone.
            </p>
          </div>
        </div>
        <div className="flex items-start mb-4">
          <div className="bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
            </svg>
          </div>
          <div>
            <h3 className="text-md font-semibold text-gray-800">
              Custom Solutions
            </h3>
            <p className="text-gray-600 text-sm">
              We understand that each business is unique. Our team works closely
              with you to develop custom web design solutions that align with
              your brand and goals.
            </p>
          </div>
        </div>
        <div
          className="flex justify-start mt-4"
          data-aos="fade-right"
        >
          <button className="relative flex items-center px-5 py-2 font-semibold text-white bg-blue-500 rounded-sm shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out transform hover:scale-105 group">
            <span className="absolute inset-0 transition duration-300 ease-in-out bg-blue-600 opacity-0 rounded-sm group-hover:opacity-100"></span>
            <span className="relative z-10 text-sm">Read More</span>
            <span className="relative ml-2 text-base transition-transform duration-300 ease-in-out transform group-hover:translate-x-2">
              &rarr;
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebDesignMarketing;
