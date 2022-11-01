import styled from 'styled-components';
import arrow from '../../assets/images/slider/slider-arrow.svg';

export const PromoSliderEl = styled.div`
  .carousel-slider {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 40px;
    row-gap: 20px;
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
    align-self: center;
    font-size: 16px;
    padding: 0;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.secondary};
  }

  .control-dots {
    position: static;
    list-style-type: none;
    width: auto;
    margin: 0;
    grid-column: 2/3;
    grid-row: 2/3;
    justify-self: center;
    align-self: center;
    display: flex;
    column-gap: 10px;
  }
  .carousel-slider .control-dots .dot {
    background: ${({ theme }) => theme.colors.accentLL};
    opacity: 1;
    margin: 0;
    transition: background 0.3s ease-in;
  }
  .carousel-slider .control-dots .dot:hover {
    background: ${({ theme }) => theme.colors.accentLD};
  }
  .carousel-slider .control-dots .dot.selected {
    background: ${({ theme }) => theme.colors.secondary};
    cursor: default;
  }

  .carousel .thumbs-wrapper {
    margin: 0;
  }

  padding-bottom: 20px;
`;

let arrowWidth = 20;
const SliderArrow = styled.button`
  grid-row: 2/3;
  align-self: center;
  justify-self: start;
  background: url(${arrow}) no-repeat center;
  width: ${arrowWidth}px;
  height: 8px;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const PrevArrow = styled(SliderArrow)`
  grid-column: 3/4;
  margin-right: 10px;
`;

export const NexArrow = styled(SliderArrow)`
  grid-column: 3/4;
  transform: rotate(180deg);
  margin-left: calc(${arrowWidth}px + 13px);
`;
