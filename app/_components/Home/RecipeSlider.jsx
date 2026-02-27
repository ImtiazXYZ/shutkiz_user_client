"use client";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Recipe from "../../_components/Recipe";
import getHomepageRecipes from "../../_lib/home/getHomepageRecipes";

async function RecipeSlider({ title }) {
  const recipes = await getHomepageRecipes();
  return (
    <main>
      <div className="flex justify-between items-center">
        <p className="text-black font-semibold text-lg pb-5">{title}</p>
        <Link href="/recipe">
          <IoIosArrowRoundForward className="text-4xl cursor-pointer" />
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
        className="mySwiper"
      >
        {recipes &&
          recipes.map((recipe, index) => (
            <SwiperSlide key={index}>
              <div className="p-3">
                <Recipe
                  img={recipe.thumbnail}
                  name={recipe.title}
                  url={`/recipe/${recipe.id}`}
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </main>
  );
}

export default RecipeSlider;
