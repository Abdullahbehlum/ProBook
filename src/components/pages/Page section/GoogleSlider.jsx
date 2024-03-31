import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo1 from "../../../assets/images/site-logo3.webp";
import logo2 from "../../../assets/images/site-logo4.webp";
import logo3 from "../../../assets/images/site-logo5.webp";
import logo4 from "../../../assets/images/site-logo6.webp";
import logo5 from "../../../assets/images/site-logo7.webp";
import logo6 from "../../../assets/images/site-logo8.webp";
import logo7 from "../../../assets/images/site-logo9.webp";

function GoogleSlider() {
  const Mobile = useMediaQuery("(max-width:769px)");
  return (
    <>
      <section className="site-logo">
        <div className="flex xl:flex-row sm:flex-row md:flex-row flex-col justify-around items-center">
          <div>
            <h3 className="text-[27px] font-bold text-[#122826]">
              Sell Your <br /> Book On
            </h3>
          </div>
          <div className="xl:w-[950px] w-[400px] relative left-[2em] top-4 xl:top-0 xl:left-0 mx-7 xl:mx-0">
            <Swiper
              slidesPerView={Mobile ? 3 : 7}
              autoplay={true}
              spaceBetween={0.1}
              modules={[Pagination, Autoplay]}
              className="w-[100%]"
            >
              <SwiperSlide>
                <img src={logo1} alt="not" className="w-[100px]  object-cover" />
              </SwiperSlide>
              <SwiperSlide className="mr-5">
                <img
                  src={logo2}
                  alt="not"
                  className="w-[100px]   object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="mr-5">
                <img src={logo3} alt="not" className="w-[100px]   object-cover" />
              </SwiperSlide>
              <SwiperSlide  className="mr-5">
                <img src={logo4} alt="not" className="w-[100px] object-cover" />
              </SwiperSlide>
              <SwiperSlide className="mr-5">
                <img
                  src={logo5}
                  alt="not"
                  className="w-[100px]  object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={logo6}
                  alt="not"
                  className="w-[100px]  object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={logo7}
                  alt="not"
                  className="w-[100px]  object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default GoogleSlider;
