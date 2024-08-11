import React from 'react';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  return (
    <div className="bg-white p-10 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center">
        Why Should You <span className="text-pink-600">Choose Us!</span>
      </h2>
      <p className="text-pink-600 text-xl mt-2 mb-10">
        Discover why we're the right choice for you
      </p>
      
      <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl mb-8">
        {/* Left Side Badges */}
        <div className="flex flex-col items-center space-y-10">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-4 border-green-500 flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-blue-900">20+</p>
              <p className="text-green-500 text-sm">YEARS</p>
              <p className="text-green-500 text-sm">Expertise</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-4 border-green-500 flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-blue-900">20+</p>
              <p className="text-green-500 text-sm">YEARS</p>
              <p className="text-green-500 text-sm">Expertise</p>
            </div>
          </div>
        </div>

        {/* Center Text */}
        <div className="flex flex-col justify-center text-center mx-6">
          <p className="text-gray-700 mb-4">
            We have been offering Digital Marketing solutions for over 8 years, working directly with our clients. As a comprehensive Digital Marketing agency, we provide services including SEO Audits, Pay Per Click campaigns, Social Media Management, and Organic SEO.
          </p>
          <p className="text-gray-700">
            We collaborate with businesses of all sizes, from startups to industry leaders. We value building enduring partnerships and are always available to support our clients. Reach out to us for more details.
          </p>
        </div>

        {/* Right Side Badges */}
        <div className="flex flex-col items-center space-y-10">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-4 border-green-500 flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-blue-900">20+</p>
              <p className="text-green-500 text-sm">YEARS</p>
              <p className="text-green-500 text-sm">Expertise</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-4 border-green-500 flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-blue-900">20+</p>
              <p className="text-green-500 text-sm">YEARS</p>
              <p className="text-green-500 text-sm">Expertise</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-5">
      <Link to={`/contact`}>
      <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full">
          Connect With Us
        </button>
      </Link>
        <div className="flex items-center space-x-2">
          <div className="bg-green-500 rounded-full p-3 text-white">
            <i className="fab fa-whatsapp"></i>
          </div>
          <div className="text-center md:text-left">
            <p className="text-gray-700">Or - Simply Call Us:</p>
            <p className="text-xl font-bold">+91-1234567890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
