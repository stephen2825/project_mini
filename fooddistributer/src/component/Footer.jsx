import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
import { BiMailSend, BiPhoneCall, BiSupport } from 'react-icons/bi';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';



export const Footer = () => {

    return (


       <Container className='footerContainer'>
       <div className='main-footer'>
       <div className='container'>
           <div className='row'>
               <div className='col-md-3 col-sm-6'>
                   <h4>ABOUT</h4>
                   <ul className='list-unstyled'>
                       <li>Company</li>
                       <li> <BiMailSend /> : www.help@ecommerceapp.com</li>
                       <li><BiSupport /> : 1800-0000-0000 (toll-free)</li>
                   </ul>
               </div>
               <div className='col-md-3 col-sm-6'>
                   <h4>HELP</h4>
                   <ul className='list-unstyled'>
                       <li>mail:info@fooddelivery.com</li>
                       <li>inst:fooies404</li>
                       <li>fb.foodies@yahoo</li>
                   </ul>
               </div>

               <div className='col-md-3 col-sm-6'>
                   <h4>LLEGAL</h4>
                   <ul className='list-unstyled'>
                       <li>Action</li>
                   </ul>
               </div>

               <div className='col-md-3 col-sm-6'>
               <h4>MORE</h4>
               <ul className='list-unstyled'>
                <li>Contact us :4567890</li>
                <li><section className='Media'>
                <div className="footer-column">
                  <div className="footer__title">Social Media</div>
                  <div className="footer__list">
                    <Link className="footer__item" to="" target="_blank" rel="noopener noreferrer">
                      <FaFacebook />
                    </Link>
                    <Link className="footer__item" to="" target="_blank" rel="noopener noreferrer">
                      <FaTwitter />
                    </Link>
                    <Link className="footer__item" to="" target="_blank" rel="noopener noreferrer">
                      <FaGoogle />
                    </Link>
                    <Link className="footer__item" to="" target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </Link>
                    <Link className="footer__item" to="" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </Link>
                    <Link className="footer__item" to="" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </Link>
                  </div>
                </div>
              </section></li>
               </ul>
           </div>
           </div>
           <div className='footer-bootom'>
           <p className='text-xs-center'>
           &Copy;{new Date().getFullYear()}City Guide - All Rights Reserved.
           </p>
           </div>
       </div>
   </div>
       </Container>
    )
}
