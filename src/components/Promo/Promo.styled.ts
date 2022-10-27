import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import arrow from '../../assets/images/slider/slider-arrow.svg';

export const Title = styled.h1`
  font-family: 'Forum';
  font-weight: 400;
  font-size: 28px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const PromoEl = styled.section`
  background: ${(props) => props.theme.colors.primary};
  padding-bottom: 50px;
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2px;
  color: #ffffff;
  text-align: center;
  margin-top: 25px;
`;

export const Wrapper = styled.div`
  margin-top: 50px;
  padding: 0 20px;
`;

export const SliderCount = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 40px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const Slider = styled(Carousel)`
  .carousel-slider {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 40px;
  }
  .slider-wrapper {
    grid-column: 1/5;
    grid-row: 1/2;
  }
  .carousel-status {
    position: static;
    grid-column: 1/2;
    grid-row: 2/3;
  }
  .control-dots {
    position: static;
    list-style-type: none;
    display: flex;
    grid-column: 2/3;
    grid-row: 2/3;
  }
`;

const SliderArrow = styled.button`
  grid-row: 2/3;
  align-self: center;
  background: url(${arrow}) no-repeat center;
  width: 20px;
  height: 8px;
  border: none;
`;
export const PrevArrow = styled(SliderArrow)`
  grid-column: 3/4;
  justify-self: end;
  margin-right: 15px;
`;

export const NexArrow = styled(SliderArrow)`
  grid-column: 4/5;
  justify-self: start;
  transform: rotate(180deg);
`;
