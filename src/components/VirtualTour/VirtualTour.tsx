import { Place } from '../../common/components/Place/Place';
import { Container } from '../../common/styles/Container.styled';
import { Title } from '../../common/styles/Title.styled';
import { Places, VirtualTourEl } from './VirtualTour.styled';
import royalPalace from '../../assets/images/virtual-tour/royal-palace.svg';
import denonWing from '../../assets/images/virtual-tour/denon-wing.svg';
import colonnadePerrault from '../../assets/images/virtual-tour/colonnade-perrault.svg';
import greekHall from '../../assets/images/virtual-tour/greek-hall.svg';
import monaLisa from '../../assets/images/virtual-tour/mona-lisa.svg';
import nightPalace from '../../assets/images/virtual-tour/night-palace.svg';
import { FlexContainer } from '../../common/styles/FlexContainer.styled';

export const VirtualTour = () => {
  const places = [
    {
      link: 'https://www.google.com/maps/@48.8606882,2.3356791,3a,90y,324.37h,87.69t/data=!3m7!1e1!3m5!1sAF1QipMZ9YgnArbwEIbTDANeSQYFu9gNqpW_2Sv8FBvY!2e10!3e12!7i4352!8i1815',
      imageSrc: royalPalace,
      title: 'Royal Palace',
    },
    {
      link: 'https://www.google.com/maps/@48.8563254,2.3352706,0a,77.7y,90t/data=!3m4!1e1!3m2!1sAF1QipNRj_CwP4coDMYdCHj6qHeBeJpI2VxU5BUsOX4F!2e10?source=apiv3',
      imageSrc: denonWing,
      title: 'Denon Wing',
    },
    {
      link: 'https://www.google.com/maps/@48.8601723,2.3395439,0a,95.7y,322.04h,84.25t/data=!3m4!1e1!3m2!1sAF1QipNMZGQuEA-pAUvIG_eP_2f3gWTKZEJ6XLVJ-Pgb!2e10?source=apiv3',
      imageSrc: colonnadePerrault,
      title: 'Colonnade Perrault',
    },
    {
      link: 'https://www.google.com/maps/@48.860183,2.3356156,0a,82.2y,177.69h,95.61t/data=!3m4!1e1!3m2!1sAF1QipP7uFZnTITRe-7AEVAgHAfqiCL-03gvBHcYWgF3!2e10?source=apiv3',
      imageSrc: greekHall,
      title: 'Greek hall',
    },
    {
      link: 'https://www.google.com/maps/@48.8598788,2.3355157,0a,89.5y,7.53h,94t/data=!3m4!1e1!3m2!1sAF1QipO1wkUUbyzpPjj-OR0mR5etZJT-xl-40XK8rDQ3!2e10?source=apiv3',
      imageSrc: monaLisa,
      title: 'Mona Lisa',
    },
    {
      link: 'https://www.google.com/maps/@48.8563254,2.3352706,0a,97.3y,21.26h,79.91t/data=!3m4!1e1!3m2!1sAF1QipPpGAowYatVyk3MMGnZAaQkYm2EUk-Dlca06SS5!2e10?source=apiv3',
      imageSrc: nightPalace,
      title: 'Night Palace',
    },
  ];

  return (
    <VirtualTourEl>
      <Container>
        <Title color="accentLL" fz="l">
          Virtual tour
        </Title>

        <Places>
          <FlexContainer fd="column" rgap="l">
            {places.map((p) => (
              <Place link={p.link} imageSrc={p.imageSrc} title={p.title} />
            ))}
          </FlexContainer>
        </Places>
      </Container>
    </VirtualTourEl>
  );
};
