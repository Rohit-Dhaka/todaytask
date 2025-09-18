import React, { useEffect, useRef, useState } from "react";
import { NavLink , Link } from "react-router-dom";
import { ChevronDown } from 'lucide-react';


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const desktopButtonRef = useRef(null);
  const mobileButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      
      const isClickOutsideDesktop = desktopDropdownRef.current && !desktopDropdownRef.current.contains(e.target) &&
                                   desktopButtonRef.current && !desktopButtonRef.current.contains(e.target);
      const isClickOutsideMobile = mobileDropdownRef.current && !mobileDropdownRef.current.contains(e.target) &&
                                  mobileButtonRef.current && !mobileButtonRef.current.contains(e.target);
      
    
      if (productOpen) {
        
        if (window.innerWidth >= 1024 && isClickOutsideDesktop) {
          setProductOpen(false);
        }
        
        else if (window.innerWidth < 1024 && isClickOutsideMobile) {
          setProductOpen(false);
        }
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setProductOpen(false);
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside); // For mobile touch events
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [productOpen, open]);


const actions = [
  { name: "Call", href: "tel:+911234567890" },
  { name: "Email", href: "mailto:info@example.com" },
  { name: "Whatsapp", href: "https://wa.me/911234567890" },
  { name: "Get Quotes", href: "/get-quotes" }
];



  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  const links = [
    "Home",
    "Products",
    "About",
    "Contact",
    "Blogs",
  
    
  ];

  return (
    <nav className="py-5  bg-black   shadow-card">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/" className='font-poppins text-[18px] font-semibold text-white z-20 relative'>STAR TECHNOPLAST</Link>
          

          
          <div
            className={`${
              open ? "left-0" : "left-[-100%]"
            } menulist flex duration-300 ease-linear  z-20 
            lg:static lg:flex-row lg:items-center lg:justify-center lg:h-auto lg:bg-transparent lg:backdrop-blur-none
            max-lg:fixed max-lg:w-full max-lg:h-screen max-lg:bg-black/95 max-lg:backdrop-blur-md max-lg:top-0 max-lg:flex-col max-lg:items-center max-lg:justify-start max-lg:pt-20`}
            onClick={(e) => {
              // Close mobile menu when clicking on the backdrop (but not on menu items)
              if (window.innerWidth < 1024 && e.target === e.currentTarget) {
                setOpen(false);
                setProductOpen(false);
              }
            }}
          >
            {/* Desktop Navigation */}
            <ul className="hidden lg:flex gap-8 items-center">
              {links.map((nav, i) =>
                nav === "Products" ? (
                  <li key={i} className="relative">
                    <button
                      ref={desktopButtonRef}
                      className="text-white flex items-center gap-1 hover:text-gray-200 transition-colors font-poppins"
                      onClick={() => setProductOpen(!productOpen)}
                    >
                      Products <ChevronDown className={`w-4 h-4 transition-transform ${productOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Desktop Dropdown */}
                    {productOpen && (
                      <ul className="absolute left-0 top-full mt-2 bg-black text-white shadow-lg rounded-md min-w-[200px] py-2 z-50" ref={desktopDropdownRef}>
                        {[
                          "Power Banks",
                          "Chargers",
                          "Bluetooth Speakers",
                          "Neckbands",
                          "Barbuds",
                          "Electronic Lighters",
                        ].map((sub, j) => (
                          <li key={j}>
                            <NavLink
                              to={`/products/${sub.toLowerCase().replace(" ", "-")}`}
                              className="block py-3 px-4 text-white hover:bg-white hover:text-black font-poppins transition-colors whitespace-nowrap"
                              onClick={() => {
                                setProductOpen(false);
                              }}
                            >
                              {sub}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <NavLink
                    key={i}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-white relative font-poppins hover:text-gray-200 transition-colors before:absolute before:bottom-[-8px] before:left-[50%] before:translate-x-[-50%] before:h-[2px] before:w-full before:bg-white before:rounded-md before:content-[""] before:duration-300 before:ease-linear'
                        : "text-white font-poppins hover:text-gray-200 transition-colors"
                    }
                    to={`/${nav.toLowerCase().replace(" ", "-")}`}
                  >
                    {nav}
                  </NavLink>
                )
              )}
              
              
              <div className="flex gap-4 ml-8">
                {actions.map((action, i) => (
                  <a
                    key={i}
                    href={action.href}
                    className="font-poppins text-white hover:text-gray-200 transition-colors "
                    target={action.name === "Whatsapp" ? "_blank" : "_self"}
                    rel={action.name === "Whatsapp" ? "noreferrer" : undefined}
                  >
                    {action.name}
                  </a>
                ))}
              </div>
            </ul>

            
            <div 
              className="lg:hidden w-full px-6"
              onClick={(e) => {
                
                if (e.target === e.currentTarget) {
                  setOpen(false);
                  setProductOpen(false);
                }
              }}
            >
              <ul className="flex flex-col space-y-6 text-center">
                {links.map((nav, i) =>
                  nav === "Products" ? (
                    <li key={i} className="relative">
                      <button
                        ref={mobileButtonRef}
                        className="text-white flex items-center justify-center gap-2 w-full lg:py-3 text-lg font-poppins hover:text-gray-200 transition-colors"
                        onClick={() => setProductOpen(!productOpen)}
                      >
                        Products <ChevronDown className={`w-5 h-5 transition-transform ${productOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Mobile Dropdown */}
                      {productOpen && (
                        <ul className="mt-3 bg-gray-900 rounded-lg overflow-hidden" ref={mobileDropdownRef}>
                          {[
                            "Power Banks",
                            "Chargers",
                            "Bluetooth Speakers",
                            "Neckbands",
                            "Barbuds",
                            "Electronic Lighters",
                          ].map((sub, j) => (
                            <li key={j} className="border-b border-gray-700 last:border-b-0">
                              <NavLink
                                to={`/products/${sub.toLowerCase().replace(" ", "-")}`}
                                className="block py-4 px-6 text-white hover:bg-gray-800 font-poppins transition-colors text-center"
                                onClick={() => {
                                  setProductOpen(false);
                                  setOpen(false);
                                }}
                              >
                                {sub}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ) : (
                    <li key={i}>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? 'text-white font-poppins text-lg lg:py-3 block font-semibold'
                            : "text-white font-poppins text-lg lg:py-3 block hover:text-gray-200 transition-colors"
                        }
                        to={`/${nav.toLowerCase().replace(" ", "-")}`}
                        onClick={() => setOpen(false)}
                      >
                        {nav}
                      </NavLink>
                    </li>
                  )
                )}
                
                
                <li className="lg:pt-6 lg:mt-6 ">
                  <div className="flex  flex-col  max-lg:gap-4">
                    {actions.map((action, i) => (
                      <a
                        key={i}
                        href={action.href}
                        className="font-poppins text-white  transition-colors  text-center text-sm"
                        target={action.name === "Whatsapp" ? "_blank" : "_self"}
                        rel={action.name === "Whatsapp" ? "noreferrer" : undefined}
                        onClick={() => setOpen(false)}
                      >
                        {action.name}
                      </a>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Hamburger */}
          <div
            className="flex flex-col lg:hidden z-20 cursor-pointer p-2"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`${
                open ? "translate-y-[9px] rotate-[45deg]" : ""
              } duration-300 ease-linear rounded-lg bar h-[3px] w-[25px] bg-white`}
            ></span>
            <span
              className={`${
                open ? "opacity-0 translate-x-[-30px]" : ""
              } bar h-[3px] w-[25px] duration-300 ease-linear rounded-lg bg-white my-1.5`}
            ></span>
            <span
              className={`${
                open ? "translate-y-[-9px] rotate-[-45deg]" : ""
              } duration-300 ease-linear rounded-lg bar h-[3px] w-[25px] bg-white`}
            ></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


