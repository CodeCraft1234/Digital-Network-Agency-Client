import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaEnvelope, FaMapMarkerAlt, FaShareAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import emailjs from 'emailjs-com'; // Import emailjs

const contactInfo = [
  {
    icon: <FaEnvelope className="text-3xl text-purple-600" />,
    title: "Email & Phone",
    email: "yourweb@gmail.com",
    phone: "+21 842 755 5575",
  },
  {
    icon: <FaMapMarkerAlt className="text-3xl text-purple-600" />,
    title: "Our Location",
    email: "yourweb@gmail.com",
    phone: "+21 842 755 5575",
  },
  {
    icon: <FaShareAlt className="text-3xl text-purple-600" />,
    title: "Get In Touch",
    email: "yourweb@gmail.com",
    phone: "+21 842 755 5575",
  },
];

const Contact = () => {
  const { title } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_ogobvag', 'template_qtlkvpn', formData, 'pndgWc7HdsdPDRjuq')
      .then((response) => {
        console.log('Success:', response);
        setStatus('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="mt-16">
      <Helmet>
        <title>Digital Network| Contact</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <section className="bg-gradient-to-r from-purple-500 to-blue-700 text-white py-32">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="mt-2">Home / Contact Us</p>
          </div>
        </div>
      </section>

      <div className="mx-10 px-4 py-10 flex flex-col lg:flex-row gap-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/3 mb-8 lg:mb-0"
        >
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-center mb-6">
              {info.icon}
              <div className="ml-4">
                <h3 className="text-xl font-bold text-black">{info.title}</h3>
                <p className="text-black">{info.email}</p>
                <p className="text-black">{info.phone}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:w-2/3"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Comment"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-blue-700 text-white py-2 px-4 rounded shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </div>
            {status && <p className="text-center text-gray-700 mt-4">{status}</p>}
          </form>
        </motion.div>
      </div>
      <div className="w-full h-64 lg:h-96 mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8487425375986!2d90.39945231445558!3d23.750841194616728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b894a29c05a7%3A0x697e6fdeb22536c!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1629780134955!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
