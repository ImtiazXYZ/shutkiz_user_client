import React from 'react'
import { FaRegCommentAlt } from "react-icons/fa";
function ProjectSection3() {
    const description = "After seeing the good results of Greenify 1 we decided to plant another 3500 new coffee seedlings in Greenify 2. This seedling will be planted in December 2023, inshallah. We hope to get coffee beans from this coffee in 2026."
  return (
    <main className='relative'>
      <div className="wave-1 h-[10px]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f2f2f2" fill-opacity="1" d="M0,160L80,133.3C160,107,320,53,480,53.3C640,53,800,107,960,138.7C1120,171,1280,181,1360,186.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      </div>
      <div className="all-items grid grid-cols-1 md:grid-cols-2 bg-[#F7F7F7] px-10 gap-5 py-14 md:py-32 items-center ">
        <div className=''>
            <FaRegCommentAlt className='text-4xl text-center  '/>
            <h2 className='text-2xl py-5'>Shutkiz Investment Project 1 Title</h2>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed deserunt qui fugit, aperiam quaerat natus nemo magni incidunt facere vitae velit aut eaque fuga non? Expedita facere, architecto ullam amet voluptatem doloremque repellat velit delectus pariatur vitae nam nemo natus fuga, placeat consectetur at reiciendis est cupiditate! Accusantium, alias deserunt.</p>
        </div>
        <div className='mx-auto'>
        <button className='relative overflow-hidden bg-white text-black border border-black w-[250px] md:w-[300px] h-[50px] rounded-lg group z-[20]'>
        <span className="relative z-10 group-hover:text-white duration-300">Learn More About Project 1</span>
        <span className="absolute inset-0 bg-black transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
        </button>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 w-full'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f2f2f2" fill-opacity="1" d="M0,288L1440,64L1440,320L0,320Z"></path></svg>
      </div>
    </main>
  )
}

export default ProjectSection3
