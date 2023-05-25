import React, { useState, useEffect, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import MiaPhoto from '../assets/Mia Photo.jpeg'
import emailjs, { send } from 'emailjs-com'

export default function Contact() {

    const startingFormDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        category: '',
        option: '',
        message: '',
    }


    if (sessionStorage.getItem("Active Category") !== "") {
        console.log("Active Category on this side: ", sessionStorage.getItem("Active Category"))
        // setActiveCategory(sessionStorage.getItem("Active Category"))
    }

    const [isMobile, setIsMobile] = useState(false);
    const form = useRef();

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

        console.log("Form details are: ", formDetails)
    }

    var templateParams = {
        name: formDetails.name,
        notes: formDetails.message
    };
     
    // emailjs.send('service_qmmdkb2', 'template_xjnjthj', templateParams, 'CyWSmpcrtmuV34Ayz')
    //     .then(function(response) {
    //        console.log('SUCCESS!', response.status, response.text);
    //     }, function(error) {
    //        console.log('FAILED...', error);
    //     });

    const sendEmail = (e) => {
        e.preventDefault();

        console.log('this is e: ',e)
        console.log('this is form: ',form.current)

        emailjs.sendForm('service_qmmdkb2', 'template_xjnjthj',form.current, 'CyWSmpcrtmuV34Ayz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        // e.target.reset();
    };

    function handleClick(){
        // send();
        alert("Thank you for getting in touch. I'll get back to you as soon as possible.")
        onFormUpdate('firstName', "")
        onFormUpdate('lastName', "")
        onFormUpdate('email', "")
        onFormUpdate('phone', "")
        onFormUpdate('category', "")
        onFormUpdate('option', "")
        onFormUpdate('message', "")
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
                            <form ref={form}  onSubmit={sendEmail}>
                            {/* */}
                                <Row >
                                    <Col size={12} sm={6} className='px-1'>
                                        <input name="firstName" type='text' value={formDetails.firstName} placeholder='John' onChange={(e) => onFormUpdate('firstName', e.target.value)} />

                                    </Col>
                                    <Col size={12} sm={6} className='px-1'>
                                        <input  name="lastName"type='text' value={formDetails.lastName} placeholder='Doe' onChange={(e) => onFormUpdate('lastName', e.target.value)} />

                                    </Col>
                                    <Col size={12} sm={6} className='px-1'>
                                        <input name='email' type='email' value={formDetails.email} placeholder='JohnDoe@email.com' onChange={(e) => onFormUpdate('email', e.target.value)} />

                                    </Col>
                                    <Col size={12} sm={6} className='px-1'>
                                        <input type='tel' value={formDetails.phone} placeholder='086......' onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                    </Col>

                                    <Col size={12} sm={6} className='px-1'>
                                        {/* <input type='dropdown' value={startingFormDetails.category} placeholder='Couple' onChange={(e) => onFormUpdate('category', e.target.value)} /> */}

                                        <select id="categories" name="categories" placeholder={sessionStorage.getItem("Active Category")} className='px-1'>
                                            {/* value={startingFormDetails.option} */}
                                            <option value={sessionStorage.getItem("Active Category")} onChange={(e) => onFormUpdate('category', e.target.value)}>{sessionStorage.getItem("Active Category")}</option>
                                            <option value="Couple" onChange={(e) => onFormUpdate('category', e.target.value)}>Couple</option>
                                            <option value="Portrait" onChange={(e) => onFormUpdate('category', e.target.value)}>Portrait</option>
                                            <option value="Family" onChange={(e) => onFormUpdate('category', e.target.value)}>Family</option>
                                            <option value="Friendship" onChange={(e) => onFormUpdate('category', e.target.value)}>Friendship</option>
                                            <option value="Events" onChange={(e) => onFormUpdate('category', e.target.value)}>Events</option>
                                            <option value="Matric" onChange={(e) => onFormUpdate('category', e.target.value)}>Matric</option>
                                            <option value="Formals" onChange={(e) => onFormUpdate('category', e.target.value)}>Formals</option>
                                            <option value="Graduation" onChange={(e) => onFormUpdate('category', e.target.value)}>Graduation</option>
                                            <option value="Engagement" onChange={(e) => onFormUpdate('category', e.target.value)}>Engagement</option>
                                        </select>
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
                                        <textarea name="message" rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                        <button type="submit" onClick={handleClick}><span>{buttonText}</span></button>
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
