import slide1 from '../../assets/images/slider/1.webp';
import slide2 from '../../assets/images/slider/2.webp';
import slide3 from '../../assets/images/slider/3.webp';
import slide4 from '../../assets/images/slider/4.webp';
import slide5 from '../../assets/images/slider/5.webp';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { NexArrow, PrevArrow, SlideNumber, SliderEl } from './Slider.styled';

export const Slider = () => {
  const statusHandler = (currentItem, total) => {
    const number = `0${currentItem} ❘ 0${total}`;

    return <SlideNumber>{number}</SlideNumber>;
  };

  const indicatorHandler = (handler) => (
    <li>
      <button onClick={handler}></button>
    </li>
  );

  const arrowNext = (handler) => <NexArrow onClick={handler}></NexArrow>;

  const arrowPrev = (handler) => <PrevArrow onClick={handler}></PrevArrow>;

  return (
    <SliderEl
      renderThumbs={() => null}
      statusFormatter={statusHandler}
      renderIndicator={indicatorHandler}
      renderArrowNext={arrowNext}
      renderArrowPrev={arrowPrev}
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
    </SliderEl>
  );
};
