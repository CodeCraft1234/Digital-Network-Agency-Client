import React from 'react';
import './ContactUS.css';

const ContactUS = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-blue-500 py-12 px-4 sm:px-6 lg:px-8 gap-10">
      <div className="text-center text-white md:w-1/2">
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-extrabold leading-none">
          We'd love <br /> to hear <br /> from <br /> you...
        </h2>
      </div>
      <div className="max-w-md w-full space-y-8 md:w-1/2">
        <form className="mt-8 space-y-6 bg-green-600 p-8 rounded-lg shadow-md animate-fadeInUp" action="#" method="POST">
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="firstName">
                First name *
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:ring focus:border-blue-300"
                id="firstName"
                type="text"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="lastName">
                Last name *
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:ring focus:border-blue-300"
                id="lastName"
                type="text"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                Email *
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:ring focus:border-blue-300"
                id="email"
                type="email"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:ring focus:border-blue-300"
                id="phone"
                type="tel"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="company">
              Company / Organization Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:ring focus:border-blue-300"
              id="company"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
              How can we help?
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:ring focus:border-blue-300"
              id="message"
              rows="4"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUS;
