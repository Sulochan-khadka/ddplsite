import React from 'react';
import './projects.css';
import image1 from '../assets/img/projects/61YCKpWtaiL._AC_UF894,1000_QL80_.jpg';
import image2 from '../assets/img/projects/Patch-Notes-for-the-Valheim-0.217.14-Update.jpeg';
import image3 from '../assets/img/projects/capsule_616x353.jpg';
import image4 from '../assets/img/projects/default.jpg.webp';
import image5 from '../assets/img/projects/medium-vposter1123302-minecraft-poster-wallpaper-liveposter-original-imagka7n9aw9mmsb.jpeg.webp';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
// import HorizontalScroll from 'react-scroll-horizontal';
const Projects = () => {
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
    {
      id: 24,
      title: 'NodeJs',
      description:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      image: image4,
    },
    {
      id: 25,
      title: 'React',
      description:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      image: image5,
    },
  ];
  return (
    <ParallaxProvider>
      <div className='project-container'>
        <div className='project-title'>Projects</div>
        <Parallax translateX={['-150px', '150px']}>
          <div className='project-horizontal'>
            {/* <HorizontalScroll> */}
            {banners.map((item, index) => {
              return (
                <div key={index} className='image-div'>
                  <img
                    src={item.image}
                    alt='image_of_projects'
                    className='image-project'
                  />
                </div>
              );
            })}
            {/* </HorizontalScroll> */}
          </div>
        </Parallax>
        <Parallax translateX={['100px', '-100px']}>
          <div className='project-horizontal'>
            {/* <HorizontalScroll> */}
            {banners.map((item, index) => {
              return (
                <div key={index} className='image-div'>
                  <img
                    src={item.image}
                    alt='image_of_projects'
                    className='image-project'
                  />
                </div>
              );
            })}
            {/* </HorizontalScroll> */}
          </div>
        </Parallax>
        <div className='improve'>
          <div className='projects-button-container'>
            <div className='projects-button'>View all projects</div>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default Projects;
