import Carousel from 'react-bootstrap/Carousel';

//Images
import Image1 from '../assets/C&J-174.jpg';
import Image2 from '../assets/K&C-37.jpg';
import Image3 from '../assets/Q&T-26.jpg';


function MyCarousel() {
  return (
    <Carousel fade id='home'>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={Image1}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={Image2}
          alt="Second slide"
        />


      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={Image3}
          alt="Third slide"
        />


      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;