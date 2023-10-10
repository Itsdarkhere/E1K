import Image from "next/image"
import tausta from '../../public/tausta2.jpg'

export default function Galleria() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className='w-full px-20 py-60 relative flex flex-col justify-center items-center'>
            <Image src={tausta} alt='Työkaluja' layout='fill' objectFit='cover' objectPosition='center' />
            <div className='relative z-10'>
                <h2 className=' text-white text-7xl font-bold'>Galleriamme</h2>
            </div>
        </div>
        <div className="w-full flex justify-center items-center">
            <div className="max-w-[1080px] py-44 bg-white w-full grid grid-cols-3 gap-4">
                {[...Array(12)].map((_, index) => (
                    <div key={index} className="bg-gray-400 h-full"></div>
                ))}
            </div>
        </div>
      </main>
    )
}
  