import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const LandingPage = () => {
  return (
    <div className="text-center py-2 px-6 bg-gradient-to-r from-purple-500 to-blue-700">
      <Carousel showThumbs={false} autoPlay infiniteLoop showArrows={false}>
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 items-center text-white">
          <div className="md:px-12 text-start">
            <h2 className="text-4xl md:text-5xl font-bold my-4 text-white">Digital Marketing</h2>
            <p className="text-white text-sm md:text-base mb-8">
              Our digital marketing solutions are tailored to help you grow your business online, attract more customers, and increase sales.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="bg-indigo-600 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105">Our Services</button>
              <button className="border border-indigo-600 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105">Get DegeCo</button>
            </div>
          </div>
          <div className="md:px-16">
            <img className="h-80 md:h-96 w-full object-contain" src="https://i.ibb.co/k0Qx5FK/digital-marketing-concepts-illustration-ojmbrsjwcrlivi56.png" alt="Digital Marketing" />
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 items-center text-white">
          <div className="md:px-12 text-start">
            <h2 className="text-4xl md:text-5xl font-bold my-4 text-white">Web Design and Development</h2>
            <p className="text-white text-sm md:text-base mb-8">
              We create stunning websites that are not only visually appealing but also optimized for performance and user experience.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="bg-indigo-600 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105">Our Services</button>
              <button className="border border-indigo-600 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105">Get DegeCo</button>
            </div>
          </div>
          <div className="md:px-16">
            <img className="h-80 md:h-96 w-full object-contain" src="https://i.ibb.co/k0Qx5FK/digital-marketing-concepts-illustration-ojmbrsjwcrlivi56.png" alt="Web Design and Development" />
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 items-center text-white">
          <div className="md:px-12 text-start">
            <h2 className="text-4xl md:text-5xl font-bold my-4 text-white">Graphics Design</h2>
            <p className="text-white text-sm md:text-base mb-8">
              Our graphics design services help you create a strong brand identity with visually appealing designs for all your marketing needs.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="bg-indigo-600 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105">Our Services</button>
              <button className="border border-indigo-600 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105">Get DegeCo</button>
            </div>
          </div>
          <div className="md:px-16">
            <img className="h-80 md:h-96 w-full object-contain" src="https://i.ibb.co/k0Qx5FK/digital-marketing-concepts-illustration-ojmbrsjwcrlivi56.png" alt="Graphics Design" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default LandingPage;
