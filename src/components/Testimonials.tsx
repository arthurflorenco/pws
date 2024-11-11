"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import laura from '../assets/laura.jpeg'
import simcho from '../assets/simcho.jpeg'
import marco from '../assets/marco.jpeg'


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
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
        img: laura
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
        img: laura
    },
];
