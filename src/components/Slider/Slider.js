import React from "react";
import './Slider.css'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

function Slider({images}) {
  return (
    <div className="slider_main">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {images.map((image, key) => {
          return (
            <SwiperSlide key={key}>
              <img src={image} key={key} alt="slide_image" className="slider_images"/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slider;