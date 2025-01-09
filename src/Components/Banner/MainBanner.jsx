
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import Typing from 'react-typing-effect';

const MainBanner = () => {
  const typingSpeed = 100;

  return (
    <div className="text-center px-4 py-5 lg:py-44 pt-24 w-full bg-gradient-to-r from-[#092d77] via-[#0d4691] to-[#0c236b]">
      <div className="container mx-auto">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showArrows={false}
        >
          {/* Digital Marketing Slide */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center text-white gap-8 md:gap-16">
            <div className="px-4 md:px-8 text-start">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold my-4">
                Digital Marketing
              </h2>
              <p className="text-sm md:text-base lg:text-lg mb-8">
                <Typing
                  speed={typingSpeed}
                  eraseDelay={1000}
                  eraseSpeed={typingSpeed}
                  text={['Our digital marketing solutions are tailored to help you grow your business online, attract more customers, and increase sales.']}
                />
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <Link to="/service/Digital Marketing">
                  <button className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-2 px-6 rounded-lg transform transition-transform duration-300 hover:scale-105">
                    Our Services
                  </button>
                </Link>
               
              </div>
            </div>
            <div className="px-4 md:px-8">
              <img
                className="h-40 md:h-60 lg:h-80 w-full object-contain mt-4 md:mt-0"
                src="https://i.ibb.co/YBWVT2v/3d-render-target-marketing-digital-marketing-png.webp"
                alt="Digital Marketing"
              />
            </div>
          </div>

          {/* Web Design and Development Slide */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center text-white gap-8 md:gap-16">
            <div className="px-4 md:px-8 text-start">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold my-4">
                Web Design and Development
              </h2>
              <p className="text-sm md:text-base lg:text-lg mb-8">
                <Typing
                  speed={typingSpeed}
                  eraseDelay={1000}
                  eraseSpeed={typingSpeed}
                  text={['We create stunning websites that are not only visually appealing but also optimized for performance and user experience.']}
                />
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <Link to="/service/Web Design">
                  <button className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-2 px-6 rounded-lg transform transition-transform duration-300 hover:scale-105">
                    Our Services
                  </button>
                </Link>
                
              </div>
            </div>
            <div className="px-4 md:px-8">
              <img
                className="h-40 md:h-60 lg:h-80 w-full object-contain mt-4 md:mt-0"
                src="https://i.ibb.co/X5t7Myb/Graphic-Web-Design-PNG-Transparent-Image.png"
                alt="Web Design and Development"
              />
            </div>
          </div>

          {/* Graphics Design Slide */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center text-white gap-8 md:gap-16">
            <div className="px-4 md:px-8 text-start">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold my-4">
                Graphics Design
              </h2>
              <p className="text-sm md:text-base lg:text-lg mb-8">
                <Typing
                  speed={typingSpeed}
                  eraseDelay={1000}
                  eraseSpeed={typingSpeed}
                  text={['Our graphics design services help you create a strong brand identity with visually appealing designs for all your marketing needs.']}
                />
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <Link to="/service/Graphics Design">
                  <button className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-2 px-6 rounded-lg transform transition-transform duration-300 hover:scale-105">
                    Our Services
                  </button>
                </Link>
               
              </div>
            </div>
            <div className="px-4 md:px-8">
              <img
                className="h-40 md:h-60 lg:h-80 w-full object-contain mt-4 md:mt-0"
                src="https://i.ibb.co/DDDNkX2/Graphic-Design-PNG-Clipart.png"
                alt="Graphics Design"
              />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default MainBanner;
