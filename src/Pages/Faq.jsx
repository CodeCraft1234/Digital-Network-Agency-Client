import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaAngleDown, FaAngleUp, FaQuestionCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What services does Digital Network provide?",
      answer:
        "We offer three key services: Digital Marketing, Graphic Design, and Web Design to help your business succeed online.",
    },
    {
      question: "Who are these services for?",
      answer:
        "Our services are ideal for businesses of all sizes, especially those looking to build or enhance their brand's presence online.",
    },
    {
      question: "What does your Digital Marketing service include?",
      answer:
        "Our Digital Marketing services cover Social Media Marketing, Search Engine Optimization (SEO), Content Marketing, Email Marketing, and Paid Ad Campaigns.",
    },
    {
      question: "What types of work do you offer under Graphic Design?",
      answer:
        "We provide a wide range of graphic design services, including Logo Design, Social Media Content Design, Banner and Flyer Design, and Presentation and Infographic Design.",
    },
    {
      question: "What do you offer in Web Design?",
      answer:
        "We specialize in creating modern, mobile-responsive, and SEO-optimized websites. Whether you need a custom design, e-commerce site, or dynamic website, we deliver tailored solutions based on your requirements.",
    },
    {
      question: "How can I get started with your services?",
      answer:
        "You can get started by contacting us via email or phone. Alternatively, you can fill out the inquiry form on our website, and our team will reach out to you.",
    },
    {
      question: "How does Digital Network handle payments?",
      answer:
        "We accept payments through various methods, including bank transfers, mobile banking, and more. Payment policies will be discussed in detail before the project begins.",
    },
    {
      question: "Why should I choose Digital Network?",
      answer:
        "Here’s why: A team of experienced professionals, customized strategies, timely delivery, and a commitment to maximizing ROI for our clients.",
    },
    {
      question: "How can I contact Digital Network?",
      answer:
        "You can reach us at: Email: info@digitalnetwork.com, Phone: +8801753-531417.",
    },
    {
      question: "What if I have more questions?",
      answer:
        "If you have additional questions, feel free to contact us directly. We’re happy to provide any information you need to get started with our services.",
    },
  ];

  return (
    <div className="pt-44 mx-auto container">
      <Helmet>
        <title>Digital Network | FAQ</title>
        <link rel="canonical" href="https://www.digitalnetwork.com/faq" />
      </Helmet>

      <div className="py-10 flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <div
          className="md:w-1/3 bg-gradient-to-b from-blue-50 to-white p-6 rounded-lg shadow-lg"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Popular Articles
          </h2>
          <ul className="space-y-4">
            {faqItems.slice(0, 5).map((item, index) => (
              <li key={index} className="flex items-center">
                <FaQuestionCircle className="mr-2 text-blue-600" />
                <a
                  href="#"
                  className="text-blue-600 hover:underline hover:text-blue-800"
                >
                  {item.question}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ Section */}
        <div
          className="md:w-2/3 bg-white p-6 rounded-lg shadow-lg"
          data-aos="fade-left"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800">FAQs</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 shadow-sm transition-all"
              >
                <div
                  className="flex justify-between items-center text-xl font-bold cursor-pointer hover:text-purple-600"
                  onClick={() => handleToggle(index)}
                >
                  <span className="text-gray-800">{item.question}</span>
                  <span>
                    {openIndex === index ? (
                      <FaAngleUp className="text-base text-gray-800" />
                    ) : (
                      <FaAngleDown className="text-base text-gray-800" />
                    )}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-2 text-gray-600">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
