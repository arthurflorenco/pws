'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '../assets/logo.png'
import icon from '../assets/contactIcon.png'
import menu from '../assets/menu.svg'

export const NavMobile = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className={`bg-opacity-70 backdrop-blur-md z-50 px-6 py-3  bg-neutral-800  left-0 right-0   fixed xl:hidden text-yellow-300  mx-auto ${isOpen ? 'w-svw top-0 rounded-none' : 'top-3 w-[90%] rounded-3xl'}`}>
            <div className="container flex justify-between items-center w-full">
                <div
                    onClick={toggleNavbar}
                    className=""
                >
                    <Image src={menu} alt='menu' width={20} />
                </div>
                <div><Image src={logo} alt='Logo' width={40} height={40} /></div>
                <button>
                    <Link href='/login'><Image width={30} height={30} src={icon} alt="contact-card" /></Link>
                </button>
            </div>
            <div className={`xl:hidden ${isOpen ? 'block' : 'hidden'} text-yellow-300   z-10 p-2 h-screen text-center text-5xl flex justify-center items-center`}>
                <ul className="flex flex-col space-y-28 mt-3 justify-center items-center">
                    <li><Link className='mx-4' href='/'>Startseite</Link></li>
                    <li><Link className='mx-4' href='/'>Über</Link></li>
                    <li><Link className='mx-4' href='/'>Zweifeln</Link></li>
                    <li><Link className='mx-4' href='/'>Preise</Link></li>
                </ul>
            </div>
        </nav>
    )
}
