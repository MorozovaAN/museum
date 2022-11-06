import { Container } from '../../common/styles/Container.styled';
import { FlexContainer } from '../../common/styles/FlexContainer.styled';
import { Text } from '../../common/styles/Text.styled';
import { MainTitle } from '../../common/styles/Title.styled';
import { PromoSlider } from '../PromoSlider/PromoSlider';
import { PromoEl, Titles } from './Promo.styled';

export const Promo = () => {
  return (
    <PromoEl>
      <Container>
        <Titles>
          <FlexContainer fd="column" rgap="l">
            <MainTitle>
              Welcome
              <br /> to the louvre
            </MainTitle>
            
            <Text fw="light" fz="xs" color="secondary" ls="2px">
              From the castle to the museum
            </Text>
          </FlexContainer>
        </Titles>

        <PromoSlider />
      </Container>
    </PromoEl>
  );
};
