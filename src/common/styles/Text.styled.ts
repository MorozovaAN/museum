import styled from 'styled-components';

export const Text = styled.p<{ fz: string; fw: string }>`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: ${(props) => props.fw && props.theme.fw[props.fw]};
  font-size: ${(props) => props.fz && props.theme.fz[props.fz]};
  color: ${(props) => props.color && props.theme.colors[props.color]};
`;
