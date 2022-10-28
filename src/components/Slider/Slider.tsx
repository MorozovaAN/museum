import slide1 from '../../assets/images/slider/1.webp';
import slide2 from '../../assets/images/slider/2.webp';
import slide3 from '../../assets/images/slider/3.webp';
import slide4 from '../../assets/images/slider/4.webp';
import slide5 from '../../assets/images/slider/5.webp';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { NexArrow, PrevArrow, SliderEl } from './Slider.styled';
import { Carousel } from 'react-responsive-carousel';
import { indicatorHandlerTypes } from './Slider.types';

export const Slider = () => {
  const statusHandler = (currentItem: number, total: number) =>
    `0${currentItem} ❘ 0${total}`;

  const indicatorHandler = (handler: indicatorHandlerTypes) => (
    <li>
      <button onClick={handler}></button>
    </li>
  );

  return (
    <SliderEl>
      <Carousel
        renderThumbs={() => []}
        statusFormatter={statusHandler}
        renderIndicator={indicatorHandler}
        renderArrowNext={(handler) => <NexArrow onClick={handler}></NexArrow>}
        renderArrowPrev={(handler) => <PrevArrow onClick={handler}></PrevArrow>}
      >
        <div>
          <img src={slide1} alt="picture1" />
        </div>
        <div>
          <img src={slide2} alt="picture2" />
        </div>
        <div>
          <img src={slide3} alt="picture3" />
        </div>
        <div>
          <img src={slide4} alt="picture4" />
        </div>
        <div>
          <img src={slide5} alt="picture5" />
        </div>
      </Carousel>
    </SliderEl>
  );
};
