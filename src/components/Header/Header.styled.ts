import styled from 'styled-components';

export const HeaderEl = styled.header`
  background: ${({ theme }) => theme.colors.primary};
`;

export const HeaderWrapper = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuIcon = styled.div`
  width: 32px;
  height: 2px;
  background: ${({ theme }) => theme.colors.secondary};
  position: relative;

  &::after,
  &::before {
    position: absolute;
    content: '';
    width: 32px;
    height: 2px;
    background: ${({ theme }) => theme.colors.secondary};
  }

  &::after {
    top: -8px;
  }

  &::before {
    top: 8px;
  }
`;
