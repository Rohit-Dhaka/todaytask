import React from "react";
import { ArrowRight } from "lucide-react";
import { Gradienthero } from "../../common/icon";

const Home = () => {
  return (
    <header className="bg-black lg:h-screen overflow-hidden relative">
      <div className="container">
        <div className="flex flex-row flex-wrap mx-[-12px] items-center py-10">
          <div className="lg:w-6/12 w-full px-3">
            <div className="">
              <h1 className="font-poppins  lg:text-[48px] text-[38px]  font-semibold  leading-[106%] text-white relative after:absolute after:h-full after:w-[5px] after:bg-[#6022EA] after:top-0 after:left-[-10px] after:rounded-full ">
                India's Most Trusted Partner in Mobile Accessories Manufacturing
              </h1>
              <h6 className="font-poppins pb-[27px] pt-[22px] opacity-[70%] text-[16px] leading-[150%] text-[#FFFFFF]">
                Startechno Plast is a leading manufacturer and trader of
                premium-quality USB cables, adapters, and a wide range of mobile
                accessories.
              </h6>
             <div className="flex items-center gap-3">
               <button className="font-poppins font-semibold leading-[150%] py-3 ps-10 from-[#6022EA] to-transparent  bg-gradient-to-r text-white rounded-full  flex gap-2">
                Class Us Now <ArrowRight />{" "}
              </button>{" "}
              <a
                href="tel:+123456789"
                className="font-poppins font-medium text-white"
              >
                123456789
              </a>{" "}
             </div>
            </div>
          </div>
          <div className="lg:w-6/12 w-full px-3  flex justify-end  lg:pt-0 pt-20">
          <div className=" absolute right-0">
            <Gradienthero/>
          </div>
            <div className="bg-white  rounded-[12px] w-full max-w-md p-4 z-10 relative">
              <h2 className="text-[24px] font-bold text-white bg-[#6022EA] text-center py-3 rounded-md mb-6">
                BULK ENQUIRY NOW
              </h2>

              <form className="space-y-5">
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-1"
                    htmlFor="name"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6022EA]"
                  />
                </div>

                <div>
                  <label
                    className="block text-gray-700 font-medium mb-1"
                    htmlFor="phone"
                  >
                    Your Phone No.
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-[#6022EA]">
                    <span className="mr-2 text-nowrap">🇮🇳 +91</span>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="81234 56789"
                      className="w-full outline-none"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-1"
                    htmlFor="categories"
                  >
                    Select Categories
                  </label>
                  <select
                    id="categories"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6022EA]"
                  >
                    <option>Select Categories</option>
                    <option>Power Banks</option>
                    <option>Chargers</option>
                    <option>Bluetooth Speakers</option>
                    <option>Neckbands</option>
                    <option>Earbuds</option>
                    <option>Electronic Lighters</option>
                  </select>
                </div>

                {/* City */}
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-1"
                    htmlFor="city"
                  >
                    Your City
                  </label>
                  <input
                    type="text"
                    id="city"
                    placeholder="Enter your city"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6022EA]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#6022EA] text-white font-bold py-3 rounded-lg  transition duration-300"
                >
                  INQUIRE NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
