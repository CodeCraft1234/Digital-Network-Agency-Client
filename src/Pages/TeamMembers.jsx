import TypingEffect from "react-typing-effect";
import "slick-carousel/slick/slick.css";
import useTeam from "../Hook/useTeam";
import Slider from "react-slick";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

const TeamMembers = () => {
  const [team] = useTeam();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section className="text-center my-12  px-4 lg:px-0">
        <h2 className="text-3xl text-gray-700 font-bold my-10">
         Our Dedicated Team Members
        </h2>
        

        {/* Team Members Carousel */}
        <Slider {...settings} className="mx-auto px-3 container">
          {team.map((member, index) => (
            <div key={index} className="p-2">
              <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                <div className="relative group w-full h-72">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center py-4">
                  <h3 className="text-xl uppercase font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">{member.skill}</p>
                  <div className="flex justify-center gap-4 mt-4">
                    <a
                      href={member.facebook || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                     className="icon2"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href={member.twitter || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon2"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href={member.instagram || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon2"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href={member.linkedin || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                     className="icon2"
                    >
                      <FaLinkedinIn />
                    </a>
                   
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default TeamMembers;
