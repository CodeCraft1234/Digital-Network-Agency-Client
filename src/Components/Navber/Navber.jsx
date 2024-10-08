import React, { useEffect, useState, useContext } from "react";
import { Transition } from "@headlessui/react";
import useLogo from "../../Hook/useLogo";
import { AuthContext } from "../../Security/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [logo, setLogo] = useLogo();
  const [latestLogo, setLatestLogo] = useState(null);

  const services = [
    { category: "Graphics Design", icon: "https://i.ibb.co/sqbxMMH/gd.png" },
    { category: "Web Design", icon: "https://i.ibb.co/WzdGH9y/wd.png" },
    { category: "Digital Marketing", icon: "https://i.ibb.co/Fh30qcr/dm.png" },
    { category: "Domain Hosting", icon: "https://i.ibb.co/Fh30qcr/dm.png" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (logo && logo.length > 0) {
      const sortedLogo = [...logo].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      const latest = sortedLogo[0];
      setLogo(sortedLogo);
      setLatestLogo(latest);
    }
  }, [logo]);

  const handleDashboardRedirect = () => {
    navigate("/dashboard/admin/adminHome");
  };

  return (
    <div
      className={`fixed top-0 left-12 right-12 z-30 transition-colors duration-300 ${
        scrolled ? "bg-white text-gray-800" : "bg-white text-gray-800"
      }`}
    >
      <nav className="px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {latestLogo && (
              <img
                className="h-10 w-10 sm:h-16 sm:w-16 md:h-14 md:w-14 lg:h-16 lg:w-16 transition-transform transform hover:scale-110"
                src={latestLogo.photo}
                alt="Logo"
              />
            )}
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-gray-600 hover:underline">Home</Link>
            <div className="relative">
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className="hover:text-gray-600 hover:underline focus:outline-none"
              >
                Services
              </button>
              {isServicesDropdownOpen && (
                <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={`/category/${service.category}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {service.category}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link to="/faq" className="hover:text-gray-600 hover:underline">Faq</Link>
            <Link to="/contact" className="hover:text-gray-600 hover:underline">Contact</Link>
            <Link to="/myCart" className="hover:text-gray-600 hover:underline">Cart</Link>
            <Link to="/myOrders" className="hover:text-gray-600 hover:underline">Orders</Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hover:text-gray-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"></path>
              </svg>
            </button>
            <button className="bg-white text-gray-800 border border-gray-800 py-2 px-6 rounded-md">Get a Quote</button>
            <button onClick={handleDashboardRedirect} type="button" className="hover:text-gray-600 focus:outline-none">
              <MdOutlineDashboard />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden hover:text-gray-600 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}></path>
              </svg>
            </button>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:underline">Home</Link>
              <div className="relative">
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className="w-full text-left block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:underline focus:outline-none"
                >
                  Services
                </button>
                {isServicesDropdownOpen && (
                  <div className="mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={`/category/${service.category}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {service.category}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link to="/faq" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:underline">Faq</Link>
              <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:underline">Contact</Link>
              <Link to="/myCart" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:underline">Cart</Link>
              <Link to="/myOrders" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:underline">Orders</Link>
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  );
};

export default Navbar;
