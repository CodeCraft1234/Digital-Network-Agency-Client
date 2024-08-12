import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "James Anderson",
    title: "Web Developer",
    image: "https://i.ibb.co/fSys4Wf/testimonial-author-1.jpg",
    quote:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  },
  {
    name: "Dana Josefine",
    title: "Web Developer",
    image: "https://i.ibb.co/phs2b2s/testimonial-author-2.jpg",
    quote:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  },
  {
    name: "Dona Ganguly",
    title: "Web Developer",
    image: "https://i.ibb.co/pbVXNLy/testimonial-author-3.jpg",
    quote:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  },
  {
    name: "Mark Anthony",
    title: "Web Developer",
    image: "https://i.ibb.co/18brXk7/testimonial-author-4.jpg",
    quote:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  },
];

const Package = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Display three testimonials at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,  // Auto-change every 3 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">TESTIMONIALS</h2>
        <p className="text-gray-400 mb-8">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 w-16 h-16 flex items-center justify-center rounded-full">
                  <img
                    src="https://i.ibb.co/2cnpLJC/quote-icon.png"
                    alt="Quote Icon"
                    className="w-8 h-8"
                  />
                </div>
                <p className="text-gray-700 mt-8 mb-6">{testimonial.quote}</p>
                <div className="flex items-center justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h5 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h5>
                    <p className="text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Package;
