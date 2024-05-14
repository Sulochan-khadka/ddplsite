import React, { useEffect, useState } from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiWechatLine } from 'react-icons/ri';
import { IoArrowUpCircleOutline } from 'react-icons/io5';
const Footer = () => {
  const [backToScroll, setBackToScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToScroll(true);
      } else setBackToScroll(false);
    });
  }, []);
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='footer-container'>
      <div className='names'>
        <div className='contact'>CONTACT US</div>
        <div className='guide'>GUIDING PRINCIPLES</div>
        <div className='sustain'>SUSTAINABILITY</div>
        <div className='diver'>DIVERSITY</div>
        {backToScroll && (
          <div className='scroll-to-top-container' onClick={backToTop}>
            <div className='scroll-to-top'>Top of page</div>

            <div className='scroll-icon'>
              <IoArrowUpCircleOutline />
            </div>
          </div>
        )}
      </div>
      <div className='icon-container'>
        <div className='icons'>
          <div className='icon'>
            <FaLinkedinIn />
          </div>
          <div className='icon'>
            <FaInstagram />
          </div>
          <div className='icon'>
            <FaXTwitter />
          </div>
          <div className='icon'>
            <FaFacebookF />
          </div>
          <div className='icon'>
            <RiWechatLine />
          </div>
        </div>
        <div className='footer-texts'>
          <div className='footer-text-nopointer'>
            © 2023 Gensler, All Rights Reserved
          </div>
          <div className='footer-text'> Privacy Policy</div>
          <div className='footer-text'> Terms Of Service</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
