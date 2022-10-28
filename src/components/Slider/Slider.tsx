import slide1 from '../../assets/images/slider/1.webp';
import slide2 from '../../assets/images/slider/2.webp';
import slide3 from '../../assets/images/slider/3.webp';
import slide4 from '../../assets/images/slider/4.webp';
import slide5 from '../../assets/images/slider/5.webp';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { NexArrow, PrevArrow, SliderEl } from './Slider.styled';
import { Carousel } from 'react-responsive-carousel';

export const Slider = () => {
  return (
    <SliderEl>
      <Carousel
        renderThumbs={() => []}
        statusFormatter={(currentItem, total) => `0${currentItem} ❘ 0${total}`}
        renderArrowNext={(handler) => <NexArrow onClick={handler}></NexArrow>}
        renderArrowPrev={(handler) => <PrevArrow onClick={handler}></PrevArrow>}
      >
        <div>
          <img src={slide1} alt="Mona Lisa" />
        </div>
        <div>
          <img src={slide2} alt="Liberty Leading the People" />
        </div>
        <div>
          <img src={slide3} alt="La Belle Ferronnière" />
        </div>
        <div>
          <img src={slide4} alt="The Raft of the Medusa" />
        </div>
        <div>
          <img src={slide5} alt="The Astronomer, Vermeer" />
        </div>
      </Carousel>
    </SliderEl>
  );
};
