import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Photo from '../assets/Mia Photo.jpeg'


function AboutMe() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.outerWidth <= 767);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // check initial size
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id='About'>
            <section className='banner' id='home'>
                <Container >
                    <Row className='align-items-center'>
                        <Col xs={12} md={6} lg={6} xl={6}>
                            <span className='tagline'>Looking to capture your favourite moments?
                                You are at the right place</span>
                            <h2 >{`Mia Schulenberg `}</h2>

                            {
                                isMobile ?
                                    <>
                                        <h3>Photographer</h3>
                                        <p>
                                            I've been a professional photographer since 2021. I've captured hundreds of smiles,
                                            love and fun and I enjoyed every single moment.
                                        </p>
                                        <h3>Stylist</h3>
                                        <p>
                                            Don't know what to wear?
                                            No Problem! I love to help my clients choose their perfect outfit.
                                        </p>
                                        <h3>Personal hype woman</h3>
                                        <p>
                                            No need to be shy in front of the camera! I will be there every step of the way - helping you
                                            enjoy the process and capturing the beautiful moments therof. 
                                        </p>
                                    </>
                                    :
                                    <>
                                        <h3>Photographer</h3>
                                        <p>
                                            I've been a professional photographer since 2021. I've captured hundreds of smiles,
                                            love and fun and I enjoyed every single moment.
                                            I fell in love with photography when I was just a little girl, in awe of this glorious world
                                            and all that it has to offer. I never thought I would be living the dream!
                                            I can't wait to share this journey with every single one of you.
                                        </p>
                                        <h3>Stylist</h3>
                                        <p>
                                            Don't know what to wear?
                                            No Problem! I got you covered ;) I love to help my clients choose their perfect outfit
                                            so that they feel comfortable and prettyyyy.
                                        </p>
                                        <h3>Personal hype woman</h3>
                                        <p>
                                            No need to be shy in front of the camera! I will be there every step of the way- telling
                                            you how to pose, make a few jokes and capturing some candid moments (hehe I'm
                                            sneaky like that
                                        </p>
                                    </>

                            }



                        </Col>
                        <Col xs={12} md={6} lg={6} xl={6}>
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
