
import './App.css';
import Navbar from './components/layout/Navbar';
import About from './components/layout/About';
import CustomerEnquiry from './components/layout/CustomerEnquiry';
import FaqList from './components/layout/FaqList';
import Feedback from './components/layout/Feedback';
import Home from './components/layout/Home';
import Footer from './components/layout/Footer';
import Products from './components/layout/Products';
import { Routes , Route } from 'react-router-dom';
import Homepage from './Page/Homepage';


function App() {
  return (
    <>
     {/* <Navbar/>
     <Home/>
     <Products/>
     <About/>
     <Feedback/>
     <FaqList/>
     <CustomerEnquiry/>
     <Footer/> */}
    <Navbar/>
     <Routes>
     
      <Route path='/' element={<Homepage/>} />
      <Route path='/home' element={<Homepage/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<CustomerEnquiry/>} />
      <Route path='/products' element={<Products/>} />
     </Routes>
     <Footer/>
     
     </>

  );
}

export default App;
