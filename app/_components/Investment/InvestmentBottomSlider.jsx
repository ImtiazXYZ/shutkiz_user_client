"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
function InvestmentBottomSlider({img}) {
    const description = "After seeing the good results of Greenify 1 we decided to plant another 3500 new coffee seedlings in Greenify 2. This seedling will be planted in December 2023, inshallah. We hope to get coffee beans from this coffee in 2026."
  return (
    <main className='relative'>
      <div className="wave-1 h-[10px]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f2f2f2" fill-opacity="1" d="M0,160L80,133.3C160,107,320,53,480,53.3C640,53,800,107,960,138.7C1120,171,1280,181,1360,186.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      </div>
      <div className="py-[50px] md:py-[120px] bg-[#F7F7F7]">
      <Swiper
         pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          modules={[Pagination]}
          
          breakpoints={{
            340: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
              
            },
            768: {
              slidesPerView: 3,
              
            },
            1024: {
              slidesPerView: 3,
              
            },
          }}
          
          className="mySwiper bg-[#F7F7F7]"
          
        >
          {img.map((imageSrc, index) => (
            <SwiperSlide key={index} className='relative'>
              <Image
                placeholder='blur'
                src={imageSrc}
                className='w-full h-[200px] p-5 rounded-2xl mx-auto cursor-pointer'
                alt={`Slider image ${index + 1}`}
              />
              
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='absolute bottom-0 left-0 w-full'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f2f2f2" fill-opacity="1" d="M0,128L60,144C120,160,240,192,360,192C480,192,600,160,720,170.7C840,181,960,235,1080,229.3C1200,224,1320,160,1380,128L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </div>
    </main>
  )
}

export default InvestmentBottomSlider
