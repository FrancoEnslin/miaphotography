import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

export default function Contact() {
    const startingFormDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }

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
        <section className='contact' id='contact'>
            <Container>    
                <Row className='align-items-center'>
                    <Col md={6}>
                        {/* <img src={newContact} alt='Image'></img> */}
                    </Col>
                    <Col md={6}>
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
    )
}
