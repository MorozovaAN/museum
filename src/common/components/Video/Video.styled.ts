import styled from 'styled-components';

export const VideoEl = styled.div`
  margin-top: ${({ theme }) => theme.size.m};
  position: relative;
  aspect-ratio: 16/9;

  iframe {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;
