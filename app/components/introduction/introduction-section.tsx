import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type SectionIntroductionProps = ComponentProps<"section"> 


export const SectionIntroduction = ({className, ...props}: SectionIntroductionProps) => {
  return (
    <section className={twMerge("flex flex-col items-center justify-center text-center", className)} {...props} />
  )
}