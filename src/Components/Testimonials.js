import React from 'react'
import { Carousel } from 'react-bootstrap'

import Image3 from '../assets/Q&T-26.jpg';



function Testimonials() {

    const reviews = ["Reviewng this reveiw than Reviewng this reveiw than Reviewng this reveiw than Reviewng this reveiw than Reviewng this reveiw thanReviewng this reveiw than", "Review 2", "Review 3", "Review 4", "Review 5"]
    return (

        <div style={{ marginBottom: "30px", }} className="reviews" id='reviews'>
            {/* <img className="d-block w-60" src={Image3} alt='Background Photo' />
            <div style={{ display: "inline-flex" }}>
                <h3>Letters of Appreciation</h3>

                {reviews.map((e) => {
                    <Carousel fade>
                        <Carousel.Item interval={3000}>
                            <Carousel.Caption>
                                <p>{e}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                })}

            </div> */}

            <Carousel fade>

                <Carousel.Item interval={3000}>
                    <Carousel.Caption>
                        <h3>Letters of Appreciation</h3>
                        <p>{reviews[0]}</p>
                    </Carousel.Caption>
                    <img
                        id='reviewImages'
                        className="d-block w-100"
                        src={Image3}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        id='reviewImages'
                        className="d-block w-100"
                        style={{ width: "50%", height: 'auto' }}
                        src={Image3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Letters of Appreciation</h3>
                        <p> <p>{reviews[1]}</p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        id='reviewImages'
                        className="d-block w-100"
                        src={Image3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Letters of Appreciation</h3>
                        <p> <p>{reviews[2]}</p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>


    )
}

export default Testimonials
