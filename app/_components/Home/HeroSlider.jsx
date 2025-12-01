"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HeroSlider({ sliders }) {
  const BASEURL = process.env.NEXT_PUBLIC_BASE_URL;

  if (!sliders || sliders.length === 0) return null;

  return (
    <Swiper
      pagination={{ dynamicBullets: true }}
      loop
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      className="mySwiper"
    >
      {sliders.map((slider, index) => (
        <SwiperSlide key={index}>
          {slider.url?.startsWith("http") ? (
            <a href={slider.url} target="_blank" rel="noopener noreferrer">
              <Image
                width={2000}
                height={1000}
                src={`${BASEURL}/${slider.image}`}
                alt={slider.alt || "Slider Image"} // add alt text
                className="rounded-2xl mx-auto w-full"
              />
            </a>
          ) : (
            <Link href={slider.url}>
              <Image
                width={2000}
                height={1000}
                src={`${BASEURL}/${slider.image}`}
                alt={slider.alt || "Slider Image"} // add alt text
                className="rounded-2xl mx-auto w-full"
              />
            </Link>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
