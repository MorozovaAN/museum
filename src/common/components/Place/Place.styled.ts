import styled from 'styled-components';
import { TitleUnderline } from '../../styles/Title.styled';

export const PlaceEl = styled.article``;

export const ImageBlock = styled.div`
  margin-bottom: 25px;
  overflow: hidden;

  img {
    transition: 0.9s;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  outline: 0;

  &:hover ${TitleUnderline}::after, &:focus ${TitleUnderline}::after {
    width: 100%;
    transition: 0.8s;
  }
  &:hover ${ImageBlock} img,
  &:focus ${ImageBlock} img {
    filter: brightness(120%);
    transform: scale(1.2);
    outline: none;
  }
`;
