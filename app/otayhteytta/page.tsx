import Link from 'next/link'
import tausta from '../../public/tausta2.jpg'
import Image from 'next/image'
import avatar from '../../public/avatar.svg'

export default function OtaYhteytta() {
    return (
      <main className="flex flex-col items-center justify-between">
        <div className='w-full px-20 py-60 relative flex flex-col justify-center items-center'>
            <Image src={tausta} alt='Työkaluja' layout='fill' objectFit='cover' objectPosition='center' />
            <div className='relative z-10'>
                <h2 className=' text-white text-7xl font-bold'>Ota yhteyttä</h2>
            </div>
        </div>
        <div className='w-full bg-white flex justify-center'>
            <div className=' max-w-[1080px] w-full flex flex-col gap-16 py-24'>
                <h3 className='text-black text-3xl text-center font-semibold'>Soita: +358 44 309 1120</h3>
                <div className='flex flex-row gap-10'>
                    <div className='flex flex-col text-black'>
                        <Image height={320} src={avatar} alt='Avatar' />
                        <h6>Eemil Kortelainen</h6>
                        <p>Toimitusjohtaja</p>
                        <Link href={'email'}>eemil.kortelainen@e1k.fi</Link>
                    </div>
                    <div className='flex flex-col text-black'>
                        <Image height={320} src={avatar} alt='Avatar' />
                        <h6>Tuulia Kortelainen</h6>
                        <p>Laskutus</p>
                        <Link href={'email'}>tuulia.kortelainen@e1k.fi</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center py-32 bg-black'>
            <h4 className=' max-w-[1080px] text-center text-6xl font-semibold tex-white'>Onko sinulla mielessäsi projekti mikä on toteutusta vaille valmis tai vaatii suunnittelua?</h4>
        </div>
      </main>
    )
  }
  