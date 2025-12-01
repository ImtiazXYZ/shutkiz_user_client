"use client";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

export default function ImageSlider({ thumbnail, galleryImages }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedImage, setSelectedImage] = useState(1000);
  const BASEURL = process.env.NEXT_PUBLIC_BASE_URL;

  // Ensure galleryImages is an array
  if (!Array.isArray(galleryImages)) {
    console.error("galleryImages is not an array");
    return null; // or return a fallback UI
  }

  const toggleSelected = (id) => {
    setSelectedImage(id);
  };

  return (
    <main className="" id="productImageSwiper">
      <div className="relative">
        {/* Main image slider */}
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 border rounded-lg w-[300px] md:w-[450px] md:h-[400px] mx-auto"
        >
          {/* <SwiperSlide  className='md:pl-12'>
              <InnerImageZoom
                src={`${BASEURL}/${thumbnail}?v=${Date.now()}`} // Assuming image paths are relative to public folder
                alt={`Product Image`}
                className='mx-auto pt-5'
                width={350}
                height={350}
              />
            </SwiperSlide>
          {galleryImages.map((img, index) => (
            <SwiperSlide key={index} className='md:pl-12'>
              <InnerImageZoom
                src={`${BASEURL}/${img}?v=${Date.now()}`} // Assuming image paths are relative to public folder
                alt={`Product Image ${index + 1}`}
                className='mx-auto pt-5'
                width={350}
                height={350}
              />
            </SwiperSlide>
          ))} */}

          <SwiperSlide className="">
            <div className="relative aspect-square w-full mx-auto overflow-hidden rounded-lg bg-gray-100">
              <InnerImageZoom
                src={`${BASEURL}/${thumbnail}?v=${Date.now()}`}
                alt="Product Image"
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>

          {galleryImages.map((img, index) => (
            <SwiperSlide key={index} className="">
              <div className="relative aspect-square w-full mx-auto overflow-hidden rounded-lg bg-gray-100">
                <InnerImageZoom
                  src={`${BASEURL}/${img}?v=${Date.now()}`}
                  alt={`Product Image ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnails for desktop */}
        <div className="hidden md:block md:absolute top-0 left-0 cursor-pointer">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            direction="vertical"
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper overflow-hidden h-[300px]"
          >
            <SwiperSlide>
              <Image
                src={`${BASEURL}/${thumbnail}?v=${Date.now()}`} // Assuming image paths are relative to public folder
                alt={`Product Thumbnail`}
                className={`w-14 border rounded-lg ${
                  selectedImage === 1000 ? "border-black" : ""
                }`}
                width={64}
                height={64}
                onClick={() => toggleSelected(1000)}
              />
            </SwiperSlide>
            {galleryImages.map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={`${BASEURL}/${img}?v=${Date.now()}`} // Assuming image paths are relative to public folder
                  alt={`Product Thumbnail ${index + 1}`}
                  className={`w-14 border rounded-lg ${
                    selectedImage === index && selectedImage !== 1000
                      ? "border-black"
                      : ""
                  }`}
                  width={64}
                  height={64}
                  onClick={() => toggleSelected(index)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
}
