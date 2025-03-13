import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import JS from "../assets/js.png"
import REACT from "../assets/react.png"
import PHP from "../assets/php.png"
import SQL from "../assets/sql.png"
import JAVA from "../assets/java.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../css/mySwiper.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function MySwiper() {
  return (
    <>
     <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={HTML} alt="" /></SwiperSlide>
        <SwiperSlide><img src={CSS} alt="" /></SwiperSlide>
        <SwiperSlide><img src={JS} alt="" /></SwiperSlide>
        <SwiperSlide><img src={REACT} alt="" /></SwiperSlide>
        <SwiperSlide><img src={PHP} alt="" /></SwiperSlide>
        <SwiperSlide><img src={SQL} alt="" /></SwiperSlide>
        <SwiperSlide><img src={JAVA} alt="" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
