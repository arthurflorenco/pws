'use client'
import Image from 'next/image'
import '../styles/Text.css'
import logo from '../assets/logo.png'

export const Text
    = () => {
        return (
            <div className=' h-32 bg-yellow-400 text-black w-full flex overflow-hidden'>
                <div className='text-infinite'>
                    <span className='flex items-center font-bold text-6xl'>
                        <Image className='mx-10' src={logo} alt='logo' width={70} />Pray
                        <Image className='mx-10' src={logo} alt='logo' width={70} />Work
                        <Image className='mx-10' src={logo} alt='logo' width={70} />Sleep
                        <Image className='mx-10' src={logo} alt='logo' width={70} />Pray
                        <Image className='mx-10' src={logo} alt='logo' width={70} />Work
                        <Image className='mx-10' src={logo} alt='logo' width={70} />Sleep
                    </span>

                </div>
            </div>
        )
    }
