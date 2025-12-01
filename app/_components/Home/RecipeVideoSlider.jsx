'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import RecipeVideo from '../RecipeVideo'
import { IoIosArrowRoundForward } from "react-icons/io";

function RecipeVideoSlider({title}) {
  return (
    <main>
      <div>
      <div className='flex justify-between items-center'>
      <p className="text-black font-semibold text-lg pb-5">{title}</p>
      <IoIosArrowRoundForward className='text-4xl cursor-pointer'/>
      </div>
        <Swiper
        pagination={{
            dynamicBullets: true,
          }}
          
          breakpoints={{
            340: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
              
            },
            768: {
              slidesPerView: 3,
              
            },
            1024: {
              slidesPerView: 4,
              
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper">
            <SwiperSlide>
                <RecipeVideo/>
            </SwiperSlide>
            
        </Swiper>
      </div>
    </main>
  )
}

export default RecipeVideoSlider
