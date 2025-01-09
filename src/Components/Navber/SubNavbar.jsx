import { useContext } from "react";
import { AuthContext } from "../../Security/AuthProvider";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiClock } from "react-icons/fi";
import { BiSolidPhoneCall } from "react-icons/bi";
import useSocialLinks from "../../Hook/useSocialLinks";

const SubNavbar = () => {
  const { user } = useContext(AuthContext);
  const [socialLinks] = useSocialLinks();

  if (!user) return null; // Render nothing if user does not exist

  return (
    // Use `hidden` by default and `md:flex` to show on medium devices and larger
    <div className="bg-[#160428] fixed top-0 left-0 w-full z-50 py-2 sm:py-3 hidden md:block">
      <div className="container mx-auto flex flex-wrap justify-start items-center px-4 sm:px-6 lg:px-8 text-white gap-2">
        {/* Phone */}
        <div className="flex items-center text-sm sm:text-base gap-1">
          <div className="text-white p-1 rounded-full">
            <BiSolidPhoneCall />
          </div>
          <span>{socialLinks?.whatsapp || "N/A"}</span>
        </div>

        {/* Email */}
        <div className="flex items-center text-sm sm:text-base gap-2">
          <div className="text-white p-1 rounded-full">
            <HiOutlineMail />
          </div>
          <span>{socialLinks?.email2 || "N/A"}</span>
        </div>

        {/* Working Hours */}
        <div className="flex items-center text-sm sm:text-base gap-2">
          <div className="text-white p-1 rounded-full">
            <FiClock />
          </div>
          <span>Saturday - Thursday (09:00 AM - 06:00 PM)</span>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
