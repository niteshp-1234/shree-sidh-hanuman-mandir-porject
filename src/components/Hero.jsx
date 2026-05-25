"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const banners = [
  "/images/tempple6.png",
  "/images/temple1.jpeg",
  "/images/temple7.png",
  
];

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        className="h-full w-full"
      >

        {banners.map((img, index) => (
          <SwiperSlide key={index}>

            <div className="relative h-[90vh] w-full">

              <Image
                src={img}
                alt="Temple Banner"
                fill
                priority
                className="
                  object-contain
                  md:object-cover
                  bg-black
                "
              />

              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg">
                  वैदिक पूजा एवं
                  <br />
                  कुंडली मार्गदर्शन
                </h1>

                <p className="mt-6 text-lg sm:text-xl md:text-2xl max-w-3xl leading-8">
                  23 वर्षों से धार्मिक सेवाएं
                  <br />
                  Shree Sidh Hanuman Mandir
                </p>

                <button className="mt-10 bg-orange-600 hover:bg-orange-700 transition duration-300 px-8 py-4 rounded-full text-lg md:text-xl shadow-2xl">
                  Book Pooja
                </button>

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
}