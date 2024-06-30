import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Typing from 'react-typing-effect';

const LandingPage = () => {
  const typingSpeed = 50; // Set typing speed in milliseconds

  return (
    <div className="text-center py-2 px-6 bg-gradient-to-r from-purple-500 to-blue-700">
      <Carousel showThumbs={false} autoPlay infiniteLoop showArrows={false}>
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 items-center text-white">
          <div className="md:px-12 text-start">
            <h2 className="text-4xl md:text-5xl font-bold my-4 text-white">
              <Typing speed={typingSpeed} eraseDelay={5000} eraseSpeed={typingSpeed} text={['Digital Marketing']} />
            </h2>
            <p className="text-white text-sm md:text-base mb-8">
              <Typing speed={typingSpeed} eraseDelay={5000} eraseSpeed={typingSpeed} text={['Our digital marketing solutions are tailored to help you grow your business online, attract more customers, and increase sales.']} />
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="bg-indigo-600 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105">Our Services</button>
              <button className="border border-indigo-600 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105">Get DegeCo</button>
            </div>
          </div>
          <div className="md:px-16">
            <img className="h-80 md:h-96 w-full object-contain" src="https://i.ibb.co/BCNhxQR/digital-marketing-components-infographic-qx8jhc68jpm87z1v.png" alt="Digital Marketing" />
          </div>
        </div>

      
     
       
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 items-center text-white">
          <div className="md:px-12 text-start">
            <h2 className="text-4xl md:text-5xl font-bold my-4 text-white">
              <Typing speed={typingSpeed} eraseDelay={5000} eraseSpeed={typingSpeed} text={['Web Design and Development']} />
            </h2>
            <p className="text-white text-sm md:text-base mb-8">
              <Typing speed={typingSpeed} eraseDelay={5000} eraseSpeed={typingSpeed} text={['We create stunning websites that are not only visually appealing but also optimized for performance and user experience.']} />
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="bg-indigo-600 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105">Our Services</button>
              <button className="border border-indigo-600 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105">Get DegeCo</button>
            </div>
          </div>
          <div className="md:px-16">
            <img className="h-80 md:h-96 w-full object-contain" src="   https://i.ibb.co/txN9YMR/3d-illustration-of-web-development-png.webp" alt="Web Design and Development" />
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 items-center text-white">
          <div className="md:px-12 text-start">
            <h2 className="text-4xl md:text-5xl font-bold my-4 text-white">
              <Typing speed={typingSpeed} eraseDelay={5000} eraseSpeed={typingSpeed} text={['Graphics Design']} />
            </h2>
            <p className="text-white text-sm md:text-base mb-8">
              <Typing speed={typingSpeed} eraseDelay={5000} eraseSpeed={typingSpeed} text={['Our graphics design services help you create a strong brand identity with visually appealing designs for all your marketing needs.']} />
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="bg-indigo-600 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105">Our Services</button>
              <button className="border border-indigo-600 text-white py-2 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105">Get DegeCo</button>
            </div>
          </div>
          <div className="md:px-16">
            <img className="h-80 md:h-96 w-full object-contain" src=" https://i.ibb.co/DDDNkX2/Graphic-Design-PNG-Clipart.png" alt="Graphics Design" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default LandingPage;
