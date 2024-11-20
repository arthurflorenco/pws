'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import menu from '../assets/menu.svg'
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import '../styles/animations.css'

export const NavMobile = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    const scrollToSection = (target: string) => {
        setIsOpen(false);
        gsap.to(window, {
            duration: 2, // Duração da animação em segundos
            scrollTo: target, // O alvo para onde você quer rolar
            ease: "power2.inOut", // Efeito de easing
        });
    };


    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin)
        gsap.to('.navbar', {
            duration: 2,
            y: 0
        })
        if (isOpen) {
            gsap.fromTo('.files', { opacity: 0.5, y: '-100%' }, {
                opacity: 1.5,
                y: 0,
                duration: 0.5,
                ease: "power1.inOut"
            });
        }
        return () => {
            gsap.killTweensOf('.navbar');
            gsap.killTweensOf('.files');
        }
    }, [isOpen])

    return (
        <nav className={`z-50 px-6 py-3 top-0 fixed text-yellow-300 navbar w-svw ${isOpen ? 'bg-opacity-70 backdrop-blur-md bg-neutral-900' : 'bg-transparent'} `}>
            <div className="container flex justify-between items-center w-full">
                <div className=''>
                    <Link href='/' onClick={() => scrollToSection("#home")}><Image src={logo} alt='Logo' loading="lazy" width={40} height={40} /></Link>
                </div>
                <div onClick={toggleNavbar} className={`rounded-full p-4 absolute right-3  transform xl:hover:scale-125 transition-all duration-300 ${isOpen ? 'bg-transparent' : 'bg-black'}`}>
                    <Image src={menu} alt='menu' width={20} />
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} files text-yellow-300 z-10 p-2 text-center text-5xl flex flex-col justify-around items-center h-screen`}>
                <ul className="flex flex-col space-y-16 justify-between items-center w-full bebas text-6xl md:text-7xl">
                    <li><Link href='/' className='hover:text-white' onClick={() => scrollToSection("#home")}>STARTSEITE</Link></li>
                    <li><Link href='#about' className='hover:text-white about-btn' onClick={() => scrollToSection("#about")}>ÜBER UNS</Link></li>
                    <li><Link href='#plans' className='hover:text-white' onClick={() => scrollToSection("#plans")}>PREISE</Link></li>
                    <li><Link href='#faq' className='hover:text-white' onClick={() => scrollToSection("#faq")}>FRAGEN?</Link></li>
                </ul>
                <div className='w-svw p-3 xl:p-5'>
                    <div className='h-[1px] w-full border-b-2 border-b-yellow-300' />
                    <div className='w-full pb-10 pt-5 flex flex-col items-start text-lg space-y-4 font-extralight space-grotesk text-start'>
                        <span>ZRH +41 076 816 76 44</span>
                        <span><Link href='https://www.instagram.com/prayworksleep/'>Instagram</Link> /<Link href='https://www.youtube.com/@jungeausfavela'>Youtube</Link></span>
                        <span>Bändlistrasse 34, 8064 Zürich</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}


