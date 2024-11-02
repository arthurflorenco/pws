import Image from 'next/image'
import React from 'react'
import promotionImg from '../assets/promotion.jpg'

export const Promotion = () => {
    return (
        <div className='flex flex-col xl:flex-row w-full'>
            <div className='flex flex-col justify-center items-start px-4 w-full xl:w-[50%]'>
                <span className='text-yellow-100 text-xl font-semibold border-[1px] border-yellow-100 p-3 rounded-xl mb-3'>Nur für kurze Zeit</span>
                <h1 className='text-yellow-300 text-5xl md:text-7xl font-bold'>Probetraining <br /> gefällig?</h1>
                <p className='text-white text-xl mt-4'>
                    Melde dich einfach per DM oder Nachricht bei uns an und komm zu einem Probetraining vorbei. Wir freuen uns immer über neue Gesichter! 
                    Komm vorbei und erlebe, wie viel Spaß Boxen machen kann!
                </p>
            </div>
            <div className=" w-full xl:w-[50%] p-2 mt-4 md:mt-0">
                <Image src={promotionImg}
                alt="Boxer"
                className="w-full rounded-xl h-full object-cover object-center"
                />
            </div>
        </div>
    )
}
