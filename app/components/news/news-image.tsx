import Image from "next/image";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type NewsImageProps = ComponentProps<typeof Image>;

export const NewsImage = ({ className, ...props }: NewsImageProps) => {
  return (
    <Image
      height={500}
      width={500}
      className={twMerge("w-full", className)}
      {...props}
    />
  );
};
