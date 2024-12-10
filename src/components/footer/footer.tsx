import React from "react";
import snsLogo from "../assets/sns.png"; // Path to the SNS logo
import group45 from "../../assets/Group 46.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faHandshake, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-10 flex flex-col items-center text-center">
      {/* Logo Section */}
      <img
        src={group45}
        alt="SNS Logo"
        className="w-[320px] my-6 h-auto mb-6"
      />
      <div>
        <h2 className="text-lg font-bold mb-2">
          <FontAwesomeIcon icon={faLocationDot} className="mr-1" />
          Our Locations
        </h2>
      </div>
      {/* Locations and Contact Section */}
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center px-4">
        {/* SNS Innovation Hub */}
        <div className="flex-1 px-4 mb-9 md:mb-0 md:flex md:flex-col md:items-center md:justify-center">
          <h2 className="text-lg font-bold mb-2"></h2>
          <p className="text-sm leading-6 max-w-xs">
            536, Thudiyalur - Saravanampatti Rd, Fathima Nagar, Vellakinar, Coimbatore, Tamil Nadu 641029
          </p>
        </div>

        {/* Locations Heading */}
        <div className="flex-1 px-4 mb-6 sm:mt-4 md:mb-0 md:flex md:flex-col md:items-center md:justify-center">
          <p className="text-sm leading-6 max-w-xs">
            The Community Team, WeWork Office, BLOCK-L, Embassy TechVillage,
            Outer Ring Rd, Devarabisanahalli, Bellandur, Bengaluru, <br /> Karnataka 560103.
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex-1 px-4 md:flex md:flex-col md:items-center md:justify-center">
          <h2 className="text-lg font-bold mb-2">Contact Us</h2>
          <p className="text-sm mb-1">
            <FontAwesomeIcon icon={faPhone} className="mr-1" />
            95664 23456
          </p>
          <a
            href="https://main.snsgroups.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:underline"
          >
            <FontAwesomeIcon icon={faGlobe} className="mr-1" />
            www.snsgroups.com
          </a>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-sm text-gray-500 mt-8">
        Copyrighted © 2024 Design and upload by SNSGROUPS
      </p>
    </footer>
  );
};

export default Footer;