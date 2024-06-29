import { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-24">
      <section className="bg-gradient-to-r from-purple-500 to-blue-700 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Faq</h1>
            <p className="mt-2">Home / Pages</p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/3 bg-white p-4 shadow-lg rounded-md animate-leftToRight">
          <h2 className="text-2xl font-bold mb-4">Popular Articles</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-600">
                How to Create an Account
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600">
                How Our Pricing Plans Work
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600">
                How Does the 14 Day Free Trial Work?
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600">
                How Can I Edit My Already Existing Page?
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600">
                How Do I See My Published Page?
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-2/3 bg-white p-4 shadow-lg rounded-md animate-rightToLeft">
          <h2 className="text-2xl font-bold mb-4">
            How Our Pricing Plans Work
          </h2>
          <div className="space-y-4">
            <div>
              <h3
                className="text-xl font-bold cursor-pointer hover:text-purple-600"
                onClick={() => handleToggle(0)}
              >
                Are there any discounts included?
              </h3>
              {openIndex === 0 && (
                <p className="mt-2 text-gray-700">
                  Grursus mal suada faci lisis Lorem ipsum dolarorit more a
                  ametion consectetur elit. Vesti at bulum nec odio aea the dumm
                  ipsumm ipsum that dolocons rsus suada fadolorit to the
                  consectetur elit dummy text ready.
                </p>
              )}
            </div>
            <div>
              <h3
                className="text-xl font-bold cursor-pointer hover:text-purple-600"
                onClick={() => handleToggle(1)}
              >
                Should I buy this theme?
              </h3>
              {openIndex === 1 && (
                <p className="mt-2 text-gray-700">
                  Grursus mal suada faci lisis Lorem ipsum dolarorit more a
                  ametion consectetur elit. Vesti at bulum nec odio aea the dumm
                  ipsumm ipsum that dolocons rsus suada fadolorit to the
                  consectetur elit dummy text ready.
                </p>
              )}
            </div>
            <div>
              <h3
                className="text-xl font-bold cursor-pointer hover:text-purple-600"
                onClick={() => handleToggle(2)}
              >
                What is UX?
              </h3>
              {openIndex === 2 && (
                <p className="mt-2 text-gray-700">
                  Grursus mal suada faci lisis Lorem ipsum dolarorit more a
                  ametion consectetur elit. Vesti at bulum nec odio aea the dumm
                  ipsumm ipsum that dolocons rsus suada fadolorit to the
                  consectetur elit dummy text ready.
                </p>
              )}
            </div>
            <div>
              <h3
                className="text-xl font-bold cursor-pointer hover:text-purple-600"
                onClick={() => handleToggle(3)}
              >
                Is there a warranty on my item?
              </h3>
              {openIndex === 3 && (
                <p className="mt-2 text-gray-700">
                  Grursus mal suada faci lisis Lorem ipsum dolarorit more a
                  ametion consectetur elit. Vesti at bulum nec odio aea the dumm
                  ipsumm ipsum that dolocons rsus suada fadolorit to the
                  consectetur elit dummy text ready.
                </p>
              )}
            </div>
            <div>
              <h3
                className="text-xl font-bold cursor-pointer hover:text-purple-600"
                onClick={() => handleToggle(4)}
              >
                Are there any discounts included?
              </h3>
              {openIndex === 4 && (
                <p className="mt-2 text-gray-700">
                  Grursus mal suada faci lisis Lorem ipsum dolarorit more a
                  ametion consectetur elit. Vesti at bulum nec odio aea the dumm
                  ipsumm ipsum that dolocons rsus suada fadolorit to the
                  consectetur elit dummy text ready.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
