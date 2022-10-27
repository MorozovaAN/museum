import {
  Title,
  PromoEl,
  Description,
  Wrapper,
  SliderCount,
  Slider,
  PrevArrow,
  NexArrow,
} from './Promo.styled';
import slide1 from '../../assets/images/slider/1.webp';
import slide2 from '../../assets/images/slider/2.webp';
import slide3 from '../../assets/images/slider/3.webp';
import slide4 from '../../assets/images/slider/4.webp';
import slide5 from '../../assets/images/slider/5.webp';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Promo = () => {
  return (
    <PromoEl>
      <Title>Welcome to the louvre</Title>
      <Description>From the castle to the museum</Description>
      
      <Wrapper>
        <Slider
          renderThumbs={() => null}
          statusFormatter={(currentItem, total) => {
            return (
              <SliderCount>
                0{currentItem} 0{total}
              </SliderCount>
            );
          }}
          renderIndicator={(handler) => {
            return (
              <li>
                <button onClick={handler}>дот</button>
              </li>
            );
          }}
          renderArrowNext={(handler) => {
            return <NexArrow onClick={handler}></NexArrow>;
          }}
          renderArrowPrev={(handler) => {
            return <PrevArrow onClick={handler}></PrevArrow>;
          }}
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
        </Slider>
      </Wrapper>
    </PromoEl>
  );
};
