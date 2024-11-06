"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import imgCard3 from "../assets/imgCard1.jpg"
import imgCard2 from "../assets/imgCard2.jpg"
import imgCard1 from "../assets/imgCard3.jpg"
import imgCard4 from "../assets/imgCard4.jpg"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/animations.css'


export const Plans = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to('.textPlans', {
            y: 0,
            duration: 3,
            zIndex: 1,
            scrollTrigger: {
                trigger: '.title-text',
                start: 'top 80%',
                end: 'bottom 70%',
                scrub :true
            }
        })

        gsap.to('.titlePlans', {
            y: 0,
            duration: 2,
            zIndex: 1,
            scrollTrigger: {
                trigger: '.title-text',
                start: 'top 80%',
                end: 'bottom 80%',
                scrub: true
            }
        })

        return () => {
            gsap.killTweensOf('titlePlans', 'textPlans')
        }
    }, [])

    const cards = data.map((card, index) => (
        <Card key={index} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full py-20 plans">
            <div className="flex flex-col items-center justify-center text-center title-text">
                <span className='text-yellow-100 text-md xl:text-xl font-semibold border-[1px] border-yellow-100 p-3 rounded-xl mb-3 titlePlans'>Unsere Pläne</span>
                <h1 className='text-yellow-300 text-5xl md:text-7xl font-bold titlePlans z-30'>1 Monat Gratis Für Neus</h1>
                <p className='text-white text-md xl:text-xl mt-4 textPlans'>
                    Wenn du von einem Mitglied weiterempfohlen wirst und dich anmeldest, bekommst du den ersten Monat gratis. So kannst du den Club in Ruhe ausprobieren und leicht ins Training starten!
                </p>
            </div>
            <Carousel items={cards} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <>
            {[...new Array(3).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-neutral-700 dark:text-neutral-200">
                                The first rule of Apple club is that you boast about Apple club.
                            </span>{" "}
                            Keep a journal, quickly jot down a grocery list, and take amazing
                            class notes. Want to convert those notes to text? No problem.
                            Langotiya jeetu ka mara hua yaar is ready to capture every
                            thought.
                        </p>
                        <Image
                            src={imgCard1}
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                        />
                    </div>
                );
            })}
        </>
    );
};

const data = [
    {
        category: "",
        title: "3 Monats Abonnement",
        src: imgCard1,
        price: 220,
        content: <DummyContent />,
    },
    {
        category: "",
        title: "6 Monats Abonnement",
        src: imgCard2,
        price: 390,
        content: <DummyContent />,
    },
    {
        category: "",
        title: "12 Monats Abonnement",
        src: imgCard3,
        price:699,
        content: <DummyContent />,
    },

    {
        category: "1h training",
        title: "Gruppentraining/ Lektion",
        src: imgCard4,
        price: 20,
        content: <DummyContent />,
    },
];