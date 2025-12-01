import Image from 'next/image'
import React from 'react'
import { FiPlus } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import Link from 'next/link';

function SingleRelatedProduct({img,name,price,category,url}) {
  const BASEURL = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <main className='group cursor-pointer p-2 md:p-3'>
      <Link href={`${url}`}>
      <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-200 rounded-lg h-[320px] md:h-[320px] '>
        <div className="image relative">
            <Image src={`${BASEURL}/${img}`} width={500}
            height={300} alt='Product' className='w-[150px]  mx-auto p-2'/>
            {/* <div className='bg-black text-white w-[30px] h-[30px] rounded-full absolute top-2 right-2 md:hidden group-hover:flex flex  justify-center items-center hover:bg-[--primaryColor] hover:text-white duration-300'>
            <FiPlus className='text-xl'/>
            </div> */}
        </div>
        <div className="text pt-3 pb-3 space-y-1 px-3">
          {/* <p className=' text-yellow-600 text-[15px]'>{category}</p> */}
          <div>
          <p className='text-[16px] text-black'>{name}</p>
          <p className='font-semibold'>৳ {price}</p>
          </div>
        </div>
        <div className='px-3'>
          <Link href={`${url}`}>
            <button className='bg-black px-4 py-2 text-white rounded-lg text-sm'>Buy Now</button>
          </Link>
        </div>
      </div>
      </Link>
    </main>
  )
}

export default SingleRelatedProduct
