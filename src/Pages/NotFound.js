import React from 'react'
import { Link } from 'react-router-dom';
import MyNavbar from '../Components/Navbar';


const NotFound = () => {

    return (
        <div>
            <MyNavbar />
     
        <div className='App' id='NotFound'>
          
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for could not be found.</p>
            <p>Here are some helpful links to get you back:</p>
            <Link to='/' id='Link'>Home</Link>
           
            <Link to='/projects' id='Link'>Projects</Link>

        </div>
        </div>



    );
};

export default NotFound
