import Link from 'next/link'
import Image from 'next/image'
import paku from '../public/paku.jpg'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div 
        style={{ backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat: 'no-repeat', backgroundImage: `radial-gradient(circle at top left,rgba(40,40,40,0.79) 0%,rgba(40,40,40,0.86) 100%),url('/E1Ktausta.png')`}} 
        className="w-full bg-gray-300 px-5 sm:px-20  py-60 md:py-80 relative text-white flex flex-col justify-center items-center text-center">
        <h1 className=' relative z-10 text-4xl md:text-7xl font-bold py-2 md:py-6'>E1K Urakointi Oy</h1>
        <h4 className=' relative text-gray-300 z-10 text-lg md:text-2xl pb-10 max-w-[850px]'>Urakoitsija uusimaalla rakennusliikkeille, yrityksille ja yksityisille. Urakat valmiiksi tehokkaasti, nopealla aikataululla</h4>
        {/* <h6 className=' relative z-10 text-2xl'>Työllistämme ammattitaitoisia rakennushenkilöitä</h6> */}
      </div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center items-center">
        <div className="container px-4 md:px-6">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-bold text-black tracking-tighter sm:text-4xl md:text-5xl">Palvelumme</h2>
            <p className="mx-auto max-w-[700px] text-zinc-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-600">
              E1K tarjoaa laajan valikoiman rakennus-alan palveluita
            </p>
          </div>
          <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
            <li className="flex flex-col items-center justify-center p-4 border rounded-md shadow-sm text-center">
              <svg
                className=" h-10 w-10 mb-4"
                fill="none"
                height="24"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="20" rx="2" ry="2" width="16" x="4" y="2" />
                <path d="M9 22v-4h6v4" />
                <path d="M8 6h.01" />
                <path d="M16 6h.01" />
                <path d="M12 6h.01" />
                <path d="M12 10h.01" />
                <path d="M12 14h.01" />
                <path d="M16 10h.01" />
                <path d="M16 14h.01" />
                <path d="M8 10h.01" />
                <path d="M8 14h.01" />
              </svg>
              <h3 className="font-semibold text-black">Timpurin tuntityöt</h3>
            </li>
            <li className="flex flex-col items-center justify-center p-4 border rounded-md shadow-sm text-center">
              <svg
                className=" h-10 w-10 mb-4"
                fill="none"
                height="24"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="8" rx="2" width="14" x="5" y="2" />
                <rect height="8" rx="2" width="20" x="2" y="14" />
                <path d="M6 18h2" />
                <path d="M12 18h6" />
              </svg>
              <h3 className="font-semibold text-black">Hormikorjaukset</h3>
            </li>
            <li className="flex flex-col items-center justify-center p-4 border rounded-md shadow-sm text-center">
              <svg
                className=" h-10 w-10 mb-4"
                fill="none"
                height="24"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.3 6.2a4.55 4.55 0 0 0 5.4 0" />
                <path d="M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3" />
                <path d="M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z" />
                <path d="m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8" />
              </svg>
              <h3 className="font-semibold text-black">Drone kuvaukset julkisivuille</h3>
            </li>
            <li className="flex flex-col items-center justify-center p-4 border rounded-md shadow-sm text-center">
              <svg
                className=" h-10 w-10 mb-4"
                fill="none"
                height="24"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <h3 className="font-semibold text-black">Elementtikorjaukset</h3>
            </li>
            <li className="flex flex-col items-center justify-center p-4 border rounded-md shadow-sm text-center">
              <svg
                className=" h-10 w-10 mb-4"
                fill="none"
                height="24"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 7h.01" />
                <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
                <path d="m20 7 2 .5-2 .5" />
                <path d="M10 18v3" />
                <path d="M14 17.75V21" />
                <path d="M7 18a6 6 0 0 0 3.84-10.61" />
              </svg>
              <h3 className="font-semibold text-black">Timanttityöt ja timanttiporaukset</h3>
            </li>
            <li className="flex flex-col items-center justify-center p-4 border rounded-md shadow-sm space-y-2 text-center">
              <svg
                className=" h-10 w-10 mb-4"
                fill="none"
                height="24"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
                <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
                <path d="M14.5 17.5 4.5 15" />
              </svg>
              <h3 className="font-semibold text-black">
                Kylpyhuoneiden kaatovalulattiat, viemäriasennukset, lattialämmitysputkistot, vedeneristykset,
                laatoitukset.
              </h3>
            </li>
            <li className="flex flex-col items-center justify-center p-4 border rounded-md shadow-sm space-y-2 text-center">
              <svg
                className=" h-10 w-10 mb-4"
                fill="none"
                height="24"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 22h-2" />
                <path d="M20 15v2h-2" />
                <path d="M4 19.5V15" />
                <path d="M20 8v3" />
                <path d="M18 2h2v2" />
                <path d="M4 11V9" />
                <path d="M12 2h2" />
                <path d="M12 22h2" />
                <path d="M12 17h2" />
                <path d="M8 22H6.5a2.5 2.5 0 0 1 0-5H8" />
                <path d="M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8" />
              </svg>
              <h3 className="font-semibold text-black">Julkisivujen korjaukset, pesut ja paikkaukset.</h3>
            </li>
            <li className="flex flex-col items-center justify-center p-4 border rounded-md shadow-sm text-center">
              <svg
                className=" h-10 w-10 mb-4"
                fill="none"
                height="24"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
                <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
                <path d="M4 15v-3a6 6 0 0 1 6-6h0" />
                <path d="M14 6h0a6 6 0 0 1 6 6v3" />
              </svg>
              <h3 className="font-semibold text-black">Huoneistoremontit</h3>
            </li>
            <li className="flex flex-col items-center justify-center p-4 border rounded-md shadow-sm space-y-2 text-center">
              <svg
                className=" h-10 w-10 mb-4"
                fill="none"
                height="24"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
              </svg>
              <h3 className="font-semibold text-black">Reklamaatiokorjaukset, vuositakuu korjaukset</h3>
            </li>
          </ul>
        </div>
      </section>
      {/*<div className="w-full px-5 sm:px-20 py-10 md:py-48 relative" style={{filter: 'saturate(0%) brightness(94%) contrast(120%)', backfaceVisibility: 'hidden'}}>
        <Image src={paku} alt='E1K Pakettiauto' fill={true} style={{ objectFit: 'cover'}} />
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
      </div>*/}
      <div className="w-full bg-blue-100 relative">
        <Image src={paku} alt='E1K Pakettiauto' fill={true} style={{ objectFit: 'cover', }} />
        <div style={{ background: 'rgba(40,40,40,0.84)' }} className='relative z-10 w-full h-full px-5 sm:px-20 py-48  text-white flex flex-col justify-center items-center py-10 text-center'>
          <h2 className=' font-bold text-4xl md:text-7xl py-2 md:py-6'>E1K Urakointi Oy</h2>
          <h6 className=' text-lg text-gray-300 md:text-2xl'>Luotettavaa ja ammattitaitoista osaamista</h6>
          <Link href='/galleria' className='w-40 px-5 mt-8 py-3 gap-2 bg-bg_brand_solid shadow-md text-black'>Galleriamme</Link>
        </div>
      </div>
    </main>
  )
}
