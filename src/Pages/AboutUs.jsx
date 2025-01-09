import { useEffect, useState } from "react";
import CountUp from "react-countup";
import TypingEffect from "react-typing-effect";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  FaBoxOpen,
  FaBullhorn,
  FaCertificate,
  FaChartLine,
  FaCogs,
  FaComments,
  FaDesktop,
  FaGlobe,
  FaHeadset,
  FaLifeRing,
  FaLightbulb,
  FaMobileAlt,
  FaPaintBrush,
  FaProjectDiagram,
  FaSyncAlt,
  FaUsers,
} from "react-icons/fa";
import Slider from "react-slick";
import useTeam from "../Hook/useTeam";

const teamMembers = [
  {
    name: "MD Anowarul Islam",
    role: "Founder & CEO",
    image:
      "https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Anowarul.jpg",
    social: {
      facebook: "https://facebook.com/anowarulbd3",
      twitter: "https://twitter.com/anowarulbd",
      instagram: "https://instagram.com/anowarulbd3",
      pinterest: "#",
    },
  },
  {
    name: "Mohammad Robiul",
    role: "Web Designer & Developer",
    image:
      "https://i.ibb.co/9TR7BkP/367071537-1084088192555421-2038517797379868910-n.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      pinterest: "#",
    },
  },
  {
    name: "Mohammad Robiul",
    role: "Web Designer & Developer",
    image:
      "https://i.ibb.co/9TR7BkP/367071537-1084088192555421-2038517797379868910-n.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      pinterest: "#",
    },
  },
  {
    name: "Mohammad Robiul",
    role: "Web Designer & Developer",
    image:
      "https://i.ibb.co/9TR7BkP/367071537-1084088192555421-2038517797379868910-n.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      pinterest: "#",
    },
  },
  {
    name: "Mohammad Robiul",
    role: "Web Designer & Developer",
    image:
      "https://i.ibb.co/9TR7BkP/367071537-1084088192555421-2038517797379868910-n.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      pinterest: "#",
    },
  },
];

const AboutUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [team] = useTeam(); // Fetching team data using a custom hook

  const handleVideoClick = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change slide every 3 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("stats-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isInViewport) {
          setIsVisible(true);
          window.removeEventListener("scroll", handleScroll); // Unsubscribe after first trigger
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mt-8 pt-32 container mx-auto text-black">


<div className=" mx-5 pt-10">
  <div className="text-center mb-8 lg:mb-12">
    <h2 className="text-lg lg:text-xl font-semibold text-gray-500">With skill, the right way</h2>
    <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mt-2">How Do We Work?</h1>
  </div>

</div>


<section className="flex flex-col-reverse md:flex-row items-center justify-between px-5 py-12 bg-white">
  {/* Image Section */}
  <div className="relative w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
    <img
      src="https://i.ibb.co/SnxRB6n/feature-photo.png"
      alt="Teamwork"
      className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg transform hover:rotate-3 transition-transform duration-500 ease-in-out"
    />
  </div>

  {/* Content Section */}
  <div className="w-full md:w-1/2 text-center md:text-left">
    <h3 className="text-orange-600 text-sm font-semibold mb-4">WHY WORK WITH DIGITAL NETWORK</h3>
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
      Best result with top <br /> user experience
    </h2>
    <p className="text-gray-600 mb-8">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>

    <div className="space-y-6">
      {/* Feature 1 */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
        <div className="bg-orange-600 text-white p-3 rounded-full mx-auto sm:mx-0">
          <FaLifeRing className="w-6 h-6" />
        </div>
        <div className="sm:ml-4 mt-4 sm:mt-0">
          <h4 className="text-lg font-semibold">Lifetime Support</h4>
          <p className="text-gray-600">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
        <div className="bg-orange-600 text-white p-3 rounded-full mx-auto sm:mx-0">
          <FaBoxOpen className="w-6 h-6" />
        </div>
        <div className="sm:ml-4 mt-4 sm:mt-0">
          <h4 className="text-lg font-semibold">No Coding Required</h4>
          <p className="text-gray-600">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
        <div className="bg-orange-600 text-white p-3 rounded-full mx-auto sm:mx-0">
          <FaSyncAlt className="w-6 h-6" />
        </div>
        <div className="sm:ml-4 mt-4 sm:mt-0">
          <h4 className="text-lg font-semibold">Regular Updates</h4>
          <p className="text-gray-600">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      <div className="p-5 text-gray-800">
  {/* About Us Section */}
  <section className="flex flex-col lg:flex-row gap-6 items-center">
    <div className="lg:w-1/2">
      <div className="flex justify-start items-center mb-4">
        <FaUsers className="text-5xl text-cyan-500" />
        <h2 className="text-2xl lg:text-3xl font-bold text-cyan-600 ml-3">*About Us*</h2>
      </div>
      <p className="text-base lg:text-lg">
        Digital Network started its journey in 2018, with the sole aim of helping clients manage their online businesses successfully. We focus on every aspect of websites, including research, web development, designing, organizing, and problem-solving, to provide diverse services. Through these processes, we ensure that our clients' websites achieve maximum output and take their businesses toward growth and success.
      </p>
    </div>
    <img
      src="https://i.ibb.co/pd84qzF/istockphoto-1400739452-612x612.jpg"
      alt="About Us"
      className="lg:w-1/2 w-full h-[250px] lg:h-[400px] object-cover rounded-lg"
    />
  </section>

  {/* Mission Section */}
  <section className="flex flex-col-reverse lg:flex-row gap-6 items-center mt-8">
    <img
      src="https://i.ibb.co/9wxYYCG/mission-1-88687acca9.webp"
      alt="Mission"
      className="lg:w-1/2 w-full h-[250px] lg:h-[400px] object-cover rounded-lg"
    />
    <div className="lg:w-1/2">
      <div className="flex justify-start items-center mb-4">
        <FaBullhorn className="text-5xl text-cyan-500" />
        <h2 className="text-2xl lg:text-3xl font-bold text-cyan-600 ml-3">*Our Mission*</h2>
      </div>
      <p className="text-base lg:text-lg">
        Our mission is to represent online businesses globally through digital solutions. With over six years of experience, we confidently tackle any challenges and effectively implement new technologies. We understand how to grow a website and align it with the client's needs to make it efficient and successful.
      </p>
    </div>
  </section>

  {/* Strategy Section */}
  <section className="flex flex-col lg:flex-row gap-6 items-center mt-8">
    <div className="lg:w-1/2">
      <div className="flex justify-start items-center mb-4">
        <FaChartLine className="text-5xl text-cyan-500" />
        <h2 className="text-2xl lg:text-3xl font-bold text-cyan-600 ml-3">*Our Strategy*</h2>
      </div>
      <p className="text-base lg:text-lg">
        We always follow a strategy tailored to meet the demands and characteristics of the current digital environment. This strategy allows us to provide quality web solutions, creative content, and SEO services seamlessly. Our ultimate goal is to build a strong online presence for our clients, steering their businesses toward success.
      </p>
      <ul className="mt-4 space-y-2">
        <li className="flex items-start">
          <FaLightbulb className="text-cyan-500 mr-2" />
          <span className="font-bold">Strong Team Collaboration:</span> We quickly adapt to the latest technological advancements and apply them to our services.
        </li>
        <li className="flex items-start">
          <FaUsers className="text-cyan-500 mr-2" />
          <span className="font-bold">Technological Innovation:</span> Key aspects of our strategy include smooth coordination among team members.
        </li>
        <li className="flex items-start">
          <FaUsers className="text-cyan-500 mr-2" />
          <span className="font-bold">Quality:</span> We prioritize quality in every project we undertake.
        </li>
        <li className="flex items-start">
          <FaChartLine className="text-cyan-500 mr-2" />
          <span className="font-bold">ROI-Centric Approach:</span> Maximizing our clients’ returns on their investments is our focus.
        </li>
      </ul>
    </div>
    <img
      src="https://i.ibb.co/qNSZN7d/strat.jpg"
      alt="Strategy"
      className="lg:w-1/2 w-full h-[250px] lg:h-[400px] object-cover rounded-lg"
    />
  </section>

  {/* Vision Section */}
  <section className="flex flex-col-reverse lg:flex-row gap-6 items-center mt-8">
    <img
      src="https://i.ibb.co/9pPrwp5/pngtree-vision-logo-design-vector-png-image-5491924.jpg"
      alt="Vision"
      className="lg:w-1/2 w-full h-[250px] lg:h-[500px] object-cover rounded-lg"
    />
    <div className="lg:w-1/2">
      <div className="flex justify-start items-center mb-4">
        <FaGlobe className="text-5xl text-cyan-500" />
        <h2 className="text-2xl lg:text-3xl font-bold text-cyan-600 ml-3">*Our Vision*</h2>
      </div>
      <p className="text-base lg:text-lg">
        Our vision is to enable our clients to utilize their full potential online and run their businesses successfully. By leveraging modern technologies in web design, digital marketing, and content creation, we aim to ensure their success.
      </p>
      <ul className="mt-4 space-y-2">
        <li className="flex items-start">
          <FaLightbulb className="text-cyan-500 mr-2" />
          <span className="font-bold">Top-Tier Digital Solutions:</span> Strengthen clients’ online presence with the best digital solutions.
        </li>
        <li className="flex items-start">
          <FaLightbulb className="text-cyan-500 mr-2" />
          <span className="font-bold">Continuous Evolution:</span> Enhance services in line with technological advancements.
        </li>
        <li className="flex items-start">
          <FaLightbulb className="text-cyan-500 mr-2" />
          <span className="font-bold">Industry Leadership:</span> Aim to lead in digital solutions.
        </li>
        <li className="flex items-start">
          <FaLightbulb className="text-cyan-500 mr-2" />
          <span className="font-bold">Global Network:</span> Expand services globally.
        </li>
      </ul>
    </div>
  </section>
      </div>




{/* Stats Section */}
<div
  id="stats-section"
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10 p-10"
>
  {[
    { icon: "📋", number: 53, title: "Case Success" },
    { icon: "👍", number: 850, title: "Happy Clients" },
    { icon: "🏆", number: 45, title: "Winning Awards" },
    { icon: "📁", number: 99, title: "Projects Completed" },
  ].map((item, index) => (
    <div
      key={index}
      className="flex items-center bg-gradient-to-r from-[#092d77] via-[#0d4691] to-[#0c236b] p-6 rounded-md shadow-md transform transition-transform hover:scale-105"
    >
      <div className="text-yellow-400 text-5xl mr-6">{item.icon}</div>
      <div>
        <h4 className="text-3xl font-bold mb-1 text-white">
          {isVisible ? <CountUp end={item.number} duration={2} /> : 0}
        </h4>
        <p className="text-gray-300">{item.title}</p>
      </div>
    </div>
  ))}
</div>

{/* Trade License Section - Image Bottom on Mobile */}
<section className="flex flex-col md:flex-row gap-6 items-center p-4 lg:p-10">
  <div className="md:w-1/2">
    <h2 className="text-3xl font-bold text-cyan-600 mb-4">*Trade License*</h2>
    <p className="text-lg text-gray-700">
      We operate all our activities lawfully, with the utmost respect for our
      clients' trust and confidence. Our business is fully licensed under the
      laws of Bangladesh.
    </p>
    <p className="mt-4 flex items-center">
      <FaLightbulb className="text-cyan-500 mr-2" />
      <span className="font-bold">*Trade License Number:* 375</span>
    </p>
  </div>
  <img
    src="https://i.ibb.co.com/cbvw5zX/Trade-License-2024-25.jpg"
    alt="Trade License"
    className="md:w-1/2 w-full h-[250px] lg:h-[400px] rounded-lg shadow-md "
  />
</section>

{/* Team Section */}
<section className="text-center mt-20 my-12 px-4 lg:px-0">
  <h2 className="text-2xl md:text-3xl font-bold mb-4">
    <TypingEffect text={["Our Dedicated Team"]} speed={50} eraseSpeed={50} typingDelay={500} eraseDelay={2000} />
  </h2>
  <p className="text-gray-600 mb-8">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    <br />
  </p>

  {/* Team Members Carousel */}
  <Slider
    {...{
      ...settings,
      responsive: [
        { breakpoint: 640, settings: { slidesToShow: 1 } },
        { breakpoint: 1024, settings: { slidesToShow: 2 } },
        { breakpoint: 1280, settings: { slidesToShow: 4 } },
      ],
    }}
    className="px-5"
  >
    {team.map((member, index) => (
      <div key={index} className="p-4">
        <div className="relative group w-full h-72 md:h-80 overflow-hidden animate-fade-in-up">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-white text-center px-4">
              <div className="flex gap-3 mb-4 justify-center">
                <a href="#" className="text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-pinterest"></i>
                </a>
              </div>
              <h3 className="text-lg md:text-xl font-semibold">{member.name}</h3>
              <p className="text-xs md:text-sm">{member.skill}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</section>

{/* video Section */}
<section className="bg-gradient-to-r from-[#092d77] via-[#0d4691] to-[#0c236b] my-10 rounded-lg lg:mx-8 text-white py-10 px-5">
  <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
    {/* Video Section */}
    <div className="flex-1 mt-10 lg:mt-0 lg:mr-10 relative animate-fade-in">
      <img
        src="https://i.ibb.co/9Gyd3Dm/about-back.jpg"
        alt="Experience"
        className="w-full h-auto"
      />
      <div
        className="absolute inset-0 flex items-center justify-center cursor-pointer"
        onClick={handleVideoClick}
      >
        <div className="bg-purple-600 p-4 rounded-full hover:scale-110 transform transition-transform duration-300">
          <svg
            className="w-12 h-12 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.75-9.75v3.5l3.5-1.75-3.5-1.75z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>

    {/* Text Section */}
    <div className="flex-1 text-center lg:text-left">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 animate-slide-in-left">
        <TypingEffect
          text={["We Work With 20 Years Of Experience"]}
          speed={50}
          eraseSpeed={50}
          typingDelay={500}
          eraseDelay={2000}
        />
      </h2>
      <p className="text-sm md:text-base mt-4 mb-6 lg:pr-24 animate-fade-in">
        Grursus mal suada faci lisis Lorem ipsum dolarorit more a ametion that consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit.
      </p>
      <ul className="space-y-4">
        {[
          { icon: <FaDesktop />, text: "Web Design & Development" },
          { icon: <FaPaintBrush />, text: "Graphics Design" },
          { icon: <FaHeadset />, text: "Online Support" },
          { icon: <FaMobileAlt />, text: "App Development" },
          { icon: <FaCogs />, text: "Consultancy" },
          { icon: <FaBullhorn />, text: "Digital Marketing" },
        ].map(({ icon, text }, index) => (
          <li
            key={index}
            className="flex items-center justify-center lg:justify-start space-x-3 animate-fade-in-up"
          >
            <span className="text-purple-300 text-2xl">{icon}</span>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>

  {showVideo && (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="relative w-full max-w-4xl">
        <button
          className="absolute top-0 right-0 m-4 text-white text-2xl"
          onClick={handleCloseVideo}
        >
          &times;
        </button>
        <div className="relative pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Y77poXhJrXc?si=Y4H3SnpSu84oDaGb"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video"
          ></iframe>
        </div>
      </div>
    </div>
  )}
</section>



    </div>
  );
};

export default AboutUs;
