import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image1 from '../assets/img/designers-22Q4-1.jpg';
import image2 from '../assets/img/architects-22Q4-1.jpg.avif';
import image3 from '../assets/img/research-22Q4.jpg.avif';
import image4 from '../assets/img/planners-22Q4-1.jpg';
import image5 from '../assets/img/advisors-22Q4-1.jpg.avif';
// import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import './hero.css';

const Hero = () => {
  // const [active, setActive] = useState(false);
  const banners = [
    {
      id: 1,
      title: 'designers',
      image: image1,
    },
    {
      id: 2,
      title: 'architects',
      image: image2,
    },
    {
      id: 3,
      title: 'researchers',
      image: image3,
    },
    {
      id: 4,
      title: 'planners',
      image: image4,
    },
    {
      id: 5,
      title: 'advisors',
      image: image5,
    },
  ];
  const settings = {
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  const clickHandler = () => {
    console.log('once');
  };
  return (
    <div>
      <Fade
        arrows={false}
        duration={5000}
        onChange={function noRefCheck() {}}
        onStartChange={function noRefCheck() {}}
        transitionDuration={500}
        pauseOnHover={false}
        infinite={true}
        defaultIndex={1}
      >
        {banners.map((item) => (
          <div key={item.id} className='slide-container'>
            <div className='image-description'>
              The future isn’t happening to us,{' '}
              <div className='image-text' style={{ display: 'flex' }}>
                we are its&nbsp;
                <div className='text-in'>{item.title}</div> .{' '}
              </div>
            </div>

            <img
              src={item.image}
              alt='the best one'
              style={{ height: '100%', width: '100%' }}
            />
          </div>
        ))}
      </Fade>
      {/* <span className='in-button' onClick={buttonClick}>
        <span>
          I'm interested in{' '}
          <span>{active ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </span>
        <div>
          {active && (
            <div className='interested-container'>
              <div className='options'>
                <div className='option-text'>Who Are We</div>
                <div className='option-text'>Expertise</div>
                <div className='option-text'>Projects</div>
                <div className='option-text'>Research & Insights</div>
              </div>
            </div>
          )}
        </div>
      </span> */}
      {/* <div
        style={{
          height: '240px',
          backgroundColor: 'black',
          color: 'whitesmoke',
        }}
      >
        hello
      </div> */}
    </div>
  );
};

export default Hero;
