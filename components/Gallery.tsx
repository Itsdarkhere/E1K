'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import arrow from '../public/arrow.svg'

export default function Gallery() {
    const [currentPage, setCurrentPage] = useState(1);

    const imagesPerPage = 12;
    const totalImages = 24;
    const totalPages = Math.ceil(totalImages / imagesPerPage);
    // Create an array from 1 to 34 for the image filenames
    const imageNames = Array.from({ length: totalImages }, (_, index) => (index + 1).toString());

    // Function to update the current page
    const goToPage = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const isDisabled = (type: string) => {
        if (type === 'previous' && currentPage === 1) {
            return true;
        } else if (type === 'next' && currentPage === totalPages) {
            return true;
        }
        return false;
    };

    const [imageLoading, setImageLoading] = useState(true);

    useEffect(() => {
        setImageLoading(true);
        const timer = setTimeout(() => {
          setImageLoading(false);
        }, 500); // This timeout should be adjusted based on your transition duration
        return () => clearTimeout(timer);
    }, [currentPage]);

    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const currentImages = imageNames.slice(startIndex, endIndex);

  return (
    <div className="w-full px-5 sm:px-20 bg-white flex flex-col justify-center items-center  py-5 sm:py-44">
        <div className="max-w-[1080px] w-full grid grid-cols-1 grid-rows-auto sm:grid-cols-4 sm:grid-rows-3 gap-4 border-b pb-7">
            {currentImages.map((name, index) => (
                <div key={index} className="relative" style={{ paddingBottom: '100%' }}>
                    <Image
                        src={`/${name}.jpg`}
                        fill={true} style={{ objectFit: 'cover'}}
                        alt={`Gallery image ${name}`}
                        onLoadingComplete={() => setImageLoading(false)}
                        key={`${name}_${currentPage}`}
                        className={`transition-opacity duration-500 ${imageLoading ? 'opacity-0' : 'opacity-100'}`} // Tailwind classes for transition and opacity
                    />
                </div>
            ))}
        </div>
        <div className="max-w-[1080px] mt-5 w-full flex justify-between items-center text-text_secondary">
            <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={isDisabled('previous')}
                className={`flex border p-2 sm:p-0 border-border_secondary sm:border-0 flex-row items-baseline gap-2 ${isDisabled('previous') ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                <Image src={arrow} className="rotate-180" alt="arrow left" width={12} height={12} />
                <p className="hidden font-semibold text-sm sm:flex">Edellinen</p>
            </button>
            <div className="flex flex-row gap-1">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToPage(index + 1)}
                        className={`px-4 py-3 ${currentPage === index + 1 ? 'bg-bg_secondary' : 'bg-white'} hover:bg-bg_secondary_hover`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={isDisabled('next')}
                className={`flex border items-baseline p-2 sm:p-0 border-border_secondary sm:border-0 flex-row gap-2 ${isDisabled('next') ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                <p className="hidden font-semibold text-sm sm:flex">Seuraava</p>
                <Image src={arrow} alt="arrow right" width={12} height={12} />
            </button>
        </div>
    </div>
    )
}
