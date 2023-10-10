import paku from '../public/Paku.jpg'
import lumenajo from '../public/lumenajo.jpeg'
import tausta from '../public/E1Ktausta.png'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full bg-gray-300 px-20 py-36 relative text-white flex flex-col justify-center items-center">
        <Image className='brightness-50' src={tausta} alt='E1K Töissä' layout='fill' objectFit='cover' objectPosition='center' />
        <h1 className=' relative z-10 text-7xl font-bold py-16'>E1K Urakointi Oy</h1>
        <h4 className=' relative z-10 text-2xl text-center pb-10 max-w-[850px]'>Urakoitsija uusimaalla rakennusliikkeille, yrityksille ja yksityisille. Urakat valmiiksi tehokkaasti, nopealla aikataululla</h4>
        <h6 className=' relative z-10 text-2xl'>Työllistämme ammattitaitoisia rakennushenkilöitä</h6>
      </div>
      <div  className="w-full bg-gray-700 px-20 py-24 relative">
        <Image src={paku} alt='E1K Pakettiauto' layout='fill' objectFit='cover' objectPosition='center' />
        <div className='flex flex-row relative z-10 py-10'>
          <div className='flex flex-col p-4 bg-gray-600 bg-opacity-50'>
            <p>Timpurin tuntityöt</p>
            <p>Hormikorjaukset</p>
            <p>Drone kuvaukset julkisivuille</p>
          </div>
          <div className='flex flex-col p-4 bg-gray-600 bg-opacity-50'>
            <p>Elementtikorjaukset</p>
            <p>Timanttityöt ja timanttiporaukset</p>
          </div>
          <div className='flex flex-col p-4 bg-gray-600 bg-opacity-50'>
            <p>Julkisivujen korjaukset, pesut ja paikkaukset.</p>
            <p>Huoneistoremontit</p>
            <p>Reklamaatiokorjaukset, vuositakuu korjaukset</p>
          </div>
          <div className='flex flex-col p-4 bg-gray-600 bg-opacity-50'>
            <p>Kylpyhuoneiden kaatovalulattiat, viemäriasennukset, lattialämmitysputkistot, vedeneristykset & laatoitukset</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-blue-100 px-20 py-24 relative">
        <Image src={lumenajo} alt='E1K Lumenajossa' layout='fill' objectFit='cover' objectPosition='center' />
        <div className='relative z-10 text-white flex flex-col justify-center items-center py-10'>
          <h2 className=' font-bold text-7xl py-6'>E1K Urakointi Oy</h2>
          <h6 className=' text-2xl'>E1K Urakointi 0y luotettavaa ja ammattitaitoista osaamista</h6>
          <button className='w-40 px-5 mt-8 py-3 gap-2 bg-orange-400 shadow-md text-text_secondary'>Galleriamme</button>
        </div>
      </div>
    </main>
  )
}
