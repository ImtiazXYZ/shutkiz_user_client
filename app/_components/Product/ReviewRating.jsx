import React from 'react'
import { IoIosStar } from "react-icons/io";
import AllReviews from "../Product/AllReviews";

function ReviewRating() {
  return (
    <main>
      <div>
        <h2 className='text-xl font-semibold pt-5 pb-8'>Reviews & Ratings (2)</h2>
        <div>
            <div className="section1 grid grid-cols-12 items-center">
            <div className='rating border-2 border-black w-[90px] md:w-[120px] h-[90px] md:h-[120px] rounded-full flex justify-center items-center col-span-4'>
                <div>
                <div className='flex items-center'>
                <IoIosStar className='text-lg md:text-xl text-red-500'/>
                <IoIosStar className='text-xl md:text-2xl mb-3 text-red-500'/>
                <IoIosStar className='text-lg md:text-xl text-red-500'/>
                </div>
                <div className='flex justify-center'>
                <span className='font-semibold text-2xl md:text-3xl mx-auto text-center'>4.5</span>
                </div>
                </div>
            </div>
            <div className='col-span-8'>
                <div className="single-item flex justify-center items-center w-full md:w-[400px] gap-x-2">
                    <div className="mb-3 text-base font-medium">5</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 ">
                        <div className="bg-black h-2 rounded-full w-[70%]" ></div>
                    </div>
                </div>
                <div className="single-item flex justify-center items-center w-full md:w-[400px] gap-x-2">
                    <div className="mb-3 text-base font-medium">4</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 ">
                        <div className="bg-black h-2 rounded-full w-[25%]" ></div>
                    </div>
                </div>
                <div className="single-item flex justify-center items-center w-full md:w-[400px] gap-x-2">
                    <div className="mb-3 text-base font-medium">3</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 ">
                        <div className="bg-black h-2 rounded-full w-[5%]" ></div>
                    </div>
                </div>
                <div className="single-item flex justify-center items-center w-full md:w-[400px] gap-x-2">
                    <div className="mb-3 text-base font-medium">2</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 ">
                        <div className="bg-black h-2 rounded-full w-0" ></div>
                    </div>
                </div>
                <div className="single-item flex justify-center items-center w-full md:w-[400px] gap-x-2">
                    <div className="mb-3 text-base font-medium">1</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 ">
                        <div className="bg-black h-2 rounded-full w-0" ></div>
                    </div>
                </div>
                
            </div>
            </div>

            <div className="section-2">
                <div className="all-review">
                    <AllReviews/>
                </div>
            </div>
        </div>
      </div>
    </main>
  )
}

export default ReviewRating
