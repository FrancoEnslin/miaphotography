import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Photo from '../assets/Mia Photo.jpeg'
import { useNavigate } from 'react-router';
import 'animate.css'

//Images
import Image1 from '../assets/C&J-174.jpg';
import Image2 from '../assets/K&C-37.jpg';
import Image3 from '../assets/Q&T-26.jpg';

function Services() {



    const navigate = useNavigate()

    const mql = window.matchMedia('(max-width: 600px)');
    let mobileView = mql.matches;
    const [seeMoreClicked, setSeeMoreClicked] = useState(false);

    function seeMore() {
        navigate('/projects')
        // setSeeMoreClicked(!seeMoreClicked);
        // console.log(seeMoreClicked)
        // const row2 = document.getElementById("SecondRow");
        // console.log("this is row 2: ", row2)
        // row2.style.visibility = "visible";
        // console.log("Dunno ", row2.visibility)
        // const button = document.getElementById("seeMoreBtn")
        // console.log(button)
        // button.style.visibility = "hidden"
    }

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
        <div id='Services' className='services'>
            {/* <h3>Services I offer</h3> */}
            <Container>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                {/* Row 1 */}
                <Row id='row' >
                    <Col xs={4} md={4} className='d-flex justify-content-center' >
                        <div class='flip-card'>
                            <Card className='Card' id='couples' >
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <Card.Body> Couple shoot </Card.Body>
                                        <Card.Img variant="top" src={Image1} alt='Photo' />
                                    </div>
                                    <div class="flip-card-back">
                                        <p> <b style={{ textDecoration: "bold" }}>Option 1</b></p>
                                        <p> 30 minute session </p>
                                        <p> 70 edited photos  </p>
                                        <p> R650  </p>
                                        <p> <b style={{ textDecoration: "bold" }}>Option 2</b></p>
                                        <p>See more...</p>
                                        {/* <p> 45 minute session </p>
                                           <p> 120 edited photos</p> 
                                          <p> R750</p> */}
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col xs={4} md={4} className='d-flex justify-content-center'>
                        <div class='flip-card'>
                            <Card className='Card' id='family'>
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <Card.Body> Family shoot </Card.Body>
                                        <Card.Img variant="top" src={Image2} alt='Photo' />
                                    </div>
                                    <div class="flip-card-back">
                                        <p> <b style={{ textDecoration: "bold" }}>Option 1</b></p>
                                        <p> 60 minute session </p>
                                        <p>150 edited photos, 4-6 people </p>

                                        <p> R950</p>
                                        <p> <b style={{ textDecoration: "bold" }}>Option 2</b></p>
                                        <p> See more...
                                            {/* 90 minute session </p>
                                            <p>   170 edited photos </p>
                                         
                                          <p>  4-6 people</p> 
                                       <p>     R1200 */}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col xs={4} md={4} className='d-flex justify-content-center' >
                        <div class='flip-card'>
                            <Card className='Card' id='portrait'>
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <Card.Body> Portait shoot </Card.Body>
                                        <Card.Img variant="top" src={Image3} alt='Photo' />
                                    </div>
                                    <div class="flip-card-back">
                                        <p> <b style={{ textDecoration: "bold" }}>Option 1</b></p>
                                        <p> 30 minute session </p>
                                        <p>  70 edited photos </p>
                                        <p>    R550
                                        </p>
                                        <p> <b style={{ textDecoration: "bold" }}>Option 2</b></p>
                                        <p> See more...
                                            {/* 45 minute session
                                            </p>
                                            <p> 90 edited photos </p>
                                           
                                       <p>     R650 */}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>

                {/* {
                    seeMoreClicked ?
                        <div>
                            <Row id='SecondRow' className='row2' style={mobileView ? { marginBottom: "10px" } : { marginBottom: "0px" }}>
                                <Col xs={4} md={4} className='d-flex justify-content-center'>
                                    <div class='flip-card'>
                                        <Card className='Card' id='friendship'>

                                            <div class="flip-card-inner" >
                                                <div class="flip-card-front">
                                                    <Card.Body> Friendship shoot </Card.Body>
                                                    <Card.Img variant="top" src={Image1} alt='Photo' />
                                                </div>
                                                <div class="flip-card-back">
                                                <p> <b style={{ textDecoration: "bold" }}>Option 1</b></p>
                                                    <p>
                                                        30 minute session
                                                        80 edited photos
                                                        2-3 people
                                                        R 650
                                                    </p>
                                                    <p> <b style={{ textDecoration: "bold" }}>Option 2</b></p>
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
                                <Col xs={4} md={4} className='d-flex justify-content-center' >
                                    <div class='flip-card'>
                                        <Card className='Card' id='events'>

                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <Card.Body> Events </Card.Body>
                                                    <Card.Img variant="top" src={Image2} alt='Photo' />
                                                </div>
                                                <div class="flip-card-back">
                                                <p> <b style={{ textDecoration: "bold" }}>Option 1</b></p>
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
                                <Col xs={4} md={4} className='d-flex justify-content-center' >
                                    <div class='flip-card'>
                                        <Card className='Card' id='matric'>

                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <Card.Body> Matric Dances </Card.Body>
                                                    <Card.Img variant="top" src={Image3} alt='Photo' />
                                                </div>
                                                <div class="flip-card-back">
                                                <p> <b style={{ textDecoration: "bold" }}>Option 1</b></p>
                                                    <p>
                                                        90 minutes
                                                        170 edited photos
                                                        2 people (couple) & Family
                                                        R1750
                                                    </p>
                                                    <p> <b style={{ textDecoration: "bold" }}>Option 2</b></p>
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

                            <Row id='row3' className='row3'>
                                <Col xs={4} md={4} className='d-flex justify-content-center' >
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
                                <Col xs={4} md={4} className='d-flex justify-content-center' >
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
                                <Col xs={4} md={4} className='d-flex justify-content-center' >
                                    <div class='flip-card'>
                                        <Card className='Card' id='engagements'>

                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                    <Card.Body> Engagements </Card.Body>
                                                    <Card.Img variant="top" src={Image2} alt='Photo' />
                                                </div>
                                                <div class="flip-card-back">
                                                    <p> <b style={{ textDecoration: "bold" }}>Option 1</b></p>
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

                        </div>
                        :
                        <></>
                } */}

                <button onClick={seeMore} id="seeMoreBtn" className='px-1' style={{ marginTop: "10px" }}>
                    {seeMoreClicked ? "See less..." : "See more..."}
                </button>

            </Container>
        </div>

    )
}

export default Services
