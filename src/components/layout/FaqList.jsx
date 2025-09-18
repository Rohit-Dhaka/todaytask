import { useState } from "react";
import { Transition } from "@headlessui/react";
import { Plus, Minus } from "lucide-react";

import { ChevronDownIcon } from "@heroicons/react/24/solid"; // Make sure you have heroicons installed
import { Gradienthero } from "../../common/icon";

const accordionData = [
  {
    id: 1,
    title: "Q1. What does Startechnoplast manufacture",
    content:
      "We specialize in manufacturing a wide range of mobile accessories, including power banks, chargers, Bluetooth speakers, neckbands, earbuds, and electronic lighters.",
  },
  {
    id: 2,
    title: "Q2, What is your minimum order quantity (MOQ)?",
    content:
      "Our MOQ varies depending on the product category. Generally, bulk orders start from 500 units, but we can discuss flexible quantities for OEM and custom projects.",
  },
  {
    id: 3,
    title: "Q3. What types of clients do you work with?",
    content:
      "We work with distributors, wholesalers, retail chains, startups, and established brands who want high-quality mobile accessories or want to launch their own private label/OEM brand.",
  },
  {
    id: 4,
    title: "Q4. Do you provide samples before placing a bulk order?",
    content:
      "Yes, we provide product samples so you can check the quality before placing a large order.",
  },
  {
    id: 5,
    title: "Q5. Are your products certified and quality tested?",
    content:
      "Absolutely. All our products undergo strict quality testing and come with relevant certifications to ensure safety, durability, and compliance with international standards.",
  },
  {
    id: 6,
    title: "Q6. Can I visit your factory before placing an order?",
    content:
      "Yes, we welcome factory visits. Clients can personally inspect our facilities, production lines, and quality processes before confirming their orders.",
  },
  {
    id: 7,
    title: "Q7. Do you deliver products outside India?",
    content:
      "Yes, we ship globally. We have an export network to deliver products across different countries with proper packaging and logistics support.",
  },
  {
    id: 8,
    title: "Q8. Can I start my own brand with your OEM services?",
    content:
      "Definitely. We provide OEM & ODM services, allowing you to launch your own brand with customized products, packaging, and branding solutions.",
  },
  {
    id: 9,
    title: "Q9. Can I get my logo printed on the products and packaging?",
    content:
      "Yes, we offer custom logo printing and branding on both products and packaging as part of our OEM services.",
  },
  {
    id: 10,
    title: "Q10. How long does it take to fulfill an OEM order?",
    content:
      "The lead time depends on the order size and customization level, but on average, it takes 30–45 days from confirmation to delivery.",
  },
  {
    id: 11,
    title: "Q11. What makes Innotech different from other manufacturers?",
    content:
      "Our focus on innovation, strict quality standards, OEM support, and end-to-end customer solutions make us stand out from competitors. We don’t just supply products — we help you build and scale your brand.",
  },
  {
    id: 12,
    title: "Q12. Do you also supply mobile accessory manufacturing machines?",
    content:
      "Yes, apart from finished products, we also supply mobile accessory manufacturing machines, enabling businesses to set up their own production units.",
  },
];

export default function FaqList() {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className=" overflow-hidden bg-black relative">
         <div className=" absolute right-0 bottom-0">
                  <Gradienthero/>
                </div>
                
      <div className="container lg:pb-[120px]  lg:pt-[80px] max-lg:py-[80px]">
       
     <h3 className="font-poppins lg:text-[44px] text-[38px] text-white font-bold text-center py-[16px]">
  Check Out <span className="text-[#6022EA]">These FAQs</span>
</h3>
<p className="text-center text-gray-600 font-poppins max-w-2xl mx-auto pb-[48px]">
  Find answers to the most common questions about our products and services.  
  If you don’t see your query here, feel free to reach out to us directly.
</p>

  <div className="grid lg:grid-cols-2 gap-6">
  {accordionData.map(({ id, title, content }) => {
    const isOpen = openId === id;
    return (
      <div
        key={id}
        className={`border  rounded-md overflow-hidden transition-colors duration-300 z-10 relative ${
          isOpen ? "bg-[#6022EA] text-white" : "bg-[#F6F6F6] text-black"
        }`}
      >
        <button
          className="w-full flex justify-between items-center  px-[12px] py-[11px]  text-left transition"
          onClick={() => toggleAccordion(id)}
        >
          <span className="font-poppins sm:font-semibold font-medium lg:text-[18px] sm:text-[20px]  leading-[140%]">
            {title}
          </span>
          {isOpen ? (
            <Minus className={`w-6 h-6 ${isOpen ? "text-white" : "text-gray-700"}`} />
          ) : (
            <Plus className={`w-6 h-6 ${isOpen ? "text-white" : ""}`} />
          )}
        </button>

        <Transition show={isOpen}>
          <div className="px-[30px] pb-[22px] font-poppins font-normal">{content}</div>
        </Transition>
      </div>
    );
  })}
</div>

      
      </div>
    </section>
  );
}
