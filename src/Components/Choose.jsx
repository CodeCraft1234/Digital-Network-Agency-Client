import React from "react";
import {
  FaUsers,
  FaCheckCircle,
  FaLaptopCode,
  FaSmile,
  FaClock,
  FaComments,
} from "react-icons/fa";

const Choose = () => {
  return (
    <div className="py-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-lg font-semibold text-pink-600">
          WE DELIVER OUR BEST
        </h2>
        <h3 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          Why Choose Digital Network
        </h3>
        <p className="mt-4 text-gray-500">
          Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem.
          In vel hendrerit nisi. Vestibulum eget risus velit.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/** Card 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105">
            <FaUsers className="text-4xl text-pink-600 mx-auto animate-bounce" />
            <h4 className="mt-4 text-xl font-bold text-gray-900">
              Reliable Service. In House Team
            </h4>
            <p className="mt-2 text-gray-500">
              In vel hendrerit nisi. Vestibulum eget risus velit.
            </p>
          </div>
          {/** Card 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105">
            <FaCheckCircle className="text-4xl text-pink-600 mx-auto animate-bounce" />
            <h4 className="mt-4 text-xl font-bold text-gray-900">
              Trusted by People Like You
            </h4>
            <p className="mt-2 text-gray-500">
              In vel hendrerit nisi. Vestibulum eget risus velit.
            </p>
          </div>
          {/** Card 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105">
            <FaLaptopCode className="text-4xl text-pink-600 mx-auto animate-bounce" />
            <h4 className="mt-4 text-xl font-bold text-gray-900">
              Complete Technical Competency
            </h4>
            <p className="mt-2 text-gray-500">
              In vel hendrerit nisi. Vestibulum eget risus velit.
            </p>
          </div>
          {/** Card 4 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105">
            <FaSmile className="text-4xl text-pink-600 mx-auto animate-bounce" />
            <h4 className="mt-4 text-xl font-bold text-gray-900">
              Friendly & Cordial in Nature
            </h4>
            <p className="mt-2 text-gray-500">
              In vel hendrerit nisi. Vestibulum eget risus velit.
            </p>
          </div>
          {/** Card 5 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105">
            <FaClock className="text-4xl text-pink-600 mx-auto animate-bounce" />
            <h4 className="mt-4 text-xl font-bold text-gray-900">
              Excellent Quality Delivered on Time
            </h4>
            <p className="mt-2 text-gray-500">
              In vel hendrerit nisi. Vestibulum eget risus velit.
            </p>
          </div>
          {/** Card 6 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105">
            <FaComments className="text-4xl text-pink-600 mx-auto animate-bounce" />
            <h4 className="mt-4 text-xl font-bold text-gray-900">
              Effective & Continuous Communication
            </h4>
            <p className="mt-2 text-gray-500">
              In vel hendrerit nisi. Vestibulum eget risus velit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
