import styled from 'styled-components';
import arrowPrev from '../../assets/images/video-slider-arrow-prev.svg';
import arrowNext from '../../assets/images/video-slider-arrow-next.svg';

export const Wrapper = styled.div`
  .mySwiper .swiper-slide {
    opacity: 0.7;
    filter: blur(1px);
  }
  .mySwiper .swiper-slide-thumb-active {
    opacity: 1;
    filter: none;
  }

  .arrow-prev {
    width: 9px;
    height: 10px;
    border: none;
    background: url(${arrowPrev}) no-repeat;
    background-size: contain;
    cursor: pointer;
    position: relative;
  }
  .arrow-prev:after {
    content: '';
    width: 21px;
    height: 22px;
    background: transparent;
    position: absolute;
    top: -5px;
    left: -5px;
  }

  .arrow-next {
    width: 9px;
    height: 10px;
    border: none;
    background: url(${arrowNext}) no-repeat;
    background-size: contain;
    cursor: pointer;
    position: relative;
  }
  .arrow-next:after {
    content: '';
    position: absolute;
    width: 21px;
    height: 22px;
    background: transparent;
    top: -5px;
    right: -5px;
  }

  .arrow-prev:disabled,
  .arrow-next:disabled {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
  }
  .arrow-next:active,
  .arrow-prev:active {
    filter: brightness(0.2);
  }

  .custom-pagination {
    width: fit-content;
    display: flex;
    column-gap: ${({ theme }) => theme.size.m};
  }
  .custom-bullet {
    width: 10px;
    height: 10px;
    background: #999999;
    display: block;
    border-radius: 50%;
    transition: 0.3s ease-in;
    cursor: pointer;
    position: relative;
  }
  .custom-bullet:after {
    content: '';
    position: absolute;
    width: 22px;
    height: 22px;
    background: transparent;
    top: -5px;
    right: -6px;
  }
  .custom-bullet-active {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const Controls = styled.div`
  margin-top: ${({ theme }) => theme.size.l};
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: ${({ theme }) => theme.size.m};
`;

// export const Arrow = styled.button`
//   width: 9px;
//   height: 10px;
//   border: none;
//   background: url(${arrow}) no-repeat;
//   background-size: cover;
//   cursor: pointer;
// `;
// export const ArrowPrev = styled(Arrow)``;
// export const ArrowNext = styled(Arrow)`
//   transform: rotate(180deg);
// `;

// export const PaginationBullet = styled.button`
//   width: 8px;
//   height: 8px;
//   background: #333333;
// `;
// export const CustomPagination = styled.div``;
