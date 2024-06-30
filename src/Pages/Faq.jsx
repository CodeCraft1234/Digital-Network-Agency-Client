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

  return (
    <div className="mt-16">
      <Helmet>
        <title>Digital Network | FAQ</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <section className="bg-gradient-to-r from-purple-500 to-blue-700 text-white py-32">
        <div className="px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold">FAQ</h1>
            <p className="mt-2">Home / FAQ</p>
          </div>
        </div>
      </section>
      <div className="px-4 py-10 mx-10 flex flex-col md:flex-row gap-10">
        <div
          className="md:w-1/3 bg-white p-6"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <h2 className="text-2xl font-bold mb-4 text-black">
            Popular Articles
          </h2>
          <ul className="space-y-4">
            {[
              "How to Get Started with Digital Marketing",
              "Understanding Our Web Development Process",
              "Tips for Effective Graphics Design",
              "How to Choose the Right Service for Your Business",
              "Frequently Asked Questions about Our Services",
            ].map((article, index) => (
              <li key={index} className="flex items-center">
                <FaQuestionCircle className="mr-2 text-blue-600" />
                <a href="#" className="text-blue-600 hover:underline">
                  {article}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="md:w-2/3 bg-white p-6"
          data-aos="fade-left"
          data-aos-anchor-placement="left-bottom"
        >
          <h2 className="text-2xl font-bold mb-4 text-black">
            How Our Services Work
          </h2>
          <div className="space-y-4">
            {[
              "What services do you offer in digital marketing?",
              "Can you explain your web development process?",
              "What should I consider when designing graphics?",
              "How do I choose the best service for my needs?",
              "Do you offer custom solutions?",
            ].map((question, index) => (
              <div key={index}>
                <div
                  className="flex justify-between items-center text-xl font-bold cursor-pointer hover:text-purple-600"
                  onClick={() => handleToggle(index)}
                >
                  <span className="text-black">{question}</span>
                  <span>
                    {openIndex === index ? (
                      <FaAngleUp className="text-base text-black" />
                    ) : (
                      <FaAngleDown className="text-base text-black" />
                    )}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-2 text-black">
                    {question ===
                      "What services do you offer in digital marketing?" &&
                      "We provide a comprehensive range of digital marketing services including SEO, social media management, pay-per-click advertising, content marketing, and email marketing to help you reach your target audience effectively."}
                    {question ===
                      "Can you explain your web development process?" &&
                      "Our web development process involves understanding your business requirements, planning and designing a user-friendly interface, developing the website with the latest technologies, testing for quality assurance, and deploying the website. We also offer ongoing maintenance and support."}
                    {question ===
                      "What should I consider when designing graphics?" &&
                      "When designing graphics, it's important to focus on clarity, consistency, and aesthetics. Ensure that your designs align with your brand identity, are visually appealing, and communicate your message effectively. Use high-quality images and maintain a balance between text and visuals."}
                    {question ===
                      "How do I choose the best service for my needs?" &&
                      "Choosing the best service depends on your specific business goals and needs. Consider factors like your target audience, budget, and the outcomes you want to achieve. Our team can help you assess your needs and recommend the most suitable services."}
                    {question === "Do you offer custom solutions?" &&
                      "Yes, we offer custom solutions tailored to your unique business needs. Whether you need a customized digital marketing strategy, a bespoke website, or unique graphics design services, our team is ready to work with you to create a solution that fits your requirements."}
                  </p>
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
