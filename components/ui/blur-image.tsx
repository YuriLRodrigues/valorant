import Image from "next/image";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type BlurImageProps = ComponentProps<typeof Image>;

export const BlurImage = ({ className, ...props }: BlurImageProps) => {

  return (
    <Image
      className={twMerge(
        "w-full h-full mx-auto object-cover object-center",
        className
      )}
      width={400}
      height={400}
      quality={100}
      {...props}
    />
  );
};
