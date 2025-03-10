'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap'
import Image from 'next/image';
import arrow from '../assets/arrow.png'
import menu from '../assets/menu.svg'
import TextPlugin from 'gsap/TextPlugin';
import logo from '../assets/logo.png'

const menuLinks = [
    { label: 'STARTSEITE', path: '/', id: '001' },
    { label: 'ÜBER UNS', path: '#about', id: '002' },
    { label: 'PREISE', path: 'https://www.sportsnow.ch/go/pray-work-sleep/prices?locale=de', id: '003' },
    { label: 'TRAINER', path: '#coaches', id: '004'},
    { label: 'FRAGEN?', path: '#faq', id: '005' },
]

const Menu: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const container = useRef<HTMLDivElement>(null)
    const tl = useRef<gsap.core.Timeline | null>(null)
    gsap.registerPlugin(TextPlugin)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useGSAP(() => {
        gsap.set(".menu-link-item-holder", { y: 90 })

        tl.current = gsap.timeline({ paused: true })
            .to('.menu-overlay', {
                duration: 1.25,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                ease: 'power4.inOut',
            })
            .to('.menu-link-item-holder', {
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power4.inOut',
                delay: -0.75
            })
    }, { scope: container })

    useEffect(() => {
        if (tl.current) {
            if (isMenuOpen) {
                tl.current.play();
            } else {
                tl.current.reverse();
            }
        }
    }, [isMenuOpen])

    return (
        <div ref={container} className='menu-container bebas'>
            <div className="menu-bar">
                <div className="menu-logo">
                    <Link href='/'>
                        <Image src={logo} width={50} alt='logo' />
                    </Link>
                </div>
                <div className="menu-open p-2 rounded-full lg:bg-transparent hover:bg-yellow-500 hover:cursor-pointer transform ease-linear transition-all duration-300" onClick={toggleMenu}>
                    <Image src={menu} alt='menu' width={30} />
                </div>
            </div>
            <div className="menu-overlay backdrop-blur-3xl">
                <div className="menu-overlay-bar">
                    <div className="menu-logo">
                    <Link href='/'>
                        <Image src={logo} width={50} alt='logo' />
                    </Link>
                    </div>
                    <div className="menu-close block lg:hidden" onClick={toggleMenu}>
                        <p className='text-yellow-300 flex uppercase text-2xl font-medium leading-[100%]'>&#x2715;</p>
                    </div>
                </div>
                <div className="menu-close-icon" onClick={toggleMenu}>
                    <p className='text-yellow-300 flex uppercase text-sm font-medium leading-[100%]'>&#x2715;</p>
                </div>
                <div className="menu-copy">
                    <div className="menu-links">
                        {menuLinks.map((link, index) => (
                            <div className="menu-link-item" key={index}>
                                <div className="menu-link-item-holder" onClick={toggleMenu}>
                                    <Link href={link.path} className='menu-link'><span className='flex items-start'>{link.label}<sup className='font-light text-sm italic mt-5'>({link.id})</sup></span></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="menu-info mb-36 lg:mb-0 border-neutral-500 border-t-2 lg:border-t-0">
                        <div className="menu-info-col gap-3 pt-4">
                            <a href="https://www.youtube.com/@jungeausfavela" className='text-yellow-300 flex uppercase text-xl font-medium leading-[100%]'>Youtube <Image src={arrow} height={20} alt='arrow' /></a>
                            <a href="https://www.instagram.com/prayworksleep/" className='text-yellow-300 flex uppercase text-xl font-medium leading-[100%]'>Instagram <Image src={arrow} height={20} alt='arrow' /></a>
                        </div>
                        <div className="menu-info-col gap-3">
                            <a href="tel:+410768167644" className='text-yellow-300 flex uppercase text-xl font-medium leading-[100%]'>Phone <Image src={arrow} height={20} alt='arrow' /></a>
                            <a href="https://maps.app.goo.gl/28RRG12NoSPrx2hV6" className='text-yellow-300 flex uppercase text-xl font-medium leading-[100%]'>Adresse <Image src={arrow} height={20} alt='arrow' /></a>
                        </div>
                    </div>
                </div>
                <div className="menu-preview">
                    <p className='text-yellow-300 flex uppercase text-4xl font-medium leading-[100%]'>{`[EST. 24' ZHR]`}</p>
                </div>
            </div>
        </div>
    )
}

export default Menu