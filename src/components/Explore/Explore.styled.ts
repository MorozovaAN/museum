import styled from 'styled-components';

export const ExploreEl = styled.section`
  background: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.size.l} 0;
`;

export const SliderWrapper = styled.div`
  margin-top: ${({ theme }) => theme.size.l};
  border-top: 3px solid #710707;
  padding-top: 40px;

  .__rcs-handle-button div {
    display: none;
  }
`;
