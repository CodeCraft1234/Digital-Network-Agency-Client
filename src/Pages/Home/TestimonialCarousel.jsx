import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const TestimonialCarousel = () => {
  return (
    <section className="bg-gray-900 text-white text-center py-12">
      <h2 className="text-3xl mb-4">TESTIMONIALS</h2>
      <p className="text-gray-400 mb-8">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <Carousel>
        <Carousel.Item>
          <div className="bg-gray-800 rounded-lg p-6 mx-auto max-w-lg">
            <p className="mb-4">Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ir cm id est laborum.</p>
            <div className="flex items-center">
              <img src="https://via.placeholder.com/50" alt="James Anderson" className="rounded-full mr-4" />
              <div>
                <h5 className="text-xl">James Anderson</h5>
                <p className="text-gray-400">Web Developer</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="bg-gray-800 rounded-lg p-6 mx-auto max-w-lg">
            <p className="mb-4">Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ir cm id est laborum.</p>
            <div className="flex items-center">
              <img src="https://via.placeholder.com/50" alt="Dona Josefine" className="rounded-full mr-4" />
              <div>
                <h5 className="text-xl">Dona Josefine</h5>
                <p className="text-gray-400">Web Developer</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="bg-gray-800 rounded-lg p-6 mx-auto max-w-lg">
            <p className="mb-4">Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ir cm id est laborum.</p>
            <div className="flex items-center">
              <img src="https://via.placeholder.com/50" alt="Mark Anthony" className="rounded-full mr-4" />
              <div>
                <h5 className="text-xl">Mark Anthony</h5>
                <p className="text-gray-400">Web Developer</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default TestimonialCarousel;
