import logo from './logo.svg';
import './App.css';
import MyCarousel from './Components/carousel';
import MyNavbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'react-bootstrap';
import AboutMe from './Components/AboutMe';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import Contact from './Components/ContactMe';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
      maxBreapont="xl"
    >
      <div className='App' >
        <MyNavbar />
        <MyCarousel />
        {/* Meet your photographer */}
        <AboutMe />
        {/* Services i offer */}
      <h3 style={{marginTop: "10px"}}>Services I offer</h3>
        <Services />
        <div className='backGround'>  
          {/* Projects + Link to Portfolio*/}
          {/* Portfolio */}
          <Testimonials />
        </div>
        {/* FAQ */}
        {/* Link to contact form */}
        <Contact />
        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
