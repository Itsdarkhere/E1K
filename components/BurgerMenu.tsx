'use client'
import { Menu } from '@headlessui/react'
import Image from 'next/image'
import hamburger from '../public/hamburger.svg'

export default function BurgerMenu() {
    return (
      <div className='sm:hidden relative'>
        <Menu>
            <Menu.Button className='focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <Image src={hamburger} alt='hamburger menu' height={25} />
            </Menu.Button>
            <Menu.Items className="z-20 mt-2 w-64 bg-white shadow-lg absolute top-5 right-0 flex flex-col border border-gray-200 divide-y divide-gray-100 rounded-md">
                <Menu.Item>
                {({ active }) => (
                    <a
                    className={`block px-4 py-4 text-sm ${active ? 'bg-blue-500 text-white' : 'text-gray-900'} hover:bg-blue-400 hover:text-white`}
                    href="/"
                    >
                        Etusivu
                    </a>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                    <a
                    className={`block px-4 py-4 text-sm ${active ? 'bg-blue-500 text-white' : 'text-gray-900'} hover:bg-blue-400 hover:text-white`}
                    href="/galleria"
                    >
                        Galleria
                    </a>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                    <a
                    className={`block px-4 py-4 text-sm ${active ? 'bg-blue-500 text-white' : 'text-gray-900'} hover:bg-blue-400 hover:text-white`}
                    href="/otayhteytta"
                    >
                        Ota Yhteyttä
                    </a>
                )}
                </Menu.Item>
            </Menu.Items>
        </Menu>
      </div>
    )
}
