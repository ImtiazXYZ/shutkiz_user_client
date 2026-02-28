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
                src={`${BASEURL}/${slider.image}`}
                alt={slider.alt || "Slider Image"}
                width={1200} // 2000
                height={600} // 1000
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="100vw"
                className="rounded-2xl mx-auto w-full"
              />
            </a>
          ) : (
            <Link href={slider.url}>
              <Image
                src={`${BASEURL}/${slider.image}`}
                alt={slider.alt || "Slider Image"} // add alt text
                width={1200}
                height={600}
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                className="rounded-2xl mx-auto w-full"
              />
            </Link>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
