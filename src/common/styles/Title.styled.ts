import styled, { css } from 'styled-components';

export const Title = styled.h2<{ fz: string }>`
  font-family: 'Forum';
  font-weight: 400;
  font-size: ${(props) => props.fz && props.theme.fz[props.fz]};
  letter-spacing: 5px;
  text-transform: uppercase;
  color: ${(props) => props.color && props.theme.colors[props.color]};
`;

export const TitleUnderline = styled(Title)`
  position: relative;
  padding-bottom: 10px;

  &:after {
    content: '';
    position: absolute;
    width: 40%;
    height: 2px;
    background: ${({ theme }) => theme.colors.accentD};
    bottom: 0;
    left: 0;
    transition: all 0.3s ease-in;
  }
`;

//export const MainTitle = styled.h1<{ fz: string }>(Title);

export const MainTitle = styled.h1`
  font-family: 'Forum';
  font-weight: 400;
  font-size: ${(props) => props.theme.fz.l};
  letter-spacing: 5px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.secondary};
  text-align: center;
  line-height: 40px;
`;

export const test = css`
  margin-top: 50px;
`;
