"use client"
import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";
function FAQ() {
    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <>
     <div className='text-center'>
        <h2 className='text-2xl font-semibold pb-4'>Shutkiz Investment Project 1</h2>
        <p className='text-gray-500'>Shutkiz investment project 1 description</p>
        <p className='text-gray-500'>Bari 4 Mango, Philippine Black Sugarcane, Dragon Orchard, Where Orchards Are Planted</p>
    </div> 
    <div className='py-14 md:px-14'>
    <Accordion variant="splitted">
      <AccordionItem key="1" aria-label="Accordion 1" title="Whats the main purpose of the project">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="How can I be benifited">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="How to contact with Shutkiz">
        {defaultContent}
      </AccordionItem>
    </Accordion>
    </div>
    </>
  )
}

export default FAQ
