'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import SingleRelatedRecipe from './SingleRelatedRecipe'


function RelatedRecipes({relatedRecipes}) {
  return (
    <main>
      {
        relatedRecipes&&relatedRecipes.length>0?
        <div className='pt-14'>
        <h2 className='text-xl font-semibold pb-7'>Related Recipes</h2>
        <div>
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
                  slidesPerView: 2,
                  
                },
              }}
              navigation={true}
              modules={[Navigation]}
            className='mySwiper'>
              {
                relatedRecipes&&relatedRecipes.map((recipe,index)=>(
                  <SwiperSlide key={index}>
                  <SingleRelatedRecipe
                    img={recipe.thumbnail} 
                    name={recipe.title} 
                    url={`/recipe/${recipe.id}`}
                  />
                  </SwiperSlide>
                ))
              }
                
                
            </Swiper>
        </div>
      </div>:""
      }
    </main>
  )
}

export default RelatedRecipes
