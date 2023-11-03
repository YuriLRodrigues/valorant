"use client";
import Image from "next/image";
import { ComponentProps, useState } from "react";
import { twMerge } from "tailwind-merge";

type BlurImageProps = ComponentProps<typeof Image>;

export const BlurImage = ({ className, ...props }: BlurImageProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <Image
      className={twMerge(
        `w-full h-full mx-auto object-cover object-center ${
          isLoading ? "blur-lg scale-105" : "scale-100 blur-0"
        }`,
        className
      )}
      onLoadingComplete={() => setIsLoading(false)}
      width={400}
      height={400}
      quality={100}
      priority={true}
      {...props}
    />
  );
};
