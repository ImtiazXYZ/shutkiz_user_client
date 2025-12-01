import React from 'react'

function Contact() {
  return (
    <>
     <div className='grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-x-10 px-6 md:px-0'>
     <div className='text-gray-500 text-[17px]'>
        <p className='pb-5'>All trees have been planted in Greenify 2.
        From next year - 2026, our full yield will come inshallah.</p>
    </div>
    <div class="border-r border-gray-300 h-full"></div>
    <div className='text-gray-500 text-[17px]'>
        <p className=''>Our products are being sold in Dhaka, if you want, you can buy our fruits by ordering directly from our online shop.</p>
    </div>
</div>
<div className='flex justify-center pt-10'>
        <button className='relative overflow-hidden bg-white text-black border border-black w-[300px] h-[50px] rounded-lg group'>
        <span className="relative z-10 group-hover:text-white duration-300">Contact with us</span>
        <span className="absolute inset-0 bg-black transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
        </button>
        </div>
    </>
  )
}

export default Contact
