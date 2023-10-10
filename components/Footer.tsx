import Image from 'next/image'
import React from 'react'
import emil from '../public/emil1.jpeg'
import mail from '../public/mail.svg'
import phone from '../public/phone.svg'
import location from '../public/location.svg'
import luotettava from '../public/LUOTETTAVA.png'

export default function Footer() {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-col-reverse lg:flex-row'>
            <div className='w-full lg:w-1/2 bg-white flex flex-col sm:flex-row py-20 px-5 sm:px-20'>
                <div className='flex flex-col justify-start w-full sm:w-1/2'>
                    <Image className='max-w-[320px] w-full' src={emil} alt="Emil Kortelainen" />
                    <h6 className=' text-text_primary text-lg pt-3 pb-1'>Eemil Kortelainen</h6>
                    <p className=' text-text_disabled text-sm'>Toimitusjohtaja</p>
                </div>
                <div className='flex mt-8 sm:mt-0 flex-col justify-start items-center text-black w-full sm:w-1/2 gap-8'>
                    <div className='w-full flex flex-row sm:flex-col items-start sm:items-center sm:text-center justify-start gap-2'>
                        <Image src={location} height={22} alt='logo' />
                        <p>Kankurintie 21, 04300 Tuusula</p>
                    </div>
                    <div className='w-full flex flex-row sm:flex-col items-start sm:items-center sm:text-center justify-start sm:justify-center gap-2'>
                        <Image src={phone} height={22}  alt='logo' />
                        <p>+358443091120</p>
                    </div>
                    <div className='w-full flex flex-row sm:flex-col items-start sm:items-center sm:text-center justify-start sm:justify-center gap-2'>
                        <Image src={mail} height={22}  alt='logo' />
                        <p>eemil.kortelainen@e1k.fi</p>
                    </div>
                    <Image src={luotettava} alt="Luotettava kumppani todistus" />
                </div>
            </div>
            <form className='w-full lg:w-1/2 py-20 px-5 sm:px-20 bg-bg_tertiary'>
                <h4 className=' text-4xl mb-6 font-semibold text-text_primary'>Ota yhteyttä</h4>
                <div className="flex flex-row gap-8 w-full py-5 sm:pr-40">
                    <div className="flex flex-col w-full gap-[6px]">
                        <label
                            htmlFor="name"
                            className="text-text_secondary text-sm font-semibold"
                        >
                            Nimi
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            className="block w-full px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:shadow-brand_ring_shadow focus:ring-border_brand sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div className="flex flex-col w-full gap-[6px] text-text_tertiary">
                        <label
                            htmlFor="Sähköposti"
                            className="text-text_secondary text-sm font-semibold"
                        >
                            Sähköposti
                        </label>
                        <input
                            type="text"
                            name="Sähköposti"
                            id="Sähköposti"
                            autoComplete="email"
                            className="block w-full px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:shadow-brand_ring_shadow focus:ring-border_brand sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className=" col-span-full sm:pr-40">
                    <label
                        htmlFor="viesti"
                        className="text-text_secondary text-sm font-semibold"
                    >
                        Viesti
                    </label>
                    <div className="mt-1">
                        <textarea
                        id="viesti"
                        name="viesti"
                        rows={3}
                        className="block w-full px-2 min-h-[150px] border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <button type='submit' className=' bg-white px-5 mt-5 py-3 flex flex-row items-center justify-center gap-2 bg-transparent border border_border_primary shadow-md text-text_secondary hover:bg-bg_primary_hover hover:text_text_secondary_hover'>
                    LÄHETÄ
                </button>
            </form>
        </div>
    </div>
  )
}