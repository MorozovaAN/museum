import { VideoEl } from './Video.styled';

type VideoType = {
  src: string;
  title: string;
};
export const Video: React.FC<VideoType> = ({ src, title }) => {
  return (
    <VideoEl>
      <iframe
        src={src}
        title={title}
      ></iframe>
    </VideoEl>
  );
};
