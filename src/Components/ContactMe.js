import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import MiaPhoto from '../assets/Mia Photo.jpeg'

export default function Contact() {

    const startingFormDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        category:  '',
        option: '',
        message: '',
    }


    if (sessionStorage.getItem("Active Category") !== ""){
        console.log("Active Category on this side: ", sessionStorage.getItem("Active Category"))
        // setActiveCategory(sessionStorage.getItem("Active Category"))
    }

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.outerWidth <= 600);
      };
  
      window.addEventListener('resize', handleResize);
      handleResize(); // check initial size
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const mql = window.matchMedia('(max-width: 600px)');

    let mobileView = mql.matches;

    const [formDetails, setFormDetails] = useState(startingFormDetails)
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    return (
        <div className='main-contact'>
            <section className='contact' id='Contact'>
                <Container>
                    <Row className='align-items-center '>
                        {
                            isMobile ?
                                <></>
                                :
                                <Col xs={12} md={6} lg={6} xl={6}>
                                    <img src={MiaPhoto} alt='Image'></img>
                                </Col>
                        }

                        <Col xs={12} md={6} lg={6} xl={6}>
                            <h2>Get in touch</h2>
                            <form>
                                <Row >
                                    <Col size={12} sm={6} className='px-1'>
                                        <input type='text' value={startingFormDetails.firstName} placeholder='John' onChange={(e) => onFormUpdate('firstName', e.target.value)} />

                                    </Col>
                                    <Col size={12} sm={6} className='px-1'>
                                        <input type='text' value={startingFormDetails.lastName} placeholder='Doe' onChange={(e) => onFormUpdate('lastName', e.target.value)} />

                                    </Col>
                                    <Col size={12} sm={6} className='px-1'>
                                        <input type='email' value={startingFormDetails.email} placeholder='JohnDoe@email.com' onChange={(e) => onFormUpdate('email', e.target.value)} />

                                    </Col>
                                    <Col size={12} sm={6} className='px-1'>
                                        <input type='tel' value={startingFormDetails.phone} placeholder='086......' onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                    </Col>

                                    <Col size={12} sm={6} className='px-1'>
                                        <input type='dropdown' value={startingFormDetails.category} placeholder='Couple' onChange={(e) => onFormUpdate('category', e.target.value)} />
                                    </Col>
                                    <Col size={12} sm={6} className='px-1'>
                                        <select id="options" name="options" placeholder='Option 1'>
                                        {/* value={startingFormDetails.option} */}
                                            <option value="1" onChange={(e) => onFormUpdate('option', e.target.value)}>Option 1</option>
                                            <option value="2" onChange={(e) => onFormUpdate('option', e.target.value)}>Option 2</option>
                                            <option value="3" onChange={(e) => onFormUpdate('option', e.target.value)}>Option 3</option>
                                        </select>
                                    </Col>

                                    <Col size={12} className="px-1">
                                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                        <button type="submit" ><span>{buttonText}</span></button>
                                    </Col>
                                    {
                                        status.message &&
                                        <Col>
                                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                        </Col>
                                    }
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
