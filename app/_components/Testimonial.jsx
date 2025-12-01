import Image from 'next/image'
import React from 'react'
const BASEURL = process.env.NEXT_PUBLIC_BASE_URL;
function Testimonial({img}) {
  return (
    <main>
      <div className='cursor-pointer p-5'>
        <img src={`${BASEURL}/${img}`} width={500} height={400} alt='Testimonial Image' className='rounded-lg'/>
      </div>
    </main>
  )
}

export default Testimonial
