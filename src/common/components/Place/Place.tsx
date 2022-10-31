import { Text } from '../../styles/Text.styled';
import { Title } from '../../styles/Title.styled';
import { PlaceEl } from './Place.styled';

type PlaceType = {
  link: string;
  imageSrc: string;
  title: string;
};

export const Place: React.FC<PlaceType> = ({ link, imageSrc, title }) => {
  return (
    <PlaceEl>
      <a href={link} target="_blanc" aria-label="link to google maps">
        <img src={imageSrc} alt={title} />
      </a>
      <Title color="primary" fz="s">
        {title}
      </Title>
      <Text color="primary" fz="xs" fw="thin">
        360° Virtual Tour
      </Text>
      <Text color="primary" fz="xs" fw="thin">
        Google Street Panorama View
      </Text>
    </PlaceEl>
  );
};
