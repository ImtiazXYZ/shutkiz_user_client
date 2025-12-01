import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function Recipe({img,name,url}) {
  const BASEURL = process.env.NEXT_PUBLIC_BASE_URL;
    const t = useTranslations("HomePage")
  return (
    <div className=' cursor-pointer group'>
      <Link href={`${url}`}>
      <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-200 overflow-hidden '>
        <div>
        <Image src={`${BASEURL}/${img}?v=${Date.now()}`} 
            width={500}
            height={300} alt={name} className='rounded-t-lg group-hover:scale-110 duration-300 ease-in-out'/>
        <div className='py-6 pl-3 px-1'>
            <h2 className='font-semibold text-[16px] pb-4'>{name}</h2>
            <button className='bg-black text-white py-2 px-3 text-sm rounded-lg'>{t("Buttons.readMore")}</button>
        </div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default Recipe
