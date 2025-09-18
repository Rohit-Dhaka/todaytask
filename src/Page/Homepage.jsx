import React from 'react'
import Home from '../components/layout/Home'
import Products from '../components/layout/Products'
import About from '../components/layout/About'
import Feedback from '../components/layout/Feedback'
import FaqList from '../components/layout/FaqList'
import CustomerEnquiry from '../components/layout/CustomerEnquiry'
const Homepage = () => {
  return (
    <div>
        
        
     <Home/>
     <Products/>
     <About/>
     <Feedback/>
     <FaqList/>
     <CustomerEnquiry/>
     
    </div>
  )
}

export default Homepage