// import React, { useState } from 'react';
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

// const teamMembers = [
//   {
//     name: 'MD Anowarul Islam',
//     position: 'Founder & CEO',
//     image: 'https://i.ibb.co/d7RTx6v/Anowarul.jpg',
//     social: {
//       facebook: '#',
//       twitter: '#',
//       linkedin: '#',
//       instagram: '#'
//     },
//   },
//   {
//     name: 'Sharmin Farzana',
//     position: 'UI/UX & Graphics Designer',
//     image: 'https://i.ibb.co/GPVNYgh/Sharmin.jpg',
//     social: {
//       facebook: '#',
//       twitter: '#',
//       linkedin: '#',
//       instagram: '#'
//     },
//   },
//   {
//     name: 'Partho Saha',
//     position: 'Graphics & Motion Designer',
//     image: 'https://i.ibb.co/3yQ9kQW/Partho.jpg',
//     social: {
//       facebook: '#',
//       twitter: '#',
//       linkedin: '#',
//       instagram: '#'
//     },
//   },
//   {
//     name: 'Farzana Akhter Bethe',
//     position: 'Graphic Designer & Digital Marketer',
//     image: 'https://i.ibb.co/dQFR1HX/Bethi.jpg',
//     social: {
//       facebook: '#',
//       twitter: '#',
//       linkedin: '#',
//       instagram: '#'
//     },
//   },
//   {
//     name: 'Sadiq Al Helal',
//     position: 'Graphic Designer & Digital Marketer',
//     image: 'https://i.ibb.co/55ctgxY/Sadiq-Al-Helal.jpg',
//     social: {
//       facebook: '#',
//       twitter: '#',
//       linkedin: '#',
//       instagram: '#'
//     },
//   },
//   {
//     name: 'Jubayer Islam Fahim',
//     position: 'Digital Marketer',
//     image: 'https://i.ibb.co/wS2KZKM/Jubayer.jpg',
//     social: {
//       facebook: '#',
//       twitter: '#',
//       linkedin: '#',
//       instagram: '#'
//     },
//   },
//   {
//     name: 'Nadia Pathan',
//     position: 'Digital Marketer',
//     image: 'https://i.ibb.co/vPmcTYh/woocommerce-placeholder.png',
//     social: {
//       facebook: '#',
//       twitter: '#',
//       linkedin: '#',
//       instagram: '#'
//     },
//   },
//   {
//     name: 'Rifat Ahmed',
//     position: 'Digital Marketer',
//     image: 'https://i.ibb.co/4P1sZYb/Rifat.jpg',
//     social: {
//       facebook: '#',
//       twitter: '#',
//       linkedin: '#',
//       instagram: '#'
//     },
//   },
//   {
//     name: 'Md Ridoy Hasan',
//     position: 'Digital Marketer',
//     image: 'https://i.ibb.co/qF6TD3K/Md-Ridoy-Hasan.jpg',
//     social: {
//       facebook: '#',
//       twitter: '#',
//       linkedin: '#',
//       instagram: '#'
//     },
//   },
//   {
//     name: 'Nur Mohammad',
//     position: 'Digital Marketer',
//     image: 'https://i.ibb.co/HC8t5Hx/Nur-Mohammad.jpg',
//     social: {
//       facebook: '#',
//       twitter: '#',
//       linkedin: '#',
//       instagram: '#'
//     },
//   },
//   {
//     name: 'MD Muzahidul Islam',
//     position: 'Web Designer',
//     image: 'https://i.ibb.co/9G3xhxg/MD-Muzahidul-Islam.jpg',
//     social: {
//       facebook: '#',
//       twitter: '#',
//       linkedin: '#',
//       instagram: '#'
//     },
//   },
//   {
//     name: 'MD Asaduzzaman',
//     position: 'Web Designer & Developer',
//     image: 'https://i.ibb.co/PwMphjv/Yellow-Inspiration-Modern-Instagram-Profile-Picture.png',
//     social: {
//       facebook: '#',
//       twitter: '#',
//       linkedin: '#',
//       instagram: '#'
//     },
//   },
//   {
//     name: 'Mohammad Robiul',
//     position: 'Web Designer & Developer',
//     image: 'https://i.ibb.co/9TR7BkP/367071537-1084088192555421-2038517797379868910-n.jpg',
//     social: {
//       facebook: '#',
//       twitter: '#',
//       linkedin: '#',
//       instagram: '#'
//     },
//   },

// ];

// const Carousel = () => {
//   const [current, setCurrent] = useState(0);

//   const handlePrev = () => {
//     setCurrent(current === 0 ? teamMembers.length - 1 : current - 1);
//   };

//   const handleNext = () => {
//     setCurrent(current === teamMembers.length - 1 ? 0 : current + 1);
//   };

//   return (
//     <div className="container mx-auto mt-12 px-4">
//       <h2 className="text-center text-3xl font-semibold mb-8">See Our Skilled Expert Team</h2>
//       <div className="relative flex items-center justify-center">
//         <button onClick={handlePrev} className="absolute left-0 bg-gray-800 text-white p-2 rounded-full focus:outline-none">
//           &lt;
//         </button>
//         <div className="w-80 overflow-hidden">
//           <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
//             {teamMembers.map((member, index) => (
//               <div key={index} className="w-full flex-shrink-0 p-4">
//                 <div className="relative group">
//                   <img src={member.image} alt={member.name} className="rounded-lg shadow-md object-cover w-full h-60" />
//                   <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <p className="text-white text-lg font-bold">{member.name}</p>
//                     <p className="text-white text-sm">{member.position}</p>
//                     <div className="mt-2 flex space-x-2">
//                       <a href={member.social.facebook} className="text-white"><FaFacebookF /></a>
//                       <a href={member.social.twitter} className="text-white"><FaTwitter /></a>
//                       <a href={member.social.linkedin} className="text-white"><FaLinkedinIn /></a>
//                       <a href={member.social.instagram} className="text-white"><FaInstagram /></a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <button onClick={handleNext} className="absolute right-0 bg-gray-800 text-white p-2 rounded-full focus:outline-none">
//           &gt;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;


// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';

// const teamMembers = [
//   {
//     name: 'MD Anowarul Islam',
//     position: 'Founder & CEO',
//     image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Anowarul.jpg',
//     social: {
//       facebook: 'https://facebook.com/anowarulbd3',
//       twitter: 'https://twitter.com/anowarulbd',
//       linkedin: 'https://linkedin.com/in/anowarulbd',
//       instagram: 'https://instagram.com/anowarulbd3'
//     },
//   },
//   {
//     name: 'Sharmin Farzana',
//     position: 'UI/UX & Graphics Designer',
//     image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Sharmin.jpg',
//     social: {
//       facebook: '#',
//       twitter: '#',
//       linkedin: '#',
//       instagram: '#'
//     },
//   },
//   {
//     name: 'Partho Saha',
//     position: 'Graphics & Motion Designer',
//     image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Partho.jpg',
//     social: {
//       facebook: 'https://facebook.com/parthogd69',
//       twitter: 'https://twitter.com/parthogd69',
//       linkedin: 'https://linkedin.com/in/parthogd69',
//       instagram: 'https://instagram.com/parthogd69'
//     },
//   },
//   {
//     name: 'Farzana Akter Bethe',
//     position: 'Graphic Designer & Digital Marketer',
//     image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Bethi.jpg',
//     social: {
//       facebook: 'https://facebook.com/farzanabethe1693',
//       twitter: 'https://twitter.com/farzanabethe1693',
//       linkedin: 'https://linkedin.com/farzanabethe1693',
//       instagram: 'https://instagram.com/farzanabethe1693'
//     },
//   },
//   {
//     name: 'Sadiq Al Helal',
//     position: 'Graphic Designer & Digital Marketer',
//     image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Sadiq-Al-Helal.jpg',
//     social: {
//       facebook: '#',
//       twitter: '#',
//       linkedin: '#',
//       instagram: '#'
//     },
//   },
//   {
//     name: 'Jubayer Islam Fahim',
//     position: 'Digital Marketer',
//     image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Jubayer.jpg',
//     social: {
//       facebook: 'https://facebook.com/jubairislam746',
//       twitter: 'https://twitter.com/jubairislam746',
//       linkedin: 'https://linkedin.com/jubairislam746',
//       instagram: 'https://instagram.com/jubairislam746'
//     },
//   },
//   {
//     name: 'Nadia Pathan',
//     position: 'Digital Marketer',
//     image: 'https://hellodigitalnetwork.com/wp-content/uploads/woocommerce-placeholder.png',
//     social: {
//       facebook: '#',
//       twitter: '#',
//       linkedin: '#',
//       instagram: '#'
//     },
//   },
//   {
//     name: 'Rifat Ahmed',
//     position: 'Digital Marketer',
//     image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Rifat.jpg',
//     social: {
//       facebook: 'https://facebook.com/rifatahmed1621',
//       twitter: 'https://twitter.com/rifatahmed1621',
//       linkedin: 'https://linkedin.com/rifatahmed1621',
//       instagram: 'https://instagram.com/rifatahmed1621'
//     },
//   },
//   {
//     name: 'Md Ridoy Hasan',
//     position: 'Digital Marketer',
//     image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Md-Ridoy-Hasan.jpg',
//     social: {
//       facebook: 'https://facebook.com/ridoybd2244',
//       twitter: 'https://twitter.com/ridoybd2244',
//       linkedin: 'https://linkedin.com/ridoybd2244',
//       instagram: 'https://instagram.com/ridoybd2244'
//     },
//   },
//   {
//     name: 'Nur Mohammad',
//     position: 'Digital Marketer',
//     image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Nur-Mohammad.jpg',
//     social: {
//       facebook: '#',
//       twitter: '#',
//       linkedin: '#',
//       instagram: '#'
//     },
//   },
//   {
//     name: 'MD Muzahidul Islam',
//     position: 'Web Designer',
//     image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/MD-Muzahidul-Islam.jpg',
//     social: {
//       facebook: '#',
//       twitter: '#',
//       linkedin: '#',
//       instagram: '#'
//     },
//   },
// ];

// const Carousel = () => {
//   return (
//     <div className="container mx-auto mt-12 px-4">
//       <h2 className="text-center text-3xl font-semibold mb-8">See Our Skilled Expert Team</h2>
//       <Swiper
//         loop={true}
//         spaceBetween={24}
//         breakpoints={{
//           0: { slidesPerView: 1 },
//           576: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           992: { slidesPerView: 3 },
//           1200: { slidesPerView: 4 },
//         }}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//         }}
//       >
//         {teamMembers.map((member, index) => (
//           <SwiperSlide key={index}>
//             <div className="team-box bg-white rounded-lg shadow-lg overflow-hidden">
//               <div className="relative">
//                 <img src={member.image} alt={member.name} className="w-full h-60 object-cover" />
//                 <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                   <div className="play-btn text-white mb-4"><i className="far fa-plus"></i></div>
//                   <div className="th-social space-x-2">
//                     <a href={member.social.facebook} className="text-white"><FaFacebookF /></a>
//                     <a href={member.social.twitter} className="text-white"><FaTwitter /></a>
//                     <a href={member.social.linkedin} className="text-white"><FaLinkedinIn /></a>
//                     <a href={member.social.instagram} className="text-white"><FaInstagram /></a>
//                   </div>
//                 </div>
//               </div>
//               <div className="team-content p-4 text-center">
//                 <h3 className="box-title text-xl font-semibold"><a href="#">{member.name}</a></h3>
//                 <span className="team-desig text-gray-600">{member.position}</span>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="swiper-button-prev text-gray-800"><FaArrowLeft /></div>
//       <div className="swiper-button-next text-gray-800"><FaArrowRight /></div>
//     </div>
//   );
// };

// export default Carousel;


// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const teamMembers = [
//   {
//     name: 'MD Anowarul Islam',
//     position: 'Founder & CEO',
//     image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Anowarul.jpg',
//     social: {
//       facebook: 'https://facebook.com/anowarulbd3',
//       twitter: 'https://twitter.com/anowarulbd',
//       linkedin: 'https://linkedin.com/in/anowarulbd',
//       instagram: 'https://instagram.com/anowarulbd3'
//     },
//   },
//   {
//     name: 'Sharmin Farzana',
//     position: 'UI/UX & Graphics Designer',
//     image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Sharmin.jpg',
//     social: {
//       facebook: '#',
//       twitter: '#',
//       linkedin: '#',
//       instagram: '#'
//     },
//   },
//   {
//     name: 'Partho Saha',
//     position: 'Graphics & Motion Designer',
//     image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Partho.jpg',
//     social: {
//       facebook: 'https://facebook.com/parthogd69',
//       twitter: 'https://twitter.com/parthogd69',
//       linkedin: 'https://linkedin.com/in/parthogd69',
//       instagram: 'https://instagram.com/parthogd69'
//     },
//   },
//   {
//     name: 'Farzana Akter Bethe',
//     position: 'Graphic Designer & Digital Marketer',
//     image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Bethi.jpg',
//     social: {
//       facebook: 'https://facebook.com/farzanabethe1693',
//       twitter: 'https://twitter.com/farzanabethe1693',
//       linkedin: 'https://linkedin.com/farzanabethe1693',
//       instagram: 'https://instagram.com/farzanabethe1693'
//     },
//   },
//   {
//     name: 'Sadiq Al Helal',
//     position: 'Graphic Designer & Digital Marketer',
//     image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Sadiq-Al-Helal.jpg',
//     social: {
//       facebook: '#',
//       twitter: '#',
//       linkedin: '#',
//       instagram: '#'
//     },
//   },
//   {
//     name: 'Jubayer Islam Fahim',
//     position: 'Digital Marketer',
//     image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Jubayer.jpg',
//     social: {
//       facebook: 'https://facebook.com/jubairislam746',
//       twitter: 'https://twitter.com/jubairislam746',
//       linkedin: 'https://linkedin.com/jubairislam746',
//       instagram: 'https://instagram.com/jubairislam746'
//     },
//   },
//   {
//     name: 'Nadia Pathan',
//     position: 'Digital Marketer',
//     image: 'https://hellodigitalnetwork.com/wp-content/uploads/woocommerce-placeholder.png',
//     social: {
//       facebook: '#',
//       twitter: '#',
//       linkedin: '#',
//       instagram: '#'
//     },
//   },
//   {
//     name: 'Rifat Ahmed',
//     position: 'Digital Marketer',
//     image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Rifat.jpg',
//     social: {
//       facebook: 'https://facebook.com/rifatahmed1621',
//       twitter: 'https://twitter.com/rifatahmed1621',
//       linkedin: 'https://linkedin.com/rifatahmed1621',
//       instagram: 'https://instagram.com/rifatahmed1621'
//     },
//   },
//   {
//     name: 'Md Ridoy Hasan',
//     position: 'Digital Marketer',
//     image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Md-Ridoy-Hasan.jpg',
//     social: {
//       facebook: 'https://facebook.com/ridoybd2244',
//       twitter: 'https://twitter.com/ridoybd2244',
//       linkedin: 'https://linkedin.com/ridoybd2244',
//       instagram: 'https://instagram.com/ridoybd2244'
//     },
//   },
//   {
//     name: 'Nur Mohammad',
//     position: 'Digital Marketer',
//     image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Nur-Mohammad.jpg',
//     social: {
//       facebook: '#',
//       twitter: '#',
//       linkedin: '#',
//       instagram: '#'
//     },
//   },
//   {
//     name: 'MD Muzahidul Islam',
//     position: 'Web Designer',
//     image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/MD-Muzahidul-Islam.jpg',
//     social: {
//       facebook: '#',
//       twitter: '#',
//       linkedin: '#',
//       instagram: '#'
//     },
//   },
// ];

// const Carousel = () => {
//   return (
//     <div className="container mx-auto mt-12 px-4">
//       <h2 className="text-center text-3xl font-semibold mb-8">See Our Skilled Expert Team</h2>
//       <Swiper
//         loop={true}
//         spaceBetween={24}
//         breakpoints={{
//           0: { slidesPerView: 1 },
//           576: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           992: { slidesPerView: 3 },
//           1200: { slidesPerView: 4 },
//         }}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//         }}
//       >
//         {teamMembers.map((member, index) => (
//           <SwiperSlide key={index}>
//             <div className="team-box bg-white rounded-lg shadow-lg overflow-hidden">
//               <div className="relative">
//                 <img src={member.image} alt={member.name} className="w-full h-60 object-cover" />
//                 <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                   <div className="play-btn text-white mb-4"><i className="far fa-plus"></i></div>
//                   <div className="th-social space-x-2">
//                     <a href={member.social.facebook} className="text-white"><FaFacebookF /></a>
//                     <a href={member.social.twitter} className="text-white"><FaTwitter /></a>
//                     <a href={member.social.linkedin} className="text-white"><FaLinkedinIn /></a>
//                     <a href={member.social.instagram} className="text-white"><FaInstagram /></a>
//                   </div>
//                 </div>
//               </div>
//               <div className="team-content p-4 text-center">
//                 <h3 className="box-title text-xl font-semibold"><a href="#">{member.name}</a></h3>
//                 <span className="team-desig text-gray-600">{member.position}</span>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="swiper-button-prev text-gray-800"><FaArrowLeft /></div>
//       <div className="swiper-button-next text-gray-800"><FaArrowRight /></div>
//     </div>
//   );
// };

// export default Carousel;



import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const teamMembers = [
  {
    name: 'MD Anowarul Islam',
    position: 'Founder & CEO',
    image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Anowarul.jpg',
    social: {
      facebook: 'https://facebook.com/anowarulbd3',
      twitter: 'https://twitter.com/anowarulbd',
      linkedin: 'https://linkedin.com/in/anowarulbd',
      instagram: 'https://instagram.com/anowarulbd3'
    },
  },
  {
    name: 'Sharmin Farzana',
    position: 'UI/UX & Graphics Designer',
    image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Sharmin.jpg',
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
    image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Partho.jpg',
    social: {
      facebook: 'https://facebook.com/parthogd69',
      twitter: 'https://twitter.com/parthogd69',
      linkedin: 'https://linkedin.com/in/parthogd69',
      instagram: 'https://instagram.com/parthogd69'
    },
  },
  {
    name: 'Farzana Akter Bethe',
    position: 'Graphic Designer & Digital Marketer',
    image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Bethi.jpg',
    social: {
      facebook: 'https://facebook.com/farzanabethe1693',
      twitter: 'https://twitter.com/farzanabethe1693',
      linkedin: 'https://linkedin.com/farzanabethe1693',
      instagram: 'https://instagram.com/farzanabethe1693'
    },
  },
  {
    name: 'Sadiq Al Helal',
    position: 'Graphic Designer & Digital Marketer',
    image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Sadiq-Al-Helal.jpg',
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
    image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Jubayer.jpg',
    social: {
      facebook: 'https://facebook.com/jubairislam746',
      twitter: 'https://twitter.com/jubairislam746',
      linkedin: 'https://linkedin.com/jubairislam746',
      instagram: 'https://instagram.com/jubairislam746'
    },
  },
  {
    name: 'Nadia Pathan',
    position: 'Digital Marketer',
    image: 'https://hellodigitalnetwork.com/wp-content/uploads/woocommerce-placeholder.png',
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
    image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Rifat.jpg',
    social: {
      facebook: 'https://facebook.com/rifatahmed1621',
      twitter: 'https://twitter.com/rifatahmed1621',
      linkedin: 'https://linkedin.com/rifatahmed1621',
      instagram: 'https://instagram.com/rifatahmed1621'
    },
  },
  {
    name: 'Md Ridoy Hasan',
    position: 'Digital Marketer',
    image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Md-Ridoy-Hasan.jpg',
    social: {
      facebook: 'https://facebook.com/ridoybd2244',
      twitter: 'https://twitter.com/ridoybd2244',
      linkedin: 'https://linkedin.com/ridoybd2244',
      instagram: 'https://instagram.com/ridoybd2244'
    },
  },
  {
    name: 'Nur Mohammad',
    position: 'Digital Marketer',
    image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/Nur-Mohammad.jpg',
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
    image: 'https://hellodigitalnetwork.com/wp-content/uploads/2024/05/MD-Muzahidul-Islam.jpg',
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
  return (
    <div className="container mx-auto mt-12 px-4">
      <h2 className="text-center text-3xl font-semibold mb-8">See Our Skilled Expert Team</h2>
      <Swiper
        loop={true}
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation]}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="team-box bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img src={member.image} alt={member.name} className="w-full h-60 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="play-btn text-white mb-4"><i className="far fa-plus"></i></div>
                  <div className="th-social space-x-2">
                    <a href={member.social.facebook} className="text-white"><FaFacebookF /></a>
                    <a href={member.social.twitter} className="text-white"><FaTwitter /></a>
                    <a href={member.social.linkedin} className="text-white"><FaLinkedinIn /></a>
                    <a href={member.social.instagram} className="text-white"><FaInstagram /></a>
                  </div>
                </div>
              </div>
              <div className="team-content p-4 text-center">
                <h3 className="box-title text-xl font-semibold"><a href="#">{member.name}</a></h3>
                <span className="team-desig text-gray-600">{member.position}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev text-gray-800"><FaArrowLeft /></div>
      <div className="swiper-button-next text-gray-800"><FaArrowRight /></div>
    </div>
  );
};

export default Carousel;


