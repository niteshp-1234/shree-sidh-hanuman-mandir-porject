"use client";

import Image from "next/image";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  "/images/temple3.jpeg",
  "/images/temple3.jpeg",
  "/images/temple2.jpeg",
  "/images/temple5.jpeg",
  "/images/temple7.png",
  "/images/tempple6.png",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-orange-50 to-white"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-5xl font-bold text-orange-700">
          Temple Gallery
        </h2>

        <div className="w-28 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

        <p className="mt-4 text-gray-600 text-lg">
          Divine moments from our temple
        </p>
      </div>

      {/* Swiper Carousel */}
      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={25}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[260px] rounded-3xl overflow-hidden shadow-2xl group">
                
                {/* Image */}
                <Image
                  src={img}
                  alt={`Temple ${index + 1}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500"></div>

                {/* Text */}
                <div className="absolute bottom-5 left-5 z-10">
                  <h3 className="text-white text-2xl font-bold">
                    Temple View
                  </h3>

                  <p className="text-orange-200 text-sm mt-1">
                    ✨ जय श्री राम ✨
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Swiper Styling */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #c2410c;
          background: white;
          width: 45px;
          height: 45px;
          border-radius: 9999px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }

        .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: #ea580c !important;
          width: 22px;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}