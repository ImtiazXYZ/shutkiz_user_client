import React from 'react'

function ProjectInfo({title,description,icon}) {
  return (
    <div>
      <div className="single-item bg-white shadow-xl flex justify-center py-10 px-7 rounded-lg">
            <div>
            <div className='flex justify-center'>
            <div className='text-[60px] text-center'>
            {icon}
            </div>
            </div>
            <div>
            <h2 className="title text-xl text-black text-center py-4">
            {title}
            </h2>
            <p className='text-gray-500'>{description}</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectInfo
