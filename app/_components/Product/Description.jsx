"use client";
import React, { useRef, useState } from 'react'

function Description({description}) {
    const [isExpanded,setIsExpanded] = useState(false);
    const collapseSectionRef = useRef(null);

    const toggleExpanded=()=>{
        setIsExpanded(!isExpanded);
    }
  return (
    <main>
      <div className='py-10'>
        <h2 className='font-semibold text-[19px] pb-5'>Description</h2>
        <div className={`overflow-hidden transition-max-height space-y-7 duration-500 ${isExpanded ? 'max-h-full' : 'max-h-[115px]'}`}
            ref={collapseSectionRef}>
        <div>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        </div>
        <button className='font-semibold text-sm my-2 underline' onClick={toggleExpanded}>{isExpanded?"Show less": "Show more"}</button>
      </div>
    </main>
  )
}

export default Description
