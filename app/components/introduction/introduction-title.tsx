import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TitleIntroductionProps = ComponentProps<"h1">

export const TitleIntroduction = ({className, ...props}: TitleIntroductionProps) => {
  return (
    <h1 className={twMerge("text-white font-valorant text-6xl lg:text-8xl font-bold", className)} {...props}/>
  )
}
