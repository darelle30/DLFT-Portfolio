import React from 'react'
import { CiMail } from "react-icons/ci";

const Contacts = () => {
  return (

    
    <div id='contacts' className='flex flex-col justify-center items-center min-h-screen bg-white ssm:mt-20 transition-all'>

      <div className="lg:text-5xl text-4xl flex font-poppins font-bold text-center items-center  ">
        CONTACT <span className='ml-2 text-red-900 lg:text-5xl '> ME</span>
      </div>      
      {/* Contact Section */}
      <div className='flex lg:flex-row w-full flex-col lg:w-10/12 lg:max-w-screen-lg lg:mt-10 mt-20 lg:space-x-20 '>
        
        {/* LEFT SIDE */}
        <div className='lg:w-1/2 lg:mt-32  text-center lg:text-start'>
          <h1 className='lg:text-5xl text-3xl font-bold text-black mb-4'>
            Let's chat.
          </h1>
          <h1 className='lg:text-5xl text-3xl font-bold text-black text-nowrap'>
            Tell me about your <span className='lg:block'>project.</span>
          </h1>
          <p className='text-[#562af1] lg:text-lg mt-5 text-xl'>
            Let's create something together.
          </p>
          
          {/* Email Box */}
          <div className='flex px-10 py-5 mt-10  mx-16  lg:mx-auto  lg:w-fit  justify-center lg:justify-start lg:mr-32 bg-white  border-gray-700 rounded-xl shadow-2xl shadow-gray-500 lg:shadow-red-500 '>
            <a href='https://mail.google.com/mail/u/0/#inbox?compose=new' className='bg-gray-100 p-1 rounded-md shadow-lg cursor-pointer hover:text-[#562af1]'>
              <CiMail size={30}/>
            </a>
            <div className='ml-6 text-start'>
              <p className='text-sm font-semibold'>Mail me at</p>
              <p className='text-sm font-bold text-[#562af1]'>darelleluistolentino@gmail.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className='lg:w-1/2 mt-12 bg-white lg:p-10 m-10 p-10 rounded-xl shadow-2xl lg:shadow-2xl border-t border-r-8 border-b-8 border-l border-black shadow-gray-600'>
          <h1 className='text-2xl font-poppins font-bold mb-10 lg:text-start text-center text-nowrap'>Send me a message 🚀</h1>
          
          {/* Form Inputs */}
          <div className="space-y-5">
            <input
              type="text"
              placeholder="Full name"
              className="w-full px-4 py-3 border border-gray-300 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#562af1] focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 border border-gray-300 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#562af1] focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 border border-gray-300 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#562af1] focus:border-transparent"
            />
            <textarea
              placeholder="Write a message"
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#562af1] focus:border-transparent"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button className="max-w-full py-3 px-5 bg-[#562af1] text-white font-semibold rounded-md shadow-md hover:bg-[#4622d1]">
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
