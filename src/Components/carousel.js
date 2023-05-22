import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border-bottom: 1px solid black;
  padding: 15px;
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
  flex-direction: row;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    z-index: 10;
    display: none;

    &.show {
      display: block;
      background-color: transparent;
      transition: 0.9s ease-in-out;
    }
  }
`;

const MenuItem = styled.li`
  margin-right: 20px;
  font-size: 18px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-right: 20px;
    margin-bottom: 10px;
  }
`;

const BurgerWrapper = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: block;
    cursor: pointer;
  }
`;

const BurgerIcon = styled.div`
  width: 24px;
  height: 3px;
  background-color: #333;
  margin: 4px;
  transition: all 0.3s linear;

  &.open {
    transform: rotate(45deg);
    background-color: #fff;
  }

  &.middle {
    opacity: 0;

    &.open {
      opacity: 1;
      transform: translateX(20px);
    }
  }

  &.bottom {
    transform-origin: center;
    transform: rotate(0);

    &.open {
      transform: rotate(-45deg);
      background-color: #fff;
    }
  }
`;

const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-image 0.5s ease-in-out;
  
  @media (max-width: 1024px) {
    height: 80vh;
  }

  @media screen and (min-width: 480px) and (max-width:768px){
    height: 60vh;
    background-size: contain;
    background-position: center top;
  }

  @media (max-width: 480px) {
    background-position: center bottom;
    height: 45vh;
  }
`;

const Hero = ({ images, interval, menuItems }) => {
  const [currentImage, setCurrentImage] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(currentImage => (currentImage + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  return (
    <HeroWrapper style={{ backgroundImage: `url(${images[currentImage]})` }}>
      <NavbarWrapper>
        <h3 style={{ color: "white" }}>Mia Schulenburg</h3>

        <BurgerWrapper onClick={() => setMenuOpen(!menuOpen)}>
          <BurgerIcon className={`${menuOpen ? "open" : ""} top`} />
          <BurgerIcon className={`${menuOpen ? "open middle" : ""}`} />
          <BurgerIcon className={`${menuOpen ? "open" : ""} bottom`} />
        </BurgerWrapper>

        <MenuWrapper className={menuOpen ? "show" : ""}>
          {menuItems.map((item, index) => (
            <MenuItem key={index}
              onClick={() => {
                window.location.href = `#${item}`;
                setMenuOpen(false);
              }}
              style={{ color: "white" }}
            >
              {item}
            </MenuItem>
          ))}
        </MenuWrapper>


        {/* <MenuWrapper>
          {menuItems.map((item, index) => (
            <MenuItem key={index}
              onClick={() => {
                window.location.href = `#${item}`;
                setMenuOpen(false);
              }}

              style={{ color: "white" }}
            >
              {item}
            </MenuItem>
          ))}
        </MenuWrapper> */}
      </NavbarWrapper>
    </HeroWrapper>
  );
};

export default Hero;
