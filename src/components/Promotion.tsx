'use client'
import Image from 'next/image'
import promotionImg from '../assets/promotion.jpeg'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/animations.css'

export const Promotion = () => {
    const titleRef = useRef<HTMLParagraphElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo('.boxer', { opacity: 0 }, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: '.promotion',
                start: 'top 80%',
                end: 'bottom 80%',
                scrub: true,
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
                    duration: 1,
                    scrollTrigger: {
                        trigger: '.promotion',
                        start: 'top 80%',
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }
        if (titleRef.current) {
            splitText(titleRef.current);
            gsap.fromTo(
                titleRef.current.children,
                { opacity: 0, y: -100 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.01,
                    duration: 1,
                    scrollTrigger: {
                        trigger: '.promotion',
                        start: 'top 80%',
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }


        return () => {
            gsap.killTweensOf('title')
            gsap.killTweensOf('titlePromotion')
            gsap.killTweensOf('textPromotion')
        }
    }, [])

    return (
        <div className='flex flex-col xl:flex-row w-full md:pt-10 promotion'>
            <div className='flex flex-col justify-center items-start px-4 w-full xl:w-[50%] '>
                <span className='text-yellow-100 text-md xl:text-xl font-semibold border-[1px] border-yellow-100 p-3 rounded-xl mb-3 tra titlePromotion'>Nur für kurze Zeit</span>
                <h1 ref={titleRef} className='text-yellow-300 text-5xl md:text-7xl font-bold titlePromotion'>Probetraining <br /> gefällig?</h1>
                <p ref={textRef} className='text-white text-md xl:text-xl mt-4 textPromotion'>
                    Melde dich einfach per DM oder Nachricht bei uns an und komm zu einem Probetraining vorbei. Wir freuen uns immer über neue Gesichter!
                    Komm vorbei und erlebe, wie viel Spaß Boxen machen kann!
                </p>
            </div>
            <div className=" w-full xl:w-[50%] p-4 md:p-14 xl:p-20 mt-4 md:mt-0">
                <Image src={promotionImg}
                    alt="Boxer"
                    className="w-full boxer rounded-3xl h-full object-cover object-center"
                    width={500}
                    height={500}
                    priority
                />
            </div>
        </div>
    )
}
