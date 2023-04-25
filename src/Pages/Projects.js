import React from 'react'
import Image1 from '../assets/C&J-174.jpg'

function Projects() {
    return (
        <div>
            <h3>Projects Page les go</h3>

            <div className='container'>
                <h4>Couple Shoots</h4>

                <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }} >
                    <div className="d-flex flex-row bd-highlight ">
                        <img src={Image1}
                            style={{
                                width: "50%",
                                position: "relative",
                                marginLeft: "-70px",
                                borderRadius: "20px"
                            }} alt='First Image' />

                        <div>
                            <p className='text-start p-4 h5' >Bunch of text that needs to be next to the image</p>
                            <p>Option 1</p>
                            <p>
                                30 minute session
                                70 edited photos
                                R 650
                            </p>
                            <p>Option 2</p>
                            <p>
                                45 minute session
                                120 edited photos
                                R 750
                            </p>
                        </div>

                    </div>

                </div>
                <br />
                <h4>Weddings</h4>
                <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                    <div className="d-flex flex-row bd-highlight" >
                        <img src={Image1}
                            style={{
                                width: "50%",
                                position: "relative",
                                marginLeft: "-70px",
                                borderRadius: "20px",
                            }} alt='First Image' />
                        <div>
                            <p className='text-start p-4 h5' >Bunch of text that needs to be next to the image</p>
                            <p>Option 1</p>
                            <p>
                                30 minute session
                                70 edited photos
                                R 650
                            </p>
                            <p>Option 2</p>
                            <p>
                                45 minute session
                                120 edited photos
                                R 750
                            </p>
                        </div>
                    </div>
                </div>
 
                <br />
                <h4>Weddings</h4>
                <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                    <div className="d-flex flex-row bd-highlight" >
                        <img src={Image1}
                            style={{
                                width: "50%",
                                position: "relative",
                                marginLeft: "-70px",
                                borderRadius: "20px",
                            }} alt='First Image' />
                        <div>
                            <p className='text-start p-4 h5' >Bunch of text that needs to be next to the image</p>
                            <p>Option 1</p>
                            <p>
                                30 minute session
                                70 edited photos
                                R 650
                            </p>
                            <p>Option 2</p>
                            <p>
                                45 minute session
                                120 edited photos
                                R 750
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Projects
