import React, { useLayoutEffect, useRef, forwardRef } from 'react';
import gsap from 'gsap';

export const Transition = forwardRef((props, ref) => {
    const comp = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline();
            t1.to("#transition-bg", {
                opacity: 0,
                duration: 1.3,
                onComplete: () => {
                    // Após a animação de transição, esconda o fundo
                    gsap.set("#transition-bg", { display: "none" });
                },
            })
            .from("#intro-slider", {
                xPercent: "-100",
                duration: 1.3,
                delay: 0.3,
            })
            .from(["#title-1", "#title-2", "#title-3"], {
                opacity: 0,
                y: "+=30",
                stagger: 0.5,
            })
            .to(["#title-1", "#title-2", "#title-3"], {
                opacity: 0,
                y: "-=30",
                delay: 0.3,
                stagger: 0.5,
            })
            .to("#intro-slider", {
                xPercent: "-100",
                duration: 1.3,
            })
            .from("#welcome", {
                opacity: 1,
                duration: 0.5,
            });
        }, comp);

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative" ref={comp}>
            {/* Tela de transição branca */}
            <div
                id="transition-bg"
                className="h-screen w-full bg-neutral-900 absolute top-0 left-0 z-20"
            ></div>
            <div
                id="intro-slider"
                className="h-screen p-3 md:p-10 bg-neutral-900 absolute top-0 left-0 space-grotesk z-10 w-full flex flex-col gap-10 tracking-tight text-yellow-400"
            >
                <h1 className="text-9xl" id="title-1">
                    Pray
                </h1>
                <h1 className="text-9xl" id="title-2">
                    Work
                </h1>
                <h1 className="text-9xl" id="title-3">
                    Sleep
                </h1>
            </div>
            <div className="h-screen flex bg-neutral-900 justify-center place-items-center">
                <h1
                    id="welcome"
                    className="text-7xl md:text-9xl font-bold text-yellow-400 space-grotesk"
                >
                    Welcome.
                </h1>
            </div>
        </div>
    );
});

Transition.displayName = 'Transition'; // Adiciona um nome ao componente para depuração