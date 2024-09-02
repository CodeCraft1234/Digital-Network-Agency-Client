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
    <div className=" mt-10 mx-24 px-12 to-white">
      <div className="max-w-8xl text-center">
        <h2 className="text-lg font-semibold text-pink-600">
          OUR COMMITMENT TO EXCELLENCE
        </h2>
        <h3 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          Why Choose Us
        </h3>
        <p className="mt-4 text-gray-500">
          We combine creativity with technical expertise to deliver outstanding digital solutions. Here's why you should partner with us:
        </p>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/** Card 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105">
            <FaUsers className="text-4xl text-pink-600 mx-auto animate-bounce" />
            <h4 className="mt-4 text-xl font-bold text-gray-900">
              Expert Team of Professionals
            </h4>
            <p className="mt-2 text-gray-500">
              Our dedicated team of experts brings together skills in web development, graphic design, and digital marketing to drive your success.
            </p>
          </div>
          {/** Card 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105">
            <FaCheckCircle className="text-4xl text-pink-600 mx-auto animate-bounce" />
            <h4 className="mt-4 text-xl font-bold text-gray-900">
              Proven Results and Reliability
            </h4>
            <p className="mt-2 text-gray-500">
              We have a track record of delivering high-quality results and building long-term relationships with our clients.
            </p>
          </div>
          {/** Card 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105">
            <FaLaptopCode className="text-4xl text-pink-600 mx-auto animate-bounce" />
            <h4 className="mt-4 text-xl font-bold text-gray-900">
              Cutting-Edge Technology
            </h4>
            <p className="mt-2 text-gray-500">
              We leverage the latest technologies in web development to ensure your digital presence is modern and effective.
            </p>
          </div>
          {/** Card 4 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105">
            <FaSmile className="text-4xl text-pink-600 mx-auto animate-bounce" />
            <h4 className="mt-4 text-xl font-bold text-gray-900">
              Creative and Engaging Designs
            </h4>
            <p className="mt-2 text-gray-500">
              Our graphic design services create visually stunning content that captures attention and communicates your brand’s message effectively.
            </p>
          </div>
          {/** Card 5 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105">
            <FaClock className="text-4xl text-pink-600 mx-auto animate-bounce" />
            <h4 className="mt-4 text-xl font-bold text-gray-900">
              Timely Delivery and Professionalism
            </h4>
            <p className="mt-2 text-gray-500">
              We are committed to meeting deadlines and maintaining a high standard of professionalism in every project we undertake.
            </p>
          </div>
          {/** Card 6 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105">
            <FaComments className="text-4xl text-pink-600 mx-auto animate-bounce" />
            <h4 className="mt-4 text-xl font-bold text-gray-900">
              Transparent and Effective Communication
            </h4>
            <p className="mt-2 text-gray-500">
              We ensure open and clear communication throughout the project to keep you informed and involved in the process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
