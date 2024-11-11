"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import laura from '../assets/laura.jpeg'
import simcho from '../assets/simcho.jpeg'
import marco from '../assets/marco.jpeg'
//import maria from '../assets/maria.jpeg'
import chiara from '../assets/chiara.jpeg'


export function Testimonials() {
    return (
        (<div
            className="h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>)
    );
}

const testimonials = [
    {
        quote:
            "Das Training hat mir geholfen, meine Kondition zu verbessern und einen guten Ausgleich zu meinem anstrengenden Arbeitsalltag zu finden. Ich würde es jedem weiterempfehlen!",
        name: "Laura",
        title: "Toller Ausgleich!",
        img: laura
    },
    {
        quote:
            "Durch das Boxtraining habe ich gelernt, wie leistungsfähig der Körper sein kann. Das Training fordert mich körperlich und mental heraus und zeigt mir, wie viel Kraft und Ausdauer ich entwickeln kann. Von Kondition über Stärke bis hin zum Spaß an der Bewegung – das Boxtraining vereint all das und motiviert mich immer wieder, das Beste aus mir herauszuholen.",
        name: "Simcho",
        title: "Streng und effizient",
        img: simcho
    },
    {
        quote: "Obwohl ich schon viele Jahre ins Fitness gehe, hat mich das Boxtraining nochmal auf einer neuen Ebene herausgefordert. Meine Ausdauer ist spürbar besser geworden und das Trainieren zusammen macht Spass 💪🏼 Das Team passt super zusammen und die Trainer gehen auf jeden einzeln ein 🤗",
        name: "Marco",
        title: "Abwechslung und Spass",
        img: marco
    },
    {
        quote:
            "Ich habe vor kurzem mit dem Boxen begonnen und bin absolut begeistert! Die Trainer sind sehr kompetent und helfen dabei, die richtige Technik zu erlernen. Das Training ist intensiv, aber macht unglaublich viel Spaß. Ich fühle mich fitter und stärker, und die Atmosphäre ist motivierend.",
        name: "Chiara",
        title: "Tolle Atmosphäre",
        img: chiara
    },
    /*{
        quote:
            "Ich habe schon viele Sportarten gemacht, doch Boxen hat ein inneres Feuer in mir erweckt. Ich habe mehrere Clubs geschnuppert aber beim prayworksleep gefiel es mir am besten. Das Training ist nicht nur mit Kondition aufgebaut, sondern auch mit viel Technik. In diesen Club habe ich nice Freunde gefunden, wir gehen nicht nur respektvoll miteinander um, wir motivieren auch einander. Es ist ein freundliches und spassiger Umfeld. Es ist mehr als eine Sportart oder ein Club. Denn es fühlt sich fast familiär an, die Trainer geben uns vom Herzen ihre Kenntnisse weiter, so dass wir alle zusammen uns weiterentwickeln können.",
        name: "Maria",
        title: "Try something new",
        img: maria
    },*/
];
