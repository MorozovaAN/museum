import styled from 'styled-components';

export const PromoEl = styled.section`
  background: ${(props) => props.theme.colors.primary};
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
