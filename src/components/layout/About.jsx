import React from "react";
import { Truck, Store, ShieldCheck, CheckCircle, BatteryCharging, Plug, Volume2, Headphones, Radio,  Flame } from "lucide-react"; // Fire replaced with Spark
import { Gradienthero, Gradienttwo } from "../../common/icon";


const About = () => {
  const features = [
    {
      icon: <Truck size={28} />,
      title: "Fast & Reliable Delivery",
      description: "Orders arrive safely and on time with real-time tracking support.",
    },
    {
      icon: <Store size={28} />,
      title: "Wide Variety of Choices",
      description: "Explore an extensive collection of mobile accessories for every need.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Customer-Centric Service",
      description: "Your satisfaction is our priority—quality products with dependable support.",
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Assured Quality Standards",
      description: "Every product passes strict quality checks for lasting performance.",
    },
  ];



  const products = [
  {
    icon: <BatteryCharging size={28} className="text-purple-500" />,
    title: "Power Banks",
    desc: "Reliable, long-lasting, and compact solutions to keep your devices charged on the go.",
  },
  {
    icon: <Plug size={28} className="text-blue-500" />,
    title: "Chargers",
    desc: "Safe, efficient, and fast-charging adapters designed for universal compatibility.",
  },
  {
    icon: <Volume2 size={28} className="text-green-500" />,
    title: "Bluetooth Speakers",
    desc: "Engineered for deep bass, clear vocals, and wireless convenience, perfect for both personal and professional use.",
  },
  {
    icon: <Headphones size={28} className="text-pink-500" />,
    title: "Neckbands",
    desc: "Lightweight, comfortable, and equipped with powerful sound for music and calls on the move.",
  },
  {
    icon: <Radio size={28} className="text-red-500" />,
    // icon: "",
    title: "Earbuds",
    desc: "Sleek and stylish with noise reduction features, ensuring crystal-clear sound anytime, anywhere.",
  },
  {
    icon: <Flame size={28} className="text-orange-500" />,
    title: "Electronic Lighters",
    desc: "Modern, rechargeable, and eco-friendly alternatives to traditional lighters.",
  },
];


  return (
    <section className="bg-black  relative overflow-hidden">
         <div className=" absolute right-0 bottom-[-10%]">
                  <Gradienthero/>
                  
                </div>
      <div className="container py-[120px]">
        
       

        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block">
          About <span className="text-indigo-600">Startechno Plast</span>
          <span className="absolute left-1/2 md:left-0 -bottom-2 w-16 h-1 bg-indigo-600 rounded-full transform -translate-x-1/2 md:translate-x-0"></span>
        </h2>

       <div className="flex flex-row flex-wrap mx-[-12px]">
         <div className="w-6/12 px-3">
          <p className="text-white">
            <strong>Startechno Plast</strong> is a trusted name in the mobile accessories industry, recognized for delivering high-quality and innovative products that enhance everyday digital lifestyles. As a leading manufacturer and trader, we are committed to offering premium solutions that combine cutting-edge technology, durability, and modern design.  Our expertise lies in crafting mobile accessories that not only meet global quality standards but also reflect the evolving needs of today’s tech-savvy customers. Whether it’s seamless connectivity,fast charging, or immersive sound, our products are designed to deliver unmatched performance. Every product undergoes strict quality checks to ensure performance, reliability, and long-term value. With an extensive catalog and a customer-first approach , we help brands and retailers scale faster by offering OEM/ODM services tailored to their business goals.  By blending innovation with trust, <strong>Startechno Plast</strong> continues to empower brands and enrich customer experiences across India and beyond. Our vision is to remain at the forefront of the mobile accessories industry, creating products that people love and rely on every day.
          </p>

         

          
          
          

         

       
        </div>
         <div className=" w-6/12 px-3">
          {products.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-purple-500/40 transition-shadow"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-gray-300 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
       </div>

           {/* <ul className="space-y-4 text-gray-200 text-lg pt-8">
          <li className="flex items-start gap-3">
            
            <span>
              <strong>Power Banks</strong> – Reliable, long-lasting, and compact solutions to keep your devices charged on the go.
            </span>
          </li>

          <li className="flex items-start gap-3">
            
            <span>
              <strong>Chargers</strong> – Safe, efficient, and fast-charging adapters designed for universal compatibility.
            </span>
          </li>

          <li className="flex items-start gap-3">
            
            <span>
              <strong>Bluetooth Speakers</strong> – Engineered for deep bass, clear vocals, and wireless convenience, perfect for both personal and professional use.
            </span>
          </li>

          <li className="flex items-start gap-3">
            
            <span>
              <strong>Neckbands</strong> – Lightweight, comfortable, and equipped with powerful sound for music and calls on the move.
            </span>
          </li>

          <li className="flex items-start gap-3">
            
            <span>
              <strong>Earbuds</strong> – Sleek and stylish with noise reduction features, ensuring crystal-clear sound anytime, anywhere.
            </span>
          </li>

          <li className="flex items-start gap-3">
            
            <span>
              <strong>Electronic Lighters</strong> – Modern, rechargeable, and eco-friendly alternatives to traditional lighters.
            </span>
          </li>
        </ul> */}
         <div className="flex flex-row flex-wrap mx-[-12px] pt-10 relative">
          <div className=" absolute bottom-[-90%] left-[-15%]">
            <Gradienttwo/>
          </div>
          {features.map((feature, index) => (
            <div className="lg:w-3/12 sm:w-6/12 w-full px-3 pt-6 z-10" key={index}>
              <div
                
                className="bg-[#031227] text-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 group"
              >
                <div className="bg-white/10 p-3 rounded-md w-fit mb-4 group-hover:scale-110 duration-300 ease-linear">{feature.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default About;



// import React from "react";
// import { Truck, Store, ShieldCheck, CheckCircle, } from "lucide-react"; // Fire replaced with Spark
// import { Gradienthero, Gradienttwo } from "../../common/icon";

// const About = () => {
//   const features = [
//     {
//       icon: <Truck size={28} />,
//       title: "Fast & Reliable Delivery",
//       description: "Orders arrive safely and on time with real-time tracking support.",
//     },
//     {
//       icon: <Store size={28} />,
//       title: "Wide Variety of Choices",
//       description: "Explore an extensive collection of mobile accessories for every need.",
//     },
//     {
//       icon: <ShieldCheck size={28} />,
//       title: "Customer-Centric Service",
//       description: "Your satisfaction is our priority—quality products with dependable support.",
//     },
//     {
//       icon: <CheckCircle size={28} />,
//       title: "Assured Quality Standards",
//       description: "Every product passes strict quality checks for lasting performance.",
//     },
//   ];



//   return (
//     <section className="bg-black  relative overflow-hidden">
//          <div className=" absolute right-0 bottom-[-10%]">
//                   <Gradienthero/>
                  
//                 </div>
//       <div className="container py-[120px]">
        
       

        
//         <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block">
//           About <span className="text-indigo-600">Startechno Plast</span>
//           <span className="absolute left-1/2 md:left-0 -bottom-2 w-16 h-1 bg-indigo-600 rounded-full transform -translate-x-1/2 md:translate-x-0"></span>
//         </h2>

//         <div className="space-y-5 text-gray-200 text-lg leading-relaxed">
//           <p>
//             <strong>Startechno Plast</strong> is a trusted name in the mobile accessories industry, recognized for delivering <span className="font-medium text-indigo-600">high-quality</span> and <span className="font-medium text-indigo-600">innovative products</span> that enhance everyday digital lifestyles. As a leading manufacturer and trader, we are committed to offering premium solutions that combine <span className="font-medium text-indigo-600">cutting-edge technology</span>, <span className="font-medium text-indigo-600">durability</span>, and <span className="font-medium text-indigo-600">modern design</span>.
//           </p>

//           <p>
//             Our expertise lies in crafting mobile accessories that not only meet global quality standards but also reflect the evolving needs of today’s tech-savvy customers. Whether it’s <span className="font-medium text-indigo-600">seamless connectivity</span>, <span className="font-medium text-indigo-600">fast charging</span>, or <span className="font-medium text-indigo-600">immersive sound</span>, our products are designed to deliver unmatched performance.
//           </p>

//           <p>
//             Every product undergoes <span className="font-medium text-indigo-600">strict quality checks</span> to ensure performance, reliability, and long-term value. With an extensive catalog and a <span className="font-medium text-indigo-600">customer-first approach</span>, we help brands and retailers scale faster by offering OEM/ODM services tailored to their business goals.
//           </p>

//           <p>
//             By blending innovation with trust, <strong>Startechno Plast</strong> continues to empower brands and enrich customer experiences across India and beyond. Our vision is to remain at the forefront of the mobile accessories industry, creating products that people <span className="font-medium text-indigo-600">love and rely on every day</span>.
//           </p>
//         </div>

//            <ul className="space-y-4 text-gray-200 text-lg pt-8">
//           <li className="flex items-start gap-3">
            
//             <span>
//               <strong>Power Banks</strong> – Reliable, long-lasting, and compact solutions to keep your devices charged on the go.
//             </span>
//           </li>

//           <li className="flex items-start gap-3">
            
//             <span>
//               <strong>Chargers</strong> – Safe, efficient, and fast-charging adapters designed for universal compatibility.
//             </span>
//           </li>

//           <li className="flex items-start gap-3">
            
//             <span>
//               <strong>Bluetooth Speakers</strong> – Engineered for deep bass, clear vocals, and wireless convenience, perfect for both personal and professional use.
//             </span>
//           </li>

//           <li className="flex items-start gap-3">
            
//             <span>
//               <strong>Neckbands</strong> – Lightweight, comfortable, and equipped with powerful sound for music and calls on the move.
//             </span>
//           </li>

//           <li className="flex items-start gap-3">
            
//             <span>
//               <strong>Earbuds</strong> – Sleek and stylish with noise reduction features, ensuring crystal-clear sound anytime, anywhere.
//             </span>
//           </li>

//           <li className="flex items-start gap-3">
            
//             <span>
//               <strong>Electronic Lighters</strong> – Modern, rechargeable, and eco-friendly alternatives to traditional lighters.
//             </span>
//           </li>
//         </ul>
//          <div className="flex flex-row flex-wrap mx-[-12px] pt-10 relative">
//           <div className=" absolute bottom-[-90%] left-[-15%]">
//             <Gradienttwo/>
//           </div>
//           {features.map((feature, index) => (
//             <div className="lg:w-3/12 sm:w-6/12 w-full px-3 pt-6 z-10" key={index}>
//               <div
                
//                 className="bg-[#031227] text-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 group"
//               >
//                 <div className="bg-white/10 p-3 rounded-md w-fit mb-4 group-hover:scale-110 duration-300 ease-linear">{feature.icon}</div>
//                 <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
//                 <p className="text-sm text-gray-300">{feature.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

      
//       </div>
//     </section>
//   );
// };

// export default About;
