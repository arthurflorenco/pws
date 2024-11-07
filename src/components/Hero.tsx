'use client'
import Image from 'next/image'
import '../styles/Hero.css'
import logo from '../assets/logo.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';





export const Hero = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo('.logo-container', { y: 999, opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: 'power1.inOut',
        })

        // ScrollTrigger para controlar a rotação com o scroll
        gsap.to('.logo-rotate', {
            rotation: 360,
            repeat: -1,
            duration: 30,
        });

        gsap.to(['.btn1', '.btn2'], {
            x: 0,
            duration: 3
        })

        // Retornar uma função de limpeza
        return () => {

        };
    }, []);

    return (
        <div className='hero min-h-screen w-svw flex flex-col items-center justify-center mb-14 xl:mb-0'>
            <div className='logo-container'>
                <Image className='logo-rotate' src={logo} alt='logo' width={600} />
            </div>
            <div className='md:space-x-5 flex flex-col md:flex-row'>
                <button className='p-4 rounded-full bg-yellow-300 text-black w-[200px] font-extralight hover:bg-yellow-400 btn1'>Probetraining gefällig</button>
                <button className='p-4 rounded-full bg-transparent border-[1px] border-yellow-300 text-yellow-300 w-[200px] font-extralight hover:bg-yellow-400 hover:border-yellow-400 hover:text-black mt-4 md:mt-0 btn2'>Komm vorbei</button>
            </div>
        </div>
    )
}
