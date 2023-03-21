import logo from './logo.svg';
import './App.css';
import MyCarousel from './Components/carousel';
import MyNavbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'react-bootstrap';
import AboutMe from './Components/AboutMe';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <MyNavbar />
      <MyCarousel />
      {/* Meet your photographer */}
      <AboutMe />
      {/* Services i offer */}
      <Services />
      {/* Projects + Link to Portfolio*/}
      {/* Portfolio */}
      {/* Testimonials */}
      <Testimonials />
      {/* FAQ */}
      {/* Link to contact form */}
      {/* Footer */}
      

    </ThemeProvider>
  );
}

export default App;
