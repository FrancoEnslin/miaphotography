import React, { useEffect, useState } from 'react'
import Image1 from '../assets/C&J-174.jpg'
import { useNavigate } from 'react-router'
import '../App.css'
import styled from 'styled-components';
import Footer from '../Components/Footer';

function Projects() {

    const navigate = useNavigate();

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

    const Terms = [
        "Deposit of 50% must be paid 1 week before the shoot to confirm you booking",
        "Extra fees will be charged for locations further than 10km from Prinshof, Pretoria.",
        "If the location charges a fee for entrance, clients have to pay for it.",
        "If you are late for your shoot, we will still shoot the remainder of the time, but you will have to pay for the full session.",
        "Photos will be received via an online gallery and pictures will only be available for 14 days before the link will expire.",
        "You will receive edited images only, no RAW images will be given.",
        "Photos will be delivered 2-4 weeks after the photoshoot",
        "I spend hours perfecting your photos so please do not edit over my photos, otherwise you will be asked to remove them.",
        "@miaschulenburgphotography and www.miashulenbergphotohrapy.co.za has copyright over all images and has the right to use them for social media and promotion.",
        "If I have to shoot over time, you will be charged R150 extra for each 30 minutes extra.",
    ]

    return (
        <div>
            <div className='container p-3'>
                <h2>Services and Packages I Offer</h2>
                {
                    isMobile ?
                        <>
                            <h4 className='m-3'>Couple Shoots</h4>
                            <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                                <div className="row">
                                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                                        <img src={Image1} alt='First Image' style={{ borderRadius: "20px", maxWidth: "100%" }} />
                                    </div>
                                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                                        <div>
                                            <p className='h5 p-2'>Option 1</p>
                                            <p>
                                                30 minute session
                                                70 edited photos
                                                R 650
                                            </p>
                                            <p className='h5'>Option 2</p>
                                            <p>
                                                45 minute session
                                                120 edited photos
                                                R 750
                                            </p>
                                            <Button onClick={() => window.location.href = "/#Contact"}>Book my Session</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h4 className='m-3'>Couple Shoots</h4>
                            <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                                <div className="row">
                                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                                        <img src={Image1} alt='First Image' style={{ borderRadius: "20px", maxWidth: "100%" }} />
                                    </div>
                                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                                        <div>
                                            <p className='h5 p-2'>Option 1</p>
                                            <p>
                                                30 minute session
                                                70 edited photos
                                                R 650
                                            </p>
                                            <p className='h5'>Option 2</p>
                                            <p>
                                                45 minute session
                                                120 edited photos
                                                R 750
                                            </p>
                                            <Button onClick={() => window.location.href = "/#Contact"}>Book my Session</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h4 className='m-3'>Couple Shoots</h4>
                            <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                                <div className="row">
                                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                                        <img src={Image1} alt='First Image' style={{ borderRadius: "20px", maxWidth: "100%" }} />
                                    </div>
                                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                                        <div>
                                            <p className='h5 p-2'>Option 1</p>
                                            <p>
                                                30 minute session
                                                70 edited photos
                                                R 650
                                            </p>
                                            <p className='h5'>Option 2</p>
                                            <p>
                                                45 minute session
                                                120 edited photos
                                                R 750
                                            </p>
                                            <Button onClick={() => window.location.href = "/#Contact"}>Book my Session</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <h4>Terms and Conditions</h4>
                            <div className='d-flex  p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
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
                        <>
                            <h4>Couple Shoots</h4>
                            <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                                <div className="row">
                                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                                        <img src={Image1} alt='First Image' style={{ borderRadius: "20px", maxWidth: "100%", marginLeft: "-110px", boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.25)" }} />
                                    </div>
                                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                                        <div style={{ marginLeft: "-50px", }}>
                                            <p className='h5'>Option 1</p>
                                            <p>
                                                30 minute session
                                                70 edited photos
                                                R 650
                                            </p>
                                            <p className='h5'>Option 2</p>
                                            <p>
                                                45 minute session
                                                120 edited photos
                                                R 750
                                            </p>
                                            <Button onClick={() => window.location.href = "/#Contact"}>Book my Session</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* TRYING THE OPPOSITE: */}
                            <br />
                            <h4>Couple Shoots AGAIN</h4>
                            <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                                <div className="row">

                                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                                        <div style={{ marginRight: "-50px", }}>
                                            <p className='h5'>Option 1</p>
                                            <p>
                                                30 minute session
                                                70 edited photos
                                                R 650
                                            </p>
                                            <p className='h5'>Option 2</p>
                                            <p>
                                                45 minute session
                                                120 edited photos
                                                R 750
                                            </p>
                                            <Button onClick={() => window.location.href = "/#Contact"}>Book my Session</Button>
                                        </div>
                                    </div>
                                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                                        <img src={Image1} alt='First Image' style={{ borderRadius: "20px", maxWidth: "100%", marginRight: "-110px", boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.25)" }} />
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

            <Button onClick={Back} className='px-1'>
                Go Back
            </Button>
            <Footer />
        </div>
    )
}

export default Projects
