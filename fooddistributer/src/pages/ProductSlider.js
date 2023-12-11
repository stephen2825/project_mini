 

 import React, { useEffect } from 'react';




 import "swiper/css";
 import 'swiper/css/free-mode';
import { Carousel, Container } from 'react-bootstrap';
import './ProductSlider.css';

 
 


 
 export const ProductSlider = () => {
    
   return (
    <Container>
            <div class="max-width">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/img/L4.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                           
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/img/L1.png"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/img/L2.png"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                           
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Container>
   )
 }
 