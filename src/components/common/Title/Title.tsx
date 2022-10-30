import { TitleEl } from './Title.styled';

type TitleType = {
  text: string;
  color: string;
};
export const Title: React.FC<TitleType> = ({ text, color }) => {
  return <TitleEl color={color}>{text}</TitleEl>;
};
