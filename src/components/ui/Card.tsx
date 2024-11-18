'use client'
import React from "react";
import Link from "next/link";

const Card: React.FC = () => {

    const getNextClass = () => {
        const now = new Date();
        const dayOfWeek = now.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
        const currentTime = now.getHours() * 60 + now.getMinutes(); // Tempo atual em minutos

        // Horários das aulas em minutos
        const classTimes = {
            Tuesday: { time: '18:30', minutes: 18 * 60 + 30 },
            Thursday: { time: '18:30', minutes: 18 * 60 + 30 },
            Sunday: { time: '12:00', minutes: 12 * 60 },
        };

        // Determina a próxima aula
        let nextClassDay = '';
        let nextClassTime = '';

        if (dayOfWeek === 2 && currentTime < classTimes.Tuesday.minutes) {
            nextClassDay = 'Dienstag';
            nextClassTime = classTimes.Tuesday.time;
        } else if (dayOfWeek === 2 && currentTime >= classTimes.Tuesday.minutes) {
            nextClassDay = 'Donnerstag';
            nextClassTime = classTimes.Thursday.time;
        } else if (dayOfWeek === 4 && currentTime < classTimes.Thursday.minutes) {
            nextClassDay = 'Donnerstag';
            nextClassTime = classTimes.Thursday.time;
        } else if (dayOfWeek === 4 && currentTime >= classTimes.Thursday.minutes) {
            nextClassDay = 'Sonntag';
            nextClassTime = classTimes.Sunday.time;
        } else if (dayOfWeek === 0 && currentTime < classTimes.Sunday.minutes) {
            nextClassDay = 'Sonntag';
            nextClassTime = classTimes.Sunday.time;
        } else {
            nextClassDay = 'Dienstag';
            nextClassTime = classTimes.Tuesday.time;
        }

        return { day: nextClassDay, time: nextClassTime };
    };

    const { day, time } = getNextClass();

    return (
        <div className="flex flex-col justify-between  w-full bg-gradient-to-b from-yellow-50 to-yellow-300 bg-opacity-70 backdrop-blur-md rounded-3xl md:m-4">
            <div className="flex flex-col p-4">
                <span className="font-bold text-neutral-500 text-3xl">Nächstes Training</span>
                <span className="font-bold text-lg text-neutral-400">{day}</span>
            </div>
            <div className="flex justify-between items-end p-4">
                <span className="text-5xl md:text-8xl font-bold text-neutral-600">{time}</span>
                <Link href="https://w.app/PrayWorkSleep">
                    <button className="bg-neutral-200 bg-opacity-70 backdrop-blur-md p-3 text-neutral-400 rounded-lg">vereinbaren</button>
                </Link>
            </div>
        </div>
    );
}

export default Card;
