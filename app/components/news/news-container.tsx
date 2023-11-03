// import { SwiperRoot } from "@/components/interface/swiper-slider/swiper";
// import { NewsData } from "@/config/news-data";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type NewsContainerProps = ComponentProps<"div">;

export const NewsContainer = ({ className, ...props }: NewsContainerProps) => {
  return (
    <div className={twMerge("my-10 px-4", className)} {...props}>
      {/* <SwiperRoot data={NewsData} /> */}
    </div>
  );
};
