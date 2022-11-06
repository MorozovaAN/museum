import styled from 'styled-components';

export const VirtualTourEl = styled.section`
  color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.size.l} 0;
`;

export const Places = styled.div`
  margin-top: ${({ theme }) => theme.size.l};
  border-top: 3px solid ${({ theme }) => theme.colors.accentD};
  padding-top: ${({ theme }) => theme.size.l};
`;
