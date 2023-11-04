'use client'
import { atom, useSetAtom } from 'jotai'
import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type MobileButtonProps = ComponentProps<"button">

export const menuIsOpen = atom(false)

export const MobileButton = ({className, ...props}: MobileButtonProps) => {
  const setValueMenuIsOpen = useSetAtom(menuIsOpen)

  return (
    <button onClick={()=> setValueMenuIsOpen(prev => !prev)} className={twMerge("md:hidden block text-3xl", className)} {...props}></button>
  )
}
