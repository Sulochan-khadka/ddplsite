import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import './asthetic.css';
import video from '../assets/videos/sphere-720.mp4';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Asthetics = () => {
  const [slide, setSlide] = useState(false);

  // const changeSlide = () => {
  //   if (window.scrollY >= 2200) {
  //     setSlide(true);
  //     console.log(window.scrollY);
  //   } else setSlide(false);
  // };

  // window.addEventListener('scroll', changeSlide);
  const handleEnter = () => {
    setSlide(true);
  };
  const handleExit = () => {};
  return (
    // <ParallaxProvider>
    <div className='asthetic-container'>
      <ScrollTrigger onEnter={handleEnter} onExit={handleExit}>
        <div className='asthetic-title-container'>
          {/* <Parallax translateX={['-100px', '100px']} speed={6}> */}
          <div className={`asthetic-title-left  ${slide ? 'slide-left' : ''}`}>
            Designing
            <br /> Spaces
          </div>
          {/* </Parallax> */}
          {/* <Parallax> */}
          <div
            className={`asthetic-title-right  ${slide ? 'slide-right' : ''}`}
          >
            Defining
            <br /> Lifestyles
          </div>
          {/* </Parallax> */}
        </div>
      </ScrollTrigger>
      <div className='video-container'>
        <video autoPlay muted loop className='hero-vid'>
          <source src={video} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    // </ParallaxProvider>
  );
};

export default Asthetics;
