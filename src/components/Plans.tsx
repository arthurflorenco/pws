"use client";
import React, { useEffect } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import imgCard3 from "../assets/imgCard1.webp"
import imgCard2 from "../assets/imgCard2.webp"
import imgCard1 from "../assets/imgCard3.webp"
import imgCard4 from "../assets/imgCard4.webp"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/animations.css'


export const Plans = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo('.textPlans', { opacity: 0 }, {
            opacity: 1,
            y: 0,
            duration: 3,
            zIndex: 1,
            scrollTrigger: {
                trigger: '.title-text',
                start: 'top 80%',
                end: 'bottom 70%',
                scrub: true
            }
        })

        gsap.fromTo('.titlePlans', { opacity: 0 }, {
            opacity: 1,
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
        <div className="w-full h-full py-20 plans" id="plans">
            <div className="flex flex-col items-start px-3 md:items-center justify-center text-start md:text-center title-text">
                <span className='text-yellow-100 text-md xl:text-xl font-semibold border-[1px] border-yellow-100 p-3 rounded-xl mb-3 titlePlans'>Unsere Pläne</span>
                <h1 className='text-yellow-300 text-5xl md:text-7xl font-bold titlePlans z-30'>Erschwingliche Trainingspläne für alle</h1>
                <p className='text-white text-md xl:text-xl mt-4 textPlans'>
                    Trainiere mit den Besten und entwickle dich in deinem eigenen Tempo! Wir bieten flexible Tarife für Anfänger und erfahrene Athleten, mit dynamischen Trainings, professioneller Betreuung und einer erstklassigen Ausstattung, damit du deine Boxziele erreichen kannst.
                </p>
            </div>
            <Carousel items={cards} />
        </div>
    );
}



const data = [
    {
        category: "",
        title: "1 Monat Abonnement",
        src: imgCard4,
        price: 200,
    },
    {
        category: "",
        title: "3 Monats Abonnement",
        src: imgCard1,
        price: 400,
    },
    {
        category: "",
        title: "6 Monats Abonnement",
        src: imgCard2,
        price: 600,
    },
    {
        category: "",
        title: "12 Monats Abonnement",
        src: imgCard3,
        price: 900,
    },
];