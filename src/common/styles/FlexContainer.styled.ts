import styled from 'styled-components';

type FlexContainerType = {
  fd?: string;
  ai?: string;
  rgap?: string;
  cgap?: string;
};

export const FlexContainer = styled.div<FlexContainerType>`
  display: flex;
  flex-direction: ${({ fd }) => fd || 'row'};
  align-items: ${({ ai }) => ai || 'center'};
  column-gap: ${({ cgap, theme }) => (cgap && theme.size[cgap]) || cgap || 0};
  row-gap: ${({ rgap, theme }) => (rgap && theme.size[rgap]) || rgap || 0};
`;
