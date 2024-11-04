'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/Accordion"



export const FAQ = () => {
    return (
        <div className='flex justify-center items-center flex-col w-full px-4 mt-20 text-center'>
            <span className='text-yellow-100 text-md xl:text-xl font-semibold border-[1px] border-yellow-100 p-3 rounded-xl mb-3'>FAQ</span>
            <h1 className='text-yellow-300 text-5xl md:text-7xl font-bold'>Häufig gestellte Fragen</h1>
            <div className='w-full text-yellow-300 xl:p-20'>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-xl xl:text-4xl">Is it accessible?</AccordionTrigger>
                        <AccordionContent className="text-start text-md xl:text-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolorum obcaecati delectus odio blanditiis laudantium, quas saepe magnam reiciendis voluptas sint! Repellendus, eius suscipit dolores consectetur recusandae a asperiores culpa.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-xl xl:text-4xl">Is it accessible?</AccordionTrigger>
                        <AccordionContent className="text-start text-md xl:text-xl">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique perspiciatis, odio nemo a distinctio rerum? Quaerat nostrum ex ut natus? Consequuntur corporis esse modi consectetur? Quia voluptatibus sint fugiat necessitatibus!
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-xl xl:text-4xl">Is it accessible?</AccordionTrigger>
                        <AccordionContent className="text-start text-md xl:text-xl">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt reiciendis dolorum eveniet, sint earum deleniti porro blanditiis officiis ipsam nihil voluptas pariatur ipsum dicta repudiandae magni corrupti quis expedita?
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

            </div>
        </div>
    )
}
