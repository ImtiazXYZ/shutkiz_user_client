import Image from 'next/image'
import React from 'react'

function Media({img}) {
  return (
    <main>
      <div className='cursor-pointer'>
        <Image src={img} alt='Media Image' className='w-[150px] '/>
      </div>
    </main>
  )
}

export default Media
