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
                <Row>
                    <Col xs={4} md={4}>
                        <div class='flip-card'>
                            <Card className='Card' id='couples'>

                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <Card.Body> Couple shoot </Card.Body>
                                        <Card.Img variant="top" src={Image1} alt='Photo' />
                                    </div>
                                    <div class="flip-card-back">
                                        <Card.Body> Couple shoot </Card.Body>
                                        <p>YO YO YO </p>
                                    </div>
                                </div>
                            </Card>
                        </div>


                    </Col>
                    <Col xs={4} md={4}>
                        <Card className='Card' id='family'>
                            <Card.Body> Family shoot </Card.Body>
                            <Card.Img variant="top" src={Image2} alt='Photo' />
                        </Card>
                    </Col>
                    <Col xs={4} md={4}>
                        <Card className='Card' id='portrait'>
                            <Card.Body>Portrait shoot </Card.Body>
                            <Card.Img variant="top" src={Image3} alt='Photo' />
                        </Card>
                    </Col>
                </Row>
                {/* Row 2 */}
                <Row>
                    <Col xs={4} md={4}>
                        <Card className='Card' id='friends' >
                            <Card.Body>Friendship shoot</Card.Body>
                            <Card.Img variant="top" src={Image1} alt='Photo' />
                        </Card>
                    </Col>
                    <Col xs={4} md={4}>
                        <Card className='Card' id='events'>
                            <Card.Body> Events </Card.Body>
                            <Card.Img variant="top" src={Image2} alt='Photo' />
                        </Card>
                    </Col>
                    <Col xs={4} md={4}>
                        <Card className='Card' id='matric'>
                            <Card.Body> Matric dances </Card.Body>
                            <Card.Img variant="top" src={Image3} alt='Photo' />
                        </Card>
                    </Col>
                </Row>
                <Row>
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

                </Row>
            </Container>
        </div>



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
