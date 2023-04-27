import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Photo from '../assets/Image_I_Want-removebg-preview.png'

function Styling() {

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
                            {/*  */}
                            <img id='AboutMePhoto' src={Photo} alt='Some cool photo' className='' />
                        </Col>
                        <Col xs={12} md={6} lg={6} xl={6}>
                            <span className='tagline'>
                                Not Sure what to wear? Don't stress...
                            </span>
                            <h2>Outfit Tips</h2>
                            {
                                isMobile ?
                                    <>
                                        <p>Golden rule of choosing an outfit: make sure you wear
                                            something that you feel <b style={{textDecoration:"bold"}}>comfortable and beautiful</b> in.
                                            Preferably wear something neutral and natural.
                                        </p>
                                        <p>
                                            Try to match with your partner/ friend by using for
                                            example 3 colours and mixing them up.
                                            Avoid clothing with graphic prints on them.
                                        </p>
                                    </>
                                    :
                                    <>
                                        <p>Golden rule of choosing an outfit: make sure you wear
                                            something that you <b style={{textDecoration:"bold"}}>comfortable and beautiful</b> in.
                                            Preferably wear something neutral and natural.
                                        </p>
                                        <p>
                                            Try to match with your partner/ friend by using for
                                            example 3 colours and mixing them up.
                                            Avoid clothing with graphic prints on them.
                                        </p>
                                    </>

                            }

                        </Col>

                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Styling
