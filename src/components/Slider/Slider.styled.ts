import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import arrow from '../../assets/images/slider/slider-arrow.svg';

export const SliderEl = styled(Carousel)`
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
    justify-self: end;
  }

  .control-dots {
    position: static;
    list-style-type: none;
    display: flex;
    grid-column: 2/3;
    grid-row: 2/3;
  }
`;

export const SlideNumber = styled.p`
  font-size: 16px;
  line-height: 40px;
  text-transform: uppercase;
  color: #ffffff;
`;

const SliderArrow = styled.button`
  grid-row: 2/3;
  align-self: center;
  background: url(${arrow}) no-repeat center;
  width: 30px;
  height: 20px;
  border: none;
  cursor: pointer;
`;

export const PrevArrow = styled(SliderArrow)`
  grid-column: 3/4;
  justify-self: end;
  margin-right: 10px;
`;

export const NexArrow = styled(SliderArrow)`
  grid-column: 4/5;
  justify-self: start;
  transform: rotate(180deg);
`;
