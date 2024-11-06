'use client'
import React, { useEffect } from "react";
import woman from '../assets/woman.jpg'
import Image from 'next/image'
import Card from './ui/Card'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/animations.css'



export const About = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to('.woman', {
            y: 0,
            scrollTrigger: {
                trigger: '.timetables',
                start: 'top 80%',
                end: 'bottom 80%',
                scrub: true,
            }
        })

        gsap.to('.cardTime', {
            x: 0,
            scrollTrigger: {
                trigger: '.cardTime',
                start: 'top 80%',
                end: 'bottom 80%',
                scrub: true,
            }
        })

        gsap.to('.titleTime', {
            x: 0,
            scrollTrigger: {
                trigger: '.titleTime',
                start: 'top 80%',
                end: 'bottom 70%',
                scrub: true,
            }
        })

        gsap.to('.textTime', {
            y: 0,
            scrollTrigger: {
                trigger: '.titleTime',
                start: 'top 80%',
                end: 'bottom 50%',
                scrub: true,
            }
        })

    }, [])

    return (
        <div className='flex flex-col xl:flex-row w-full overflow-hidden timetables'>
            <div className='flex flex-col justify-center items-start px-4 w-full xl:w-[50%]'>
                <span className='text-yellow-100 text-md xl:text-xl font-semibold border-[1px] border-yellow-100 p-3 rounded-xl mb-3 titleTime'>Fahrpläne</span>
                <h1 className='text-yellow-300 text-5xl md:text-7xl font-bold titleTime'>Wann?</h1>
                <p className='text-white text-md xl:text-xl mt-4 flex items-center justify-center w-full md:px-4 textTime'>Wir trainieren dienstags, donnerstags um 18:30 Uhr und Sonntags um 12:00 Uhr in Altstetten.
                    Bei uns geht’s nicht nur um Technik, sondern auch um Fitness, Spaß und eine coole Gemeinschaft. Jeder kann mitmachen, ganz egal, welches Level du hast.</p>
                <div className='mt-2 w-full flex justify-center items-center cardTime'>
                    <Card />
                </div>
            </div>
            <div className="w-full xl:w-[50%] h[80%] p-4 md:p-14 xl:p-36 mt-4 md:mt-0 flex justify-center items-center">
                <Image className='rounded-3xl woman' src={woman} alt='logo' />
            </div>
        </div>
    )
}
