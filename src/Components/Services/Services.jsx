// import { Link } from "react-router-dom";

// const Service = () => {

//   const services = [
//     { category: "Graphics Design", icon: "https://i.ibb.co/sqbxMMH/gd.png" },
//     { category: "Web Design", icon: "https://i.ibb.co/WzdGH9y/wd.png" },
//     { category: "Digital Marketing", icon: "https://i.ibb.co/Fh30qcr/dm.png" },
//   ];

//   return (
//     <div className="mt-24">
//         <section className="bg-gradient-to-r from-purple-500 to-blue-700 text-white py-10">
//         <div className="container mx-auto px-4">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold">Service Details</h1>
//             <p className="mt-2">Home / Service</p>
//           </div>
//         </div>
//       </section>
//       <div className="flex justify-center">
//         <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-8 m-4">
//           {services.map((service, index) => (
//             <Link to={`/category/${service.category}`} key={index}>
//             <div

//               className="flex flex-col items-center justify-center text-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow text-black"
//             >
//               <div className="mb-4">
//                 <img
//                   className="w-8 h-8"
//                   src={service.icon}
//                   alt={service.category}
//                 />
//               </div>
//               <h6 className="text-xl font-semibold">{service.category}</h6>
//             </div>

//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Service;

// import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Service = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//     });
//   }, []);

//   const services = [
//     { category: "Graphics Design", icon: "https://i.ibb.co/sqbxMMH/gd.png" },
//     { category: "Web Design", icon: "https://i.ibb.co/WzdGH9y/wd.png" },
//     { category: "Digital Marketing", icon: "https://i.ibb.co/Fh30qcr/dm.png" },
//   ];

//   return (
//     <div className="mt-24">
//       <section className="bg-gradient-to-r from-purple-500 to-blue-700 text-white py-10">
//         <div className="container mx-auto px-4">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold">Service Details</h1>
//             <p className="mt-2">Home / Service</p>
//           </div>
//         </div>
//       </section>
//       <div className="flex justify-center">
//         <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-8 m-4">
//           {services.map((service, index) => (
//             <Link to={`/category/${service.category}`} key={index}>
//               <div
//                 data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
//                 className="flex flex-col items-center justify-center text-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow text-black"
//               >
//                 <div className="mb-4">
//                   <img
//                     className="w-8 h-8"
//                     src={service.icon}
//                     alt={service.category}
//                   />
//                 </div>
//                 <h6 className="text-xl font-semibold">{service.category}</h6>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Service;

import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const services = [
    { category: "Graphics Design", icon: "https://i.ibb.co/sqbxMMH/gd.png" },
    { category: "Web Design", icon: "https://i.ibb.co/WzdGH9y/wd.png" },
    { category: "Digital Marketing", icon: "https://i.ibb.co/Fh30qcr/dm.png" },
  ];

  return (
    <div className="mt-24">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-500 to-blue-700 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Service Details</h1>
            <p className="mt-2">Home / Service</p>
          </div>
        </div>
      </section>

      {/* First Content Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-4">
              Whether You're Looking For Answers, Would Like To Solve The
              Problem.
            </h2>
            <p className="text-gray-600">
              Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
              the consectetur elit. Vest at bulum nec odio ae the dumm ipsumm
              ipsum that dolocons rsus mal suada and fadolorit to the
              consectetur elit. All the Lorem Ipsum generators on the Internet
              tend to repeat predefined chunks as necessary.
            </p>
          </div>
          <div data-aos="fade-left" className="flex justify-center">
            <img
              src="https://i.ibb.co/Jdr6t9r/illustration19.png"
              alt="Illustration"
              className="w-full max-w-sm"
            />
          </div>
        </div>
      </section>

      {/* Second Content Section */}
      <section className="py-10 ">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div
                className="text-center p-4 bg-white shadow-md rounded-md"
                data-aos="fade-up"
              >
                <div className="text-blue-500 text-3xl mb-2">1</div>
                <h3 className="text-xl font-bold">Fully Responsive</h3>
              </div>
              <div
                className="text-center p-4 bg-white shadow-md rounded-md"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="text-red-500 text-3xl mb-2">2</div>
                <h3 className="text-xl font-bold">Device Testing</h3>
              </div>
              <div
                className="text-center p-4 bg-white shadow-md rounded-md"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="text-purple-500 text-3xl mb-2">3</div>
                <h3 className="text-xl font-bold">Clean & Modern</h3>
              </div>
              <div
                className="text-center p-4 bg-white shadow-md rounded-md"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="text-orange-500 text-3xl mb-2">4</div>
                <h3 className="text-xl font-bold">Great Experience</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third Content Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-4">
              We Are Here For Make To Web Development
            </h2>
            <p className="text-gray-600">
              Consectetur elit. Vest at bulum nec odio ae the dumm ipsumm ipsum
              that dolocons rsus mal suada and fadolorit to consectetur elit.
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first generator on
              the Internet. It uses a dictionary of over 200 Latin words,
              combined with a handful of model sentence structures, to generate
              Lorem the Ipsum which looks reasonable.
            </p>
          </div>
          <div data-aos="fade-left" className="flex justify-center">
            <img
              src="https://i.ibb.co/p2Y6MVG/illustration20.png"
              alt="Illustration"
              className="w-full max-w-sm"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link to={`/category/${service.category}`} key={index}>
                <div
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  className="flex flex-col items-center justify-center text-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow text-black"
                >
                  <div className="mb-4">
                    <img
                      className="w-16 h-16"
                      src={service.icon}
                      alt={service.category}
                    />
                  </div>
                  <h6 className="text-xl font-semibold">{service.category}</h6>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
