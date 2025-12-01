'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import Testimonial from "../../_components/Testimonial"
import getHomePageTestimonials from "../../_lib/home/getHomepageTestimonials"
async function TestimonialSlider({title}) {
    const testimonials = await getHomePageTestimonials();
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
          navigation={true}
          modules={[Navigation]}
          className="mySwiper">
            {
                testimonials.map((testimonial,index)=>(
                    <SwiperSlide className='' key={index}>
                    <div className='flex justify-center items-center h-48'>
                    <Testimonial img={testimonial.image}/>
                    </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </main>
  )
}

export default TestimonialSlider
