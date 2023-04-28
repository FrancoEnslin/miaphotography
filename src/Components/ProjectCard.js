import React, { useEffect, useState } from 'react'
import Image1 from '../assets/C&J-174.jpg'
import { useNavigate } from 'react-router'
import '../App.css'
import styled from 'styled-components';
import Footer from '../Components/Footer';

export const MobileProjectCard = (id, header, image, option1, option2, option3) => {

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

    const Option2Tester = false;
    const Option3Tester = false;

    option3 !== "" ?
        Option3Tester = true
        :
        Option3Tester = false;

    option2 !== "" ?
        Option2Tester = true
        :
        Option2Tester = false;

    return (
        <div>
            <h4 className='m-3'>{header}</h4>
            <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                <div className="row">
                    <div className="col-md-7 d-flex justify-content-center align-items-center">
                        <img
                            src={image}
                            alt='Current Image'
                            style={{ borderRadius: "20px", maxWidth: "100%", }}
                        />
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


export const NormalProjectCard = (id, header, image, option1, option2, option3) => {

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

    const Option2Tester = false;
    const Option3Tester = false;
    const [myOption3, setMyOption3] = React.useState(false)
    const [myOption2, setMyOption2] = React.useState(false)
    const [odd, setOdd] = React.useState(false)


    id % 2 === 0 ? setOdd(false) : setOdd(true);

    option3 !== "" ?
        // Option3Tester = true
        setMyOption3(true)
        :
        // Option3Tester = false;
        setMyOption3(false)

    option2 !== "" ?
        // option2Tester = true
        setMyOption2(true)
        :
        // option2Tester = false;
        setMyOption2(false)

    return (

        <div>

            <h4 className='m-3'>{header}</h4>
            {
                odd ?
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
                    :
                    <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                        <div className="row">
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
                            <div className="col-md-7 d-flex justify-content-center align-items-center">
                                <img src={Image1} alt='First Image' style={{ borderRadius: "20px", maxWidth: "100%", boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.25)" }} />
                            </div>
                        </div>
                    </div>
            }

        </div>
    )
}

