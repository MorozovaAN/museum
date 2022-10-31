import styled from 'styled-components';

export const VirtualTourEl = styled.section`
  color: ${({ theme }) => theme.colors.secondary};
  padding-top: ${({ theme }) => theme.size.l};
`;

export const FlexContainer = styled.div`
  margin-top: ${({ theme }) => theme.size.l};
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.size.l};
  align-items: center;
  border-top: 3px solid ${({ theme }) => theme.colors.accentD};
  padding-top: ${({ theme }) => theme.size.l};
`;
