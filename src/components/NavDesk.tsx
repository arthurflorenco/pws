'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import logo from '../assets/logo.png'
import icon from '../assets/contactIcon.png'
import gsap from "gsap";
import '../styles/animations.css'

export const NavDesk = () => {

  useEffect(() => {
    gsap.to('.navbar', {
      y: 0,
      duration: 2,
    })

    return () => {
      gsap.killTweensOf('.navbar')
    }
  }, [])

  return (
    <nav className='xl:flex fixed justify-between items-center mt-2 max-w-[600px] w-[90%] px-6 py-2 bg-neutral-800 bg-opacity-70 backdrop-blur-md z-50 top-3 text-yellow-300 rounded-full hidden navbar'>
      <Link href='/'><Image src={logo} alt='logo' width={40} height={40} /></Link>
      <ul className='flex space-x-4'>
        <li><Link href='/' className='hover:text-white'>Startseite</Link></li>
        <li><Link href='#about' className='hover:text-white'>Über uns</Link></li>
        <li><Link href='#plans' className='hover:text-white'>Preise</Link></li>
        <li><Link href='#faq' className='hover:text-white'>Fragen?</Link></li>
      </ul>
      <button>
        <Link href='#footer'><Image width={30} height={30} src={icon} alt="contact-card" /></Link>
      </button>
    </nav>
  )
}
