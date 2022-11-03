import slide1 from '../../assets/images/promo-slider/1.webp';
import slide2 from '../../assets/images/promo-slider/2.webp';
import slide3 from '../../assets/images/promo-slider/3.webp';
import slide4 from '../../assets/images/promo-slider/4.webp';
import slide5 from '../../assets/images/promo-slider/5.webp';

import { NexArrow, PrevArrow, PromoSliderEl } from './PromoSlider.styled';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const PromoSlider = () => {
  return (
    <PromoSliderEl>
      <Carousel
        renderThumbs={() => []}
        statusFormatter={(currentItem, total) => `0${currentItem} ❘ 0${total}`}
        renderArrowNext={(handler, hasNext) => (
          <NexArrow disabled={!hasNext} onClick={handler}></NexArrow>
        )}
        renderArrowPrev={(handler, hasPrev) => (
          <PrevArrow disabled={!hasPrev} onClick={handler}></PrevArrow>
        )}
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
    </PromoSliderEl>
  );
};
