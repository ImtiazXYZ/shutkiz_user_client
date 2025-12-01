import React from 'react'
import { Skeleton } from 'antd';
function Loading() {
  return (
    <div className='p-10'>
     <Skeleton paragraph={{ rows: 4 }} active />
    </div>
  )
}

export default Loading
