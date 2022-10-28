import { Slider } from '../Slider/Slider';
import { Title, PromoEl, Description } from './Promo.styled';

export const Promo = () => {
  return (
    <PromoEl>
      <Title>Welcome to the louvre</Title>
      <Description>From the castle to the museum</Description>
      <Slider />
    </PromoEl>
  );
};
