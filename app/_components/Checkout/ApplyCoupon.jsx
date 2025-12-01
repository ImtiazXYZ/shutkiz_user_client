"use client"
import React, { useState } from 'react'
import { MdOutlineDiscount } from "react-icons/md";
function ApplyCoupon({applyCouponCode,validCoupon}) {
    const [code,setCode] = useState();
    const handleCode=()=>{
        applyCouponCode(code);
    }
  return (
    <div className='pt-5'>
      <div className='flex gap-x-3 items-center'>
      <MdOutlineDiscount className='text-xl'/>
      <p className='font-semibold text-[14px]'>Discount</p>
      </div>
      <div className='pt-3 flex gap-x-2 items-center'>
      <input onChange={(e)=>setCode(e.target.value)}  type="text" class="border-1 px-3 focus:ring-0 border-black rounded-md p-2 w-[300px]" placeholder="Enter Coupon Code..." />
      
      <button className='px-7 w-[100px] text-sm font-semibold h-[43px] bg-[#EBC8B1] text-black rounded-lg' onClick={handleCode}>Apply</button>
      </div>

      <div>
      {
        validCoupon==2?
        <p className='text-sm text-green-500 pt-2'>Coupon Applied</p>:
        validCoupon==3?
        <p className='text-sm text-red-500 pt-2'>Coupon Has Expired</p>:
        validCoupon==4?
        <p className='text-sm text-red-500 pt-2'>Invalid Coupon</p>:
        <p></p>
      }
      </div>
    </div>
  )
}

export default ApplyCoupon
