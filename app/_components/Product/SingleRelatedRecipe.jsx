import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function SingleRelatedRecipe({img,name,url}) {
  const BASEURL = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <div className='p-5 cursor-pointer group'>
      <Link href={`${url}`}>
      <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-200'>
        <Image src={`${BASEURL}/${img}?v=${Date.now()}`} width={500}
            height={300}  alt={name} className='rounded-t-lg '/>
        <div className='py-4 px-2 pb-10'>
            <h2 className='font-semibold text-[15px]'>{name}</h2>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default SingleRelatedRecipe
