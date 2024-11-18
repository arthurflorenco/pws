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
        gsap.fromTo('.logo-rotate', { scale: 0.5 }, {
            scale: 1,
            duration: 3,
            ease: 'power1.in',
        });
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
        <div className='hero min-h-screen w-svw flex flex-col items-center justify-center'>
            <div className='logo-container overflow-hidden'>
                <Image className='logo-rotate' src={logo} alt='logo' width={600} loading="lazy" />
            </div>
            <div className='md:space-x-5 flex flex-col md:flex-row'>
                <Link href='https://www.instagram.com/direct/t/17844480402316101'>
                    <button className='p-4 rounded-full bg-yellow-300 text-black w-[200px] font-extralight hover:bg-yellow-400 btn1'>Probetraining gefällig?</button></Link>
                <Link href='https://www.instagram.com/direct/t/17844480402316101'>
                    <button className='p-4 rounded-full bg-transparent border-[1px] border-yellow-300 text-yellow-300 w-[200px] font-extralight hover:bg-yellow-400 hover:border-yellow-400 hover:text-black mt-4 md:mt-0 btn2'>Komm vorbei</button></Link>
            </div>
        </div>
    )
}
