import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

const HomeSwiper = () => {
  return (
    <div className="h-[400px] mx-auto mt-24">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/SyKS34D/1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover object-center"
            src="https://i.ibb.co/SyKS34D/1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/SyKS34D/1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/SyKS34D/1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/SyKS34D/1.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
