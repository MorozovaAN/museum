import { useState } from 'react';
import { Video } from '../../common/components/Video/Video';
import { Controls, Wrapper } from './VideoSlider.styled';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

export const VideoSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const video = [
    {
      src: 'https://www.youtube.com/embed/zp1BXPX8jcU',
      title: 'Welcome to the Louvre - Bienvenue au Louvre - Musée du Louvre',
    },
    {
      src: 'https://www.youtube.com/embed/Vi5D6FKhRmo',
      title: 'Au Louvre ! La Vénus de Milo',
    },
    {
      src: 'https://www.youtube.com/embed/NOhDysLnTvY',
      title:
        'Promenade dans les collections mésopotamiennes avec Ariane Thomas',
    },
    {
      src: 'https://www.youtube.com/embed/xAsQrZ9s-dE',
      title: "Au Louvre ! Femmes d'Alger dans leur appartement",
    },
    {
      src: 'https://www.youtube.com/embed/n8lY_lm_BmA',
      title: 'Au Louvre ! La salle des Etats',
    },
  ];

  const videoSlides = video.map((v) => (
    <SwiperSlide>
      <Video src={v.src} title={v.title} />
    </SwiperSlide>
  ));

  return (
    <Wrapper>
      <Swiper
        spaceBetween={10}
        navigation={{
          prevEl: '.arrow-prev',
          nextEl: '.arrow-next',
        }}
        pagination={{
          el: '.custom-pagination',
          type: 'bullets',
          clickable: true,
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active',
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs, Pagination]}
        className="mySwiper2"
      >
        {videoSlides}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={2}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className="mySwiper"
      >
        {videoSlides}
      </Swiper>
      <Controls>
        <button className="arrow-prev"></button>
        <div className="custom-pagination"></div>
        <button className="arrow-next"></button>
      </Controls>
    </Wrapper>
  );
};
