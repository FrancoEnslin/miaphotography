import React, { useCallback, useEffect, useState } from 'react'
import Image1 from '../assets/C&J-174.jpg'
import Image2 from '../assets/K&C-37.jpg'
import Image3 from '../assets/Q&T-26.jpg'

// Family
import Family1 from '../assets/Family/SFam-31.jpg'
import Family2 from '../assets/Family/SFam-209.jpg'
import Family3 from '../assets/Family/SFam-246.jpg'


//Portrait 
import Portrait from '../assets/Portraits/Minette-30.jpg'

// Event
import Event1 from '../assets/Events/Cara P 21 2-57.jpg'
import Event2 from '../assets/Events/Cara P 21 2-125.jpg'
import Event3 from '../assets/Events/Cara P 21 2-130.jpg'

// Graduation
import Graduation1 from '../assets/Graduation/IMG_0817.JPG'
import Graduation2 from '../assets/Graduation/IMG_0818.JPG'
import Graduation3 from '../assets/Graduation/IMG_0819.JPG'

//Couples
import Couple1 from '../assets/Couples/Q&T-83.jpg'
import Couple2 from '../assets/Couples/Q&T-71.jpg'
import Couple3 from '../assets/Couples/Q&T-90.jpg'
import Couple4 from '../assets/Couples/Q&T-151.jpg'

//Engagements
import Engagement1 from '../assets/Engagement/E&S-18.jpg'
import Engagement2 from '../assets/Engagement/E&S-73.jpg'
import Engagement3 from '../assets/Engagement/E&S-104.jpg'

//Formals
import Formal1 from '../assets/Formals/EFormal-88.jpg'
import Formal2 from '../assets/Formals/EFormal-96.jpg'
import Formal3 from '../assets/Formals/Kloekies-1.jpg'
import Formal4 from '../assets/Formals/Kloekies-34.jpg'
import Formal5 from '../assets/Formals/Madelief-228.jpg'

//Matric Dance
import MatricDance1 from '../assets/Matric Dance/A & M-142.jpg'
import MatricDance2 from '../assets/Matric Dance/A & M-149.jpg'
import MatricDance3 from '../assets/Matric Dance/A & M-160.jpg'



import { useHref, useNavigate } from 'react-router'
import '../App.css'
import styled from 'styled-components';
import Footer from '../Components/Footer';
import { MobileProjectCard } from '../Components/ProjectCard'
import { NormalProjectCard } from '../Components/ProjectCard'
import MyNavbar from '../Components/Navbar'


function Projects() {

    const navigate = useNavigate();
    const [agreed, setAgreed] = useState(false);
    const HandleBooking = useCallback((category) => {
        console.log('function: ', agreed)
        if (agreed) {
            sessionStorage.setItem("Active Category", category);
            window.location = '/#Contact';
        }
        else {
            alert('Please agree to the terms and conditions.');
            window.location.href = '#terms'
        }
    })



    function Back() {
        navigate('/')
    }

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.outerWidth <= 767);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // check initial size
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const Button = styled.button`
    font-weight: 500;
    color: #000;
    background-color: #fff;
    padding: 6px 20px;
    font-size: 18px;
    margin-top: 5px;
    margin-bottom: 10px;
    border-radius: 15px;
    position: relative;
    transition: 0.3s ease-in-out;
`;

    const ImageLeftStyle = {
        // transition: "all 1.2s ease-in-out",
        borderRadius: "20px",
        maxWidth: "120%", marginLeft: "-90px",
        boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.25)",
    }

    const ImageRightStyle = {
        borderRadius: "20px",
        maxWidth: "120%",
        marginRight: "-90px",
        boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.25)"
    }

    const ImageMobileStyle = {
        borderRadius: "20px",
        maxWidth: "100%",
    }

    const Terms = [
        "Deposit of 50% must be paid 1 week before the shoot to confirm you booking",
        "Extra fees will be charged for locations further than 10km from Prinshof, Pretoria.",
        "If the location charges a fee for entrance, clients have to pay for it.",
        "If you are late for your shoot, we will still shoot the remainder of the time, but you will have to pay for the full session.",
        "A Booked session can't be split into two seperate sessions. You will be charged for two seperate sessions if you split them.",
        "Photos will be received via an online gallery and pictures will only be available for 14 days before the link will expire.",
        "You will receive edited images only, no RAW images will be given.",
        "Photos will be delivered 2-4 weeks after the photoshoot",
        "I spend hours perfecting your photos so please do not edit over my photos, otherwise you will be asked to remove them.",
        "@miaschulenburgphotography and www.miaschulenburgphotography.netlify.app has copyright over all images and has the right to use them for social media and promotion.",
        "You will be charged R350 for every half an hour you go over your shoot time",
        "I am not available to do shoots on Sundays."
    ]

    return (
        <div>
            <MyNavbar />
            <div className='container p-3'>
                <h2>Services and Packages I Offer</h2>
                {
                    isMobile ?
                        /////////////////// MOBILE ///////////////
                        <>
                            <h4 className='m-3'>Couple Shoots</h4>
                            <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                                <div className="row">
                                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                                        <img
                                            src={Couple2}
                                            alt='Current Image'
                                            style={ImageMobileStyle}
                                        />
                                    </div>
                                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                                        <div>
                                            <p className='h5 p-2' >Option 1</p>
                                            <p> 30 minute session </p>
                                            <p> 70 edited photos  </p>
                                            <p> R650 </p>
                                            <p className='h5'>Option 2</p>
                                            <p> 45 minute session </p>
                                            <p> 120 edited photos </p>
                                            <p> R750 </p>

                                            <Button onClick={() => HandleBooking("Couple")}>Book my Session</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h4 className='m-3'>Family Shoots</h4>
                            <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                                <div className="row">
                                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                                        <img src={Family2} alt='First Image' style={ImageMobileStyle} />
                                    </div>
                                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                                        <div>
                                            <p className='h5 p-2'>Option 1</p>
                                            <p> 60 minute session </p>
                                            <p>150 edited photos, 4-6 people </p>
                                            <p> R950</p>
                                            <p className='h5'>Option 2</p>
                                            <p> 90 minute session </p>
                                            <p> 170 edited photos </p>
                                            <p> 4-6 people</p>
                                            <p> R1200  </p>
                                            <Button onClick={() => HandleBooking("Family")}>Book my Session</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h4 className='m-3'>Portrait Shoots</h4>
                            <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                                <div className="row">
                                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                                        <img src={Portrait} alt='First Image' style={ImageMobileStyle} />
                                    </div>
                                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                                        <div>
                                            <p className='h5 p-2'>Option 1</p>
                                            <p> 30 minute session </p>
                                            <p>  70 edited photos </p>
                                            <p>    R550
                                            </p>
                                            <p className='h5'>Option 2</p>
                                            <p> 45 minute session </p>
                                            <p> 90 edited photos </p>
                                            <p>  R650 </p>
                                            <Button onClick={() => HandleBooking("Portrait")}>Book my Session</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <br />

                            <h4>Friendship Shoots</h4>
                            <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                                <div className="row">
                                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                                        <img src={Event1} alt='First Image' style={ImageMobileStyle} />
                                    </div>
                                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                                        <div >
                                            <p className='h5 p-2'>Option 1</p>
                                            <p> 30 minute session</p>
                                            <p>  80 edited photos </p>
                                            <p>  2-3 people</p>
                                            <p> R650</p>
                                            <p className='h5'>Option 2</p>
                                            <p> 60 minute session </p>
                                            <p> 120 edited photos</p>
                                            <p> 4-6 people</p>
                                            <p> R850  </p>
                                            <Button onClick={() => HandleBooking("Friendship")}>Book my Session</Button>
                                        </div>
                                    </div>

                                </div>


                            </div>

                            <br />

                            <h4>Events</h4>
                            <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                                <div className="row">
                                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                                        <img src={Event3} alt='First Image' style={ImageMobileStyle} />
                                    </div>
                                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                                        <div >
                                            <p>For the first 60 minutes</p>
                                            <p> R850 </p>
                                            <p> For every extra hour, you will be charged R400</p>
                                            <p> You will receive 70 edited photos</p>
                                            <p> additional 50 photos for every extra hour </p>
                                            <p> 120 edited photos</p>
                                            <p> 4-6 people</p>
                                            <p> R850  </p>
                                            <Button onClick={() => HandleBooking("Events")}>Book my Session</Button>
                                        </div>
                                    </div>

                                </div>


                            </div>

                            <br />
                            <h4>Matric dance </h4>
                            <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                                <div className="row">
                                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                                        <img src={MatricDance1} alt='First Image' style={ImageMobileStyle} />
                                    </div>
                                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                                        <div >
                                            <p className='h5 p-2'>Option 1</p>
                                            <p>  90 minutes</p>
                                            <p>  170 edited photos </p>
                                            <p>    2 people (couple) & Family</p>
                                            <p>   R1750</p>
                                            <p className='h5'>Option 2</p>
                                            <p>  60 minutes </p>
                                            <p>   150 edited photos</p>
                                            <p>  Portraits & Family</p>
                                            <p>    R1350  </p>
                                            <Button onClick={() => HandleBooking("Matric")}>Book my Session</Button>
                                        </div>
                                    </div>

                                </div>


                            </div>

                            <br />
                            <h4>University Formals </h4>
                            <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                                <div className="row">
                                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                                        <img src={Formal5} alt='First Image' style={ImageMobileStyle} />
                                    </div>
                                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                                        <div >
                                            <p className='h5 p-2'>Option 1</p>
                                            <p>  60 minutes</p>
                                            <p>   120 edited photos </p>
                                            <p>     2-3 people</p>
                                            <p>    R 650</p>
                                            <p className='h5'>Option 2</p>
                                            <p>  60 minutes </p>
                                            <p>   120 edited photos</p>
                                            <p>   4-6 people</p>
                                            <p>   R 1125  </p>
                                            <p className='h5'>Option 2</p>
                                            <p>     90 minutes </p>
                                            <p>  150+ edited photos</p>
                                            <p>   7+ people</p>
                                            <p>     R 150 per person  </p>
                                            <Button onClick={() => HandleBooking("Formals")}>Book my Session</Button>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <br />
                            <h4>Graduations </h4>
                            <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                                <div className="row">
                                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                                        <img src={Graduation1} alt='First Image' style={ImageMobileStyle} />
                                    </div>
                                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                                        <div >
                                            <p className='h5 p-2'>Option 1</p>
                                            <p>    30 minutes</p>
                                            <p>    80 edited photos </p>
                                            <p>      2-3 people</p>
                                            <p>    R 650</p>
                                            <p className='h5'>Option 2</p>
                                            <p>  60 minutes </p>
                                            <p>   120 edited photos</p>
                                            <p>   4-6 people</p>
                                            <p>   R 1125  </p>
                                            <Button onClick={() => { HandleBooking("Graduation") }}>Book my Session</Button>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <br />
                            <h4>Engagements </h4>
                            <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                                <div className="row">
                                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                                        <img src={Engagement3} alt='First Image' style={ImageMobileStyle} />
                                    </div>
                                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                                        <div >
                                            <p className='h5 p-2'>Option 1</p>
                                            <p>    30 minutes</p>
                                            <p>    80 pictures </p>

                                            <p>    R 750</p>
                                            <p className='h5'>Option 2</p>
                                            <p>  60 minutes </p>
                                            <p>   120 pictures</p>
                                            <p>   4-6 people</p>
                                            <p>    R 850  </p>
                                            <p className='h5'>Option 3</p>
                                            <p>   90 minutes</p>
                                            <p>   150 pictures</p>
                                            <p>    *Add the family</p>
                                            <p>    R1200  </p>
                                            <Button onClick={() => { HandleBooking("Engagement") }}>Book my Session</Button>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <br />
                            <h4>Terms and Conditions</h4>
                            <div className='d-flex  p-2' style={{ border: "1px solid", borderRadius: "10px" }}>
                                <div className="column">
                                    <div className="col-md-12  ">

                                        <ol>
                                            {
                                                Terms.map((term) => {
                                                    return (
                                                        <li>{term}</li>
                                                    )

                                                })
                                            }

                                        </ol>
                                    </div>
                                </div>
                            </div>

                        </>
                        :
                        //////////// NORMAL DESKTOP /////////////
                        <>
                            <h4>Couple Shoots</h4>
                            <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                                <div className="row">
                                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                                        {/* <img src={Image1} alt='First Image' style={{ borderRadius: "20px", maxWidth: "100%", marginLeft: "-110px", boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.25)" }} /> */}
                                        <img
                                            src={Couple3}
                                            alt='Current Image'
                                            style={ImageLeftStyle}
                                        />
                                    </div>
                                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                                        <div style={{ marginLeft: "-50px", }}>
                                            <p className='h5'>Option 1</p>
                                            <p> 30 minute session </p>
                                            <p> 70 edited photos  </p>
                                            <p> R650  </p>
                                            <p className='h5'>Option 2</p>
                                            <p>  45 minute session </p>
                                            <p> 90 edited photos </p>
                                            <p> R650 </p>
                                            <Button onClick={() => HandleBooking("Couple")}>Book my Session</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <br />
                            <h4>Family Shoots</h4>
                            <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                                <div className="row">

                                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                                        <div style={{ marginRight: "-50px", }}>                                        <p className='h5 p-2'>Option 1</p>
                                            <p> 60 minute session </p>
                                            <p> 150 edited photos </p>
                                            <p> 4-6 people</p>
                                            <p> R950</p>
                                            <p className='h5'>Option 2</p>
                                            <p> 90 minute session </p>
                                            <p> 170 edited photos </p>
                                            <p> 4-6 people</p>
                                            <p> R1200  </p>
                                            <Button onClick={() => { HandleBooking("Family") }}>Book my Session</Button>
                                        </div>
                                    </div>
                                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                                        <img src={Family2} alt='First Image' style={ImageRightStyle} />
                                    </div>
                                </div>
                            </div>

                            <br />

                            <h4>Portrait Shoots</h4>
                            <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                                <div className="row">
                                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                                        {/* <img src={Image1} alt='First Image' style={{ borderRadius: "20px", maxWidth: "100%", marginLeft: "-110px", boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.25)" }} /> */}
                                        <img
                                            src={Portrait}
                                            alt='Current Image'
                                            style={ImageLeftStyle}
                                        />
                                    </div>
                                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                                        <div style={{ marginLeft: "-50px", }}>
                                            <p className='h5'>Option 1</p>
                                            <p> 30 minute session </p>
                                            <p>  70 edited photos </p>
                                            <p>    R550   </p>
                                            <p className='h5'>Option 2</p>
                                            <p>  45 minute session </p>
                                            <p> 90 edited photos </p>
                                            <p> R650 </p>
                                            <Button onClick={() => HandleBooking("Portrait")}>Book my Session</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <br />

                            <h4>Friendship Shoots</h4>
                            <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                                <div className="row">
                                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                                        <div style={{ marginRight: "-50px", }}>                                        <p className='h5 p-2'>Option 1</p>
                                            <p> 30 minute session</p>
                                            <p>  80 edited photos </p>
                                            <p>  2-3 people</p>
                                            <p> R650</p>
                                            <p className='h5'>Option 2</p>
                                            <p> 60 minute session </p>
                                            <p> 120 edited photos</p>
                                            <p> 4-6 people</p>
                                            <p> R850  </p>
                                            <Button onClick={() => { HandleBooking("Friendship") }}>Book my Session</Button>
                                        </div>
                                    </div>
                                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                                        <img src={Couple4} alt='First Image' style={ImageRightStyle} />
                                    </div>
                                </div>
                            </div>

                            <br />

                            <h4>Events</h4>
                            <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                                <div className="row">
                                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                                        {/* <img src={Image1} alt='First Image' style={{ borderRadius: "20px", maxWidth: "100%", marginLeft: "-110px", boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.25)" }} /> */}
                                        <img
                                            src={Event2}
                                            alt='Current Image'
                                            style={ImageLeftStyle}
                                        />
                                    </div>
                                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                                        <div style={{ marginLeft: "-50px", }}>
                                            <p>For the first 60 minutes</p>
                                            <p> R850 </p>
                                            <p> Every extra hour is R400</p>
                                            <p> You will receive 70 edited photos.</p>
                                            <p> 50 photos for every extra hour </p>
                                            <p> 120 edited photos</p>
                                            <p> 4-6 people</p>
                                            <p> R850  </p>
                                            <Button onClick={() => HandleBooking("Events")}>Book my Session</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <br />

                            <h4>Matric Dances</h4>
                            <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                                <div className="row">
                                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                                        <div style={{ marginRight: "-50px", }}>
                                            <p className='h5 p-2'>Option 1</p>
                                            <p>  90 minutes</p>
                                            <p>  170 edited photos </p>
                                            <p>    2 people (couple) & Family</p>
                                            <p>   R1750</p>
                                            <p className='h5'>Option 2</p>
                                            <p>  60 minutes </p>
                                            <p>   150 edited photos</p>
                                            <p>  Portraits & Family</p>
                                            <p>    R1350  </p>
                                            <Button onClick={() => { HandleBooking("Matric") }}>Book my Session</Button>
                                        </div>
                                    </div>
                                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                                        <img src={MatricDance2} alt='First Image' style={ImageRightStyle} />
                                    </div>
                                </div>
                            </div>

                            <br />

                            <h4>University Formals</h4>
                            <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                                <div className="row">
                                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                                        {/* <img src={Image1} alt='First Image' style={{ borderRadius: "20px", maxWidth: "100%", marginLeft: "-110px", boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.25)" }} /> */}
                                        <img
                                            src={Formal4}
                                            alt='Current Image'
                                            style={ImageLeftStyle}
                                        />
                                    </div>
                                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                                        <div style={{ marginLeft: "-50px", }}>
                                            <p className='h5 p-2'>Option 1</p>
                                            <p>  60 minutes</p>
                                            <p>   120 edited photos </p>
                                            <p>     2-3 people</p>
                                            <p>    R 650</p>
                                            <p className='h5'>Option 2</p>
                                            <p>  60 minutes </p>
                                            <p>   120 edited photos</p>
                                            <p>   4-6 people</p>
                                            <p>   R 1125  </p>
                                            <p className='h5'>Option 2</p>
                                            <p>     90 minutes </p>
                                            <p>  150+ edited photos</p>
                                            <p>   7+ people</p>
                                            <p>     R 150 per person  </p>
                                            <Button onClick={() => HandleBooking("Formals")}>Book my Session</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <br />

                            <h4>Graduations</h4>
                            <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                                <div className="row">
                                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                                        <div style={{ marginRight: "-50px", }}>
                                            <p className='h5 p-2'>Option 1</p>
                                            <p>    30 minutes</p>
                                            <p>    80 edited photos </p>
                                            <p>      2-3 people</p>
                                            <p>    R 650</p>
                                            <p className='h5'>Option 2</p>
                                            <p>  60 minutes </p>
                                            <p>   120 edited photos</p>
                                            <p>   4-6 people</p>
                                            <p>   R 1125  </p>
                                            <Button onClick={() => { HandleBooking("Graduation") }}>Book my Session</Button>
                                        </div>
                                    </div>
                                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                                        <img src={Graduation1} alt='First Image' style={ImageRightStyle} />
                                    </div>
                                </div>
                            </div>
                            <br />

                            <h4>Engagements</h4>
                            <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                                <div className="row">
                                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                                        <img src={Engagement2} alt='First Image' style={ImageLeftStyle} />
                                    </div>
                                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                                        <div style={{ marginLeft: "-50px", }}>
                                            <p className='h5 p-2'>Option 1</p>
                                            <p>    30 minutes</p>
                                            <p>    80 pictures </p>

                                            <p>    R 750</p>
                                            <p className='h5'>Option 2</p>
                                            <p>  60 minutes </p>
                                            <p>   120 pictures</p>
                                            <p>   4-6 people</p>
                                            <p>    R 850  </p>
                                            <p className='h5'>Option 3</p>
                                            <p>   90 minutes</p>
                                            <p>   150 pictures</p>
                                            <p>    *Add the family</p>
                                            <p>    R1200  </p>
                                            <Button onClick={() => { HandleBooking("Engagements") }}>Book my Session</Button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <br />
                            <h4>Terms and Conditions</h4>
                            <div className='d-flex p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                                <div className="column">
                                    <div className="col-md-12">
                                        <ol>
                                            {
                                                Terms.map((term) => {
                                                    return (
                                                        <li>{term}</li>
                                                    )

                                                })
                                            }
                                        </ol>
                                    </div>
                                </div>
                            </div>

                        </>
                }

            </div>
            <div class="form-check" className='App' id='terms'>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={() => { setAgreed(true); console.log(agreed) }} />
                <label class="form-check-label" for="flexCheckDefault" >
                    I Agree to the terms and conditions
                </label>
            </div>


            <Button onClick={Back} className='px-1'>
                Go Back
            </Button>
            <Footer />
        </div >
    )



}

export default Projects
