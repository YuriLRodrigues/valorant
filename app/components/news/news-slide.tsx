import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type NewsSlideProps = ComponentProps<"div">

export const NewsSlide = ({className, ...props}: NewsSlideProps) => {
  return (
    <div className={twMerge("w-full px-4 h-full relative flex overflow-hidden cursor-grab gap-4 mt-8", className)} {...props} />
  )
}