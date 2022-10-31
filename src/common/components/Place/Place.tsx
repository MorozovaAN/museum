import { Text } from '../../styles/Text.styled';
import { TitleUnderline } from '../../styles/Title.styled';
import { ImageBlock, Link, PlaceEl } from './Place.styled';

type PlaceType = {
  link: string;
  imageSrc: string;
  title: string;
};

export const Place: React.FC<PlaceType> = ({ link, imageSrc, title }) => {
  return (
    <PlaceEl>
      <Link href={link} target="_blanc" aria-label="link to google maps">
        <ImageBlock>
          <img src={imageSrc} alt={title} />
        </ImageBlock>

        <TitleUnderline color="primary" fz="s">
          {title}
        </TitleUnderline>

        <Text color="primary" fz="xs" fw="thin" mt="10px">
          360° Virtual Tour
        </Text>

        <Text color="primary" fz="xs" fw="thin" mt="10px">
          Google Street Panorama View
        </Text>
      </Link>
    </PlaceEl>
  );
};
