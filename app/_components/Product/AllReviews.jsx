'use client';
import SingleReview from "../Product/SingleReview";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
function AllReviews() {
  return (
    <div className="pt-5">
        <Swiper
        pagination={{
            dynamicBullets: true,
          }}
          
          breakpoints={{
            340: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
              
            },
            768: {
              slidesPerView: 1,
              
            },
            1024: {
              slidesPerView: 2,
              
            },
          }}
          navigation={true}
          modules={[Navigation]}
         className='mySwiper'>
            <SwiperSlide><SingleReview/></SwiperSlide>
            <SwiperSlide><SingleReview/></SwiperSlide>
            <SwiperSlide><SingleReview/></SwiperSlide>
        </Swiper>
        <div className="py-5">
            <button className="w-full bg-[#EEEEEE] p-3 text-black font-semibold text-[15px] rounded-3xl">Write A Review</button>
        </div>
    </div>
  )
}

export default AllReviews
