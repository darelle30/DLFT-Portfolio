import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import PersonWave from '../assets/waving.json';
import WallBg from  '../assets/bg.jpg';

import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

const Hero = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Array of titles to type
  const titles = ["Front-End Developer", "React Developer", "AI Object Detection", "UI/UX Enthusiast"];
  const [displayedText, setDisplayedText] = useState(''); // Text currently displayed
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0); // Index of the current word
  const [isDeleting, setIsDeleting] = useState(false); // Whether we are deleting the text
  const [typingSpeed, setTypingSpeed] = useState(150); // Speed of typing

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = titles[currentTitleIndex];
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, prev.length - 1));
        setTypingSpeed(50); // Speed up while deleting
      } else {
        setDisplayedText((prev) => currentWord.slice(0, prev.length + 1));
        setTypingSpeed(150); // Slow down while typing
      }

      if (!isDeleting && displayedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      }

      if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, typingSpeed, titles, currentTitleIndex]);

  return (
    <>
      <div id='home' className="relative flex flex-col bg-transparent lg:flex-row py-56 xl:py-20 justify-between items-center w-full max-h-screen transition-all
                                lg-bg-gradient">

        {/* Left Side: Text and Icons */}
        <div className="relative  w-[100%] h-[100%] flex  flex-col justify-center items-center lg:items-start text-center lg:text-left leading-10">
          <h1 className="lg:flex hidden text-gray-800 font-light font-poppins lg:text-xl ml-28 lg:mb-3">Hello, My name is </h1>
          <h2 className="lg:hidden text-gray-800 font-extrabold font-poppins text-[1.75rem] lg:ml-28">I'm</h2>
          <p className="text-sky-900 lg:ml-28 font-poppins font-extrabold text-[1.85rem] lg:text-[2.99rem]">Darelle Luis Tolentino</p>

          {/* Typing Animation Title */}
          <p className="text-red-800 font-bold font-poppins text-[2.50rem] lg:text-[2.5rem] lg:ml-28 mt-5">
            {displayedText}
            <span className="blinking-cursor">|</span>
          </p>

          {/* Social Icons */}
          <div className="flex space-x-7 mt-10 lg:ml-48">
            <a href="https://www.facebook.com/" className="relative text-4xl cursor-pointer transition-transform duration-300"
              onMouseEnter={() => setHoveredIcon('facebook')} onMouseLeave={() => setHoveredIcon(null)}
              style={{ transform: hoveredIcon === 'facebook' ? 'scale(1.2)' : 'scale(1)' }}>
              <FaFacebookSquare />
              {hoveredIcon === 'facebook' && (
                <span className="absolute -bottom-8 left-0 bg-gray-700 text-white py-1 px-2 rounded-md text-sm shadow-md">
                  Facebook
                </span>
              )}
            </a>

            <a href="https://www.linkedin.com/login" className="relative text-4xl cursor-pointer transition-transform duration-300"
              onMouseEnter={() => setHoveredIcon('linkedin')} onMouseLeave={() => setHoveredIcon(null)}
              style={{ transform: hoveredIcon === 'linkedin' ? 'scale(1.2)' : 'scale(1)' }}>
              <FaLinkedin />
              {hoveredIcon === 'linkedin' && (
                <span className="absolute -bottom-8 left-0 bg-gray-700 text-white py-1 px-2 rounded-md text-sm shadow-md">
                  LinkedIn
                </span>
              )}
            </a>

            <a href="https://github.com/" className="relative text-4xl cursor-pointer transition-transform duration-300"
              onMouseEnter={() => setHoveredIcon('github')} onMouseLeave={() => setHoveredIcon(null)}
              style={{ transform: hoveredIcon === 'github' ? 'scale(1.2)' : 'scale(1)' }}>
              <FaGithubSquare />
              {hoveredIcon === 'github' && (
                <span className="absolute -bottom-8 left-0 bg-gray-700 text-white py-1 px-2 rounded-md text-sm shadow-md">
                  Github
                </span>
              )}
            </a>
          </div>

          {/* Quote */}
          <p className=" font-light text-nowrap font-poppins text-black lg:ml-28 ssm:mt-8">
            ~ I'm excited to share my projects to  you ~
          </p>
        </div>

        {/* Right Side: Lottie Animation */}
        <div className="hidden lg:flex w-full h-full justify-center items-center lg:mr-0 lg:mt-24 z-100">
          <Lottie animationData={PersonWave} loop={true} className="w-[100%] h-[100%] lg:w-full lg:h-[90vh]" />
        </div>
      </div>
    </>
  );
};

export default Hero;
