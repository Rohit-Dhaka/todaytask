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
            <div className="border border-gray-300 w-full bg-white rounded-lg flex gap-3 items-center px-4 mt-5 focus-within:border-purple-600 transition">
            <User className="text-gray-500" />
            <input
              type="text"
              placeholder="Your Name"
              className="font-poppins   font-normal bg-transparent w-full py-3 outline-none"
            />
          </div>

          
          <div className="border border-gray-300 w-full bg-white rounded-lg flex gap-3 items-center px-4 mt-5 focus-within:border-purple-600 transition">
            <Mail className="text-gray-500" />
            <input
              type="email"
              placeholder="Your Email"
              className="font-poppins  font-normal bg-transparent w-full py-3 outline-none"
            />
          </div></div>        

          {/* Phone */}
          <div className="border border-gray-300 rounded-lg bg-white flex gap-3 items-center px-4 mt-5 focus-within:border-purple-600 transition">
            <Phone className="text-gray-500" />
            <input
              type="number"
              placeholder="Phone Number"
              className="font-poppins font-normal bg-transparent w-full py-3 outline-none"
            />
          </div>

          {/* Message */}
          <div className="border bg-white border-gray-300 rounded-lg flex gap-3 items-start px-4 py-3 mt-5 focus-within:border-purple-600 transition">
            <MessageSquare className="text-gray-500 mt-1" />
            <textarea
              placeholder="Enter your message"
              rows="4"
              className="font-poppins font-normal bg-transparent w-full outline-none resize-none"
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
