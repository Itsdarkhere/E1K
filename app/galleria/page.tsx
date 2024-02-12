import Image from "next/image"
import tausta from '../../public/tausta2.jpg'
import Gallery from "@/components/Gallery"

export default async function Galleria() {
    return (
      <main className="flex flex-col items-center justify-between">
        <div className='w-full px-5 sm:px-20 py-60 relative flex flex-col justify-center items-center'>
            <Image src={tausta} priority alt='Työkaluja' fill className=' object-cover' />
            <div className='relative z-10'>
                <h2 className=' text-white text-4xl md:text-7xl font-bold'>Galleriamme</h2>
            </div>
        </div> 
        <Gallery />
      </main>
    )
}
  