'use client'
import Image from 'next/image'
import '../styles/Hero.css'
import logo from '../assets/logo.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
import Link from 'next/link';

export const Hero = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.logo-rotate', {
            rotate: 360,
            duration: 100,
            repeat: -1,
            ease: 'none'
        })
        gsap.to(['.btn1', '.btn2'], {
            x: 0,
            duration: 3
        })
    }, []);

    return (
        <div id='home' className='hero min-h-screen w-svw flex flex-col items-center justify-center'>
            <div className='logo-container overflow-hidden'>
                <Image className='logo-rotate' src={logo} alt='logo' width={600} loading="lazy" />
            </div>
            <div className='md:space-x-5 flex flex-col md:flex-row'>
                <Link href='https://wa.me/410768167644'>
                    <button className='p-4 rounded-full bg-yellow-300 text-black w-[200px] font-extralight hover:bg-yellow-400 btn1'>Probetraining gefällig?</button></Link>
                <Link href='https://www.google.com/search?q=B%C3%A4ndlistrasse+34%2C+8064+Z%C3%BCrich&rlz=1C5CHFA_enPT1090PT1090&oq=B%C3%A4ndlistrasse+34%2C+8064+Z%C3%BCrich&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQABgTGIAEMgoIAhAAGKIEGIkF0gEHNDI1ajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8'>
                    <button className='p-4 rounded-full bg-transparent border-[1px] border-yellow-300 text-yellow-300 w-[200px] font-extralight hover:bg-yellow-400 hover:border-yellow-400 hover:text-black mt-4 md:mt-0 btn2'>Komm vorbei</button></Link>
            </div>
        </div>
    )
}
