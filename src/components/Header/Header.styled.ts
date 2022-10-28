import styled from 'styled-components';

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

  &::after,
  &::before {
    position: absolute;
    content: '';
    width: 32px;
    height: 2px;
    background: ${(props) => props.theme.colors.secondary};
  }

  &::after {
    top: -8px;
  }

  &::before {
    top: 8px;
  }
`;