import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const LandingPage = () => {
  return (
    <div className="text-center py-3 px-4">
      <Carousel showThumbs={false} autoPlay infiniteLoop showArrows={false}>
        <div className="mb-12 grid grid-cols-2">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold my-4">Digital Marketing</h2>
            <p className="text-gray-600 text-sm md:text-base mb-8">
              Our digital marketing solutions are tailored to help you grow your business online, attract more customers, and increase sales.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-indigo-600 text-white py-2 px-6 rounded-md">Our Services</button>
              <button className="border border-indigo-600 text-indigo-600 py-2 px-6 rounded-md">Get DegeCo</button>
            </div>
          </div>
          <div className='px-16'>
            <img className='h-72 w-full' src="https://i.ibb.co/cCWc6br/bank-3d-render-icon-illustration-png.webp" alt="Digital Marketing" />
          </div>
        </div>

        <div className="mb-12 grid grid-cols-2">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold my-4">Web Design and Development</h2>
            <p className="text-gray-600 text-sm md:text-base mb-8">
              We create stunning websites that are not only visually appealing but also optimized for performance and user experience.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-indigo-600 text-white py-2 px-6 rounded-md">Our Services</button>
              <button className="border border-indigo-600 text-indigo-600 py-2 px-6 rounded-md">Get DegeCo</button>
            </div>
          </div>
          <div className='px-16'>
            <img className='h-72 w-full' src="https://i.ibb.co/cCWc6br/bank-3d-render-icon-illustration-png.webp" alt="Web Design and Development" />
          </div>
        </div>

        <div className="mb-12 grid grid-cols-2">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold my-4">Graphics Design</h2>
            <p className="text-gray-600 text-sm md:text-base mb-8">
              Our graphics design services help you create a strong brand identity with visually appealing designs for all your marketing needs.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-indigo-600 text-white py-2 px-6 rounded-md">Our Services</button>
              <button className="border border-indigo-600 text-indigo-600 py-2 px-6 rounded-md">Get DegeCo</button>
            </div>
          </div>
          <div className='px-16'>
            <img className='h-72 w-full' src="https://i.ibb.co/cCWc6br/bank-3d-render-icon-illustration-png.webp" alt="Graphics Design" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default LandingPage;
