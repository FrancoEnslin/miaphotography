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

  const mql = window.matchMedia('(max-width: 600px)');

  let mobileView = mql.matches;


  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
      maxBreapont="xl"
    >
      <div className='App' >
        <MyNavbar />
        <MyCarousel />
        <AboutMe />

        <h3 style={{ marginTop: "10px" }}>Services I offer</h3>
        <Services />
        {
          mobileView ?
            <div>
              {console.log("I'm in Mobile view")}
              <div className='backGround'>
                <Testimonials />
              </div>
              <Contact />
            </div>

            :
            <div>
              <div className='backGround'>
                <Testimonials />
                <Contact />
              </div>
            </div>
        }
        {/* FAQ */}
        {/* Link to contact form */}
        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
