import React from 'react'
import Image from 'next/image';
function ProjectInfo2({title,description,img}) {
  return (
    <>
     <div className="single-item bg-white p-10 z-[10] rounded-xl shadow-lg">
            <div className='bg-white shadow-lg w-[70px] h-[70px] rounded-full mx-auto'>
                <Image src={img} alt='Project Icon' className='p-2 mx-auto'/>
            </div>
            <div>
                <h2 className="title title text-xl text-black text-center py-4">{title}</h2>
                <p>{description}</p>
            </div>
        </div> 
    </>
  )
}

export default ProjectInfo2
