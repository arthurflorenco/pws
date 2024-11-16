'use client'
import React, { useEffect } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/animations.css'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/Accordion"


export const FAQ = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo('.questionFAQ', { opacity: 0 }, {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.questionFAQ',
                start: 'top 80%',
                // end: 'bottom 80%',
                // scrub: true,
            }
        })

        gsap.fromTo('.titleFAQ', { opacity: 0 }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.faq',
                start: 'top 80%',
                //end: 'bottom 80%',
                //scrub: true,
            }
        })

        return () => {
            gsap.killTweensOf('.titleFAQ', '.questionFAQ')
        }

    }, [])

    return (
        <div className='flex justify-center items-center flex-col w-full px-4 mt-20 text-center faq' id="faq">
            <span className='text-yellow-100 text-md xl:text-xl font-semibold border-[1px] border-yellow-100 p-3 rounded-xl mb-3 titleFAQ'>FAQ</span>
            <h1 className='text-yellow-300 text-5xl md:text-7xl font-bold titleFAQ'>Häufig gestellte fragen
            </h1>
            <div className='w-full text-yellow-200 xl:p-20 questionFAQ'>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-xl xl:text-4xl text-start">Kann ich trainieren, wenn ich noch nie geboxt habe?
                        </AccordionTrigger>
                        <AccordionContent className="text-start text-neutral-300 text-md xl:text-xl">
                            Natürlich! Bei uns sind Anfänger herzlich willkommen, und viele unserer Mitglieder haben ohne Vorkenntnisse begonnen. Unser Trainerteam wird dir die Grundlagen Schritt für Schritt beibringen, damit du dich sicher und wohl fühlst. In unseren Anfängerkursen lernst du alles, was du brauchst - ganz gleich, ob du deine Fitness verbessern, Stress abbauen oder die Techniken des Boxens erlernen möchtest.

                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-xl xl:text-4xl text-start">Was sind die Vorteile des Boxens?
                        </AccordionTrigger>
                        <AccordionContent className="text-start text-neutral-300 text-md xl:text-xl">
                            Boxen ist ein effektives Ganzkörpertraining, das dir sowohl körperlich als auch mental sehr viel bringt. Es verbessert deine Ausdauer und Kraft, schärft deine Koordination und Reflexe und steigert dein Selbstbewusstsein. Viele unserer Mitglieder schätzen das intensive Training und den Stressabbau, den es bietet. Außerdem bist du Teil einer motivierenden Gemeinschaft, die sich gegenseitig unterstützt und antreibt.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-xl xl:text-4xl text-start">Muss ich irgendwelche Ausrüstung kaufen?
                        </AccordionTrigger>
                        <AccordionContent className="text-start text-neutral-300 text-md xl:text-xl">
                            Für den Einstieg brauchst du keine eigene Ausrüstung. Wir stellen dir die grundlegenden Sachen wie Boxhandschuhe und Bandagen zur Verfügung. Wenn du regelmäßig trainierst, kann es sinnvoll sein, dir eigene Handschuhe und Bandagen zuzulegen. Unsere Trainer beraten dich gern dabei, die richtige Ausrüstung für dich auszuwählen. Für fortgeschrittenes Training empfehlen wir auch einen Mundschutz.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-xl xl:text-4xl text-start">Was sollte ich tun, wenn ich eine Stunde verpasse?
                        </AccordionTrigger>
                        <AccordionContent className="text-start text-neutral-300 text-md xl:text-xl">
                            Falls du eine Trainingseinheit verpasst, mach dir keine Sorgen. Sprich einfach mit uns, und wir helfen dir, den verpassten Inhalt nachzuholen. Wir bieten mehrere Trainingstermine in der Woche an, sodass du flexibel eine andere Stunde nutzen kannst. Unser Ziel ist es, dich dabei zu unterstützen, beständig Fortschritte zu machen und deine Trainingsziele zu erreichen.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

            </div>
        </div>
    )
}
