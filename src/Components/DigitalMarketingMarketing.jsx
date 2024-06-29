const DigitalMarketingMarketing = () => {
    return (
      <div className="flex px-10 flex-col md:flex-row items-center md:justify-between  bg-white">
        <div className="w-full order-2 md:w-1/2 flex justify-center">
          <img
            src="https://i.ibb.co/CBnptxz/social-media-and-digital-marketing-3d-illustration-png.webp"
            alt="Marketing"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full order-1 md:w-1/2 text-black mt-4 md:mt-0 md:pl-6">
          <h2 className="text-xl md:text-2xl font-bold text-black mb-3">
            Our Digital Marketing Strategies
          </h2>
          <p className="text-gray-600 mb-4 text-sm md:text-base">
            At DigeCo, we offer comprehensive digital marketing solutions to help your business thrive in the online world. Our expert team uses data-driven strategies to ensure your brand reaches its target audience effectively.
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
              <h3 className="text-md font-semibold text-gray-800">SEO Optimization</h3>
              <p className="text-gray-600 text-sm">
                Our SEO services boost your website's visibility on search engines, ensuring you reach more potential customers organically.
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
              <h3 className="text-md font-semibold text-gray-800">Social Media Marketing</h3>
              <p className="text-gray-600 text-sm">
                We create engaging social media campaigns that enhance your brand's presence and connect with your audience on platforms like Facebook, Instagram, and Twitter.
              </p>
            </div>
          </div>
          <div className="flex justify-start mt-4">
            <button className="relative flex items-center px-4 py-1.5 font-semibold text-white bg-blue-500 rounded-sm shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out transform hover:scale-105 group">
              <span className="absolute inset-0 transition duration-300 ease-in-out bg-blue-600 opacity-0 rounded-sm group-hover:opacity-100"></span>
              <span className="relative z-10 text-xs md:text-sm">Read More</span>
              <span className="relative ml-2 text-base transition-transform duration-300 ease-in-out transform group-hover:translate-x-2">
                &rarr;
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default DigitalMarketingMarketing;
  