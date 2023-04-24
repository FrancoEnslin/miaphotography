import React from 'react'
import Image1 from '../assets/C&J-174.jpg'

function Projects() {
    return (
        <div>
            <h3>Projects Page les go</h3>

            <div className='container'>
                <h4>Weddings</h4>

                <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }} >
                    <div className="d-flex flex-row bd-highlight ">
                        <img src={Image1} style={{ width: "70%" }} alt='First Image' />
                        <p>Bunch of text that needs to be next to the image</p>
                    </div>

                </div>
                <br />
                <h4>Weddings</h4>
                <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                    <div className="d-flex flex-row bd-highlight" >
                        <img src={Image1} style={{ width: "70%" }} alt='First Image' />
                        <p>Bunch of text that needs to be next to the image</p>
                    </div>

                </div>
                <br />
                <h4>Weddings</h4>
                <div className='d-flex justify-content-center p-3' style={{ border: "1px solid", borderRadius: "10px" }}>
                    <div className="d-flex flex-row bd-highlight" >
                        <img src={Image1} style={{ width: "70%" }} alt='First Image' />
                        <p>Bunch of text that needs to be next to the image</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Projects
