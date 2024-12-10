import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import snsLogo from '../../assets/sns.png';

const Nav: React.FC = () => {
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);

  useEffect(() => {
    if (openSideBar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openSideBar]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex h-16 sticky top-0 shadow-md p-4 px-16 rounded-[60px] bg-white bg-opacity-50 mt-4 mx-8">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <img src={snsLogo} alt="SNS Logo" className="w-auto h-14 object-contain" />
        </div>
      </nav>

      {/* Mobile Navigation */}
      <section
        className={`fixed top-0 left-0 ${
          openSideBar ? 'translate-x-0' : '-translate-x-full'
        } w-full h-screen bg-white z-50 p-5 flex flex-col transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar Header */}
        <div className="flex flex-row justify-between items-center">
          <img src={snsLogo} alt="SNS Logo" className="w-auto h-14 object-contain" />
          <div className="menu" onClick={() => setOpenSideBar(false)}>
            <FontAwesomeIcon icon={faClose} className="cursor-pointer w-6 h-6" />
          </div>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col justify-evenly items-center flex-1 text-2xl py-[50%] space-y-6">
          <p className="cursor-pointer hover:text-blue-600" onClick={() => setOpenSideBar(false)}>
            Home
          </p>
          <p className="cursor-pointer hover:text-blue-600" onClick={() => setOpenSideBar(false)}>
            Contact Us
          </p>
          <p className="cursor-pointer hover:text-blue-600" onClick={() => setOpenSideBar(false)}>
            About Us
          </p>
          <p className="cursor-pointer hover:text-blue-600" onClick={() => setOpenSideBar(false)}>
            Help
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-between px-8 text-lg font-medium">
          <a
            href="https://www.linkedin.com/company/sns-ihub/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/snsinstitutions/p/DDQijzoTAA6/"
            className="text-pink-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </section>

      {/* Mobile Top Bar */}
      <nav className="p-2 px-4 shadow-sm w-full z-50 flex md:hidden flex-row items-center justify-between bg-white">
        <img src={snsLogo} alt="SNS Logo" className="w-auto h-12 object-contain" />
        <FontAwesomeIcon
          icon={faBars}
          className="cursor-pointer text-xl"
          onClick={() => setOpenSideBar((prev) => !prev)}
        />
      </nav>

      {/* Content for Nested Routes */}
      <Outlet />
    </>
  );
};

export default Nav;
