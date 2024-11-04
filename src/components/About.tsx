'use client'
import React from 'react'
import woman from '../assets/woman.jpg'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table"
import Image from 'next/image'


export const About = () => {
    return (
        <div className='flex flex-col xl:flex-row w-full'>
            <div className='flex flex-col justify-center items-start px-4 w-full xl:w-[50%]'>
                <span className='text-yellow-100 text-md xl:text-xl font-semibold border-[1px] border-yellow-100 p-3 rounded-xl mb-3'>Über urs</span>
                <h1 className='text-yellow-300 text-5xl md:text-7xl font-bold'>Wann?</h1>
                <p className='text-white text-md xl:text-xl mt-4 flex items-center justify-center w-full md:px-4'>Wir trainieren dienstags, donnerstags um 18:30 Uhr und Sonntags um 12:00 Uhr in Altstetten.
Bei uns geht’s nicht nur um Technik, sondern auch um Fitness, Spaß und eine coole Gemeinschaft. Jeder kann mitmachen, ganz egal, welches Level du hast.</p>
                <div className='text-white text-md xl:text-xl mt-4 flex items-center justify-center w-full  md:px-4 md:mt-20'>
                    <Table>
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader className='bg-yellow-400'>
                            <TableRow className='hover:bg-yellow-400'>
                                <TableHead className="w-[100px]">Day</TableHead>
                                <TableHead className='text-black'>Hour</TableHead>
                                <TableHead className="text-right"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow >
                                <TableCell className="font-medium">Dienstags</TableCell>
                                <TableCell>18:30</TableCell>
                                <TableCell className="text-right"><button className='bg-yellow-400 rounded-3xl p-2 text-black hover:bg-yellow-500'>agendar</button></TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell className="font-medium">Donnerstags</TableCell>
                                <TableCell>18:30</TableCell>
                                <TableCell className="text-right"><button className='bg-yellow-400 rounded-3xl p-2 text-black hover:bg-yellow-500'>agendar</button></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Sonntags</TableCell>
                                <TableCell>12:00</TableCell>
                                <TableCell className="text-right"><button className='bg-yellow-400 rounded-3xl p-2 text-black hover:bg-yellow-500'>agendar</button></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
            <div className="w-full xl:w-[50%] h-[80%] p-2 md:p-14 xl:p-36 mt-4 md:mt-0 flex justify-center items-end">
                <Image className='rounded-xl' src={woman} alt='logo' />
            </div>
        </div>
    )
}
