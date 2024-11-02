'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../assets/logo.png'
import icon from '../assets/contactIcon.png'

export const NavDesk = () => {
  return (
    <nav className='hidden xl:flex justify-between items-center mt-2 max-w-[600px] w-[90%] px-6 py-2 bg-neutral-800 bg-opacity-70 backdrop-blur-md z-10 sticky top-3 text-yellow-300 rounded-full'>
      <Image src={logo} alt='logo' width={40} height={40} />
      <ul className='flex space-x-4'>
        <li><Link href='/' className='hover:text-white'>Startseite</Link></li>
        <li><Link href='/' className='hover:text-white'>Über</Link></li>
        <li><Link href='/' className='hover:text-white'>Preise</Link></li>
      </ul>
      <button>
        <Link href='/login'><Image  width={30} height={30 }src={icon} alt="contact-card"/></Link>
      </button>
    </nav>
  )
}
 