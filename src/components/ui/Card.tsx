'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";

type NextClass = {
    day: string;
    time: string;
};

const getNextClass = (): NextClass => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
    const currentTime = now.getHours() * 60 + now.getMinutes(); // Tempo atual em minutos

    // Horários das aulas em minutos
    const classTimes: Record<number, { time: string; minutes: number }> = {
        2: { time: '18:30', minutes: 18 * 60 + 30 }, // Terça
        4: { time: '18:30', minutes: 18 * 60 + 30 }, // Quinta
        0: { time: '12:00', minutes: 12 * 60 },       // Domingo
    };

    let nextClassDay = '';
    let nextClassTime = '';

    // Verifica se a aula de hoje ainda não passou
    if (classTimes[dayOfWeek] && currentTime < classTimes[dayOfWeek].minutes) {
        nextClassDay = dayOfWeek === 2 ? 'Dienstag' : dayOfWeek === 4 ? 'Donnerstags' : 'Sonntag';
        nextClassTime = classTimes[dayOfWeek].time;
    } else {
        // Se a aula de hoje já passou ou não é dia de aula, determina a próxima aula
        if (dayOfWeek === 0) { // Se hoje é domingo
            nextClassDay = 'Dienstag';
            nextClassTime = classTimes[2].time;
        } else if (dayOfWeek === 1) { // Se hoje é segunda
            nextClassDay = 'Sonntag';
            nextClassTime = classTimes[0].time;
        } else if (dayOfWeek === 2) { // Se hoje é terça
            nextClassDay = 'Donnerstags';
            nextClassTime = classTimes[4].time;
        } else if (dayOfWeek === 3) { // Se hoje é quarta
            nextClassDay = 'Donnerstags';
            nextClassTime = classTimes[4].time;
        } else if (dayOfWeek === 4) { // Se hoje é quinta
            nextClassDay = 'Sonntag';
            nextClassTime = classTimes[0].time;
        } else if (dayOfWeek === 5) { // Se hoje é sexta
            nextClassDay = 'Sonntag';
            nextClassTime = classTimes[0].time;
        } else if (dayOfWeek === 6) { // Se hoje é sábado
            nextClassDay = 'Sonntag';
            nextClassTime = classTimes[0].time;
        }
    }

    return { day: nextClassDay, time: nextClassTime };
};

const Card = () => {
    const [nextClass, setNextClass] = useState<NextClass>(getNextClass());

    useEffect(() => {
        // Atualiza a próxima aula ao montar o componente
        setNextClass(getNextClass());

        // Atualiza a próxima aula a cada segundo
        const interval = setInterval(() => {
            setNextClass(getNextClass());
        }, 1000);

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);

    return (
        <div className="flex flex-col justify-between w-full bg-gradient-to-b from-yellow-50 to-yellow-300 bg-opacity-70 backdrop-blur-md rounded-3xl md:m-4">
            <div className="flex flex-col p-4">
                <span className="font-bold text-neutral-500 text-3xl">Nächstes Training</span>
                <span className="font-bold text-lg text-neutral-400">{nextClass.day}</span>
            </div>
            <div className="flex justify-between items-end p-4">
                <span className="text-5xl md:text-8xl font-bold text-neutral-600">{nextClass.time}</span>
                <Link href="https://wa.me/410768167644">
                    <button className ="bg-white bg-opacity-90 backdrop-blur-md p-3 text-black rounded-lg">vereinbaren</button>
                </Link>
            </div>
        </div>
    );
}

export default Card;