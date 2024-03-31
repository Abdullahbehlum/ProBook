import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Amazon from "../../../assets/images/amazon.webp";
import Banses from "../../../assets/images/barness.webp";
import BBC from "../../../assets/images/BBC_Logo_2021.webp";
import Forbes from "../../../assets/images/partner-logo-02.webp";
import NBC from "../../../assets/images/partner-logo-01.webp";
import useMediaQuery from "@mui/material/useMediaQuery";
function NbcSlider() {
  const Mobile = useMediaQuery("(max-width:769px)");
  return (
    <>
      <section className="mx-16 xl:mx-32" >
        <Swiper
          slidesPerView={Mobile ? 2 : 4}
          autoplay={true}
          spaceBetween={10}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={Amazon}
              alt="Not Found"
              className="xl:w-[150px] h-auto w-[100px]  object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={Banses}
              alt="Not Found"
              className="xl:w-[150px] h-auto w-[100px]  object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={BBC}
              alt="Not Found"
              className="xl:w-[150px] h-auto w-[100px]  object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={Forbes}
              alt="Not Found"
              className="xl:w-[150px] h-auto w-[100px]  object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={NBC}
              alt="Not Found"
              className="xl:w-[150px] h-auto w-[100px]  object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default NbcSlider;
