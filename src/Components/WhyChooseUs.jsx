import React from 'react';
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

const WhyChooseUs = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  const textItems = [
    "Experienced Team", "Customer-Centric Approach", "Innovative Solutions", 
    "Proven Track Record", "Comprehensive Services", "Cutting-Edge Technology", 
    "Affordable Pricing", "Tailored Strategies", "Global Reach", "24/7 Support",
    "Reliable Partners", "Industry Experts", "Fast Response", "Flexible Solutions",
    "Results-Driven", "Quality Assurance", "Customer Feedback", "Timely Delivery",
    "Strategic Insights", "Transparent Processes", "Expert Guidance", "Creative Ideas",
    "Efficient Operations", "Customer Satisfaction", "Professional Team", "Effective Campaigns",
    "Tailored Solutions", "Ongoing Support", "Trusted Advisors", "Innovative Approaches",
    "Resourceful Strategies", "Continuous Improvement", "Proactive Communication"
  ];

  const createCardItems = (items) => {
    let cards = [];
    for (let i = 0; i < items.length; i += 3) {
      cards.push(items.slice(i, i + 3));
    }
    return cards;
  };

  const cards = createCardItems(textItems);

  return (
    <div className="bg-white p-10 flex flex-col items-center relative mb-10">
      <h2 className="text-4xl font-bold text-center z-10">
        Why Should You <span className="text-pink-600">Choose Us!</span>
      </h2>
      <p className="text-pink-600 text-xl mt-2 mb-10 z-10">
        Discover why we're the right choice for you
      </p>

      <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl mb-8 z-10">
        {/* Left Side Image */}
        <div 
          className="hidden md:block absolute left-0 top-0 w-1/3 h-full bg-cover bg-center rounded-lg" 
          data-aos="fade-right" 
          style={{
            backgroundImage: "url('https://i.ibb.co/c2CFsvs/about.jpg')"
          }}
        >
        </div>

        {/* Center Text */}
        <div className="flex flex-col justify-center text-center mx-6 z-10 md:ml-48">
          <p className="text-gray-700 mb-4">
            We have been offering Digital Marketing solutions for over 8 years, <br /> working directly with our clients. As a comprehensive Digital <br /> Marketing agency, we provide services including SEO Audits, <br /> Pay Per Click campaigns, Social Media Management, and <br /> Organic SEO.
          </p>
          <p className="text-gray-700">
            We collaborate with businesses of all sizes, from startups to industry <br /> leaders. We value building enduring partnerships and are always <br /> available to support our clients. Reach out to us for more details.
          </p>
        </div>

        {/* Right Side Cards */}
        <div 
          className="hidden md:flex flex-col absolute right-0 top-0 w-1/3 h-full p-5 space-y-4"
          data-aos="fade-left"
        >
          {cards.slice(0, 3).map((cardItems, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md p-5 flex flex-col space-y-2">
              {cardItems.map((item, subIndex) => (
                <div key={subIndex} className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-5 z-10">
        <Link to={`/contact`}>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full">
            Connect With Us
          </button>
        </Link>
        <div className="flex items-center space-x-2">
          <div className="bg-green-500 rounded-full p-3 text-white">
            <FaWhatsapp />
          </div>
          <div className="text-center md:text-left">
            <p className="text-gray-700">Or - Simply Call Us:</p>
            <p className="text-xl font-bold">+880-1718767838</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
