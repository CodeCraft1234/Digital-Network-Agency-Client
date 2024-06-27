const Marketing = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between p-6 md:p-12 bg-white">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://i.ibb.co/Y3smwJ6/Screenshot-5-removebg-preview.png" // Replace with actual image source
          alt="Marketing"
          className="w-full h-auto"
        />
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Our Tracking Platform for Marketing
        </h2>
        <p className="text-gray-600 mb-6">
          Grursus mal suada faci lisis Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vesti at bulum nec odio aea the dumm ipsum ipsum
          dolocons is suada a and fadolorit to the consectetur elit.
        </p>
        <div className="flex items-start mb-4">
          <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">Free tools</h3>
            <p className="text-gray-600">
              Grursus mal suada faci lisis ipsum to and the and dolarorit
              ametion consectetur ellito more bulum that odio.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="bg-red-500 text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">
              Premium Software
            </h3>
            <p className="text-gray-600">
              Grursus mal suada faci lisis ipsum to and the and dolarorit
              ametion consectetur ellito more bulum that odio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
