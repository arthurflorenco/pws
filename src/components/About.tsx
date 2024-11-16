'use client'
import React, { useEffect, useRef } from "react";
import woman from '../assets/woman.jpeg'
import Image from 'next/image'
import Card from './ui/Card'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/animations.css'



export const About = () => {
    const titleRef = useRef<HTMLParagraphElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo('.woman', { opacity: 0 }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: '.timetables',
                //start: 'top 80%',
                //end: 'bottom 80%',
                scrub: true,
            }
        })

        gsap.fromTo('.cardTime', { opacity: 0 }, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: '.cardTime',
                start: 'top 80%',
            }
        })

        gsap.fromTo('.titleTime', { opacity: 0 }, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            scrollTrigger: {
                trigger: '.titleTime',
                start: 'top 80%',
            }
        })

        // Animação do texto
        const splitText = (element: HTMLParagraphElement) => {
            const text = element.innerText.split('').map((char, index) => (
                `<span class="char" key=${index}>${char}</span>`
            )).join('');
            element.innerHTML = text;
        };

        if (textRef.current) {
            splitText(textRef.current);
            gsap.fromTo(
                textRef.current.children,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.01,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: '.titleTime',
                        start: 'top 80%',
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }

    }, [])

    return (
        <div className='flex flex-col xl:flex-row w-full overflow-hidden timetables' id="about">
            <div className='flex flex-col justify-center items-start px-4 pt-20 w-full xl:w-[50%]'>
                <span className='text-yellow-100 text-md xl:text-xl font-semibold border-[1px] border-yellow-100 p-3 rounded-xl mb-3 titleTime'>Über uns</span>
                <h1 className='text-yellow-300 text-5xl md:text-7xl font-bold titleTime'>Verändere dein leben!</h1>
                <p ref={textRef} className='text-white text-md xl:text-xl mt-4  w-full textTime'>Unser Ziel ist es, ein qualitativ hochwertiges Boxtraining anzubieten, das unseren Schülern hilft, sich zu verbessern, ihre Ziele zu erreichen und selbstbewusster und gesünder zu leben. Wir trainieren <span className="text-yellow-300">dienstags, donnerstags um 18:30 Uhr </span>  und <span className="text-yellow-300">Sonntags um 12:00 Uhr </span> in Altstetten.
                    Bei uns geht&apos;s nicht nur um Technik, sondern auch um Fitness, Spaß und eine coole Gemeinschaft. Jeder kann mitmachen, ganz egal, welches Level du hast.</p>
                <div className='mt-2 w-full flex justify-center items-center cardTime'>
                    <Card />
                </div>
            </div>
            <div className="w-full xl:w-[50%] h[80%] p-4 md:p-14 xl:p-36 mt-4 md:mt-0 flex justify-center items-center">
                <Image className='rounded-3xl woman' width={600} loading="lazy" src={woman} alt='logo' />
            </div>
        </div>
    )
}
