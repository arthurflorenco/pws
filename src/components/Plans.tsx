'use client'
import React from 'react'
import Card from './ui/Card'

export const Plans = () => {

    const plans = [
        { id: 1, name: "3 Monats Abonnement", price: 74, about:"lorem" },
        { id: 2, name: "6 Monats Abonnement", price: 65, about:"lorem"  },
        { id: 3, name: "12 Monats Abonnement", price: 59, about:"lorem"  },
        { id: 4, name: "Gruppentraining/ Lektion", price: 20, about:"1h training" }
    ]

    return (
        <div className='min-h-screen w-full flex flex-col justify-center items-end xl:items-center p-5'>
            <span className='text-yellow-100 text-md xl:text-xl font-semibold border-[1px] border-yellow-100 p-3 rounded-xl mb-3'>Unsere Pläne</span>
            <h1 className='text-end xl:text-center text-yellow-300 text-5xl md:text-7xl font-bold'>1 Monat Gratis Für Neus</h1>
            <p className='text-white text-md xl:text-xl text-end xl:text-center mt-4'>Wenn du von einem Mitglied weiterempfohlen wirst und dich anmeldest, bekommst du den ersten Monat gratis. So kannst du den Club in Ruhe ausprobieren und leicht ins Training starten!</p>
            <div className="flex justify-around items-center flex-wrap mt-10 px-5 xl:px-20">
                {plans.map(item => (
                    <Card key={item.id} name={item.name} price={item.price} about={item.about} />
                ))}
            </div>
        </div>
    )
}
