import Image from 'next/image'
import logo from '../assets/logo.png'
import Link from 'next/link'
import insta from '../assets/insta.svg'
import youtube from '../assets/youtube.svg'

export const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-neutral-900 w-full pb-14 mt-20'>
            <div className="w-56">
                <Image src={logo} alt='logo' />
            </div>
            <div className='flex flex-wrap gap-4 xl:w-[60%] items-center justify-around p-4'>
                <div className='max-w-40 min-h-48 justify-start  flex flex-col grow-[1] basis-[200]'>
                    <h2 className='text-white text-lg font-bold mb-4'>ADRESSE:</h2>
                    <address className='text-white text-sm mb-4'>Bändlistrasse 34, 8064 Zürich</address>
                </div>
                <div className='max-w-40 min-h-48 justify-start items-center flex flex-col grow-[1] basis-[200]'>
                    <h2 className='text-white text-lg font-bold mb-4'>CONTACT:</h2>
                    <p className='text-white text-sm mb-4'>+33 1 23
                    45 67 89</p>
                    <p className='text-white text-sm mb-4'>contact@site.com</p>
                </div>
                <div className='max-w-40 min-h-48 justify-start items-center flex flex-col grow-[1] basis-[200]'>
                <h2 className='text-white text-lg font-bold mb-4'>FOLGE UNS:</h2>
                <div className='flex justify-center gap-4'>
                <Link href='https://www.instagram.com/prayworksleep/'><Image src={insta} alt='insta' width={40} /></Link>
                <Link href='https://www.youtube.com/@jungeausfavela'><Image src={youtube} alt='youtube' width={40} /></Link>
                </div>
                </div>
            </div>
            <div className='text-center mt-7'>
                <p className='text-white text-sm md:text-md'>&copy; Copyright Pray Work Sleep Gym GmbH 2024</p>
                <p className='text-white text-sm md:text-md mt-2'>Created by <Link href="https://florencoportfolio.netlify.app/" className='underline'>Florenço's Studio</Link></p>
            </div>
        </div>
    )
}
