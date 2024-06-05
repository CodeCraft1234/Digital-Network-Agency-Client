import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'MD Anowarul Islam',
    position: 'Founder & CEO',
    image: 'https://i.ibb.co/d7RTx6v/Anowarul.jpg',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    },
  },
  {
    name: 'Sharmin Farzana',
    position: 'UI/UX & Graphics Designer',
    image: 'https://i.ibb.co/GPVNYgh/Sharmin.jpg',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    },
  },
  {
    name: 'Partho Saha',
    position: 'Graphics & Motion Designer',
    image: 'https://i.ibb.co/3yQ9kQW/Partho.jpg',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    },
  },
  {
    name: 'Farzana Akhter Bethe',
    position: 'Graphic Designer & Digital Marketer',
    image: 'https://i.ibb.co/dQFR1HX/Bethi.jpg',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    },
  },
  {
    name: 'Sadiq Al Helal',
    position: 'Graphic Designer & Digital Marketer',
    image: 'https://i.ibb.co/55ctgxY/Sadiq-Al-Helal.jpg',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    },
  },
  {
    name: 'Jubayer Islam Fahim',
    position: 'Digital Marketer',
    image: 'https://i.ibb.co/wS2KZKM/Jubayer.jpg',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    },
  },
  {
    name: 'Nadia Pathan',
    position: 'Digital Marketer',
    image: 'https://i.ibb.co/vPmcTYh/woocommerce-placeholder.png',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    },
  },
  {
    name: 'Rifat Ahmed',
    position: 'Digital Marketer',
    image: 'https://i.ibb.co/4P1sZYb/Rifat.jpg',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    },
  },
  {
    name: 'Md Ridoy Hasan',
    position: 'Digital Marketer',
    image: 'https://i.ibb.co/qF6TD3K/Md-Ridoy-Hasan.jpg',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    },
  },
  {
    name: 'Nur Mohammad',
    position: 'Digital Marketer',
    image: 'https://i.ibb.co/HC8t5Hx/Nur-Mohammad.jpg',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    },
  },
  {
    name: 'MD Muzahidul Islam',
    position: 'Web Designer',
    image: 'https://i.ibb.co/9G3xhxg/MD-Muzahidul-Islam.jpg',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    },
  },
  {
    name: 'MD Asaduzzaman',
    position: 'Web Designer & Developer',
    image: 'https://i.ibb.co/PwMphjv/Yellow-Inspiration-Modern-Instagram-Profile-Picture.png',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    },
  },
  {
    name: 'Mohammad Robiul',
    position: 'Web Designer & Developer',
    image: 'https://i.ibb.co/9TR7BkP/367071537-1084088192555421-2038517797379868910-n.jpg',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    },
  },

];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent(current === 0 ? teamMembers.length - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current === teamMembers.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="container mx-auto mt-12 px-4">
      <h2 className="text-center text-3xl font-semibold mb-8">See Our Skilled Expert Team</h2>
      <div className="relative flex items-center justify-center">
        <button onClick={handlePrev} className="absolute left-0 bg-gray-800 text-white p-2 rounded-full focus:outline-none">
          &lt;
        </button>
        <div className="w-80 overflow-hidden">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
            {teamMembers.map((member, index) => (
              <div key={index} className="w-full flex-shrink-0 p-4">
                <div className="relative group">
                  <img src={member.image} alt={member.name} className="rounded-lg shadow-md object-cover w-full h-60" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-bold">{member.name}</p>
                    <p className="text-white text-sm">{member.position}</p>
                    <div className="mt-2 flex space-x-2">
                      <a href={member.social.facebook} className="text-white"><FaFacebookF /></a>
                      <a href={member.social.twitter} className="text-white"><FaTwitter /></a>
                      <a href={member.social.linkedin} className="text-white"><FaLinkedinIn /></a>
                      <a href={member.social.instagram} className="text-white"><FaInstagram /></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleNext} className="absolute right-0 bg-gray-800 text-white p-2 rounded-full focus:outline-none">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
