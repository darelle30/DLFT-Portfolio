import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';
import logo from '../assets/ICO.ico'; // Import the image


function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true); // Track navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0);  // Track the last scroll position
  const [opacity, setOpacity] = useState(1); // Track navbar opacity for fade effect
  const [spin, setSpin] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  


  // Function to open the menu
  function openMenu() {
    setToggle(true);
  }

  // Function to close the menu
  function closeMenu() {
    setToggle(false);
  }

  // Handle scroll to hide/show and fade the Navbar, only for large screens
  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      const screenWidth = window.innerWidth;

      // Only apply hide/show behavior if screen width is greater than 1024px (desktop size)
      if (screenWidth > 768) {
        if (window.scrollY > lastScrollY) {
          // If scrolling down, hide the navbar with opacity 0
          setShowNavbar(false);
          setOpacity(0);
        } else {
          // If scrolling up, show the navbar with opacity 1
          setShowNavbar(true);
          setOpacity(1);
        }
        setLastScrollY(window.scrollY);
      } else {
        // On smaller screens, ensure the navbar always stays visible
        setShowNavbar(true);
        setOpacity(1);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const handleHover = () => {
    setSpin(true);
    setTimeout(() => setSpin(false), 500); // Reset spin after 500ms (duration of spin animation)
  };

  return (
    <>
      {/* Navbar container */}
      <div
        className={`fixed  z-50 w-screen p-5 flex justify-between items-end bg-white lg:shadow-none shadow-2xl transition-all duration-500 ease-in-out ${
          showNavbar ? 'translate-y-0' : 'translate-full'
        }`}
        style={{ opacity: opacity, transition: 'opacity 300ms ease, transform 1s ease' }}>
        {/* Logo Section */}
        <div className="lg:mx-24 cursor-pointer tracking-widest">
            <p className='font-Pacifico text-3xl font-bold text-gray-600 drop-shadow-2xl'> Darelle. </p>
        </div>

        {/* Navbar links for larger screens */}
        <div className="hidden lg:flex space-x-10 lg:mx-36 md:mx-10 transition-all uppercase texts-center text-nowrap">

          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="nav-link text-black font-Anton font-bold text-sm hover:text-red-500 transition duration-200 cursor-pointer"
            activeClass="hover:text-red-500" // Add active class
          >Home
          </ScrollLink>

          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="nav-link text-black font-Anton font-bold text-sm hover:text-red-500 transition duration-200 cursor-pointer"
            activeClass="hover:text-red-500" // Add active class

          >About Me 
          
          </ScrollLink>

          <ScrollLink
            to="project"
            smooth={true}
            duration={500}
            className="nav-link text-black font-Anton font-bold text-sm hover:text-red-500 transition duration-200 cursor-pointer"
          > Projects

          </ScrollLink>
          
          <ScrollLink
            to="contacts"
            smooth={true}
            duration={500}
            className="nav-link text-black font-Anton font-bold text-sm hover:text-red-500 transition duration-200 cursor-pointer"
            activeClass="text-red-500" // Add active class
          > Contact

          </ScrollLink>

        </div>

        {/* Hamburger Menu for small screens */}
        <div className="sm:flex lg:hidden md:flex transition-all mr-5">
          {toggle ? (
            <AiOutlineClose
                onClick={closeMenu}
                size={30}
                className={`text-black cursor-pointer hover:text-red-500 ${
                  spin ? 'spin-once' : ''
                }`}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}/>          
            ) : (
            <HiMenuAlt1 
              onClick={openMenu} 
              size={30} 
              className={`text-black cursor-pointer`}
              onMouseEnter={() => setHoveredIcon('')} onMouseLeave={() => setHoveredIcon(null)}
              style={{ transform: hoveredIcon === '' ? 'scale(1.1)'  : 'scale(1)' }}
            />
          )}
        </div>
      </div>

      {/* Dropdown Menu for mobile */}
      <div
        className={`fixed inset-0 h-[40%] w-[75%] top-[25%] left-[13%] font-poppins bg-white rounded-xl shadow-2xl border-r-8 border-b-8 border-t border-l border-red-400 shadow-black transition-transform transform ${
          toggle ? '-translate-y-0 opacity-100' : 'translate-x-full opacity-0'
        }  flex lg:hidden justify-center items-center text-center z-50 duration-500`}
      >
        {/* Menu Links */}
        <div className="flex flex-col space-y-6  items-center uppercase ">

          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className=" text-black text-lg py-2 max-w-fit hover:text-red-900 nav-link rounded-md cursor-pointer"
            activeClass='active-link '
            >
            Home
          </ScrollLink>

          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className=" text-black text-lg py-2 max-w-fit hover:text-red-900 nav-link rounded-md cursor-pointer"
          >
            About Me
          </ScrollLink>
          <ScrollLink
            to="contacts"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className=" text-black text-lg py-2 max-w-fit  hover:text-red-900 nav-link rounded-md cursor-pointer"
          >
            Contacts
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className=" text-black text-lg py-2 max-w-fit  hover:text-red-900 nav-link rounded-md cursor-pointer"
            activeClass='text-red-900'
          >
            About Me
          </ScrollLink>

          
        </div>
      </div>
    </>
  );
}

export default Navbar;
