import React from 'react'
import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/nav-item2.svg";
import navIcon3 from "../assets/nav-icon3.svg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';




export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            {/* <img src={newLogo} alt="Logo" className="gifLogo" /> */}
            <p >Copyright 2023. Mia Schulenburg Photography. All Rights Reserved</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              {/* <a href="#"><img src={navIcon1} alt="Icon" /></a> */}
              <a href="https://www.facebook.com/profile.php?id=100064307011848"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/miaschulenburg.photography?igshid=ZWQyN2ExYTkwZQ=="><img src={navIcon3} alt="Icon" /></a>
            </div>
         
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;
