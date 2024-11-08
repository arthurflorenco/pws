"use client";
import React, { useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";
import Giacomo from '../assets/giacomo.jpg'
import Manu from '../assets/imgCard4.jpg'
import toGiacomo from '../assets/toGiacomo.jpg'
import toManu from '../assets/toManu.jpg'
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
        (<div className="w-full flex flex-col justify-center prof">
            <div className="px-5 flex flex-col justify-center items-start">
                <span className='text-yellow-100 text-md xl:text-xl font-semibold border-[1px] border-yellow-100 p-3 rounded-xl mb-3 titleProf'>Lehrkräfte</span>
                <h1 className='text-yellow-300 text-5xl md:text-7xl font-bold titleProf'>Wer sind <br /> unsere Lehrer?</h1>
                <p className='text-white text-start text-md xl:text-xl mt-4 w-full titleProf'>Click on the photo to find out more.</p>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vel nulla eveniet nesciunt eligendi temporibus, alias eos veritatis porro, corporis sapiente, perspiciatis dolor totam? Vitae, delectus. Assumenda alias dicta labore!
            </p>
        </div>)
    );
};

const SkeletonTwo = () => {
    return (
        (<div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Giacomo La Rocca
            </p>
            <p className="font-normal text-base text-white">Hallo, Ich bin Giacomo</p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti cupiditate et, recusandae fuga tempora pariatur qui sapiente eos aperiam expedita fugiat, atque adipisci voluptatum facilis asperiores distinctio molestias magni!
            </p>
        </div>)
    );
};
const SkeletonThree = () => {
    return (
        (<div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Manu
            </p>
            <p className="font-normal text-base text-white">Hallo, ich bin Manu</p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum expedita ipsum et officiis animi consectetur mollitia alias corrupti quia, voluptatem doloremque debitis illo! Ex quos eaque et omnis accusamus! Inventore.
            </p>
        </div>)
    );
};
const SkeletonFour = () => {
    return (
        (<div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Manu
            </p>
            <p className="font-normal text-base text-white">Hallo, Ich bin Manu</p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rerum voluptates quae natus? Corrupti accusamus sint ab voluptatem vitae odit voluptatibus aperiam cupiditate, est, quo mollitia beatae repudiandae maxime quisquam.
            </p>
        </div>)
    );
};

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: "md:col-span-2",
        thumbnail: toGiacomo,
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail:
            Giacomo,
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: "col-span-1",
        thumbnail:
            Manu,
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: "md:col-span-2",
        thumbnail:
            toManu,
    },
];
