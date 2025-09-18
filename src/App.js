
import './App.css';
import Navbar from './components/layout/Navbar';
import About from './components/layout/About';
import CustomerEnquiry from './components/layout/CustomerEnquiry';
import FaqList from './components/layout/FaqList';
import Feedback from './components/layout/Feedback';
import Home from './components/layout/Home';
import Footer from './components/layout/Footer';
import Products from './components/layout/Products';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <>
     <Navbar/>
     <About/>
     <CustomerEnquiry/>
     <FaqList/>
     <Feedback/>
     <Home/>
     <Footer/>
     <Products/>

     {/* <Routes>
      <Route
     </Routes> */}
     
     </>

  );
}

export default App;
