import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type NewsSectionProps = ComponentProps<"section">

export const NewsSection = ({className, ...props}: NewsSectionProps) => {
  return (
    <section className={twMerge("w-full py-10", className)} {...props} />
  )
}