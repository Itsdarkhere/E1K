import Image from 'next/image'
import React from 'react'
import emil from '../public/emil1.jpeg'
import logo from '../public/vercel.svg'
import luotettava from '../public/LUOTETTAVA.png'

export default function Footer() {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-row'>
            <div className='w-1/2 bg-white flex flex-row p-20'>
                <div className='flex flex-col justify-start w-1/2'>
                    <Image src={emil} alt="Emil Kortelainen" />
                    <h6>Eemil Kortelainen</h6>
                    <p>Toimitusjohtaja</p>
                </div>
                <div className='flex flex-col justify-center items-center text-black w-1/2 gap-8'>
                    <div className='flex flex-col items-center'>
                        <Image src={logo} height={10} alt='logo' />
                        <p>Kankurintie 21, 04300 Tuusula</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src={logo} height={10}  alt='logo' />
                        <p>Kankurintie 21, 04300 Tuusula</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src={logo} height={10}  alt='logo' />
                        <p>Kankurintie 21, 04300 Tuusula</p>
                    </div>
                    <Image src={luotettava} alt="Luotettava kumppani todistus" />
                </div>
            </div>
            <form className='w-1/2 p-20'>
                <h4 className=' text-4xl mb-6 font-semibold'>Ota yhteyttä</h4>
                <div className="flex flex-row gap-8 w-full border-b border-b-border_secondary py-5 pr-40">
                    <div className="flex flex-col w-full gap-[6px]">
                        <label
                            htmlFor="industry"
                            className="text-text_secondary text-sm font-semibold"
                        >
                            Industry
                        </label>
                        <input
                            type="text"
                            name="industry"
                            id="industry"
                            autoComplete="organization"
                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:shadow-brand_ring_shadow focus:ring-border_brand sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className="flex flex-col w-full gap-[6px] text-text_tertiary">
                        <label
                            htmlFor="address"
                            className="text-text_secondary text-sm font-semibold"
                        >
                            Address
                        </label>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            autoComplete="street-address"
                            className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:shadow-brand_ring_shadow focus:ring-border_brand sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="mt-3 col-span-full">
                    <label
                        htmlFor="about"
                        className="text-text_secondary text-sm font-semibold"
                    >
                        Description
                    </label>
                    <div className="mt-1">
                        <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <button type='submit' className='px-5 mt-8 py-3 flex flex-row items-center justify-center gap-2 bg-transparent border border_border_primary rounded-md shadow-md text-text_secondary hover:bg-bg_primary_hover hover:text_text_secondary_hover'>LÄHETÄ</button>
            </form>
        </div>
        <div className=' bg-gray-800 flex justify-center'>
            <div className='max-w-[1080px] w-full py-4'>
                <p className='text-sm text-gray-300'>@2021 VJX</p>
            </div>
        </div>
    </div>
  )
}
