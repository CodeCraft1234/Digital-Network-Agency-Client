import { useState } from "react";
import CountUp from "react-countup";
import { Helmet } from "react-helmet-async";

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
    name: "MD Asaduzzaman",
    role: "Web Designer & Developer",
    image:
      "https://i.ibb.co/PwMphjv/Yellow-Inspiration-Modern-Instagram-Profile-Picture.png",
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

  const handleVideoClick = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className="mt-24">
       <section className="bg-gradient-to-r from-purple-500 to-blue-700 text-white py-32">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="mt-2">Home / About Us</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="flex-1">
            <img
              src="https://i.ibb.co/5GWSwZ5/about2.png"
              alt="Exclusive Agency"
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1 mt-10 lg:mt-0 lg:ml-10">
            <h2 className="text-2xl font-bold">
              Exclusive Agency For Technology Provide Solution
            </h2>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            </p>
            <div className="flex space-x-8 mt-6">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-600">
                  <CountUp start={0} end={844} duration={2.75} />
                </h3>
                <p className="font-semibold">Happy Clients</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-600">
                  <CountUp start={0} end={1240} duration={2.75} />
                </h3>
                <p className="font-semibold">Projects Done</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-600">
                  <CountUp start={0} end={15419} duration={2.75} />
                </h3>
                <p className="font-semibold">Days Of Work</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-500 to-blue-700 text-white py-10">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="flex-1 relative lg:mr-10">
            <img
              src="https://i.ibb.co/9Gyd3Dm/about-back.jpg"
              alt="Experience"
              className="w-full h-auto"
            />
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              onClick={handleVideoClick}
            >
              <div className="bg-purple-600 p-4 rounded-full">
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
          <div className="flex-1 mt-10 lg:mt-0">
            <h2 className="text-3xl font-bold">
              We Work With 20 Years Of <br />
              Experience
            </h2>
            <p className="mt-4">
              Grursus mal suada faci lisis Lorem ipsum dolarorit more a ametion
              that consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm
              ipsum that dolocons rsus mal suada and fadolorit.
            </p>
            <ul className="mt-6 space-y-2">
              <li>✔ Web Design & Development</li>
              <li>✔ Graphics Design</li>
              <li>✔ Online Support</li>
              <li>✔ App Development</li>
              <li>✔ Consultancy</li>
              <li>✔ Digital Marketing</li>
            </ul>
          </div>
        </div>
      </section>

      {showVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative w-full max-w-4xl">
            <button
              className="absolute top-0 right-0 m-4 text-white"
              onClick={handleCloseVideo}
            >
              &times;
            </button>
            <div className="relative pb-9/16">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://youtu.be/Y77poXhJrXc?si=Y4H3SnpSu84oDaGb"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video"
              ></iframe>
            </div>
          </div>
        </div>
      )}
      {/* team members */}
      <section className="text-center mb-12 mt-2">
        <h6 className="text-xl font-bold text-blue-600 uppercase">Our Best</h6>
        <h2 className="text-3xl font-bold mb-4">Dedicated Team</h2>
        <p className="text-gray-600 mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br />
          Lorem Ipsum has been the industry's standard dummy text ever since it
          past.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group w-64 h-80 overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                  <div className="flex gap-4 mb-4 justify-center">
                    <a href={member.social.facebook} className="text-white">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href={member.social.twitter} className="text-white">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href={member.social.instagram} className="text-white">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href={member.social.pinterest} className="text-white">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
