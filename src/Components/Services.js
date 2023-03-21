import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Photo from '../assets/Mia Photo.jpeg'
import { useNavigate } from 'react-router';

//Images
import Image1 from '../assets/C&J-174.jpg';
import Image2 from '../assets/K&C-37.jpg';
import Image3 from '../assets/Q&T-26.jpg';

function Services() {

    // const navigate = useNavigate()

    return (
        <div style={{ marginTop: "30px", marginBottom: "30px"}} className="App">
            <h3>Services i Offer</h3>
            <Container>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                    <Col xs={4} md={4}>
                        <Card id='couples' >
                            <Card.Body>Couples</Card.Body>
                            <Card.Img variant="top" src={Image1} alt='Photo' />
                        </Card>
                    </Col>
                    <Col xs={4} md={4}>
                        <Card id='weddings'>
                            <Card.Body> Weddings </Card.Body>
                            <Card.Img variant="top" src={Image2} alt='Photo'  />
                        </Card>
                    </Col>
                    <Col xs={4} md={4}>
                        <Card id='family'>
                            <Card.Body> Family Shoots </Card.Body>
                            <Card.Img variant="top" src={Image3} alt='Photo' />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Services
