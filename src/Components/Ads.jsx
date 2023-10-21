import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, A11y, EffectFade } from "swiper/modules";

const Ads = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectFade]}
        spaceBetween={50}
        effect="fade"
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src="/img/5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/3.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Ads;
