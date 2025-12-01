"use client";
import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { Checkbox } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { LuSettings2 } from "react-icons/lu";

function LeftMenu({ categories, handleCategoryClick, selectedCategories=[] }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <main className=''>
      <div className="md-screen-menu border rounded-lg p-2 w-[280px] hidden md:block">
        <div className='px-2'>
          <div className='flex justify-between items-center'>
            <h2 className='font-semibold text-lg'>Categories</h2>
            <IoIosArrowDown className={`text-xl cursor-pointer transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} onClick={toggleExpanded} />
          </div>
          <div className={`flex flex-col overflow-y-scroll gap-y-2 transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[300px] py-5' : 'max-h-0'}`}>
            {categories && categories.map((category) => (
              <Checkbox
                key={category.id}
                size="lg"
                isSelected={selectedCategories.includes(category.id)} // Check if the category is selected
                onChange={() => {
                  handleCategoryClick(category.id);
                }}
              >
                <span className='text-base'>{category.name}</span>
              </Checkbox>
            ))}
          </div>
        </div>
      </div>

      <div className="sm-screen-menu mb-3 md:hidden">
        <button onClick={onOpen} className='bg-white text-black border px-5 py-2 rounded-md'>
          <div className='flex items-center gap-x-1'>
            <LuSettings2 />
            <span>Filter</span>
          </div>
        </button>
        <Modal 
          backdrop="opaque" 
          isOpen={isOpen} 
          size='full'
          onOpenChange={onOpenChange}
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              },
              exit: {
                y: -20,
                opacity: 0,
                transition: {
                  duration: 0.2,
                  ease: "easeIn",
                },
              },
            }
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Available Filter</ModalHeader>
                <ModalBody>
                  <div className='px-2'>
                    <div className='flex justify-between items-center'>
                      <h2 className='font-semibold text-lg'>Categories</h2>
                      <IoIosArrowDown className={`text-xl cursor-pointer transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} onClick={toggleExpanded} />
                    </div>
                    <div className={`flex flex-col gap-y-2 transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[300px] py-5' : 'max-h-0'}`}>
                      {categories && categories.map((category) => (
                        <Checkbox
                          key={category.id}
                          size="lg"
                          isSelected={selectedCategories.includes(category.id)} // Check if the category is selected
                          onChange={() => {
                            handleCategoryClick(category.id);
                          }}
                        >
                          <span className='text-base'>{category.name}</span>
                        </Checkbox>
                      ))}
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter className=''>
                  <button className='text-black mr-5' onClick={onClose}>Cancel</button>
                  <button className='bg-black text-white px-10 py-3 rounded-3xl'>Apply</button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </main>
  );
}

export default LeftMenu;
