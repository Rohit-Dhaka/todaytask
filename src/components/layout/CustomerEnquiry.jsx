import React from "react";
import { User, Mail, Phone, MessageSquare } from "lucide-react";

const CustomerEnquiry = () => {
  return (
    <section className="bg-gray-100">
      <div className="container lg:py-[120px] py-[80px]">
        
        <h3 className="font-poppins lg:text-[44px] text-[38px] font-bold text-center ">
          Customer <span className="text-[#6022EA]">Enquiry Form </span>
        </h3>
        <p className="text-center text-gray-600 font-poppins lg:max-w-2xl lg:mx-auto pt-3 pb-[48px]">
          Have questions or need assistance? Fill out the form below and our
          support team will get back to you as soon as possible.
        </p>

        
        <form className="mx-auto lg:w-[80%]">
          
        <div className=" flex lg:gap-4 lg:flex-row flex-col  ">
            <div className="border border-gray-300 w-full bg-gray-400 placeholder-white text-white rounded-lg flex gap-3 items-center px-4 mt-5  transition">
            <User className="text-white" />
            <input
              type="text"
              placeholder="Your Name"
              className="font-poppins   placeholder-white  font-normal bg-transparent w-full py-3 outline-none"
            />
          </div>

          
          <div className="border border-gray-300 w-full bg-gray-400 rounded-lg flex gap-3 items-center px-4 mt-5  transition">
            <Mail className="text-white" />
            <input
              type="email"
              placeholder="Your Email"
              className="font-poppins  placeholder-white font-normal bg-transparent w-full py-3 outline-none"
            />
          </div></div>        

          {/* Phone */}
          <div className="border border-gray-300 rounded-lg bg-gray-400 flex gap-3 items-center px-4 mt-5  transition">
            <Phone className="text-white" />
            <input
              type="number"
              placeholder="Phone Number"
              className="font-poppins placeholder-white font-normal bg-transparent w-full py-3 outline-none"
            />
          </div>

          {/* Message */}
          <div className="border bg-gray-400 border-gray-300   rounded-lg flex gap-3 items-start px-4 py-3 mt-5  transition">
            <MessageSquare className="text-white mt-1" />
            <textarea
              placeholder="Enter your message"
              rows="4"
              className="font-poppins font-normal placeholder-white bg-transparent w-full outline-none resize-none"
            ></textarea>
          </div>

          
         <div className="flex justify-center">
           <input
            type="submit"
            value="Submit Enquiry"
            className="mt-6 font-poppins cursor-pointer  px-10  bg-gradient-to-r from-[#6022EA] to-purple-900 text-white font-medium py-3  rounded-full shadow-md hover:opacity-90 transition"
          />
         </div>
        </form>
      </div>
    </section>
  );
};

export default CustomerEnquiry;
