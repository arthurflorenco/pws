'use client'
import React, { useEffect } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/animations.css'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/Accordion"


export const FAQ = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo('.questionFAQ',{opacity:0} ,{
            opacity:1,
            x: 0,
            scrollTrigger: {
                trigger: '.questionFAQ',
                start: 'top 80%',
                end: 'bottom 80%',
                scrub: true,
            }
        })

        gsap.fromTo('.titleFAQ',{opacity:0} ,{
            opacity:1,
            y: 0,
            scrollTrigger: {
                trigger: '.faq',
                start: 'top 80%',
                end: 'bottom 80%',
                scrub: true,
            }
        })

        return () => {
            gsap.killTweensOf('.titleFAQ', '.questionFAQ')
        }

    }, [])

    return (
        <div className='flex justify-center items-center flex-col w-full px-4 mt-20 text-center faq'>
            <span className='text-yellow-100 text-md xl:text-xl font-semibold border-[1px] border-yellow-100 p-3 rounded-xl mb-3 titleFAQ'>FAQ</span>
            <h1 className='text-yellow-300 text-5xl md:text-7xl font-bold titleFAQ'>Häufig gestellte Fragen</h1>
            <div className='w-full text-yellow-200 xl:p-20 questionFAQ'>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-xl xl:text-4xl">Is it accessible?</AccordionTrigger>
                        <AccordionContent className="text-start text-neutral-300 text-md xl:text-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolorum obcaecati delectus odio blanditiis laudantium, quas saepe magnam reiciendis voluptas sint! Repellendus, eius suscipit dolores consectetur recusandae a asperiores culpa.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-xl xl:text-4xl">Is it accessible?</AccordionTrigger>
                        <AccordionContent className="text-start text-neutral-300 text-md xl:text-xl">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique perspiciatis, odio nemo a distinctio rerum? Quaerat nostrum ex ut natus? Consequuntur corporis esse modi consectetur? Quia voluptatibus sint fugiat necessitatibus!
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-xl xl:text-4xl">Is it accessible?</AccordionTrigger>
                        <AccordionContent className="text-start text-neutral-300 text-md xl:text-xl">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt reiciendis dolorum eveniet, sint earum deleniti porro blanditiis officiis ipsam nihil voluptas pariatur ipsum dicta repudiandae magni corrupti quis expedita?
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-xl xl:text-4xl">Is it accessible?</AccordionTrigger>
                        <AccordionContent className="text-start text-neutral-300 text-md xl:text-xl">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt reiciendis dolorum eveniet, sint earum deleniti porro blanditiis officiis ipsam nihil voluptas pariatur ipsum dicta repudiandae magni corrupti quis expedita?
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

            </div>
        </div>
    )
}
