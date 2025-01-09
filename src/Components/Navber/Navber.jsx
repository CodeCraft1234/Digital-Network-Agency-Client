import { useContext, useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import useLogo from "../../Hook/useLogo";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Security/AuthProvider";


const InlineIconButton = ({ icon, count }) => {
  return (
    <button
      className="relative hover:text-gray-600 focus:outline-none"
      style={{ margin: "0 0px", display: "inline-block" }}
    >
      {icon}
      {count > 0 && (
        <span
          className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
        >
          {count}
        </span>
      )}
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logo, setLogo] = useLogo();
  const [latestLogo, setLatestLogo] = useState(null);

  const services = [
    { category: "Digital Marketing", icon: "https://i.ibb.co/Fh30qcr/dm.png" },
    { category: "Graphics Design", icon: "https://i.ibb.co/sqbxMMH/gd.png" },
    { category: "Web Design", icon: "https://i.ibb.co/WzdGH9y/wd.png" },
    { category: "Domain", icon: "https://i.ibb.co/Fh30qcr/dm.png" }
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

  const navigate = useNavigate();

const {user,logOut}=useContext(AuthContext)
  const handleLogOut = () => {
    logOut().then().catch();
    navigate("/");
  };

  const [isOpen2, setIsOpen2] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen2(!isOpen2);
  };




  return (
   <div className={`fixed top-0  lg:px-28 w-full z-30 transition-colors duration-300 ${
    scrolled ? "bg-white shadow-2xl text-gray-800" : "bg-white text-black border-b border-gray-100"
  } ${user ? 'lg:top-12' : 'top-0'}`} >
     <div
      className="container mx-auto"
    >
      <nav className="px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {scrolled ? (
               <Link to={'/'}>
                <img
                  className="h-16 w-16 md:h-14 md:w-14 lg:h-16 lg:w-16 transition-transform transform hover:scale-110"
                 src='https://i.ibb.co.com/jZ8J2Gc/Logo.png'
                alt="Digital Network"
                />
               </Link>
             
            ) : (
              <Link to={'/'}>
                <img
              className="h-16 w-16 md:h-14 md:w-14 lg:h-16 lg:w-16 transition-transform transform hover:scale-110"
               src='https://i.ibb.co.com/jZ8J2Gc/Logo.png'
                alt="Digital Network"
              />
              </Link>
             
            )}
          </div>
          <div className="hidden md:flex font-bold items-center space-x-6">
            <Link to={`/service/Digital Marketing`} className="hover:text-blue-800 hover:font-extrabold">Digital Marketing</Link>
            <Link to={`/service/Graphic Design`} className="hover:text-blue-800 hover:font-extrabold">Graphic Design</Link>
            <Link to={`/service/Web Design`} className="hover:text-blue-800 hover:font-extrabold">Web Design </Link>
            <Link to="/team-member" className="hover:text-blue-800 hover:font-extrabold">Team Member</Link>
            <Link to="/contact-us" className="hover:text-blue-800 hover:font-extrabold">Contact</Link>
            <Link to="/about-us" className="hover:text-blue-800 hover:font-extrabold">About</Link>
          </div>

          
          <div className="flex items-center ">
           
          

            <div className="flex  p-2  text-black">
      {/* Shopping Cart */}
      <Link to={'/my-orders'}>
      <InlineIconButton
        icon={
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 9h11L17 13M7 22a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm10 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
            ></path>
          </svg>
        }
        count={3}
      />

      </Link>
     
      {/* Heart */}
      <InlineIconButton
        icon={
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 0 1 6.364 0L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 0 1 0-6.364z"
            ></path>
          </svg>
        }
        count={5}
      />

           <button className="hover:text-gray-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"></path>
              </svg>
            </button>

           </div>

          
           
            <div className="items-center">
          {user?.displayName ? (
            <div className="relative" ref={dropdownRef}>
              <label
                tabIndex={0}
                className="relative cursor-pointer"
                onClick={toggleDropdown}
              >
                <img
                  className="h-12 w-12 lg:h-10 lg:w-10 rounded-full"
                  src={user.photoURL || '/default-avatar.png'} // Provide a default image or handle case where photoURL is not available
                  alt="Profile"
                  width={32} // Provide width
                  height={32} // Provide height
                />
                {/* Dropdown Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="absolute right-0 bottom-0 h-4 w-4 bg-white rounded-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={isOpen2 ? 'M19 15l-7-7-7 7' : 'M19 9l-7 7-7-7'}
                  />
                </svg>
              </label>

              {/* Dropdown Menu */}
              {isOpen2 && (
                <ul
                  tabIndex={0}
                  className="absolute mt-3 text-white right-1 z-[1] p-1 rounded-box w-52 shadow-lg bg-[#2e353a]"
                >
                  <div className="p-4 text-center">
                    <img
                      className="lg:h-16 h-10 lg:w-16 w-10 rounded-full mx-auto"
                      src={user?.photoURL || '/default-avatar.png'} // Provide a default image or handle case where photoURL is not available
                      alt="Profile"
                      width={64} // Provide width
                      height={64} // Provide height
                    />
                    <Link
                      className="text-white font-bold"
                      href={'/dashboard/updateProfile'}
                    >
                      <h1 className="my-2">
                        {user?.displayName?.split(' ')[0]}
                      </h1>
                    </Link>

                    <div className="text-start">
                      <div className="text-center">
                        <Link to={'/dashboard'}>
                          <p className="text-white bg-[#394148] hover:bg-blue-500 text-sm border border-gray-500 rounded-lg py-1.5 mt-2 px-3">
                            Dashboard
                          </p>
                        </Link>
                      </div>
                     
                    </div>

                    <div className="text-start">
                      <div className="text-center">
                        <Link to={'/dashboard/Profile'}>
                          <p className="text-white bg-[#394148] hover:bg-blue-500 text-sm border border-gray-500 rounded-lg py-1.5 mt-2 px-3">
                            Profile
                          </p>
                        </Link>
                      </div>
                     
                    </div>
                    <div className="text-start">
                      <div className="text-center">
                        <Link to={'/dashboard/Online-Purchase-History'}>
                          <p className="text-white bg-[#394148] hover:bg-blue-500 text-sm border border-gray-500 rounded-lg py-1.5 mt-2 px-3">
                            Online Purchase
                          </p>
                        </Link>
                      </div>
                     
                    </div>
                    <div className="text-start">
                      <div className="text-center">
                        <Link to={'/dashboard/Store-Purchase-History'}>
                          <p className="text-white bg-[#394148] hover:bg-blue-500 text-sm border border-gray-500 rounded-lg py-1.5 mt-2 px-3">
                          Store Purchase
                          </p>
                        </Link>
                      </div>
                     
                    </div>
                    
                    <hr className="my-2" />
                    <h1
                      onClick={handleLogOut}
                      className={({ isActive }) =>
                        isActive
                          ? 'underline text-blue-700'
                          : 'hover:text-gray-600'
                      }
                    >
                      <button className="py-1 px-3 rounded-lg bg-red-500 text-white font-bold">
                        Log Out
                      </button>
                    </h1>
                  </div>
                </ul>
              )}
            </div>
          ) : (
           <p></p>
          )}
        </div>
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


              {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden bg-white rounded-lg text-black" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
  {[
    { title: "Digital Marketing", link: "/service/Digital Marketing" },
    { title: "Graphic Design", link: "/service/Graphic Design" },
    { title: "Web Design", link: "/service/Web Design" },
    { title: "Services", link: "/services" },
    { title: "Team Member", link: "/team-member" },
    { title: "Contact", link: "/contact-us" },
    { title: "About", link: "/about-us" },
  ].map((menu) => (
    <Link
      key={menu.title}
      to={menu.link}
      className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:underline"
    >
      {menu.title}
    </Link>
  ))}
</div>

        </div>
      </Transition>
      </nav>
    </div>
   </div>
  );
};

export default Navbar;
