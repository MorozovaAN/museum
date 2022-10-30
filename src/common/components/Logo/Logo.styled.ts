import styled from 'styled-components';

export const LogoEl = styled.div`
  display: flex;
  column-gap: 25px;

  p {
    font-family: 'Forum';
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.secondary};
  }
`;