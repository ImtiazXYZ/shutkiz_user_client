'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import Media from '../Media'
import { IoIosArrowRoundForward } from "react-icons/io";
import Media1 from "../../../public/media1.png";
import Media2 from "../../../public/media2.png";
import Media3 from "../../../public/media3.png";

function MediaSlider({title}) {
  return (
    <main>
        <div className='flex justify-between items-center pt-5'>
            <p className="text-black font-semibold text-lg pb-5">{title}</p>
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
            <SwiperSlide className=''>
            <div className='flex justify-center items-center  h-48'>
            <Media img={Media1}/>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='flex justify-center items-center  h-48'>
            <Media img={Media2}/>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='flex justify-center items-center  h-48'>
            <Media img={Media3}/>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='flex justify-center items-center  h-48'>
            <Media img={Media1}/>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='flex justify-center items-center  h-48'>
            <Media img={Media2}/>
            </div>
            </SwiperSlide>
        </Swiper>
    </main>
  )
}

export default MediaSlider
