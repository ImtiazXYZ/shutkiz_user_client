import Image from 'next/image';
import React from 'react'
import RecipeBannerImage from "../../../public/category-3.jpeg"
import RecipeBannerItems from "../../_components/Home/RecipeBannerItems"
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuBadgeCheck } from "react-icons/lu";
import Link from 'next/link';
function RecipeBanner({title}) {
  return (
    <main>

      <div className='flex justify-between items-center'>
      <div className='flex items-start gap-x-2'>
        <div>
            <LuBadgeCheck className='text-3xl'/>
        </div>
        <div>
            <p className='text-[12px] text-gray-500'>{title}</p>
            <p className="text-black font-semibold text-lg pb-5">{title}</p>
        </div>
      </div>
      <Link href="/recipe">
      <IoIosArrowRoundForward className='text-4xl cursor-pointer'/>
      </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div>
            <div class="relative">
            <Image src={RecipeBannerImage} alt="Image" class="w-full h-auto"/>
            <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
            <div className='absolute bottom-0 left-0 right-0 w-full'>
                <div className='flex justify-center'>
                <Link href="/recipe">
                <button className='bg-black text-white w-[250px] md:w-[350px] lg:w-[400px] h-[40px] rounded-2xl hover:bg-[#FF1A58] duration-200 hover:cursor-pointer'>See All</button>
                </Link>
                </div>
            </div>
            </div>
        </div>
        <div>
            <RecipeBannerItems/>
        </div>
      </div>
    </main>
  )
}

export default RecipeBanner
