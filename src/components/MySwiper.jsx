import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import JS from "../assets/js.png"
import REACT from "../assets/react.png"
import PHP from "../assets/php.png"
import SQL from "../assets/sql.png"
import JAVA from "../assets/java.png"
import ANGULAR from "../assets/angular.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../css/mySwiper.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      <SwiperSlide>{HTML}</SwiperSlide>
        <SwiperSlide>{CSS}</SwiperSlide>
        <SwiperSlide>{JS}</SwiperSlide>
        <SwiperSlide>{REACT}</SwiperSlide>
        <SwiperSlide>{PHP}</SwiperSlide>
        <SwiperSlide>{SQL}</SwiperSlide>
        <SwiperSlide>{JAVA}</SwiperSlide>
        <SwiperSlide>{ANGULAR}</SwiperSlide>
      </Swiper>
    </>
  );
}