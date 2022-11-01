import { Container } from '../../common/styles/Container.styled';
import { Title } from '../../common/styles/Title.styled';
import { VideoEl, Video } from './VideoJourney.styled';

export const VideoJourney = () => {
  return (
    <VideoEl>
      <Container>
        <Title color="accentLL" fz="l">
          Video journey
        </Title>

        <Video>
          <iframe
            src="https://www.youtube.com/embed/zp1BXPX8jcU"
            title="Welcome to the Louvre - Bienvenue au Louvre - Musée du Louvre"
          ></iframe>
        </Video>
      </Container>
    </VideoEl>
  );
};
