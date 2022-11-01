import styled from 'styled-components';

export const VideoEl = styled.section`
  padding: ${({ theme }) => theme.size.l} 0;
`;

export const Video = styled.div`
  margin-top: ${({ theme }) => theme.size.m};
  position: relative;
  padding-bottom: 56.25%; /* задаёт высоту контейнера для 16:9 (если 4:3 — поставьте 75%) */
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;
