import { Container } from '../../common/styles/Container.styled';
import { MainTitle } from '../../common/styles/Title.styled';
import { Slider } from '../Slider/Slider';
import { PromoEl, Description } from './Promo.styled';

export const Promo = () => {
  return (
    <PromoEl>
      <Container>
        <MainTitle>
          Welcome to the louvre
        </MainTitle>
        <Description>From the castle to the museum</Description>
        <Slider />
      </Container>
    </PromoEl>
  );
};
