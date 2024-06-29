// Import if you have any additional styles

const Choose = () => {
  return (
    <div className="flex flex-wrap justify-center items-center bg-purple-600 text-white p-8">
      <div className="flex-1 min-w-[300px] p-8">
        <h2 className="text-2xl font-bold">
          More Great Reasons to Choose Degico
        </h2>
        <p className="mt-4">
          Grursus mal suada faci lisis Lorem ipsum dolarorit ametion the at dumm
          consectetur elit. Vesti at bulum nec odio aea the dumm ipsum on that
          at dolocons rsus the consectetur elit.
        </p>
        <div className="flex justify-around mt-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-white text-purple-600 rounded-full flex flex-col justify-center items-center mx-auto font-bold text-xl">
              <span>35</span>
              <span className="text-base font-normal">Mbps</span>
            </div>
            <p className="mt-4">Superfast 1 - 35 Mbps</p>
            <p>Average Speed: 1min 30sec</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-white text-purple-600 rounded-full flex flex-col justify-center items-center mx-auto font-bold text-xl">
              <span>63</span>
              <span className="text-base font-normal">Mbps</span>
            </div>
            <p className="mt-4">Superfast 2 - 63 Mbps</p>
            <p>Average Speed: 45sec</p>
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-[300px] flex justify-center items-center">
        <img
          src="https://i.ibb.co/DVdxFFM/Screenshot-6-removebg-preview.png"
          alt="Family watching TV"
          className="max-w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Choose;
