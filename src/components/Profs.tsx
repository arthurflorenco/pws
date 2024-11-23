"use client";
import React, { useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";
import Giacomo from '../assets/giacomo.jpeg'
import Manu from '../assets/manu.jpeg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/animations.css'


export function Profs() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to('.cardProf', {
            y: 0,
            scrollTrigger: {
                trigger: '.prof',
                start: 'top 80%',
                end: 'bottom 80%',
                scrub: true,
            }
        })

        gsap.fromTo('.titleProf', { opacity: 0 }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: '.prof',
                start: 'top 80%',
                end: 'bottom 100%',
                scrub: true,
            }
        })

    }, [])

    return (
        (<div className="w-full flex flex-col justify-center prof" id="coaches">
            <div className="px-5 flex flex-col justify-center items-start">
                <span className='text-yellow-100 text-md xl:text-xl font-semibold border-[1px] border-yellow-100 p-3 rounded-xl mb-3 titleProf'>Trainer</span>
                <h1 className='text-yellow-300 text-5xl md:text-7xl font-bold titleProf'>Wer sind <br /> UNSERE COACHES?</h1>
                <p className='text-white text-start text-md xl:text-xl mt-4 w-full titleProf'>Klick auf das Bild mehr zu erfahren</p>
            </div>
            <div className="h-screen cardProf">
                <LayoutGrid cards={cards} />
            </div>
        </div>)
    );
}

const SkeletonOne = () => {
    return (
        (<div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Giacomo La Rocca
            </p>
            <p className="font-normal text-base text-white">Hallo, Ich bin Giacomo</p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Als international erfahrener Boxer mit zahlreichen Siegen im Gepäck teile ich meine Begeisterung und mein Know-how für das Boxen mit euch. Für mich steht die Technik im Mittelpunkt - die perfekte Kombination aus präziser Fußarbeit, klugem Timing und kraftvollen Schlägen. Mein Ziel ist es, euch nicht nur fit zu machen, sondern euch die strategische Seite des Boxens näherzubringen. Egal, ob ihr eure ersten Schritte im Ring macht oder bereits fortgeschritten seid - ich unterstütze euch dabei, eure Fähigkeiten auf das nächste Level zu bringen.
            </p>
        </div>)
    );
};

const SkeletonTwo = () => {
    return (
        (<div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Manu
            </p>
            <p className="font-normal text-base text-white">Hallo, Ich bin Manu</p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Mit meiner langjährigen Erfahrung im Boxen, bei der ich nicht nur national, sondern auch international gekämpft und gewonnen habe, möchte ich mein Wissen und meine Leidenschaft an euch weitergeben. Mein Schwerpunkt liegt darauf, euch die Technik des Boxens von Grund auf beizubringen - mit besonderem Fokus auf saubere Bewegungsabläufe, präzise Schläge und viel Fußarbeit. Boxen ist für mich mehr als ein Sport, es ist eine Kunst. Egal, ob ihr Anfänger seid oder schon Erfahrung habt, bei mir lernt ihr, wie ihr im Ring das Beste aus euch herausholt.
            </p>
        </div>)
    );
};


const cards =  
   
    [
        {
            id: 1,
            content: <SkeletonOne />,
            className: "md:col-span-2",
            thumbnail: Giacomo,
        },
        {
            id: 2,
            content: <SkeletonTwo />,
            className: "col-span-1",
            thumbnail:
                Manu,
        },
    ];
