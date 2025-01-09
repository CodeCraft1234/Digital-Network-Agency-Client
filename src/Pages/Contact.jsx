import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPinterest, FaShareAlt, FaSnapchat, FaTelegram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import emailjs from 'emailjs-com'; // Import emailjs
import useEmail from '../Hook/useEmail';
import useNumbers from '../Hook/useNumbers';
import useLogo from '../Hook/useLogo';
import { FiClock } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { BiSolidPhoneCall } from 'react-icons/bi';
import useSocialLinks from '../Hook/useSocialLinks';
import { FaThreads } from 'react-icons/fa6';


const Contact = () => {
 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_ogobvag", "template_qtlkvpn", formData, "pndgWc7HdsdPDRjuq")
      .then((response) => {
        console.log("Success:", response);
        setStatus("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        setStatus("Failed to send message. Please try again.");
      });
  };


  const [logo, setLogo] = useLogo();
  const [latestLogo, setLatestLogo] = useState(null);

  useEffect(() => {
    if (logo && logo.length > 0) {
      const sortedLogo = [...logo].sort((a, b) => new Date(b.date) - new Date(a.date));
      const latest = sortedLogo[0];
      setLogo(sortedLogo);
      setLatestLogo(latest);
    }
  }, [logo, setLogo]);

  const [links, setLinks] = useNumbers();
  const [latestLinks, setLatestLinks] = useState(null);

  useEffect(() => {
    if (links && links.length > 0) {
      const sortedLinks = [...links].sort((a, b) => new Date(b.date) - new Date(a.date));
      const latest = sortedLinks[0];
      setLinks(sortedLinks);
      setLatestLinks(latest);
    }
  }, [links, setLinks]);

  const [email] = useEmail();
  console.log(email);
  const [latestLinks2, setLatestLinks2] = useState(null);

  useEffect(() => {
    if (email && email.length > 0) {
      const sortedLinks = [...email].sort((a, b) => new Date(b.date) - new Date(a.date));
      const latest = sortedLinks[0];
      setLatestLinks2(latest);
    }
  }, [email]);


  const contactInfo = [
    {
      icon: <FaEnvelope className="text-3xl text-purple-600" />,
      title: "Email & Phone",
      email: latestLinks2?.email || 'defaultEmail@example.com',
      phone: latestLinks?.facebookID 
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-purple-600" />,
      title: "Our Location",
      email: "Shatkhira Shamnagor",
    },
    {
      icon: <FaShareAlt className="text-3xl text-purple-600" />,
      title: "Get In Touch",
      email: latestLinks2?.email || 'defaultEmail@example.com',
      phone: latestLinks?.facebookID 
    },
  ];

  const [socialLinks]=useSocialLinks()

  return (
    <div className="container mx-auto lg:pt-32">
      <Helmet>
        <title>Digital Network | Contact</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
     

     

      <div className="container mx-auto my-10 p-5">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#0c236b]">Contact Us</h1>
        <p className="text-lg text-gray-600 mt-2">
          You are welcome to visit our office for any information related to
          courses and training. You can also reach us through the hotline
          number or messenger.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Map Section */}

        <div className="w-full rounded-lg overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.943013485824!2d89.0294784149513!3d22.292189285322053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a01eb00115a0fd9%3A0xf804a0a06e73fc27!2sDigital%20Network!5e0!3m2!1sen!2sbd!4v1683456789012!5m2!1sen!2sbd"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    title="Google Maps - Digital Network"
  ></iframe>
</div>




        {/* Contact Info Section */}
        <div className="w-full  p-4   bg-white text-gray-800">
          

          <div >

         <div className='grid lg:grid-cols-2 gap-2'>
       
          <div className=' text-gray-700 p-4  rounded-xl'>
          <h4 className="text-2xl font-bold  mb-1">
             Phone Number 
          </h4>
              
              <li className="flex items-center">
             
              <span className="text-lg font-medium ">
              +8801753-531417
              </span>
            </li>
              <li className="flex items-center">
             
              <span className="text-lg font-medium ">
              +8801618-767838
              </span>
            </li>
            <li className="flex items-center">
            
              <span className="text-lg font-medium ">
              +8801718-767838
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-lg font-medium ">
              +8801918-767838 
              </span>
            </li>
          </div>
          
            

            <div className='text-gray-700 p-4  rounded-xl'>
            <h4 className="text-2xl font-bold  mb-1">
              Office Location
            </h4>
          <li className="flex items-center">

             <span className="text-lg font-medium ">
             Halima Vila, Word: 03, 
             </span>
           </li>
           <li className="flex items-center">
         
             <span className="text-lg font-medium ">
             South Hazipur, Nurnagar-9451
             </span>
           </li>
           <li className="flex items-center">
         
             <span className="text-lg font-medium ">
             Thana: Shyamnagar, Dist: Satkhira
             </span>
           </li>
           <li className="flex items-center">
         
             <span className="text-lg font-medium ">
             Division: Khulna, Bangladesh.
             </span>
           </li>
            

          </div>  

          <div className='text-gray-700 p-4  rounded-xl'>
            <h4 className="text-2xl font-bold  mb-1">
            E-mail Address
          </h4>
              {/* Email */}
              <li className="flex items-center">
             
              <span className="text-lg font-medium ">
                {socialLinks?.email}
              </span>
            </li>
            <li className="flex items-center">
          
              <span className="text-lg font-medium ">
                {socialLinks?.email2}
              </span>
            </li>

            </div>    

          <div className=' text-gray-700 p-4  rounded-xl'>
          <h4 className="text-2xl font-bold text-gray-700 ">
            Office Visit Time
          </h4>
              <li className="flex items-center">
              <span className="text-lg font-medium text-gray-700">
              Saturday - Thursday
              </span>
            </li>
              <li className="flex items-center">
              <span className="text-lg font-medium text-gray-700">
              09:00AM - 06:00PM
              </span>
            </li>
          </div>  
          
         </div>




          </div>
          <div className="flex gap-4 px-4 mt-5">
            {socialLinks?.facebook && (
              <a
                href={`https://www.facebook.com/${socialLinks?.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="icon2"
              >
                <FaFacebookF />
              </a>
            )}
            {socialLinks?.twitter && (
              <a
                href={`https://twitter.com/${socialLinks?.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
               className="icon2"
              >
                <FaTwitter />
              </a>
            )}
            {socialLinks?.instagram && (
              <a
                href={`https://www.instagram.com/${socialLinks?.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
              className="icon2"
              >
                <FaInstagram />
              </a>
            )}
            {socialLinks?.linkedin && (
              <a
                href={`https://linkedin.com/in/${socialLinks?.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
               className="icon2"
              >
                <FaLinkedinIn />
              </a>
            )}
            {socialLinks?.pinterest && (
              <a
                href={`https://pinterest.com/${socialLinks?.pinterest}`}
                target="_blank"
                rel="noopener noreferrer"
               className="icon2"
              >
                <FaPinterest />
              </a>
            )}

            {socialLinks?.facebook && (
              <a
                href={`https://www.facebook.com/${socialLinks?.youtube}`}
                target="_blank"
                rel="noopener noreferrer"
                className="icon2"
              >
                <FaYoutube />
              </a>
            )}
            {socialLinks?.twitter && (
              <a
                href={`https://twitter.com/${socialLinks?.tiktok}`}
                target="_blank"
                rel="noopener noreferrer"
                className="icon2"
              >
                <FaTiktok />
              </a>
            )}
            {socialLinks?.instagram && (
              <a
                href={`https://www.instagram.com/${socialLinks?.telegram}`}
                target="_blank"
                rel="noopener noreferrer"
               className="icon2"
              >
                <FaTelegram />
              </a>
            )}
            {socialLinks?.linkedin && (
              <a
                href={`https://linkedin.com/in/${socialLinks?.snapchat}`}
                target="_blank"
                rel="noopener noreferrer"
              className="icon2"
              >
                <FaSnapchat />
              </a>
            )}
            {socialLinks?.threads && (
              <a
                href={`https://pinterest.com/${socialLinks?.threads}`}
                target="_blank"
                rel="noopener noreferrer"
               className="icon2"
              >
                <FaThreads />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>

   
    <div className="min-h-screen rounded-lg my-10 p-10 flex items-center justify-center bg-gradient-to-r from-[#092d77] via-[#0d4691] to-[#0c236b]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div className="text-white text-left">
            <h1 className="text-8xl font-bold mb-4">We'd love to hear from you...</h1>
          </div>

          {/* Right Section */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-4  p-8 rounded "
            >
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                <label className='text-white text-xl font-bold ' htmlFor="">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Type First Name.... *"
                    required
                    className="w-full p-3 mt-4 border  border-gray-800 bg-white text-black rounded focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                <label className='text-white text-xl font-bold ' htmlFor="">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Type Last Name.... "
                    required
                    className="w-full p-3 mt-4 border border-gray-800 bg-white text-black rounded focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                <label className='text-white text-xl font-bold ' htmlFor="">E-mail *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" Type E-mail.... "
                    required
                    className="w-full p-3 mt-4 border border-gray-800 bg-white text-black rounded focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                <label className='text-white text-xl font-bold ' htmlFor="">Phone *</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Type Phone Number...."
                    className="w-full p-3 mt-4 border border-gray-800 bg-white text-black rounded focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>
              <div className="mb-4">
              <label className='text-white text-xl font-bold ' htmlFor="">Organization Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Type Company / Organization Name...."
                  className="w-full mt-4 p-3 border border-gray-800 bg-white text-black rounded focus:outline-none focus:border-purple-500"
                />
              </div>

           <div className='mt-44'>
           <div className="mb-4">
              <h1 className='text-white mt-8 text-xl font-bold ' htmlFor="">How can we help?</h1>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  rows="5"
                  className="w-full p-3 mt-4 border border-gray-800 bg-white text-black rounded focus:outline-none focus:border-purple-500"
                ></textarea>
              </div>
           </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-green-700 text-white w-full py-2 px-6 rounded shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
                >
                  Submit
                </button>
              </div>
              {status && <p className="text-center text-gray-700 mt-4">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
     
     
    </div>
  );
};

export default Contact;
