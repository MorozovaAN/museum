import styled from 'styled-components';

export const Text = styled.p<{ fz: string; fw: string; mt?: string }>`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: ${({ fw, theme }) => fw && theme.fw[fw]};
  font-size: ${(props) => props.fz && props.theme.fz[props.fz]};
  color: ${(props) => props.color && props.theme.colors[props.color]};
  margin-top: ${({ mt }) => mt || 0};
`;
