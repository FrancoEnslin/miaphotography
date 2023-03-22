import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Photo from '../assets/Mia Photo.jpeg'

function AboutMe() {
    return (
        <div id='about'>
            <section className='banner' id='home'>
                <Container >
                    <Row className='align-items-center'>
                        <Col xs={12} md={6} xl={7}>
                            <span className='tagline'>Looking to capture your favourite moments?
                            You are at the right place</span>
                            <h1>{`Mia Schulenberg `}</h1>
                            <p>I'm Mia, a wedding and lifestyle photographer creating
                                and capturing beautiful moments that will give you a lifetime
                                of memories and reflection. </p>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            {/*  */}
                            <img id='AboutMePhoto' src={Photo} alt='Some cool photo' className='' />
                        </Col>
                    </Row>
                </Container>



            </section>
        </div>

    )
}

export default AboutMe
