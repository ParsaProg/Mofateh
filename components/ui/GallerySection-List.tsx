"use client";

import "@/src/styles/gallery-landing-list.css";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function GallerySectionList({
  pictures,
}: {
  pictures: Array<any>;
}) {
  const [slidesPerView, setSlidesPerView] = useState<number>(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1000) setSlidesPerView(3);
      else if (width >= 565) setSlidesPerView(2);
      else setSlidesPerView(1);
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Swiper
        loop={true}
        autoplay={true}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {pictures.map((picture, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                style={{
                  backgroundImage: "url(https://ayandehsazanejahrom.ir/wp-content/uploads/2024/03/IMG_20240309_160049_385-1024x768.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className=" bg-white w-[30vw] h-[30vw] rounded-xl main-list-container"
              >
                {/* Replace with actual image when you have picture data */}
                {/* <img src={picture.url} alt={picture.alt} className="w-full h-full object-cover rounded-lg" /> */}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
