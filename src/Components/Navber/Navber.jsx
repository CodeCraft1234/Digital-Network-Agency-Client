import React, { useEffect, useState, useContext } from 'react';
import { Transition } from '@headlessui/react';
import useLogo from '../../Hook/useLogo';
import { AuthContext } from '../../Security/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { MdOutlineDashboard } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // State to track scroll
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [logo, setLogo] = useLogo();
  const [latestLogo, setLatestLogo] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change 50 to the scroll distance you want
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (logo && logo.length > 0) {
      const sortedLogo = [...logo].sort((a, b) => new Date(b.date) - new Date(a.date));
      const latest = sortedLogo[0];
      setLogo(sortedLogo);
      setLatestLogo(latest);
    }
  }, [logo, setLogo]);

  const handleDashboardRedirect = () => {
    navigate('/dashboard/admin/adminHome');
  };

  return (
    <div className={`fixed top-0  lg:px-10 left-0 right-0 transition-colors duration-300 z-30 ${scrolled ? 'bg-white text-gray-800' : 'bg-gradient-to-r from-purple-500 to-blue-700 text-white'}`}>
    <nav className={`transition-colors duration-300 ${scrolled ? 'bg-white text-gray-800' : 'bg-transparent text-white'}`}>
      <div className="px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold">DigeCo.</a>
        </div>
        <div className="hidden md:flex items-center justify-center flex-grow">
          <div className="ml-10 flex items-baseline space-x-4">
            <a href="/" className="hover:text-gray-600">Home</a>
            <a href="/services" className="hover:text-gray-600">Services</a>
            <a href="faq" className="hover:text-gray-600">Faq</a>
            <a href="/pages" className="hover:text-gray-600">Pages</a>
            <a href="/blog" className="hover:text-gray-600">Blog</a>
            <a href="/contact" className="hover:text-gray-600">Contact</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hover:text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"></path>
            </svg>
          </button>
          <button className="bg-white text-gray-800 border border-gray-800 py-2 px-6 rounded-md">Get a Quote</button>
          <button
            onClick={handleDashboardRedirect}
            type="button"
            className="hover:text-gray-600 focus:outline-none"
          >
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
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Home</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">About</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Services</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Portfolio</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Team</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Blog</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Contact</a>
              <div className="flex justify-center mt-4">
                <a href="#" className="hover:text-gray-800">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.94 10.06a6 6 0 0 1 0 3.88C19.86 13.15 22 11 22 11s-2.86 2.15-3.06 4.94a6 6 0 0 1-3.88 0C10.85 19.14 13 22 13 22s-2.15-2.86-4.94-3.06a6 6 0 0 1 0-3.88C4.86 10.85 2 13 2 13s2.86-2.15 3.06-4.94a6 6 0 0 1 3.88 0C13.15 4.86 11 2 11 2s2.15 2.86 4.94 3.06a6 6 0 0 1 3.88 0C19.14 4.86 22 2 22 2s-2.86 2.15-3.06 4.94zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  </div>
  );
};

export default Navbar;
