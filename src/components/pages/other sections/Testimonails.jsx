import useMediaQuery from "@mui/material/useMediaQuery";
import Star from "../../../assets/images/star.png";
import User from "../../../assets/images/pic 01.jpg";
import User1 from "../../../assets/images/pic 02.jpg";
import User2 from "../../../assets/images/pic 03.jpg";
import User3 from "../../../assets/images/pic 04.jpg";
import User4 from "../../../assets/images/pic 05.jpg";
import User5 from "../../../assets/images/pic 06.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
const TestimonialData = [
  {
    id: 1,
    img: User,
    name: " Hazel J. Nixon",
    Rating: Star,
    description:
      "I’m grateful, that I was able to find the author’s book publishing. Their team of creative ghostwriters was able to bringmy author persona to life. Thankyou the author's book publishing!",
  },
  {
    id: 2,
    img: User1,
    name: " Louis C. Mckinnon",
    Rating: Star,
    description:
      "Author’s Book Publishing is the best team of expert publishers in the USA. Their expert team helped me publish my aspirations with the simplest publishing procedures.",
  },
  {
    id: 3,
    img: User2,
    name: "Edward L. Berman",
    Rating: Star,
    description:
      "My book was professionally altered and edited by top proofreaders in the USA. Author’s book publishing made my publishing journey by navigating me through all the complexities.",
  },
  {
    id: 4,
    img: User3,
    name: "Rene B. Brown",
    Rating: Star,
    description:
      "Author’s book publishing is a place that brings author personas to life. My friend suggested me of them when I was struggling to find professional editors for my book and their editors are really great and passionate about their work.",
  },
  {
    id: 5,
    img: User4,
    name: "James D. Perez",
    Rating: Star,
    description:
      "Tired of the search for the simplest publishing methods? Author’s book publishing aims to help you stand out in the publishing journey and know that your book makes it global! Thanks for serving me with a global network, ABP.",
  },
  {
    id: 6,
    img: User5,
    name: "Vicki R. Baker",
    Rating: Star,
    description:
      "I’m glad that I was able to collaborate with author’s book publishing as they have the best ghostwriting team in the USA. They served me with drafts chapter-wise every 15 days and my book was completed in literally no time.",
  },
];
function Testimonails() {
  const Mobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <section className="uniquearea">
        <div className="text-center mb-[30px]">
          <h1 className="head-h2  font-semibold">Testimonials</h1>
        </div>

        <Swiper
          slidesPerView={Mobile ? 1 : 3}
          autoplay={true}
          spaceBetween={10}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {TestimonialData.map((testi) => (
            <>
              <SwiperSlide key={testi.id}>
                <div className="test_card " key={testi.id}>
                  <div className="flex items-center  mb-[16px]">
                    <img
                      src={testi.img}
                      className="w-[65px] xl:mr-3 mr-2 rounded-[150px]"
                    />
                    <h3 className=" xl:mt-4 mt-5  text-[16px] font-semibold ">
                      {testi.name}
                      <img
                        src={testi.Rating}
                        className="w-[75px] mt-[-10px] xl:mt-[-7px]"
                      />
                    </h3>
                  </div>
                  <p>{testi.description}</p>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default Testimonails;
