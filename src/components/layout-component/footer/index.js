import React from "react";
import { FaTelegram, FaGlobe, FaInstagram, FaMedium } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../../images/logo.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <div className="flex items-center mb-2 pl-2">
            <img
              onClick={() => navigate("/")}
              src={Logo}
              alt="PMT Logo"
              className="h-15 w-auto"
            />
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <div className="text-gray-300 w-full justify-center text-center flex hover:text-yellow-400">
            <span className="pr-2">
              <CiMail size={25} />
            </span>
            <a
              href="mailto:info@publicmasterpiece.com"
              className="text-gray-300 hover:text-yellow-400 text-md mb-8"
            >
              info@publicmasterpiece.com
            </a>
          </div>

          <div className="text-center text-gray-400 text-lg mb-4 md:mb-0">
            © Copyright PMT | Public Masterpiece Token - All Rights Reserved.
          </div>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-400"
          >
            <div className="bg-white p-2 rounded-full text-black">
              <FaXTwitter size={20} />
            </div>
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-400"
          >
            <div className="bg-white p-2 rounded-full text-black">
              <FaInstagram size={20} />
            </div>
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-400"
          >
            <div className="bg-white p-2 rounded-full text-black">
              <FaTelegram size={20} />
            </div>
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-400"
          >
            <div className="bg-white p-2 rounded-full text-black">
              <FaGlobe size={20} />
            </div>
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-400"
          >
            <div className="bg-white p-2 rounded-full text-black">
              <FaMedium size={20} />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
