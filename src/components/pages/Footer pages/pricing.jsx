import React, { Suspense, lazy, useEffect, useState } from "react";
import "../../styles/PricingPage.css";
import IconAbout from "../../../assets/images/exellent.webp";
import {
  Dialog,
  DialogActions,
  DialogContent,
  useMediaQuery,
} from "@mui/material";
import PricingHero from "../../../assets/images/pricing-bg-after.webp";
function pricing() {
  const Contact = lazy(() => import("../other sections/Contact"));
  const [ServiceTabs, SetServiceTabs] = useState("ghost");
  const handleServiceTabs = (servicetabs) => {
    SetServiceTabs(servicetabs);
  };
  const [OpenModal, SetOpenModal] = useState(false);
  const [ClientData, SetClientData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const Testi = lazy(() => import("../other sections/Testimonails"));
  useEffect(() => {
    setTimeout(() => {
      SetOpenModal(true);
    }, 2500);
  }, []);
  useEffect(() => {
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/65fdade3a0c6737bd123b4ad/1hpjeuhgs";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
    return () => {
      s1.parentNode.removeChild(s1);
    };
  }, []);

  const handleLiveChatClick = () => {
    if (typeof Tawk_API !== "undefined") {
      Tawk_API.toggle();
    }
  };
  return (
    <>
      <Dialog open={OpenModal}>
        <DialogActions>
          <i
            className="fa-solid fa-xmark text-center mt-4 xl:mt-0 mr-2 xl:mr-0 flex flex-col justify-center items-center  bg-[#a44099] w-[30px] h-[30px] p-[1px] rounded-[4px]  cursor-pointer"
            onClick={() => SetOpenModal(false)}
          ></i>
        </DialogActions>
        <DialogContent>
          <div className="popupform">
            <h2 className="text-black font-bold mb-[10px] xl:text-white ">
              Get Ready To <br />
              Become a Bestseller!
            </h2>
            <form className="xl:py-3 flex flex-col justify-start items-start">
              <input
                type="text"
                className=" xl:mb-[20px] mb-[15px] text-black  xl:w-[300px] w-full p-[10px]
                   border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Name"
                required
                onChange={(e) => {
                  SetClientData({ ...ClientData, name: e.target.value });
                }}
              />
              <input
                type="number"
                className=" xl:mb-[20px] mb-[15px]   p-[10px] text-black xl:w-[300px] w-full
                   border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Number"
                required
                onChange={(e) => {
                  SetClientData({ ...ClientData, number: e.target.value });
                }}
              />
              <input
                type="email"
                className=" xl:mb-[20px] mb-[15px]   p-[10px] text-black xl:w-[300px] w-full
                   border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Email Address"
                required
                onChange={(e) => {
                  SetClientData({ ...ClientData, email: e.target.value });
                }}
              />

              <button className="popup-btn uppercase xl:relative xl:left-[0.2em] ">
                Submit
              </button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
      <section className="bg-pricing">
        <div className="flex justify-around items-center xl:flex-row flex-col md:flex-row sm:flex-row ">
          <div className="mx-6 mb-[40px] xl:mb-1 xl:mx-1">
            <h2 className="head-h2  font-bold  mb-[22px]">
              Affordable and <br className="mb-hide" /> Competitive Pricing for{" "}
              <br className="mb-hide" /> our Ghostwriting Services
            </h2>
            <p className="mb-[22px] font-semibold">
              At Pro Book Writer, we believe in providing high-quality
              <br className="mb-hide" /> ghostwriting services at a price that
              is affordable for the majority <br className="mb-hide" /> of
              people.
            </p>
            <div className="flex  xl:flex-row flex-col md:flex-row sm:flex-row mb-[20px]">
              <div>
                <button
                  onClick={() => {
                    SetOpenModal(true);
                  }}
                  className="btn xl:w-auto w-full   mb-2 xl:mb-0 "
                >
                  Get a Free Quote
                </button>
                <button
                  className="live-chat xl:mx-4 relative left-[1px] xl:left-0 xl:w-auto w-full"
                  style={{ borderRadius: "8px" }}
                  onClick={handleLiveChatClick}
                >
                  Live Chat
                </button>
              </div>
            </div>
            <div>
              <img src={IconAbout} className="object-cover" />
            </div>
          </div>
          <div className="xl:w-[600px] w-[350px] overflow-hidden  xl:mt-5 mx-6 xl:mx-0">
            <img src={PricingHero} alt="No" className="object-contain" />
          </div>
        </div>
      </section>
      <section className="bg-service">
        <div>
          <h1 className="head-h2 font-bold mb-[21px] mx-5 xl:mx-7">
            Ghostwriting Services
          </h1>
          <div className="flex justify-between xl:items-center px-4  xl:px-8 xl:flex-row md:flex-row sm:flex-row border-b-[2px] border-[#31d4df] flex-col">
            <p className="font-semibold pb-2">
              Giving the necessary words to your original and unique ideas
            </p>
            <p className="font-semibold pb-2">Services we provide:</p>
          </div>
          {/* Tabs is given */}
          <div className="flex  xl:flex-row md:flex-row sm:flex-row flex-col">
            <div className=" my-4">
              <div className="mb-[5px] xl:mb-0 md:mb-0 sm:mb-0 publish-col-2  mx-5 xl:mx-4 mt-12 xl:mt-1">
                <div
                  className="info-expert xl:w-[250px] h-auto w-full"
                  onClick={() => {
                    handleServiceTabs("ghost");
                  }}
                >
                  <span>
                    <i className="fas fa-check"></i>
                  </span>
                  <h4>Ghost Writing</h4>
                </div>

                <div
                  className="info-expert xl:w-[250px] w-full"
                  onClick={() => {
                    handleServiceTabs("onlineBook");
                  }}
                >
                  <span>
                    <i className="fas fa-check"></i>
                  </span>
                  <h4>Online Book Publication</h4>
                </div>

                <div
                  className="info-expert xl:w-[250px] w-full"
                  onClick={() => {
                    handleServiceTabs("brandpublisher");
                  }}
                >
                  <span>
                    <i className="fas fa-check"></i>
                  </span>
                  <h4>Branding and Publicity</h4>
                </div>
                <div
                  className="info-expert xl:w-[250px] w-full"
                  onClick={() => {
                    handleServiceTabs("vediobook");
                  }}
                >
                  <span>
                    <i className="fas fa-check"></i>
                  </span>
                  <h4>Video Book Trailers</h4>
                </div>
                <div
                  className="info-expert xl:w-[250px] w-full"
                  onClick={() => {
                    handleServiceTabs("webseo");
                  }}
                >
                  <span>
                    <i className="fas fa-check"></i>
                  </span>
                  <h4>Web Design and SEO</h4>
                </div>
                <div
                  className="info-expert xl:w-[250px] w-full"
                  onClick={() => {
                    handleServiceTabs("audiobook");
                  }}
                >
                  <span>
                    <i className="fas fa-check"></i>
                  </span>
                  <h4>Audio Books</h4>
                </div>
                <div
                  className="info-expert xl:w-[250px] w-full"
                  onClick={() => {
                    handleServiceTabs("coverdesign");
                  }}
                >
                  <span>
                    <i className="fas fa-check"></i>
                  </span>
                  <h4>Cover Design and Typesetting</h4>
                </div>
              </div>
            </div>
            <div>
              {ServiceTabs === "ghost" && (
                <>
                  <div className="  xl:w-[680px] w-auto xl:my-8 xl:mx-3 mx-6">
                    <h2 className="head-h2 font-bold xl:mb-[10px]">
                      Ghostwriting Service
                    </h2>
                    <p className="xl:mb-[20px] mb-[10px]">
                      Our ghostwriters put your original and unique ideas into
                      words. We work hard to keep our ghostwriting service as
                      affordable as possible so that becoming a fully published
                      author can be a dream achieved by many rather than a
                      select few.
                    </p>
                    <div className="flex xl:flex-row justify-between items-center md:flex-row sm:flex-row flex-col xl:mb-[50px] mb-[30px]">
                      <button
                        className="btn xl:w-[200px] w-full mb-2 xl:mb-0 "
                        style={{ borderRadius: "30px" }}
                        onClick={handleLiveChatClick}
                      >
                        REGULAR
                      </button>
                      <button
                        className="btn xl:w-[200px] w-full xl:mr-[4em] "
                        style={{ borderRadius: "30px" }}
                        onClick={handleLiveChatClick}
                        >
                        PRO
                      </button>
                    </div>
                    <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col justify-around items-center">
                      <div>
                        <ul className="list_ur">
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            For your project, you'll need a talented and expert
                            ghostwriter.
                          </li>
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            The creation of something distinctive and intriguing
                            will be a key approach for your project.
                          </li>
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            Throughout the writing process, an editor will be
                            present to verify that the quality of the content is
                            maintained.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="list_ur">
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            For your assignment, you'll need an expert
                            ghostwriter.
                          </li>
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            The key strategy for your project will be to create
                            something unique and entertaining, as well as to
                            take some creative liberties along the way.
                          </li>
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            An editor will be on board to guarantee that the
                            content's quality is maintained throughout the
                            writing process and until it is published.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {ServiceTabs === "onlineBook" && (
                <>
                  <div className=" xl:w-[680px] w-auto xl:my-8 xl:mx-3 mx-6">
                    <h2 className="head-h2 font-bold xl:mb-[10px]">
                      Online Book Publication
                    </h2>
                    <p className="xl:mb-[20px] mb-[10px]">
                      Pro Book Writers promises you fair and reasonable price
                      options for our services, with no hidden or extra
                      expenses. With us, there's always a bundle that's right
                      for you! The cost of each project is determined by the
                      length of time it takes to complete it and the amount of
                      information it contains. Everything is kept completely
                      transparent with the client from the beginning, and we
                      guarantee your complete happiness.
                    </p>
                    <button
                      className="btn xl:w-[200px] w-full xl:mb-[50px] mb-[10px] "
                      style={{ borderRadius: "30px" }}
                      onClick={handleLiveChatClick}
                      >
                      DESCRIPTION
                    </button>

                    <ul className="list_ur">
                      <li>
                        <i className="fa-solid fa-arrow-right mx-1"></i>
                        We will publish your book online and guarantee that it
                        reaches the widest possible audience, resulting in the
                        highest possible royalties and rankings for you.
                      </li>
                      <li>
                        <i className="fa-solid fa-arrow-right mx-1"></i>
                        All online publishing outlets, such as Amazon, Barnes &
                        Noble, and Create Space, are surely included in our
                        online book publication.
                      </li>
                    </ul>
                  </div>
                </>
              )}
              {ServiceTabs === "brandpublisher" && (
                <>
                  <div className="  xl:w-[680px] w-auto xl:my-8 xl:mx-3 mx-6">
                    <h2 className="head-h2 font-bold xl:mb-[10px]">
                      Marketing and Publicity
                    </h2>
                    <p className="xl:mb-[20px] mb-[10px]">
                      As if writing your book wasn't enough, we at The Writers
                      Tree also offer to assist you in promoting it after it's
                      been published, because exposure is crucial to getting
                      your book noticed! Our goal is to draw as much attention
                      to your book as possible using an engaging approach. We'll
                      do everything we can to make your book stand out.
                    </p>
                    <div className="flex xl:flex-row justify-between items-center md:flex-row sm:flex-row flex-col xl:mb-[50px] mb-[10px]">
                      <button
                        className="btn xl:w-[200px] w-full xl:mb-0 mb-2 "
                        style={{ borderRadius: "30px" }}
                        onClick={handleLiveChatClick}
                        >
                        REGULAR
                      </button>
                      <button
                        className="btn xl:w-[200px] w-full xl:mr-[4em] "
                        style={{ borderRadius: "30px" }}
                        onClick={handleLiveChatClick}
                      >
                        PRO
                      </button>
                    </div>
                    <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col justify-around ">
                      <div>
                        <ul className="list_ur">
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            The most fundamental marketing techniques will be
                            implemented.
                          </li>
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            Your book will be advertised on a number of social
                            media sites.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="list_ur">
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            Marketing strategies that are more advanced will be
                            implemented.
                          </li>
                          <li className="xl:mt-[2.5em]">
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            To ensure increased digital visibility, extensive
                            social media promotion on all platforms is used.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {ServiceTabs === "vediobook" && (
                <>
                  <div className="  xl:w-[680px] w-auto xl:my-8 xl:mx-3 mx-6">
                    <h2 className="head-h2 font-bold xl:mb-[10px]">
                      Book Trailers
                    </h2>
                    <p className="xl:mb-[20px] mb-[10px]">
                      A book trailer is necessary for the marketing of your
                      book. We will attempt to develop a prestigious and
                      fascinating book trailer that will entice a random
                      internet user to purchase your book. Our designers
                      collaborate closely with the writing team to ensure that
                      the trailer captures the soul of your book.
                    </p>
                    <div className="flex xl:flex-row justify-between items-center md:flex-row sm:flex-row flex-col xl:mb-[50px] mb-[10px]">
                      <button
                        className="btn xl:w-[200px] w-full  xl:mb-0 mb-2 "
                        style={{ borderRadius: "30px" }}
                        onClick={handleLiveChatClick}
                      >
                        REGULAR
                      </button>
                      <button
                        className="btn xl:w-[200px] w-full xl:mr-[4em] "
                        style={{ borderRadius: "30px" }}
                        onClick={handleLiveChatClick}
                      >
                        PRO
                      </button>
                    </div>
                    <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col justify-around ">
                      <div>
                        <ul className="list_ur">
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            HD film and high-quality photos.
                          </li>
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            You'll be sure to get an interesting book trailer.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="list_ur">
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            Footage in high definition.
                          </li>
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            Customers are given professional advice.
                          </li>
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            You'll be sure to get an interesting book trailer.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {ServiceTabs === "webseo" && (
                <>
                  <div className="  xl:w-[680px] w-auto xl:my-8 xl:mx-3 mx-6">
                    <h2 className="head-h2 font-bold xl:mb-[10px]">
                      Branding and SEO
                    </h2>
                    <p className="xl:mb-[20px] mb-[10px]">
                      Having an online platform is necessary for your online
                      presence as well as digitally branding your book through
                      social media and other channels. We assist you in
                      developing user-friendly and responsive websites, as well
                      as optimizing your SEO so that your site always ranks
                      first.
                    </p>
                    <div className="flex xl:flex-row justify-between items-center md:flex-row sm:flex-row flex-col xl:mb-[50px] mb-[10px]">
                      <button
                        className="btn xl:w-[200px] w-full  xl:mb-0 mb-2 "
                        style={{ borderRadius: "30px" }}
                        onClick={handleLiveChatClick}
                      >
                        REGULAR
                      </button>
                      <button
                        className="btn xl:w-[200px] w-full xl:mr-[4em] "
                        style={{ borderRadius: "30px" }}
                        onClick={handleLiveChatClick}
                      >
                        PRO
                      </button>
                    </div>
                    <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col justify-around ">
                      <div>
                        <ul className="list_ur">
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            websites that are easy to use.
                          </li>
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            Advanced SEO.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="list_ur">
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            User-friendly and creative websites.
                          </li>
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            Advanced SEO curated to perfection.
                          </li>
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>A
                            high-ranking position sustainability.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {ServiceTabs === "audiobook" && (
                <>
                  <div className=" xl:w-[680px] w-auto xl:my-8 xl:mx-3 mx-6">
                    <h2 className="head-h2 font-bold xl:mb-[10px]">
                      Audiobooks
                    </h2>
                    <p className="xl:mb-[20px] mb-[10px]">
                      Many people nowadays choose to listen to an audiobook
                      rather than read a book. An audiobook recreates the
                      sensation of hearing a story told the old-fashioned way,
                      with a storyteller telling it verbally rather than reading
                      it on parchment. Audiobooks are also useful for folks who
                      are too busy to read and would prefer to get work done
                      while listening to something interesting.
                    </p>
                    <button
                      className="btn xl:w-[200px] w-full xl:mb-[50px] mb-[10px] "
                      style={{ borderRadius: "30px" }}
                      onClick={handleLiveChatClick}
                      >
                      DESCRIPTION
                    </button>

                    <ul className="list_ur">
                      <li>
                        <i className="fa-solid fa-arrow-right mx-1"></i>
                        audiobooks of excellent quality.
                      </li>
                      <li>
                        <i className="fa-solid fa-arrow-right mx-1"></i>
                        There are no glitches in the audio.
                      </li>
                      <li>
                        <i className="fa-solid fa-arrow-right mx-1"></i>
                        We and the client collaborated on this project.
                      </li>
                    </ul>
                  </div>
                </>
              )}
              {ServiceTabs === "coverdesign" && (
                <>
                  <div className="  xl:w-[680px] w-auto xl:my-8 xl:mx-3 mx-6">
                    <h2 className="head-h2 font-bold xl:mb-[10px]">
                      Cover Design and Typesetting Service
                    </h2>
                    <p className="xl:mb-[20px] mb-[10px]">
                      In today's fast-paced world, the value of a book cover
                      cannot be overstated. Whereas cover designs used to be
                      straightforward, they now must capture the soul of the
                      book in order to organically attract a potential reader to
                      grab the book off the shelf and read it. Our designers
                      collaborate closely with the writing team to ensure that
                      the cover represents the content accurately.
                    </p>
                    <div className="flex xl:flex-row justify-between items-center md:flex-row sm:flex-row flex-col xl:mb-[50px] mb-[10px]">
                      <button
                        className="btn xl:w-[200px] w-full mb-2 xl:mb-0 "
                        style={{ borderRadius: "30px" }}
                        onClick={handleLiveChatClick}
                      >
                        REGULAR
                      </button>
                      <button
                        className="btn xl:w-[200px] w-full xl:mr-[4em] "
                        style={{ borderRadius: "30px" }}
                        onClick={handleLiveChatClick}
                      >
                        PRO
                      </button>
                    </div>
                    <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col justify-around ">
                      <div>
                        <ul className="list_ur">
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            The writing team collaborates with the designers.
                          </li>
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            typesetting by a professional.
                          </li>
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            Designers work together with you (the client).
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="list_ur">
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            Designers conduct market research to gain a better
                            understanding of the readers' viewpoints.
                          </li>
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            Cover designs that are high-quality and unique.
                          </li>
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            Designers work together with you (the client).
                          </li>
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            typesetting that is professional and of high
                            quality.
                          </li>
                          <li>
                            <i className="fa-solid fa-arrow-right mx-1"></i>
                            An editor will be on board to guarantee that the
                            content's quality is maintained throughout the
                            writing process and until it is published.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <Contact />
      </Suspense>
    </>
  );
}

export default pricing;
