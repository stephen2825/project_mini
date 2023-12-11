import { Container } from "react-bootstrap";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Itemcard from "../pages/Itemcard";


import React from 'react'
import { CartProvider } from "react-use-cart";

export const Buy = () => {
  return (

     <Container>
     <CartProvider>
     <Home></Home>
    <Cart></Cart>
     </CartProvider>
    
    </Container>

    
  )
}

