import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useService from "../../Hook/useService";
import usePaymentLogo from "../../Hook/usePaymentLogo";

const WebDevelopmentDetails = () => {
  const { id } = useParams();
  const [service] = useService();
  const [data, setData] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (service) {
      const filteredData = service.find((item) => item._id === id);
      if (filteredData) {
        setData(filteredData);
      }
    }
  }, [service, id]);

  const handleAddToCartClick = () => {
    setIsModalOpen(true);
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    console.log("Order confirmed with details:", { name, phone, address });
    // You can add API calls or additional logic here
    setIsModalOpen(false); // Close modal after submission
  };

  const categories = [
    { btn: "Mobile Banking" },
    { btn: "Bank" },
  ];

  const [paymentLogo] = usePaymentLogo();

  const [filteredServices, setFilteredServices] = useState(service);
  const [btns, setBtn] = useState("Mobile Banking"); // Default category filter

  useEffect(() => {
      const filtered = paymentLogo?.filter((card) => card.category === btns);
      setFilteredServices(filtered);
  }, [paymentLogo, btns]);

  return (
    <div className="pt-44 grid container mx-auto lg:grid-cols-2 gap-6 p-6 bg-gray-50">
      {/* Left Section */}
      <div className="bg-gradient-to-r from-black to-red-900 text-white rounded-lg shadow-md p-6">
        <a  href={data?.websiteLink}><img className="h-[500px] w-full" src={data?.picture} alt="" /></a>
      </div>

      {/* Right Section */}
      <div className="bg-white rounded-lg border p-6 w-full">
        <h2 className="text-4xl text-gray-700 font-bold mb-4">{data?.title}</h2>
        <h2 className="text-2xl text-gray-700 font-bold mb-4">
          Regular License
        </h2>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center text-gray-600 text-sm">
            <svg
              className="w-4 h-4 text-green-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Quality checked by the professional Developer
          </li>
          <li className="flex items-center text-gray-600 text-sm">
            <svg
              className="w-4 h-4 text-green-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Future updates
          </li>
          <li className="flex items-center text-gray-600 text-sm">
            <svg
              className="w-4 h-4 text-green-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            6 months support from Digital Network
          </li>
        </ul>

        <div className="flex items-center justify-between mb-6">
          <p className="text-4xl font-bold text-gray-800">
            ৳ {data?.price}
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href={data?.websiteLink}
            className="bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Live Preview
          </a>
          <button
            onClick={handleAddToCartClick}
            className="bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-100 p-6 mx-4 rounded-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <div className="py-20">
            <h1 className="text-center text-gray-700  border-r pr-4 border-gray-100 font-bold ">We Are Accepted Payments:</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-3 lg:m-4 lg:my-10 items-center">
  {categories?.map((c) => (
    <button
      onClick={() => setBtn(c.btn)}
      className={`text-black text-base sm:text-sm font-medium py-2 px-4 hover:text-red-600 relative ${
        btns === c.btn ? "text-red-600" : ""
      }`}
      key={c.btn}
    >
      {c.btn}
      {btns === c.btn && (
        <span className="absolute left-0 right-0 bottom-0 h-1 bg-red-600" />
      )}
    </button>
  ))}
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {filteredServices?.map((f) => (
    <div
      key={f._id}
      className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-lg p-4 text-white hover:scale-105 transition-transform duration-300"
    >
      <img
        className="h-20 w-20 mx-auto mb-4 rounded-full border-2 border-white"
        src={f.image}
        alt={f.bankName}
      />
      <h1 className="text-lg font-semibold text-center">{f.bankName}</h1>
      <p className="text-sm text-center mt-2">
        <span className="font-medium">Account Number:</span> {f.accountNumber}
      </p>
    </div>
  ))}
</div>

            </div>
            <h2 className="text-lg text-black font-bold mb-4">
              অর্ডারটি কনফার্ম করতে আপনার নাম, ঠিকানা, মোবাইল নাম্বার, দিয়ে{" "}
              <span className="text-red-600">অর্ডার কনফার্ম করুন </span>বাটনে
              ক্লিক করুন
            </h2>
            <form className="space-y-4 text-black" onSubmit={handleOrderSubmit}>
              <div>
                <label className="block text-left text-sm font-medium">
                  আপনার নাম
                </label>
                <input
                  type="text"
                  placeholder="আপনার নাম"
                  className="w-full p-2 border border-gray-300 rounded bg-white"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-left font-medium">
                  আপনার মোবাইল নাম্বার
                </label>
                <input
                  type="number"
                  placeholder="আপনার মোবাইল নাম্বার"
                  className="w-full p-2 border border-gray-300 rounded bg-white"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value.replace(/\D/g, "").slice(0, 11))
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-left text-sm font-medium">
                  আপনার সম্পূর্ণ ঠিকানা
                </label>
                <input
                  type="text"
                  placeholder="আপনার সম্পূর্ণ ঠিকানা"
                  className="w-full p-2 border border-gray-300 rounded bg-white"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-900"
              >
                অর্ডার কনফার্ম করুন
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebDevelopmentDetails;
