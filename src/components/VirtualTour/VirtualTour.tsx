import { Container } from '../../common/styles/Container.styled';
import { Title } from '../../common/styles/Title.styled';
import { VirtualTourEl } from './VirtualTour.styled';

export const VirtualTour = () => {
  return (
    <VirtualTourEl>
      <Container>
        <Title color="accentLL" fz="l">
          Virtual tour
        </Title>
      </Container>
    </VirtualTourEl>
  );
};
