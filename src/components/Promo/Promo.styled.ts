import styled from 'styled-components';

export const Title = styled.h1`
  font-family: 'Forum';
  font-weight: 400;
  font-size: 28px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const PromoEl = styled.section`
  background: ${(props) => props.theme.colors.primary};
  padding: 0 20px;
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  margin-top: 25px;
  margin-bottom: 50px;
`;
