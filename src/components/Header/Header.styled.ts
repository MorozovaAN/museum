import styled from 'styled-components';

export const Logo = styled.div`
  display: flex;
  column-gap: 25px;
  p {
    font-family: 'Forum';
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: #ffffff;
  }
`;

export const HeaderEl = styled.header`
  background: ${(props) => props.theme.colors.primary};
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const MenuIcon = styled.div`
  width: 32px;
  height: 2px;
  background: ${(props) => props.theme.colors.secondary};
  position: relative;

  &::after {
    position: absolute;
    content: '';
    top: -8px;
    width: 32px;
    height: 2px;
    background: ${(props) => props.theme.colors.secondary};
  }
  &::before {
    position: absolute;
    content: '';
    top: 8px;
    width: 32px;
    height: 2px;
    background: ${(props) => props.theme.colors.secondary};
  }
`;
