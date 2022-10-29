import styled from 'styled-components';

export const TitleEl = styled.h2`
  font-family: 'Forum';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accentLL};
`;
