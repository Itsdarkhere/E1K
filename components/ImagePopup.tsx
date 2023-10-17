import React, { Dispatch, Fragment, SetStateAction } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

export default function ImagePopup(
    { popupOpen, setPopupOpen, pictures, index }:
    { popupOpen: boolean, setPopupOpen: Dispatch<SetStateAction<boolean>>, pictures: string[], index: number }) {
  return (
    <div id='modal_container' className='w-full h-full relative'>
      <Transition show={popupOpen} as={Fragment}>
        <Dialog open={popupOpen} onClose={() => setPopupOpen(false)} className=' fixed z-50 top-0 left-0 w-full h-full flex justify-center items-center'>
          <Dialog.Overlay className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50' />
          <div id='image-modal' className=' w-4/5 h-4/5 outline-none flex justify-center items-center pointer-events-none' onClick={() => setPopupOpen(false)}>
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              speed={300}
              observer={true}
              loop={true}
              pagination={true}
              initialSlide={index}
              className='h-full w-full pointer-events-none flex justify-center items-center'
            >
              {pictures.map((src, i) => (
                <SwiperSlide
                  className={`flex justify-center items-center swiper-slide swiper-lazy`}
                  key={i}
                >
                  <div className="swiper-lazy-preloader"></div>
                  <Image loading='lazy' fill className={` pointer-events-auto cursor-pointer object-contain swiper-lazy`} src={`/${src}.jpg`} alt='project' />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}