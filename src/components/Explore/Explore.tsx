import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from 'react-compare-slider';
import before from '../../assets/images/las-meninas-picture-before.jpg';
import after from '../../assets/images/las-meninas-picture-after.jpg';
import { Container } from '../../common/styles/Container.styled';
import { Title } from '../../common/styles/Title.styled';
import { ExploreEl, SliderWrapper } from './Explore.styled';

export const Explore = () => {
  return (
    <ExploreEl>
      <Container>
        <Title color="secondary" fz="l">
          Picture explore
        </Title>
        <SliderWrapper>
          <ReactCompareSlider
            onlyHandleDraggable
            handle={
              <ReactCompareSliderHandle
                buttonStyle={{
                  WebkitBackdropFilter: 'none',
                  backdropFilter: 'none',
                  border: '3px solid #fff',
                  boxShadow: 'none',
                  width: '24px',
                  height: '24px',
                }}
                linesStyle={{ width: '3px' }}
              />
            }
            itemOne={
              <ReactCompareSliderImage
                src={before}
                alt="'Las Meninas' before restoration"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src={after}
                alt="'Las Meninas' after restoration"
              />
            }
          />
        </SliderWrapper>
      </Container>
    </ExploreEl>
  );
};
