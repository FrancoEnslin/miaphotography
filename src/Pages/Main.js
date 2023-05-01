
import '../App.css';
import { useState } from 'react';
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
import FAQ from '../Components/FAQ';

import Image4 from '../assets/Couples/Q&T-90.jpg'
import Image5 from '../assets/Engagement/E&S-104.jpg'
import Image6 from '../assets/Events/Cara P 21 2-130.jpg'
import Image7 from '../assets/Family/SFam-246.jpg'
import Image8 from '../assets/Weddings/C&J-108.jpg'

function Main() {

  const mql = window.matchMedia('(max-width: 600px)');

  let mobileView = mql.matches;

  const images = [
    Image4, Image5, Image6, Image7, Image8
  ];
  const interval = 4000;
  const menuItems = ['Home', 'About', 'Services', 'FAQ', 'Contact'];


  const [faqs, setfaqs] = useState([
    {
      question: 'Where should we take pictures?',
      answer: `I am located in Pretoria, Gauteng.
      If you prefer an outdoor nature photoshoot I would suggest the following : Field near Queenswood across the OR tambo building, LC de Villiers sports ground or Wolwespruit.
      If you prefer an urban photoshoot I would suggest the following: Church Square, Menlyn Maine Central Square, the Club (Hazelwood) or Moonshot Café.
      If you prefer a coffee shop with a little bit of nature the perfect spot is Hemels Café.
      `,
      open: false
    },
    {
      question: 'What is the best time of the day to take pictures?',
      answer: `I am located in Pretoria, Gauteng.
       I am a sucker for a golden hour shoot. The light is perfectly soft and the results are unbelievable.  
       In summer the perfect time will be around 17.45 and in winter 17.00.  
       Send me a personal message to confirm a specific time. `,
      open: false
    },
    {
      question: ' What should I wear? ',
      answer: `The most important thing that I always tell my clients is that you should wear something that you feel comfortable in. 
      Wear something neutral and avoid wearing matching outfits if you take group/ couple pictures. Rather wear different shades of the same colour or one colour with neutrals added. (for example one wears a green shirt and the other one a black / beige shirt). 
      I would suggest to not wear graphic printed T-shirts or outfits. `,
      open: false
    },
    {
      question: 'What is the maximum amount of people allowed in  a group photoshoot ? ',
      answer: ` The maximum amount is 16 people for one shoot. 
      For formals this means the maximum amount of couples allowed are 8.  `,
      open: false
    },
    {
      question: ' What is the preferred payment method?  ',
      answer: `  EFT,  an invoice will be sent one week before the photoshoot.`,
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }

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
        <Testimonials testimonialData={data} />
        <Styling />
        <div className="faqs" id='FAQ'>
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
          ))}
        </div>
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Main;
