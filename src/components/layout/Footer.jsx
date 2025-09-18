import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone  ,  Facebook, Instagram, Twitter, Linkedin, Youtube} from "lucide-react";


const Footer = () => {
  return (
     <footer className="bg-black">
      <div className="container">
        <div className="flex flex-row flex-wrap mx-[-12px] pt-[60px] pb-[75px]">
          <div className="lg:w-5/12  w-full px-3">
            <Link class=' font-poppins text-[24px] font-semibold  text-white'>STAR TECHNOPLAST</Link>
            <p className='text-white pt-4 font-poppins font-normal max-w-[370px]'>Discover the latest gadgets and reliable electronic accessories at unbeatable prices.
We bring you quality products, trusted brands, and excellent service – all in one place.</p>
<div className="flex gap-4 mt-6">
  <a href="https://facebook.com" target="_blank" rel="noreferrer">
    <Facebook size={24} className="text-white hover:text-blue-600 hover:scale-110 transition" />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noreferrer">
    <Instagram size={24} className="text-white hover:text-pink-500 hover:scale-110 transition" />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noreferrer">
    <Twitter size={24} className="text-white hover:text-sky-500 hover:scale-110 transition" />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noreferrer">
    <Linkedin size={24} className="text-white hover:text-blue-700 hover:scale-110 transition" />
  </a>
  <a href="https://youtube.com" target="_blank" rel="noreferrer">
    <Youtube size={24} className="text-white hover:text-red-600 hover:scale-110 transition" />
  </a>
</div>

          </div>   
                           
               <div className="lg:w-2/12 md:w-4/12 sm:w-6/12 w-full px-3 lg:pt-0 pt-8">
          <ul className='flex flex-col gap-4'>
            <li className='font-poppins text-[18px] font-medium text-white'>Quick Links</li>
            <li>
  <Link 
    to='' 
    className='relative font-poppins text-white font-normal 
               after:content-[""] after:absolute after:left-0 after:bottom-0 
               after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 
               hover:after:w-full'
  >
    Home
  </Link>
</li>
<li>
  <Link 
    to='' 
    className='relative font-poppins text-white font-normal 
               after:content-[""] after:absolute after:left-0 after:bottom-0 
               after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 
               hover:after:w-full'
  >
    About Us
  </Link>
</li>
<li>
  <Link 
    to='' 
    className='relative font-poppins text-white font-normal 
               after:content-[""] after:absolute after:left-0 after:bottom-0 
               after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 
               hover:after:w-full'
  >
    Products
  </Link>
</li>
<li>
  <Link 
    to='' 
    className='relative font-poppins text-white font-normal 
               after:content-[""] after:absolute after:left-0 after:bottom-0 
               after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 
               hover:after:w-full'
  >
    Blogs
  </Link>
</li>
<li>
  <Link 
    to='' 
    className='relative font-poppins text-white font-normal 
               after:content-[""] after:absolute after:left-0 after:bottom-0 
               after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 
               hover:after:w-full'
  >
    Contact Us
  </Link>
</li>

          </ul>         
        </div>      

           <div className="lg:w-2/12 md:w-4/12 sm:w-6/12 w-full px-3 lg:pt-0 pt-8">
          <ul className='flex flex-col gap-4'>
            <li className='font-poppins text-[18px] font-medium text-white'>Products</li>
            <li><Link to='' className='relative font-poppins text-white font-normal 
               after:content-[""] after:absolute after:left-0 after:bottom-0 
               after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 
               hover:after:w-full'>Power Banks</Link></li>
            <li><Link to='' className='relative font-poppins text-white font-normal 
               after:content-[""] after:absolute after:left-0 after:bottom-0 
               after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 
               hover:after:w-full'>Chargers</Link></li>
            <li><Link to='' className='relative font-poppins text-white font-normal 
               after:content-[""] after:absolute after:left-0 after:bottom-0 
               after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 
               hover:after:w-full'>Blutooth Speakers</Link></li>
            <li><Link to='' className='relative font-poppins text-white font-normal 
               after:content-[""] after:absolute after:left-0 after:bottom-0 
               after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 
               hover:after:w-full'>Neckbands</Link></li>
            <li><Link to='' className='relative font-poppins text-white font-normal 
               after:content-[""] after:absolute after:left-0 after:bottom-0 
               after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 
               hover:after:w-full'>Earbuds</Link></li>
            <li><Link to='' className='relative font-poppins text-white font-normal 
               after:content-[""] after:absolute after:left-0 after:bottom-0 
               after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 
               hover:after:w-full'>Electronic Lighters</Link></li>
          </ul>         
        </div>          
          <div className="lg:w-3/12 md:w-4/12 sm:w-6/12 w-full px-3 lg:pt-0 pt-8">
       <ul className='flex flex-col gap-4'>
  <li className='font-poppins text-[18px] font-medium text-white'>Support</li>

  <li>
    <div className="flex gap-3 items-center">
      <Mail size={20} className="text-white" />
      <a className='font-poppins text-white font-normal' href="mailto:demo@gmail.com">
        demo@gmail.com
      </a>
    </div>
  </li>

  <li>
    <div className="flex gap-3 items-center">
      <Phone size={20} className="text-white" />
      <a className='font-poppins text-white font-normal' href="tel:+1234567890">
        +91 1234567890
      </a>
    </div>
  </li>
</ul>

          </div>                    
                         

        </div>
      </div>
       
  

      <div className=" font-poppins  text-center py-3 border-t-[1px] border-white text-white">
        © {new Date().getFullYear()} YourCompanyName. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer