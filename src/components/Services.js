import React, { useEffect, useRef } from 'react';
import './services.css';
import video1 from '../assets/videos/production_id_4440931 (1080p).mp4';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
const Services = () => {
  const staticRef = useRef(null);
  const scrollRef = useRef(null);

  const componentRef = useRef(null);
  let componentHeight;

  useEffect(() => {
    // Access the height of the component using ref
    componentHeight = componentRef.current.clientHeight;
    console.log('Component Height:', componentHeight);

    // You can perform further actions with the height, such as updating state or triggering animations
  }, []);

  useGSAP(() => {
    const staticPart = staticRef.current;
    const scrollPart = scrollRef.current;

    gsap.timeline({
      scrollTrigger: {
        trigger: scrollPart,
        start: 'top 75px',
        end: `bottom 400px`,
        pin: staticPart,
        scrub: true,
        onEnter: () => console.log('Pin starts'),
        onLeave: () => console.log('Pin ends'),
      },
    });
  }, []);
  return (
    <div className='services-top'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          margin: '10px',
        }}
      >
        <div style={{ width: '40%', height: 'auto' }} ref={componentRef}>
          <div style={{ width: '100%', color: '#f4f4f4' }} ref={staticRef}>
            <div className='static-title'>Our Services</div>
            <div className='static-desc'>
              We help enterprises transform their innovative ideas into
              successful products from scratch.
            </div>
            <div className='static-desc'>
              {' '}
              From custom product and web development to migrating legacy
              systems to modern and efficient Jamstack architecture, we take
              care of the technical complexities, so your team can focus on what
              you do best.
            </div>
          </div>
        </div>
        <div style={{ width: 'auto' }} ref={scrollRef}>
          <div className='scroll-container'>
            <div className='card-title'>This is a dummy video </div>
            <video autoPlay muted loop className='card-video'>
              <source src={video1} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            <div className='card-readmore-container'>
              <div className='card-readmore'>Read More</div>
              <FaArrowRight />
            </div>
          </div>
          <div className='scroll-container'>
            <div className='card-title'>This is a dummy video </div>
            <video autoPlay muted loop className='card-video'>
              <source src={video1} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            <div className='card-readmore-container'>
              <div className='card-readmore'>Read More</div>
              <FaArrowRight />
            </div>
          </div>
          <div className='scroll-container'>
            <div className='card-title'>This is a dummy video </div>
            <video autoPlay muted loop className='card-video'>
              <source src={video1} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            <div className='card-readmore-container'>
              <div className='card-readmore'>Read More</div>
              <FaArrowRight />
            </div>
          </div>
          <div className='scroll-container'>
            <div className='card-title'>This is a dummy video </div>
            <video autoPlay muted loop className='card-video'>
              <source src={video1} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            <div className='card-readmore-container'>
              <div className='card-readmore'>Read More</div>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
