'use client'
import { atom, useAtom, useSetAtom } from 'jotai'
import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type MobileButtonProps = ComponentProps<"button">

export const menuIsOpen = atom(false)

export const MobileButton = ({className, ...props}: MobileButtonProps) => {
  const [valueMenuIsOpen, setValueMenuIsOpen ] = useAtom(menuIsOpen);

  return (
    <button onClick={()=> setValueMenuIsOpen(!valueMenuIsOpen)} className={twMerge("md:hidden block text-3xl", className)} {...props}></button>
  )
}
