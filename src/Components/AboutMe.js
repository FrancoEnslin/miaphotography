import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Photo from '../assets/Mia Photo.jpeg'

function AboutMe() {
    return (
        <div style={{ marginTop: "20px" }} id="about">
            <Container>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                    <Col xs={6} md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body> I'm Mia, a wedding and lifestyle photographer creating
                                and capturing beautiful moments that will give you a lifetime
                                of memories and reflection.
                            </Card.Body>
                            <Card.Img variant="top" src={Photo} alt='Photo' />
                            <Card.Body>
                                <Card.Title>Hi, i'm Mia</Card.Title>
                                <Card.Text>
                                    The Photographer to catch your best experiences
                                </Card.Text>
                                <Button variant="primary">Contact Me!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutMe
