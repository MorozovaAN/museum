import { Container } from '../../common/styles/Container.styled';
import { Title } from '../../common/styles/Title.styled';
import { Video } from '../Video/Video';
import { VideoJourneyEl } from './VideoJourney.styled';

export const VideoJourney = () => {
  return (
    <VideoJourneyEl>
      <Container>
        <Title color="accentLL" fz="l">
          Video journey
        </Title>

        <Video
          src="https://www.youtube.com/embed/zp1BXPX8jcU"
          title="Welcome to the Louvre - Bienvenue au Louvre - Musée du Louvre"
        />
      </Container>
    </VideoJourneyEl>
  );
};
