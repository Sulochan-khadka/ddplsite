import React from 'react';
import image1 from '../assets/img/awards/angular-icon-logo.png';
import image2 from '../assets/img/awards/Vue.png';
import image3 from '../assets/img/awards/numpy-logo-479C24EC79-seeklogo.com.png';
import image4 from '../assets/img/awards/node-js-icon-227x256-913nazt0.png';
import image5 from '../assets/img/awards/1611079.png';
import Slider from 'react-slick';
import './awards.css';

const Awards = () => {
  console.log('hello');
  const banners = [
    {
      id: 1,
      title: 'Angular',
      description: 'Mind Blowing projects with angular.',
      image: image1,
    },
    {
      id: 2,
      title: 'Vue',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: image2,
    },
    {
      id: 3,
      title: 'Numpy',
      description:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      image: image3,
    },
    {
      id: 4,
      title: 'NodeJs',
      description:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      image: image4,
    },
    {
      id: 5,
      title: 'React',
      description:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      image: image5,
    },
    {
      id: 11,
      title: 'Angular',
      description: 'Mind Blowing projects with angular.',
      image: image1,
    },
    {
      id: 12,
      title: 'Vue',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: image2,
    },
    {
      id: 13,
      title: 'Numpy',
      description:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      image: image3,
    },
    {
      id: 14,
      title: 'NodeJs',
      description:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      image: image4,
    },
    {
      id: 15,
      title: 'React',
      description:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      image: image5,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='banner-wrapper'>
      <div className='award-title'>Awards</div>
      <div className='awards-container'>
        <Slider {...settings}>
          {banners.map((banner) => (
            <div key={banner.id} className='focus'>
              <img src={banner.image} alt='' className='awards-image' />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Awards;
