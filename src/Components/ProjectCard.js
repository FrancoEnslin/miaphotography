import React, { useEffect, useState } from 'react'
import Image1 from '../assets/C&J-174.jpg'
import { useNavigate } from 'react-router'
import '../App.css'
import styled from 'styled-components';
import Footer from '../Components/Footer';

export const MobileProjectCard = (header, image, option1, option2, option3) => {

    const Option2Tester = false;
    const Option3Tester = false;

    option3.length() > 0 ?
        Option3Tester = true
        :
        Option3Tester = false;

    option2.length() > 0 ?
        Option2Tester = true
        :
        Option2Tester = false;

    return (
        <div>
            <h4 className='m-3'>{header}</h4>
            <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                <div className="row">
                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                        <img src={image} alt='First Image' style={{ borderRadius: "20px", maxWidth: "100%" }} />
                    </div>
                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                        <div>
                            <p className='h5 p-2'>Option 1</p>
                            <p>
                                {option1}
                            </p>
                            {
                                Option2Tester ?
                                    <>
                                        <p className='h5'>Option 2</p>
                                        <p>
                                            {option2}
                                        </p>
                                    </>
                                    :
                                    <></>
                            }
                            {
                                Option3Tester ?
                                    <>
                                        <p className='h5'>Option 3</p>
                                        <p>
                                            {option3}
                                        </p>
                                    </>
                                    :
                                    <></>
                            }

                            <Button onClick={() => window.location.href = "/#Contact"}>Book my Session</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const NormalProjectCard = (header, image, option1, option2, option3) => {

    const Option2Tester = false;
    const Option3Tester = false;

    option3.length() > 0 ?
        Option3Tester = true
        :
        Option3Tester = false;
        
    option2.length() > 0 ?
        Option2Tester = true
        :
        Option2Tester = false;

    return (
        <div>
            <h4 className='m-3'>{header}</h4>
            <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                <div className="row">
                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                        <img src={image} alt='First Image' style={{ borderRadius: "20px", maxWidth: "100%" }} />
                    </div>
                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                        <div>
                            <p className='h5 p-2'>Option 1</p>
                            <p>
                                {option1}
                            </p>
                            {
                                Option2Tester ?
                                    <>
                                        <p className='h5'>Option 2</p>
                                        <p>
                                            {option2}
                                        </p>
                                    </>
                                    :
                                    <></>
                            }
                            {
                                Option3Tester ?
                                    <>
                                        <p className='h5'>Option 3</p>
                                        <p>
                                            {option3}
                                        </p>
                                    </>
                                    :
                                    <></>
                            }

                            <Button onClick={() => window.location.href = "/#Contact"}>Book my Session</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

