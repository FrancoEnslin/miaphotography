// import Carousel from 'react-bootstrap/Carousel';

// //Images
// import Image1 from '../assets/C&J-174.jpg';
// import Image2 from '../assets/K&C-37.jpg';
// import Image3 from '../assets/Q&T-26.jpg';


// function MyCarousel() {
//   return (
//     <Carousel fade id='home' className='CCarousel'>
//       <Carousel.Item interval={2000}>
//         <img
//           className="d-block w-100"
//           src={Image1}
//           alt="First slide"
//           max-height="700px"
//         />

//       </Carousel.Item>
//       <Carousel.Item interval={2000}>
//         <img
//           className="d-block w-100"
//           src={Image2}
//           alt="Second slide"
//         />


//       </Carousel.Item>
//       <Carousel.Item interval={2000}>
//         <img
//           className="d-block w-100"
//           src={Image3}
//           alt="Third slide"
//         />


//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default MyCarousel;


import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const MenuWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const MenuItem = styled.li`
  margin-right: 20px;
  font-size: 18px;
`;

const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-image 0.5s ease-in-out;
  
  @media (max-width: 768px) {
    background-size: contain;
  }
`;

const Hero = ({ images, interval, menuItems }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(currentImage => (currentImage + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  return (
    <HeroWrapper style={{ backgroundImage: `url(${images[currentImage]})` }}>
      <NavbarWrapper>
        <h1>My Website</h1>
        <MenuWrapper>
          {menuItems.map((item, index) => (
            <MenuItem key={index}>{item}</MenuItem>
          ))}
        </MenuWrapper>
      </NavbarWrapper>
    </HeroWrapper>
  );
};

export default Hero;
