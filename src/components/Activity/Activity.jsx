import "./Activity.css";
import { Swiper, SwiperSlide } from "swiper/react";
import gallery_1 from "../../assets/gallry_1.jpg";
import gallery_2 from "../../assets/gallry_2.jpg";
import gallery_3 from "../../assets/gallry_3.jpg";
import gallery_4 from "../../assets/gallry_4.jpg";
import gallery_5 from "../../assets/gallry_3.jpg";
import gallery_6 from "../../assets/gallry_4.jpg";

// Swiper Effect
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "../../../node_modules/swiper/modules/pagination.css";
import "../../../node_modules/swiper/modules/navigation.css";

const Activity = () => {
  return (
    <div className="activity" id="activity">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlider={true}
        loop={true}
        slidesPerView={"auto"}
        coverFlowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={gallery_1} alt="gallery-images" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery_2} alt="gallery-images" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery_3} alt="gallery-images" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery_4} alt="gallery-images" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery_5} alt="gallery-images" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery_6} alt="gallery-images" />
        </SwiperSlide>

        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Activity;
