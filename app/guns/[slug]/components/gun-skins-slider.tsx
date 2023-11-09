"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { GunDetailsSkins } from "@/types/gun-details-types";
import { FlexContainer } from "@/components/interface/flex-container";
import { Heading } from "@/components/interface/heading";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

type GunSkinSlideProps = {
  skins: Array<GunDetailsSkins>;
};

export const GunSkinsSlider = ({ skins }: GunSkinSlideProps) => {
  const swiperRef = useRef<any>();

  const nextSlide = () => {
    swiperRef.current?.slideNext();
  };
  const prevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <div>
      <Swiper
        onSwiper={(e) => (swiperRef.current = e)}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="relative overflow-hidden cursor-grab min-h-full mt-10 flex"
      >
        {skins.map((skin) =>
          skin.chromas.map((chroma) => {
            if (
              !chroma.displayIcon ||
              !chroma.displayName ||
              !chroma.fullRender
            )
              return;
            if (
              chroma.displayName === "Vandal" ||
              chroma.displayIcon === "Padrão"
            )
              return;
            return (
              <SwiperSlide
                key={chroma.displayName}
                className="px-10 md:pt-0 mt-4 h-full"
              >
                <FlexContainer
                  variant="centered-all"
                  flex="col"
                  className="mx-auto space-y-6 h-full p-4"
                >
                  <Image
                    key={chroma.uuid}
                    src={chroma.fullRender}
                    width={400}
                    height={400}
                    alt={chroma.displayName}
                    className="object-cover max-w-[300px] object-center mx-auto w-full"
                  />
                  <Heading
                    size="2xs"
                    position="centered"
                    tag="h5"
                    variant="highlight"
                  >
                    {chroma.displayName}
                  </Heading>
                </FlexContainer>
              </SwiperSlide>
            );
          })
        )}
        <div className="flex -translate-y-1/2 top-1/2 absolute items-center justify-between w-full z-[1000]">
          <Button onClick={prevSlide}>
            <BsArrowLeft />
          </Button>
          <Button onClick={nextSlide}>
            <BsArrowRight />
          </Button>
        </div>
      </Swiper>
    </div>
  );
};
