import React from 'react'
import { IoIosStar } from "react-icons/io";
import { RiDoubleQuotesL } from "react-icons/ri";

function SingleReview() {
  return (
    <div className='px-3'>
      <div className='border rounded-lg p-4'>
        <RiDoubleQuotesL className='text-2xl mb-2'/>
        <div className='flex justify-between'>
        <h2 className='font-semibold text-[17px] text-black'>User</h2>
        <div className='flex justify-center'>
            <IoIosStar className='text-black '/>
            <IoIosStar className='text-black '/>
            <IoIosStar className='text-black '/>
            <IoIosStar className='text-black '/>
            <IoIosStar className='text-black '/>
        </div>
        </div>
        <p className='pt-3 text-[14px] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quae nam beatae adipisci animi unde</p>
      </div>
    </div>
  )
}

export default SingleReview
