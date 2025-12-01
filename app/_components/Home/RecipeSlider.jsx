'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import Recipe from "../../_components/Recipe";
import Recipe1 from "../../../public/recipe-1.png";
import Recipe2 from "../../../public/recipe-2.png";
import Recipe3 from "../../../public/recipe-3.png";
import Recipe4 from "../../../public/recipe-4.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from 'next/link';
import getHomepageRecipes from "../../_lib/home/getHomepageRecipes";

async function RecipeSlider({title}) {
  const recipes = await getHomepageRecipes();
  return (
    <main>
        <div className='flex justify-between items-center'>
      <p className="text-black font-semibold text-lg pb-5">{title}</p>
      <Link href="/recipe">
      <IoIosArrowRoundForward className='text-4xl cursor-pointer'/>
      </Link>
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
      spaceBetween={10}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper">

        {
          recipes&&recipes.map((recipe,index)=>(
            <SwiperSlide key={index}>
            <div className='p-3'>
            <Recipe img={recipe.thumbnail} name={recipe.title} url={`/recipe/${recipe.id}`}/>
            </div>
          </SwiperSlide>
          ))
        }
        
      </Swiper>
    </main>
  )
}

export default RecipeSlider
