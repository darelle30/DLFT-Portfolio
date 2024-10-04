import React, { useEffect, useRef, useState } from 'react';

import Myimage from '../assets/me.jpg'; // Correctly import the image

const About = () => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // IntersectionObserver to detect when the image is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(false);
        } else{
          setIsVisible(true);
        }
      },
      { threshold: .1 } // Triggers when 50% of the image is visible
    );
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div id="about" className="flex ssm:flex-col flex-row justify-center items-center w-full h-full lg:mt-30 mt-48">
      {/* Centered text at the top */}
      <div className="lg:text-5xl text-4xl flex font-poppins font-bold text-center items-center  mb-10 lg:mb-24 ">
        ABOUT <span className='ml-2 text-red-900 lg:text-5xl '> ME</span>
      </div>

      <div className="flex flex-col lg:flex-row justify-center  w-full h-full lg:mb-5">
        {/* Left Image Section */}
        <div className="flex justify-center items-center lg:ml-24 mb-10">
          <img
            ref={imageRef}
            src={Myimage}
            className={`w-[65%] h-[100%] md:w-[45%] md:h-[100%] lg:w-[100%] lg:h-[100%] rounded-3xl shadow-2xl shadow-black object-cover transition-all duration-500 ease-in-out transform ${
              isVisible ? 'rotate-flip' : 'lg:flex'
            }`}
          />
        </div>

        {/* Right Text Section */}
        <div className="block flex-col space-y-6 w-fit h-full ml-10 mr-10 lg:mt-20">
          <p className="bg-white py-6 px-8 text-justify font-poppins rounded-2xl border-l border-t border-r-8 border-b-4 border-black shadow-lg text-black">
            I'm Darelle. I'm passionate about web development and always eager to learn new things. 
            Let's connect and collaborate! I love solving problems and building efficient solutions. In my spare time, I enjoy learning about the latest trends in technology.
          </p>
          <div className="bg-white py-6 px-8 font-poppins  rounded-2xl border-l border-t border-r-8 border-b-4 border-black shadow-lg text-black">
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
