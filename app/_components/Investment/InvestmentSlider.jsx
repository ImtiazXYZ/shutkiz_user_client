'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import HeloSlider1 from "../../../public/hero-slider-1.jpeg";
import HeloSlider2 from "../../../public/hero-slider-2-m.jpg";
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function InvestmentSlider({img}) {
  return (
    <>
      <main className='w-full mx-auto'>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {img.map((imageSrc, index) => (
            <SwiperSlide key={index} className='relative'>
              <Image
                placeholder='blur'
                src={imageSrc}
                className='h-[180px] w-full sm:h-[280px] md:h-[400px] rounded-2xl mx-auto'
                alt={`Slider image ${index + 1}`}
              />
              <div className='absolute inset-0 bg-gray-700 opacity-20 rounded-2xl'></div>
              <div className='absolute inset-0 flex justify-center items-center'>
                <div className=''>
                <h2 className='text-[24px] lg:text-4xl font-semibold text-white text-center'>Shutkiz Investment Project Title</h2>
                <p className='text-base lg:text-lg text-center text-white pt-1 lg:pt-5 '>Shutkiz investment project description</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </>
  );
}
