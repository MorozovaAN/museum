import { Container } from '../../common/styles/Container.styled';
import { Title } from '../../common/styles/Title.styled';
import { VideoSlider } from '../VideoSlider/VideoSlider';
import { VideoJourneyEl } from './VideoJourney.styled';

export const VideoJourney = () => {
  return (
    <VideoJourneyEl>
      <Container>
        <Title color="accentLL" fz="l">
          Video journey
        </Title>
        <VideoSlider />
      </Container>
    </VideoJourneyEl>
  );
};
