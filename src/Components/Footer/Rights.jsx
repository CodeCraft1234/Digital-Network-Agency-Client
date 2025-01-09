import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
    FaLinkedinIn,
    FaTiktok,
    FaTelegram,
    FaWhatsapp,
  } from "react-icons/fa";

import { FaThreads } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useSocialLinks from "../../Hook/useSocialLinks";

const Rights = () => {
    const [socialLinks]=useSocialLinks()
    return (
<div>
<div className=" px-5 shadow-2xl text-white bg-slate-900">
  <div className="container mx-auto w-full">
    <footer className="grid lg:grid-cols-3 gap-4 items-center text-center py-6">
      {/* Footer Text and Logo Section */}
      <div className="text-lg flex justify-start font-bold text-white">
        <p className="text-sm mt-2 md:mt-0">
          Copyright © 2025{" "}
          <a
            className="text-yellow-300"
            href="https://hellodigitalnetwork.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Digital Network
          </a>{" "}
          | All Rights Reserved
        </p>
      </div>

      {/* Placeholder for future social media icons */}
      <div className="flex justify-center gap-3">
        {/* Add social media icons or links here */}
      </div>

      {/* Privacy and Terms Section */}
      <div className="text-lg font-bold text-white">
        <p className="text-sm mt-2 flex justify-end items-center gap-3 md:mt-0">
          <a
            href="https://hellodigitalnetwork.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy
          </a>
          <a
            href="https://hellodigitalnetwork.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Refund Policy
          </a>
          <a
            href="https://hellodigitalnetwork.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms & Conditions
          </a>
        </p>
      </div>
    </footer>
  </div>
</div>
</div>

    );
};

export default Rights;