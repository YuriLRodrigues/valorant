"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { BlurImage } from "@/components/ui/blur-image";
import { FlexDiv } from "@/components/ui/flex-div";
import { NewsData } from "@/config/news-data";

import "swiper/css";
import { useWindowSize } from "@uidotdev/usehooks";
import { News } from "@/app/components/news";

type SwiperSlideData = {
  data: typeof NewsData;
};

export const SwiperRoot = ({ data }: SwiperSlideData) => {
  const size = useWindowSize();

  return (
    <>
      <News.Heading>últimas notícias</News.Heading>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={size.width && size.width <= 1024 ? 1 : 2}
        spaceBetween={20}
        className="cursor-grab"
      >
        {data.length > 0 &&
          data.map((card) => (
            <SwiperSlide key={card.id}>
              <News.Content>
                <BlurImage src={card.src} alt={card.title} />
                <FlexDiv>
                  <News.Data>{card.data}</News.Data>
                  <News.Info>{card.info}</News.Info>
                </FlexDiv>
                <News.Title>{card.title}</News.Title>
              </News.Content>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
