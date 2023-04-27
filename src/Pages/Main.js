
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'react-bootstrap';
import AboutMe from '../Components/AboutMe';
import Services from '../Components/Services';
import Testimonials from '../Components/Testimonials';
import Footer from '../Components/Footer';
import Contact from '../Components/ContactMe';
import Slider from '../Components/Slider';
import data from '../data.json';
import Hero from '../Components/carousel';
import Image1 from '../assets/C&J-174.jpg'
import Image2 from '../assets/K&C-37.jpg'
import Image3 from '../assets/Q&T-26.jpg'
import Styling from '../Components/Styling';


function Main() {

  const mql = window.matchMedia('(max-width: 600px)');

  let mobileView = mql.matches;

  const images = [
    Image1, Image2, Image3,
  ];
  const interval = 5000;
  const menuItems = ['Home', 'About', 'Services', 'Contact'];


  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
      maxBreapont="xl"
    >
      <div className='App' >
        <Hero images={images} interval={interval} menuItems={menuItems} />
        <AboutMe />
        {/* <Slider /> */}
        <h3 style={{ marginTop: "10px" }}>Services I offer</h3>
        <Services />
        <Testimonials testimonialData={data}/>
        <Styling />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Main;
