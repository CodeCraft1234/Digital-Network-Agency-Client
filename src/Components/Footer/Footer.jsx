import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidPhoneCall } from "react-icons/bi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedinIn,
  FaTiktok,
  FaTelegram,
  FaSnapchat,
  FaArrowDown,
  FaArrowUp,
  FaFacebookMessenger,
  FaWhatsapp,
  FaAccusoft,
  FaPhoneSquareAlt,
  FaDoorOpen,
  FaWatchmanMonitoring,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";
import useLogo from "../../Hook/useLogo";
import { FaThreads, FaWebAwesome } from "react-icons/fa6";
import useNumbers from "../../Hook/useNumbers";
import useSocialLinks from "../../Hook/useSocialLinks";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiClock, FiPhoneCall } from "react-icons/fi";
import usePaymentLogo from "../../Hook/usePaymentLogo";

const Footer = () => {
  const [logo, setLogo] = useLogo();
  const [latestLogo, setLatestLogo] = useState(null);
  const [isAtTop, setIsAtTop] = useState(true); // State to toggle icons

  useEffect(() => {
    if (logo && logo.length > 0) {
      const sortedLogo = [...logo].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
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

  const [socialLinks]=useSocialLinks()


  const [showScrollButton, setShowScrollButton] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
        setScrollDirection("up");
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (direction) => {
    const target = direction === "up" ? 0 : document.body.scrollHeight;
    window.scrollTo({ top: target, behavior: "smooth" });
  };


  const [paymentLogo] = usePaymentLogo();

  return (
    <div className="bg-gradient-to-r from-[#092d77] via-[#0d4691] to-[#0c236b] lg:px-28 w-full px-4 md:px-16 text-white pt-16"
>
      <footer className=" container mx-auto w-full  relative">
      <div className="">
      <div className="flex flex-wrap  justify-between">

        
        {/* Logo Section */}
        <div className="w-full lg:w-1/5 md:w-1/2 mb-8">
          <div className="text-lg font-bold mb-2">
            {socialLinks?.logo1 && (
              <img
                className="h-20 w-20 mt-2 sm:h-16 sm:w-20 mx-auto lg:mx-0 md:h-14 md:w-14 lg:h-24 lg:w-24  transition-transform transform hover:scale-110"
                src='https://i.ibb.co.com/Y8wZB4B/Logo-White.png'
                alt="Digital Network"
              />
            )}
          </div>


         

          <div className=" py-2 ">

            <p  dangerouslySetInnerHTML={{ __html: socialLinks?.footerDescription }}></p>
      
</div>
<div className="hidden  text-white   md:flex justify-start gap-3">
   {socialLinks?.facebook && (
          <a
            href={`https://www.facebook.com/${socialLinks?.facebook}`}
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaFacebookF className="" />
          </a>
        )}
        {socialLinks?.twitter && (
          <a
            href={`https://twitter.com/${socialLinks?.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
             className="icon"
          >
            <FaTwitter className="" />
          </a>
        )}
        {socialLinks?.instagram && (
          <a
    href={`https://www.instagram.com/${socialLinks?.instagram}`}
    target="_blank"
    rel="noopener noreferrer"
    className="icon"
  >
    <FaInstagram />
  </a>
  
        )}
        {socialLinks?.linkedin && (
          <a
            href={`https://linkedin.com/in/${socialLinks?.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaLinkedinIn className="text-blue-400" />
          </a>
        )}


{socialLinks?.pinterest && (
  <a
    href={`https://pinterest.com/${socialLinks?.pinterest}`}
    target="_blank"
    rel="noopener noreferrer"
     className="icon"
  >
    <FaPinterest className="text-red-500" />
  </a>
)}

        </div>
        </div>

         {/* Our Services */}
         <div className="w-full lg:w-1/4 mb-8">
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Digital Marketing</li>
              <li>SEO Services</li>
              <li>Graphic Design</li>
              <li>Web Design & Development</li>
              <li>Web and UI/UX Design</li>
              <li>Motion Graphics & Animation</li>
              <li>Video Editing</li>
            </ul>
          </div>

          {/* About Us */}
          <div className="w-full lg:w-1/4 mb-8">
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2  text-sm">
              <li>
                <Link className="hover:text-yellow-300 hover:font-bold" to="/about-us">About Us</Link>
              </li>
              <li>
                <Link className="hover:text-yellow-300 hover:font-bold" to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link className="hover:text-yellow-300 hover:font-bold" to="/refund-policy">Refund Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-yellow-300 hover:font-bold" to="/privacy-policy">Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-yellow-300 hover:font-bold" to="Terms & Conditions">Terms & Condition</Link>
              </li>
              <li>
                <Link className="hover:text-yellow-300 hover:font-bold" to="/Sitemap">Sitemap</Link>
              </li>
              <li>
                <Link className="hover:text-yellow-300 hover:font-bold" to="/FAQ">FAQ</Link>
              </li>
            </ul>
          </div>

        {/* Contact Info */}
        <div className="w-full lg:w-1/5 md:w-1/2 mb-8">
          <h4 className="text-lg font-bold text-white mb-4">Contact Info</h4>
          <ul className="space-y-3">

          <li className="flex items-center text-white text-sm sm:text-base">
              <div className="bg-white mr-2 text-[#0c236b] p-1.5 rounded-full">
              <BiSolidPhoneCall className=""  />
              </div>
              {socialLinks?.whatsapp}
            </li>
          
          <li className="flex items-center text-white text-sm sm:text-base">
              <div className="bg-white mr-2 text-[#0c236b] p-1.5 rounded-full">
              <HiOutlineMail className=""  />
              </div>
              {socialLinks?.email}
            </li>
          <li className="flex items-center text-white text-sm sm:text-base">
              <div className="bg-white mr-2 text-[#0c236b] p-1.5 rounded-full">
              <FiClock className=""  />
              </div>
              Sat-Th 09.00AM - 06.00PM 
            </li>
          <li className="flex items-center text-white text-sm sm:text-base">
              <div className="bg-white mr-2 text-[#0c236b] p-1.5 rounded-full">
              <FaMapMarkerAlt className=""  />
              </div>
              {socialLinks?.location}
            </li>
          </ul>
         
          
        </div>

      
      </div>
     
     <hr />
    
     <div className="payment-container ">
     <h1 className="text-center  border-r pr-4 border-gray-100 font-bold ">We Are Accepted Payments:</h1>
     {
      paymentLogo?.map(f=>   <div key={f._id} className="payment-card">
        <img src={f.image} alt="bKash" />
      </div>)
     }

     </div>

      </div>

      <div className=" flex flex-col  items-center space-y-4 ">
        {/* WhatsApp Button */}
      <div>
          <a
          href={`https://wa.me/${socialLinks?.whatsapp}`} // Replace with your WhatsApp link
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-[400px] right-8 z-50 bg-green-500 p-3  rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-white text-xl" />
        </a>

             {/* Messenger Button */}
             <a
          href={`https://m.me/${socialLinks?.facebook}`} // Replace with your Messenger link
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-[340px] right-8 z-50 bg-blue-600 p-3  rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          title="Chat on Messenger"
        >
          <FaFacebook className="text-white text-xl" />
        </a>

             {/* Messenger Button */}
             <a
          href={`https://m.me/${socialLinks?.facebook}`} // Replace with your Messenger link
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-[280px] right-8 z-50 bg-[#0078FF] p-3  rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          title="Chat on Messenger"
        >
          <FaFacebookMessenger className="text-white text-xl" />
        </a>
      </div>

        {/* Scroll Button */}
        {showScrollButton && (
          <button
            onClick={() => scrollTo(scrollDirection)}
            className="fixed bottom-32 right-8 z-50 bg-gray-700 p-3 rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
            title={`Scroll to ${scrollDirection === "up" ? "Top" : "Bottom"}`}
          >
            {scrollDirection === "up" ? (
              <FaArrowUp className="text-white text-xl" />
            ) : (
              <FaArrowDown className="text-white text-xl" />
            )}
          </button>
        )}
      </div>
     
    </footer>
    </div>
  );
};

export default Footer;
