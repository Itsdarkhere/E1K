import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../public/logoE1K.png'
import hamburger from '../public/hamburger.svg'
import { Menu } from '@headlessui/react'
import BurgerMenu from './BurgerMenu'

export default function Navigation() {
  return (
    <div className='bg-white px-5 h-20 w-full flex justify-center items-center'>
        <div className='w-full max-w-[1080px] text-black flex flex-row justify-between items-center'>
            <Link href="/">
                <Image src={logo} width={80} alt="vercel logo" />
            </Link>
            <div className='flex-none hidden sm:flex flex-row gap-6 text-gray-600 text-sm'>
                <Link href={"/"}>Etusivu</Link>
                <Link href={"/galleria"}>Galleria</Link>
                <Link href={"/otayhteytta"}>Ota yhteyttä</Link>
            </div>
            <BurgerMenu />
        </div>
    </div>
  )
}
