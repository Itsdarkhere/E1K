import paku from '../public/Paku.jpg'
import lumenajo from '../public/lumenajo.jpeg'
import tausta from '../public/E1Ktausta.png'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div 
        style={{ backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat: 'no-repeat', backgroundImage: `radial-gradient(circle at top left,rgba(40,40,40,0.79) 0%,rgba(40,40,40,0.86) 100%),url('/E1Ktausta.png')`}} 
        className="w-full bg-gray-300 px-5 sm:px-20  py-60 md:py-80 relative text-white flex flex-col justify-center items-center text-center">
        <h1 className=' relative z-10 text-4xl md:text-7xl font-bold py-2 md:py-6'>E1K Urakointi Oy</h1>
        <h4 className=' relative z-10 text-lg md:text-2xl pb-10 max-w-[850px]'>Urakoitsija uusimaalla rakennusliikkeille, yrityksille ja yksityisille. Urakat valmiiksi tehokkaasti, nopealla aikataululla</h4>
        {/* <h6 className=' relative z-10 text-2xl'>Työllistämme ammattitaitoisia rakennushenkilöitä</h6> */}
      </div>
      <div className="w-full px-5 sm:px-20 py-10 md:py-48 relative" style={{filter: 'saturate(0%) brightness(94%) contrast(120%)', backfaceVisibility: 'hidden'}}>
        <Image src={paku} alt='E1K Pakettiauto' layout='fill' objectFit='cover' objectPosition='center' />
        <div className='flex flex-col lg:flex-row gap-5 relative z-10 py-10 space-y-6 lg:space-y-0'>

          <div className='flex flex-col p-6 rounded-md bg-[rgba(88,56,40,0.6)] backdrop-blur-md space-y-3'>
              <h3 className="text-lg font-semibold text-white">Timpurin Töitä</h3>
              <ul className="space-y-1">
                  <li className="text-gray-300">Timpurin tuntityöt</li>
                  <li className="text-gray-300">Hormikorjaukset</li>
                  <li className="text-gray-300">Drone kuvaukset julkisivuille</li>
              </ul>
          </div>

          <div className='flex flex-col p-6 rounded-md bg-[rgba(88,56,40,0.6)] backdrop-blur-md space-y-3'>
              <h3 className="text-lg font-semibold text-white">Rakennustyöt</h3>
              <ul className="space-y-1">
                  <li className="text-gray-300">Elementtikorjaukset</li>
                  <li className="text-gray-300">Timanttityöt ja timanttiporaukset</li>
              </ul>
          </div>

          <div className='flex flex-col p-6 rounded-md bg-[rgba(88,56,40,0.6)] backdrop-blur-md space-y-3'>
              <h3 className="text-lg font-semibold text-white">Korjaukset</h3>
              <ul className="space-y-1">
                  <li className="text-gray-300">Julkisivujen korjaukset, pesut ja paikkaukset.</li>
                  <li className="text-gray-300">Huoneistoremontit</li>
                  <li className="text-gray-300">Reklamaatiokorjaukset, vuositakuu korjaukset</li>
              </ul>
          </div>

          <div className='flex flex-col p-6 rounded-md bg-[rgba(88,56,40,0.6)] backdrop-blur-md space-y-3'>
              <h3 className="text-lg font-semibold text-white">Kylpyhuone</h3>
              <ul className="space-y-1">
                  <li className="text-gray-300">Kylpyhuoneiden kaatovalulattiat, viemäriasennukset, lattialämmitysputkistot, vedeneristykset & laatoitukset</li>
              </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-blue-100 px-5 sm:px-20 py-48 relative" style={{ backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat: 'no-repeat', backgroundImage: `radial-gradient(circle at top left,rgba(40,40,40,0.79) 0%,rgba(40,40,40,0.86) 100%),url('/lumenajo.jpeg')`}}>
        <div className='relative z-10 text-white flex flex-col justify-center items-center py-10 text-center'>
          <h2 className=' font-bold text-4xl md:text-7xl py-2 md:py-6'>E1K Urakointi Oy</h2>
          <h6 className=' text-lg md:text-2xl'>Luotettavaa ja ammattitaitoista osaamista</h6>
          <button className='w-40 px-5 mt-8 py-3 gap-2 bg-orange-400 shadow-md text-text_secondary'>Galleriamme</button>
        </div>
      </div>
    </main>
  )
}
