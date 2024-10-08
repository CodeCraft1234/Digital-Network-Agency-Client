import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Rating = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="mb-4">
      <h2 className="text-center font-bold text-blue-500 text-4xl py-5">
        Meet Our Team Members
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 card">
        <div
          className="flex flex-col items-center mb-8 md:mb-0 bg-green-100 rounded-lg p-7 "
          data-aos="fade-right"
        >
          <div className="rounded-tr-full rounded-br-full rounded-tl-full overflow-hidden mb-4 transform hover:scale-110 transition-transform duration-300 mt-3">
            <img
              src="https://i.ibb.co/9G3xhxg/MD-Muzahidul-Islam.jpg"
              alt="Client 1"
              className="w-48 h-48 object-cover"
            />
          </div>
          <p className="text-center text-black px-4 mb-2">
            Delivered dream results with impeccable service and strategy,
            perfectly blending business goals with a sleek aesthetic,
            garnering great feedback at our expo showcase.
            <br />
            <h6 className="font-bold text-center text-black text-lg">
              MD. Muzahidul Islam
              <br />
              <em className="ml-6">
                <span className="font-semibold text-black text-md">
                  Member, Digital Network
                </span>
              </em>
            </h6>
          </p>
        </div>
        <div
          className="flex flex-col items-center mb-8 md:mb-0 bg-green-100 rounded-lg p-7"
          data-aos="fade-up"
        >
          <div className="rounded-tr-full rounded-br-full rounded-tl-full overflow-hidden mb-4 transform hover:scale-110 transition-transform duration-300 mt-3">
            <img
              src="https://i.ibb.co/d7RTx6v/Anowarul.jpg"
              alt="Client 2"
              className="w-48 h-48 object-cover"
            />
          </div>
          <p className="text-center text-black px-4 mb-2">
            Partho and the team at Digital Network are partners you can trust.
            Deep domain knowledge, responsive and committed. If you get a chance
            to work with this agency, don't hesitate.
            <br />
            <h6 className="font-bold text-center text-black text-lg">
              MD Anowarul Islam
              <br />
              <em>
                <span className="font-semibold text-black text-md">
                  CEO, Digital Network
                </span>
              </em>
            </h6>
          </p>
        </div>
        <div
          className="flex flex-col items-center bg-green-100 rounded-lg p-7"
          data-aos="fade-left"
        >
          <div className="rounded-tr-full rounded-br-full rounded-tl-full overflow-hidden mb-4 transform hover:scale-110 transition-transform duration-300 mt-3">
            <img
              src="https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Sharmin.jpg"
              alt="Client 3"
              className="w-48 h-48 object-cover"
            />
          </div>
          <p className="text-center text-black px-4 mb-2">
            My experience with Digital Network was fantastic. We worked closely
            together to create my dream website. I will certainly be using the
            team again for my other businesses.
            <br />
            <h6 className="font-bold text-center text-black text-lg">
              Sharmin Farzana
              <br />
              <em className="ml-6">
                <span className="font-semibold text-black text-md">
                  Member, Digital Network
                </span>
              </em>
            </h6>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
