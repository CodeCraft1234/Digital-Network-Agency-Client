import React, { useEffect } from 'react';
import Aos from 'aos';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const GlobalStyle = createGlobalStyle`
  @keyframes bottomToTop {
    0% {
      background-position: bottom;
    }
    100% {
      background-position: top;
    }
  }

  .hover\\:bottom-to-top:hover {
    background: linear-gradient(to top, #ff0000, #ffffff);
    animation: bottomToTop 2s forwards;
    background-size: 200% 200%;
  }
`;

const services = [
  { category: "Graphics Design", icon: "https://i.ibb.co/sqbxMMH/gd.png" },
  { category: "Web Design", icon: "https://i.ibb.co/WzdGH9y/wd.png" },
  { category: "Digital Marketing", icon: "https://i.ibb.co/Fh30qcr/dm.png" },
];

const OurServices = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Digital Network| Services</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <GlobalStyle />
      <section className="py-10  px-12 bg-gray-50">
        <div className="text-black px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Let’s Check Our Services</h2>
            <p className="text-black">
              Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry's standard dummy text ever since
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center p-6 bg-white shadow-md rounded-lg transition-all duration-500 text-black transform hover:translate-y-[-10px] hover:bottom-to-top"
              >
                <div className="mb-4">
                  <img
                    className="w-16 h-16"
                    src={service.icon}
                    alt={service.category}
                  />
                </div>
                <h6 className="text-xl font-semibold mb-2">{service.category}</h6>
                <p className="text-black">Grursus suada lisis the Lorem ipsum dolarorit more and manys this as this of ready consectetur elit.</p>
                <Link to={`/category/${service.category}`} className="text-blue-600 mt-4 hover:text-white">Read More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
