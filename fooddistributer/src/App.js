import './App.css';
import { NavigationBar } from './component/NavigationBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { CartProvider, useProvider } from 'react-use-cart';
import { Dashboard } from './component/Dashboard';
import { Buy } from './component/Buy';
import { CustomerRegistrationForm } from './component/CustomersRegistration';
import { Footer } from './component/Footer';

import { AboutUs } from './component/AboutUs';
import ContactUs from './component/ContactUs';
import SignUpForm from './component/SignupForm';


function App() {
  return (
    <BrowserRouter>
   <NavigationBar></NavigationBar>
    <CartProvider>
    <Routes>
        <Route path="/log" element={<SignUpForm/>}></Route>
        <Route path="/dash" element={<Dashboard/>}></Route>
        <Route path="/buy" element={<Buy/>}></Route>
        <Route path="/register-customer" element={<CustomerRegistrationForm/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
        
        
      </Routes>
      <br></br>
     <Footer/>
    
    </CartProvider>
    
    
  
    
   
  </BrowserRouter>  
  
  );
}

export default App;
