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

        const rotationAnimation = gsap.to('.logo-rotate', {
            rotation: 360,
            repeat: -1, // Faz a animação repetir infinitamente
            ease: 'none', // Para uma rotação contínua
            duration: 7 // Duração da rotação completa
        });

        // ScrollTrigger para controlar a rotação com o scroll
        gsap.to('.logo-rotate', {
            rotation: 360,
            scrollTrigger: {
                trigger: '.logo-rotate',
                start: 'top 80%',
                end: 'bottom',
                scrub: true,
                //markers: true
            }
        });

        // Retornar uma função de limpeza
        return () => {
            rotationAnimation.kill(); // Para parar a animação ao desmontar o componente
            ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Para limpar os triggers
        };
    }, []);

    return (
        <div className='hero min-h-screen w-svw flex flex-col items-center justify-center -translate-y-16'>
            <Image className='logo-rotate' src={logo} alt='logo' width={600} />
            <div className='md:space-x-5 flex flex-col md:flex-row'>
                <button className='p-4 rounded-full bg-yellow-300 text-black w-[200px] font-extralight hover:bg-yellow-400'>Probetraining gefällig</button>
                <button className='p-4 rounded-full bg-transparent border-[1px] border-yellow-300 text-yellow-300 w-[200px] font-extralight hover:bg-yellow-400 hover:border-yellow-400 hover:text-black mt-4 md:mt-0'>Komm besuchen</button>
            </div>
        </div>
    )
}
