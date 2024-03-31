import useMediaQuery from "@mui/material/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
function Testimonails() {
  const Mobile = useMediaQuery("(max-width:600px)");
  return (
    <>
      <section className="bg-test">
        <div className="flex justify-between items-center xl:flex-row flex-col sm:flex-row md:flex-row">
          <div className="xl:mt-[-14em]">
            <h3 className="xl:text-[46px] text-[22px] font-bold leading-[54px] mb-[17px] text-white">
              TESTIMONIALS
            </h3>
          </div>
          <div className="xl:w-[700px] w-[400px]  ">
            <Swiper
              slidesPerView={Mobile ? 1 : 3}
              autoplay={true}
              spaceBetween={10}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {/* 1 */}
              <SwiperSlide>
                <div className="test_box ">
                  <p className="mb-4">
                    They have served me with tremendous ghostwriting services.
                    Being a working woman, I could hardly manage time to
                    complete my book for myself but thanks to The Writer's Tree,
                    their ghostwriting team has the diverse experience to write
                    your aspirations with literary excellence.
                  </p>
                  <h6>Tamatha M. Harkins</h6>{" "}
                </div>
              </SwiperSlide>
              {/* 2 */}
              <SwiperSlide>
                <div className="test_box">
                  <p className="xl:mb-[11.7em] mb-16 ">
                    Best Ghostwriters in town!!! They made my ugly write-ups
                    look so good in the form of a compiled book
                  </p>
                  <h6>Tom J. Moore</h6>{" "}
                </div>
              </SwiperSlide>
              {/* 3*/}
              <SwiperSlide>
                <div className="test_box">
                  <p className="xl:mb-[8.6em] mb-12">
                    I’m thoroughly impressed by the creative minds that are a
                    part of Pro Book writer team. I brought a concept to them
                    and they did creative justice to it!
                  </p>
                  <h6>Nicolas McCormick</h6>{" "}
                </div>
              </SwiperSlide>
              {/* 4 */}
              <SwiperSlide>
                <div className="test_box">
                  <p className="xl:mb-[9em] mb-12 ">
                    Professional, streamlined, meticulous, and creative, the
                    team at Pro Book Writers are my go-to for anything and
                    everything that I want written and published!
                  </p>
                  <h6>Angelo Long</h6>{" "}
                </div>
              </SwiperSlide>
              {/*5  */}
              <SwiperSlide>
                <div className="test_box">
                  <p className="xl:mb-[7.5em] mb-12 ">
                    I’m so lucky to have discovered Pro Book Writers for myself.
                    Their writing team is phenomenal and their services are
                    amazing! I’m definitely going to bring more projects to
                    them.
                  </p>
                  <h6>Malcolm Gibbs</h6>{" "}
                </div>
              </SwiperSlide>
              {/* 6 */}
              <SwiperSlide>
                <div className="test_box">
                  <p className="mb-4">
                    They have served me with tremendous ghostwriting services.
                    Being a working woman, I could hardly manage time to
                    complete my book for myself but thanks to The Writer's Tree,
                    their ghostwriting team has the diverse experience to write
                    your aspirations with literary excellence.
                  </p>
                  <h6>Tamatha M. Harkins</h6>{" "}
                </div>
              </SwiperSlide>
              {/* 4 */}
              <SwiperSlide>
                <div className="test_box">
                  <p className="xl:mb-[7.2em] mb-12 ">
                    “I’m so lucky to have discovered Pro Book Writers for
                    myself. Their writing team is phenomenal and their services
                    are amazing! I’m definitely going to bring more projects to
                    them.”
                  </p>
                  <h6>Malcolm Gibbs</h6>{" "}
                </div>
              </SwiperSlide>
              {/*5  */}
              <SwiperSlide>
                <div className="test_box">
                  <p className="xl:mb-[5.7em] mb-12 ">
                    Best Ghostwriters in town!!! They made my ugly write-ups
                    look so good in the form of a compiled book with absolutely
                    no errors and helped me execute everything concerning my
                    book in a very short span of time.
                  </p>
                  <h6>Tom J. Moore</h6>{" "}
                </div>
              </SwiperSlide>
              {/* 6 */}
              <SwiperSlide>
                <div className="test_box">
                  <p className="xl:mb-[8.6em] mb-12 ">
                    Professional, streamlined, meticulous, and creative, the
                    team at Pro Book Writers are my go-to for anything and
                    everything that I want written and published!
                  </p>
                  <h6>Angelo Long</h6>{" "}
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonails;
