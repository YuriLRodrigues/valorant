"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/effect-parallax";
import "swiper/css/autoplay";
import { GunDetailsSkins } from "@/types/gun-details-types";
import Image from "next/image";
import { Text } from "@/components/interface/text";
import { FlexContainer } from "@/components/interface/flex-container";
import { Heading } from "@/components/interface/heading";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

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
        className="relative overflow-hidden cursor-grab"
      >
        {skins.map((skin) =>
          skin.chromas.map((chroma) => {
            if (chroma.displayIcon === null) return;
            if (
              chroma.displayName === "Vandal" ||
              chroma.displayIcon === "Padrão"
            )
              return;
            return (
              <SwiperSlide key={chroma.displayName} className="min-h-full">
                <FlexContainer
                  variant="centered-all"
                  flex="col"
                  className="mx-auto space-y-6 min-h-full"
                >
                  <Image
                    key={chroma.uuid}
                    src={chroma.fullRender}
                    width={400}
                    height={400}
                    alt={chroma.displayName}
                    className="object-cover max-w-[500px] max-h-[150px] object-center mx-auto w-full"
                  />
                  <Heading
                    size="2xs"
                    position="centered"
                    tag="h5"
                    variant="highlight"
                  >
                    {chroma.displayName}
                  </Heading>
                  <Text>{skin.levels[0].displayName}</Text>
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
