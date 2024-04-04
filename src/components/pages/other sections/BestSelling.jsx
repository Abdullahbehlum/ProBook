import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Book1 from "../../../assets/images/book_cover_1.webp";
import Book2 from "../../../assets/images/book_cover_2.webp";
import Book3 from "../../../assets/images/book_cover_3.webp";
import Book4 from "../../../assets/images/book_cover_4.webp";
import Book5 from "../../../assets/images/5.webp";
import Book6 from "../../../assets/images/6.webp";
import Book7 from "../../../assets/images/b1.webp";
import useMediaQuery from "@mui/material/useMediaQuery";

function BestSellingBooks() {
  const Mobile = useMediaQuery("(max-width:769px)");
  return (
    <>
    <section className="uniquearea" >
    <div className="bg-sell-books">
        <div className="mb-8 xl:mb-[44px]">
          <h3 className="head-h2  text-center font-semibold">
            Best Selling Books
          </h3>
        </div>
        <div className="xl:mx-24 mb-4 xl:mb-0 mx-6 ">
          <Swiper
            slidesPerView={Mobile ? 2 : 4}
            autoplay={true}
            spaceBetween={10}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={Book1}
                alt="Not Found"
                className="xl:w-[200px] w-[150px]  object-cover"
              />
              <div className="noneOfScoll text-white mb-hide">
                <p>#1</p>
                <h4>
                  international
                  <br />
                  bestselling <br />
                  author
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Book2}
                alt="Not Found"
                className="xl:w-[200px] h-auto w-[150px]  object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Book3}
                alt="Not Found"
                className="xl:w-[200px] h-auto w-[150px]  object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src={Book4}
                alt="Not Found"
                className="xl:w-[200px] h-auto w-[150px]  object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src={Book5}
                alt="Not Found"
                className="xl:w-[200px] h-auto w-[150px]  object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Book6}
                alt="Not Found"
                className="xl:w-[200px] h-auto w-[150px]  object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Book7}
                alt="Not Found"
                className="xl:w-[200px] h-auto w-[150px]  object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
 
    </>
  );
}

export default BestSellingBooks;
