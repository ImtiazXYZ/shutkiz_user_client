import React from 'react'
import ProjectIcon from "../../../public/icons/project.png"
import Link from 'next/link'
import Image from 'next/image'
function Investment() {
  return (
    <div className='pt-10 flex justify-center'>
      <ul className='flex gap-x-14 gap-y-5'>
                <Link href="/investment/project-1">
                <li className='flex flex-col gap-x-2 items-center'>
                    <div className='w-[50px] h-[50px]  rounded-full bg-white border-[1.5px] border-gray-500'>
                    <Image src={ProjectIcon} alt='Project 1' className='p-1'/>
                    </div>
                    <span className='text-[17px] hover:text-[--primaryColor] hover:underline duration-100 font-semibold'>Project 1</span>
                </li>
                </Link>
                <Link href="/investment/project-2">
                <li className='flex flex-col gap-x-2 items-center'>
                    <div className='w-[50px] h-[50px]  rounded-full bg-white border-[1.5px] border-gray-500'>
                    <Image src={ProjectIcon} alt='Project 2' className='p-1'/>
                    </div>
                    <span className='text-[17px] hover:text-[--primaryColor] hover:underline duration-100 font-semibold'>Project 2</span>
                </li>
                </Link>
                </ul>
    </div>
  )
}

export default Investment
