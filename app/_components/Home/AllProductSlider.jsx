"use client";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import getProductJoinPrice from "../../_lib/helpers/getProductJoinPrice";
import Product from "../Product";
function AllProductSlider({ title, products, url }) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-black font-semibold text-lg pb-5">{title}</p>
        <Link href={url}>
          <IoIosArrowRoundForward className="text-4xl cursor-pointer" />
        </Link>
      </div>
      <div className="">
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
            1200: {
              slidesPerView: 5,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {products &&
            products.map((product, index) => {
              const stocks = product.stocks;
              const priceDisplay = getProductJoinPrice(stocks);
              return (
                <SwiperSlide key={index}>
                  <div className="p-2 md:p-5">
                    <Product
                      img={product.thumbnail}
                      name={product.name}
                      category={product.subcategory?.name}
                      price={priceDisplay}
                      url={`/product/${product?.slug}`}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
}

export default AllProductSlider;
