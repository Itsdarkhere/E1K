import Image from "next/image"
import tausta from '../../public/tausta2.jpg'

export default function Galleria() {
    return (
      <main className="flex flex-col items-center justify-between">
        <div className='w-full px-5 sm:px-20 py-60 relative flex flex-col justify-center items-center'>
            <Image src={tausta} alt='Työkaluja' layout='fill' objectFit='cover' objectPosition='center' />
            <div className='relative z-10'>
                <h2 className=' text-white text-4xl md:text-7xl font-bold'>Galleriamme</h2>
            </div>
        </div>
        <div className="w-full bg-gray-300 flex justify-center items-center py-44">
            <div className="max-w-[1080px] w-full grid grid-cols-4 grid-rows-3 gap-4">
                {[...Array(12)].map((_, index) => (
                    <div key={index} className="relative bg-gray-400">
                        <div style={{ paddingBottom: '100%' }}></div>
                        {/* Optional content inside the square */}
                        {/* <div className="absolute top-0 left-0 w-full h-full">Content</div> */}
                    </div>
                ))}
            </div>
        </div>
      </main>
    )
}
  