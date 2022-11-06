import styled from 'styled-components';

type TextType = {
  color: string;
  fz: string;
  fw: string;
  ls?: string;
  mt?: string;
};

export const Text = styled.p<TextType>`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: ${({ fw, theme }) => fw && theme.fw[fw]};
  font-size: ${({ fz, theme }) => fz && theme.fz[fz]};
  color: ${({ color, theme }) => color && theme.colors[color]};
  letter-spacing: ${({ ls }) => ls || "normal"};
  margin-top: ${({ mt }) => mt || 0};
`;
