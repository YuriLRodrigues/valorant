import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type DescriptionIntroductionProps = ComponentProps<"p">

export const DescriptionIntroduction = ({className, ...props}: DescriptionIntroductionProps) => {
  return (
    <p className={twMerge("sm:text-xl font-medium text-white", className)} {...props} />
  )
}
