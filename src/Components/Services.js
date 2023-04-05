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

    const services = [
        "Couple shoot",
        "Family shoot",
        "Portrait shoot",
        "Friendship shoot",
        "Events",
        "Matric dances",
        "University formals",
        "Graduations",
        "Engagements",
    ];


    return (

        //              <div class="flip-card-inner">
        //                  <div class="flip-card-front">
        //                      <img src={Image1} style={{height: "10px", width:"20px"}}/>
        //                      <p class="title">FLIP CARD</p>
        //                      <p>Hover Me</p>
        //                  </div>
        //                  <div class="flip-card-back">
        //                      <p class="title">BACK</p>
        //                      <p>Leave Me</p>
        //                  </div>
        //              </div>

        <div className="App" id='services'>
            <h3>Services I Offer</h3>
            <Container>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                {/* Row 1 */}
                <Row id='row'>
                    <Col xs={4} md={4}>
                        <div class='flip-card'>
                            <Card className='Card' id='couples' >

                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <Card.Body> Couple shoot </Card.Body>
                                        <Card.Img variant="top" src={Image1} alt='Photo' />
                                    </div>
                                    <div class="flip-card-back">
                                        {/* <Card.Body> Couple shoot </Card.Body> */}
                                        <p>Option 1</p>
                                        <p>
                                            30 minute session
                                            70 edited photos
                                            R 650
                                        </p>
                                        <p>Option 2</p>
                                        <p>
                                            45 minute session
                                            120 edited photos
                                            R 750
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col xs={4} md={4}>
                        <div class='flip-card'>
                            <Card className='Card' id='family'>

                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <Card.Body> Family shoot </Card.Body>
                                        <Card.Img variant="top" src={Image2} alt='Photo' />
                                    </div>
                                    <div class="flip-card-back">
                                        <p>Option 1</p>
                                        <p>
                                            60 minute session
                                            150 edited photos
                                            4-6 people
                                            R 950
                                        </p>
                                        <p>Option 2</p>
                                        <p>
                                            90 minute session
                                            170 edited photos
                                            4-6 people
                                            R 1200
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>


                    </Col>
                    <Col xs={4} md={4}>
                        <div class='flip-card'>
                            <Card className='Card' id='portrait'>

                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <Card.Body> Portait shoot </Card.Body>
                                        <Card.Img variant="top" src={Image3} alt='Photo' />
                                    </div>
                                    <div class="flip-card-back">
                                        <p>Option 1</p>
                                        <p>
                                            30 minute session
                                            70 edited photos
                                            R 550
                                        </p>
                                        <p>Option 2</p>
                                        <p>
                                            45 minute session
                                            90 edited photos
                                            R 650
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>


                    </Col>
                </Row>
                {/* Row 2 */}
                <Row id='row' className='row2'>
                    <Col xs={4} md={4}>
                        <div class='flip-card'>
                            <Card className='Card' id='friendship'>

                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <Card.Body> Friendship shoot </Card.Body>
                                        <Card.Img variant="top" src={Image1} alt='Photo' />
                                    </div>
                                    <div class="flip-card-back">
                                        <p>Option 1</p>
                                        <p>
                                            30 minute session
                                            80 edited photos
                                            2-3 people
                                            R 650
                                        </p>
                                        <p>Option 2</p>
                                        <p>
                                            60 minute session
                                            120 edited photos
                                            4-6 people
                                            R 850
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>


                    </Col>
                    <Col xs={4} md={4}>
                        <div class='flip-card'>
                            <Card className='Card' id='events'>

                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <Card.Body> Events </Card.Body>
                                        <Card.Img variant="top" src={Image2} alt='Photo' />
                                    </div>
                                    <div class="flip-card-back">
                                        <p>Option 1</p>
                                        <p>
                                            For the first 60 minutes
                                            R850
                                            For every extra hour, you will be
                                            charged R250
                                            You will receive 70 edited photos
                                            for the first hour, then an
                                            additional 50 photos for every
                                            extra hour
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>


                    </Col>
                    <Col xs={4} md={4}>
                        <div class='flip-card'>
                            <Card className='Card' id='matric'>

                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <Card.Body> Matric Dances </Card.Body>
                                        <Card.Img variant="top" src={Image3} alt='Photo' />
                                    </div>
                                    <div class="flip-card-back">
                                        <p>Option 1</p>
                                        <p>
                                            90 minutes
                                            170 edited photos
                                            2 people (couple) & Family
                                            R1750
                                        </p>
                                        <p>Option 2</p>
                                        <p>
                                            60 minutes
                                            150 edited photos
                                            Portraits & Family
                                            R1350
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>


                    </Col>
                </Row>
                {/* Row 3 */}
                <Row id='row' className='row3'>
                    <Col xs={4} md={4}>
                        <div class='flip-card'>
                            <Card className='Card' id='formals'>

                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <Card.Body> University formals </Card.Body>
                                        <Card.Img variant="top" src={Image1} alt='Photo' />
                                    </div>
                                    <div class="flip-card-back">
                                        <p>Option 1</p>
                                        <p>
                                            60 minutes
                                            120 edited photos
                                            2-3 people
                                            R 650
                                        </p>
                                        <p>Option 2</p>
                                        <p>
                                            60 minutes
                                            120 edited photos
                                            4-6 people
                                            R 1125
                                        </p>
                                        <p>Option 3</p>
                                        <p>
                                            90 minutes
                                            150+ edited photos
                                            7+ people
                                            R 150 per person
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>


                    </Col>
                    <Col xs={4} md={4}>
                        <div class='flip-card'>
                            <Card className='Card' id='graduations'>

                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <Card.Body> Graduations </Card.Body>
                                        <Card.Img variant="top" src={Image2} alt='Photo' />
                                    </div>
                                    <div class="flip-card-back">
                                        <p>Option 1</p>
                                        <p>
                                            30 minutes
                                            80 edited photos
                                            2-3 people
                                            R 650
                                        </p>
                                        <p>Option 2</p>
                                        <p>
                                            60 minutes
                                            120 edited photos
                                            4-6 people
                                            R 1125
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>


                    </Col>
                    <Col xs={4} md={4}>
                        <div class='flip-card'>
                            <Card className='Card' id='engagements'>

                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <Card.Body> Engagements </Card.Body>
                                        <Card.Img variant="top" src={Image2} alt='Photo' />
                                    </div>
                                    <div class="flip-card-back">
                                        <p>Option 1</p>
                                        <p>
                                            30 minutes
                                            80 pictures
                                            R 750
                                        </p>
                                        <p>Option 2</p>
                                        <p>
                                            60 minutes
                                            120 pictures
                                            R 850
                                        </p>
                                        <p>Option 3</p>
                                        <p>
                                            90 minutes
                                            150 pictures
                                            *Add the family
                                            R 1200
                                        </p>

                                    </div>
                                </div>
                            </Card>
                        </div>


                    </Col>
                </Row>
            </Container>
        </div>

        /* <Row>
            <Col xs={4} md={4}>
                <Card className='Card' id='formals'>
                    <Card.Body> University formals </Card.Body>
                    <Card.Img variant="top" src={Image3} alt='Photo' />
                </Card>
            </Col>
            <Col xs={4} md={4}>
                <Card className='Card' id='graduations'>
                    <Card.Body> Graduations </Card.Body>
                    <Card.Img variant="top" src={Image3} alt='Photo' />
                </Card>
            </Col>
            <Col xs={4} md={4}>
                <Card className='Card' id='engagements'>
                    <Card.Body> Engagements </Card.Body>
                    <Card.Img variant="top" src={Image3} alt='Photo' />
                </Card>
            </Col>

        </Row> */


        // // Trying Something New
        // <div className="main-area">
        //     <div className="blog-post">
        //         <p className="date"></p>
        //         <p className="blog-content">
        //             Some sample text to demonstrate how these cards will work, including how they truncate long sentences.
        //         </p>
        //         <p className="read-more">Hover to read more...</p>

        //     </div>

        // </div>


        // <div class="flip-card"  >
        //     <Row>

        //             <div class="flip-card-inner" style={{ display: "inline", marginLeft: "30px" }}>
        //                 <div class="flip-card-front">
        //                     <img src={Image1} style={{height: "10px", width:"20px"}}/>
        //                     <p class="title">FLIP CARD</p>
        //                     <p>Hover Me</p>
        //                 </div>
        //                 <div class="flip-card-back">
        //                     <p class="title">BACK</p>
        //                     <p>Leave Me</p>
        //                 </div>
        //             </div>


        //         <div class="flip-card-inner" style={{ display: "inline", marginLeft: "30px" }}>
        //                 <div class="flip-card-front">
        //                     <p class="title">FLIP CARD</p>
        //                     <p>Hover Me</p>
        //                 </div>
        //                 <div class="flip-card-back">
        //                     <p class="title">BACK</p>
        //                     <p>Leave Me</p>
        //                 </div>
        //             </div>

        //         <div class="flip-card-inner" style={{ display: "inline", marginLeft: "30px" }}>
        //                 <div class="flip-card-front">
        //                     <p class="title">FLIP CARD</p>
        //                     <p>Hover Me</p>
        //                 </div>
        //                 <div class="flip-card-back">
        //                     <p class="title">BACK</p>
        //                     <p>Leave Me</p>
        //                 </div>
        //             </div>
        //     </Row>
        //     {/* Row 2 */}
        //     <Row>
        //         <Col xs={4} md={4}>
        //             <Card className='Card' id='friends' >
        //                 <Card.Body>Friendship shoot</Card.Body>
        //                 <Card.Img variant="top" src={Image1} alt='Photo' />
        //             </Card>
        //         </Col>
        //         <Col xs={4} md={4}>
        //             <Card className='Card' id='events'>
        //                 <Card.Body> Events </Card.Body>
        //                 <Card.Img variant="top" src={Image2} alt='Photo' />
        //             </Card>
        //         </Col>
        //         <Col xs={4} md={4}>
        //             <Card className='Card' id='matric'>
        //                 <Card.Body> Matric dances </Card.Body>
        //                 <Card.Img variant="top" src={Image3} alt='Photo' />
        //             </Card>
        //         </Col>
        //     </Row>
        //     <Row>
        //         <Col xs={4} md={4}>
        //             <Card className='Card' id='formals'>
        //                 <Card.Body> University formals </Card.Body>
        //                 <Card.Img variant="top" src={Image3} alt='Photo' />
        //             </Card>
        //         </Col>
        //         <Col xs={4} md={4}>
        //             <Card className='Card' id='graduations'>
        //                 <Card.Body> Graduations </Card.Body>
        //                 <Card.Img variant="top" src={Image3} alt='Photo' />
        //             </Card>
        //         </Col>
        //         <Col xs={4} md={4}>
        //             <Card className='Card' id='engagements'>
        //                 <Card.Body> Engagements </Card.Body>
        //                 <Card.Img variant="top" src={Image3} alt='Photo' />
        //             </Card>
        //         </Col>

        //     </Row>


        /* <div class="flip-card">
            <div class="flip-card-inner" style={{ display: "inline", marginLeft: "30px" }}>
                <div class="flip-card-front">
                    <p class="title">FLIP CARD</p>
                    <p>Hover Me</p>
                </div>
                <div class="flip-card-back">
                    <p class="title">BACK</p>
                    <p>Leave Me</p>
                </div>
            </div>
        </div> */
        // </div>
    )
}

export default Services
