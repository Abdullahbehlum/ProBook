import React, { Suspense, lazy, useEffect, useState } from "react";
import Rating from "../../../assets/images/rating-half.webp";
import Bools from "../../../assets/images/Book Trailer.png";
import Trustiplot from "../../../assets/images/trustpilot.webp";
import Bark from "../../../assets/images/bark.webp";
import Clush from "../../../assets/images/clutch.webp";
import Sitejob from "../../../assets/images/site-jabbar.svg";
import Ghostimg from "../../../assets/images/Book Trailer 2.png";
import featureIcon1 from "../../../assets/images/feature_icon1.png";
import featureIcon2 from "../../../assets/images/feature_icon2.png";
import featureIcon3 from "../../../assets/images/feature_icon3.png";
import featureIcon4 from "../../../assets/images/feature_icon4.png";
import ServiceWriting from "../../../assets/images/wri-edi-simg.webp";
import Books from "../../../assets/images/Book_Trailer_3.png";
import "../../styles/Ghostwriting.css";
import "../../styles/HireProfessional.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  useMediaQuery,
} from "@mui/material";
import "../../styles/Popup.css"
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../config/Config";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
function BookTrailler() {
  const SitesLogo = lazy(() => import("../Page section/GoogleSlider"));
  const Contactus = lazy(() => import("../other sections/Contact"));
  const Testimonails = lazy(() => import("../other sections/Testimonails"));
  const Mobile = useMediaQuery("(max-width:800px");
  const [GhostFaqs, SetGhostFaqs] = useState(false);
  const [GhostFaqs1, SetGhostFaqs1] = useState(false);
  const [GhostFaqs2, SetGhostFaqs2] = useState(false);
  const [GhostFaqs3, SetGhostFaqs3] = useState(false);
  const [GhostFaqs4, SetGhostFaqs4] = useState(false);
  const [GhostFaqs5, SetGhostFaqs5] = useState(false);
  const [OpenModal, SetOpenModal] = useState(false);
  const [ClientData, SetClientData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "clients"), ClientData);
      console.log(docRef);
      toast.success("Message send successfully!");
      SetClientData({ name: "", email: "", number: "" });
      return true;
    } catch (error) {
      toast.error("Failed to submit form. Please try again later.");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      SetOpenModal(true);
    }, 2500);
  }, []);
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
   <div
        className={`fixed inset-0 transition-all duration-75  flex xl:justify-start xl:items-start justify-center items-center 
         xl:my-6 my-24
 ml-4 xl:mx-0   bg-poup  ${
   OpenModal ? "block" : "hidden"
 } xl:ml-[14em]`}
      >
        <div className="popupform xl:py-24 xl:px-12 py-12  px-4 ">
          <div>
            <h2 className="text-black xl:text-white head-h2 font-bold mb-5">
              Get Ready To <br />
              Become a Bestseller!
            </h2>
            <form
              onSubmit={handleFormSubmit}
              className="xl:py-3 flex flex-col justify-start items-start"
            >
              <input
                type="text"
                className="mb-5 text-black xl:w-[380px] w-full p-4 border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Name"
                required
                value={ClientData.name}
                onChange={(e) =>
                  SetClientData({ ...ClientData, name: e.target.value })
                }
              />
              <input
                type="number"
                className="mb-5 xl:w-[380px] w-full p-4 text-black border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Number"
                required
                value={ClientData.number}
                onChange={(e) =>
                  SetClientData({ ...ClientData, number: e.target.value })
                }
              />
              <input
                type="email"
                className="mb-5 xl:w-[380px] w-full p-4 text-black border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Email Address"
                required
                value={ClientData.email}
                onChange={(e) =>
                  SetClientData({ ...ClientData, email: e.target.value })
                }
              />

              <button className="btn  uppercase">
                Submit
              </button>
            </form>
            <i
              className="fa-solid fa-xmark text-center flex justify-center
         items-center xl:mt-12 mt-6 xl:mx-16 ml-1 mx-5 xl:ml-0 bg-[#a44099] text-white
          w-[35px] h-[30px] rounded-[4px] cursor-pointer absolute top-0 right-0"
              onClick={() => SetOpenModal(false)}
            ></i>
          </div>
        </div>
      </div>
      <section className="bg-book-edit">
        <div className="flex justify-around overflow-hidden  text-white items-center xl:flex-row md:flex-row sm:flex-row flex-col py-8">
          <div className="xl:ml-12 md:ml-5 ml-0 mx-2 ">
            <h1
              className="head-ghost text-balance font-bold xl:mb-4 mb-6 "
              style={{ lineHeight: Mobile ? "52px" : "55px" }}
            >
              Best Online Book Trailer Video Services To Assist You In{" "}
              <br className="mb-hide" />
              <span className="frist-span px-2 text-[#00efff]">
                Creating a Buzz Around Your Network!
              </span>
            </h1>
            <p className="para xl:mb-[25px] mb-6 xl:w-[580px] w-auto md:w-[580px] sm:w-[580px]">
              Hire the best book trailer productions in the USA to help you and
              let your audience know that you are coming up with something that
              you have aspired for years. Choose the top book trailer company to
              help you leave a lasting impression on the existing as well as the
              new audience that you attract through your book. Turn your dreams
              into realities and ensure that your audience remembers you.
            </p>
            <button
              onClick={() => {
                SetOpenModal(true);
              }}
              className="btn w-full xl:w-auto mb-4 xl:mb-0 xl:mx-2 mx-0 "
            >
              Get a Free Quote
            </button>
            <br className="block xl:hidden md:hidden sm:hidden" />
            <button
              onClick={handleLiveChatClick}
              className="btn w-full xl:w-auto mb-6 xl:mb-0"
            >
              Live Chat
            </button>
            <div className="mb-hide my-8">
              <div className="flex  justify-around mb-[20px] items-center xl:flex-row md:flex-row flex-col sm:flex-row">
                <div className="w-[100px] mx-1">
                  <img src={Trustiplot} alt="No" className="object-cover" />
                </div>
                <div className="w-[100px]  mx-1">
                  <img src={Bark} alt="No" className="object-cover" />
                </div>
                <div className="w-[100px]  -ml-1">
                  <img src={Clush} alt="No" className="object-cover" />
                </div>
                <div className="w-[120px] mx-1">
                  <img src={Sitejob} alt="No" className="object-cover" />
                </div>
              </div>
              <div className="flex justify-around  items-center xl:flex-row md:flex-row flex-col sm:flex-row">
                <div>
                  <div className="flex">
                    <h4 className="text-[26px] font-semibold">4.6</h4>
                    <div className="text-center">
                      <img src={Rating} alt="no" className="w-[100px] mx-1" />
                      Rating
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex">
                    <h4 className="text-[26px] font-semibold">5.0</h4>
                    <div className="text-center">
                      <img src={Rating} alt="no" className="w-[100px] mx-1" />
                      Rating
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex">
                    <h4 className="text-[26px] font-semibold">5.0</h4>
                    <div className="text-center">
                      <img src={Rating} alt="no" className="w-[100px] mx-1" />
                      Rating
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex">
                    <h4 className="text-[26px] font-semibold">4.9</h4>
                    <div className="text-center">
                      <img src={Rating} alt="no" className="w-[100px] mx-1" />
                      Rating
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-[1024px]  md:w-[545px] sm:w-[745px] w-[300px]">
            <img src={Bools} alt="Not" className=" object-contain" />
          </div>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <SitesLogo />
      </Suspense>

      <section className="uniquearea">
        <div className="flex justify-center items-center xl:flex-row md:flex-row sm:flex-row flex-col ">
          <div className="mb-[5px] xl:mb-0 md:mb-0 sm:mb-0">
            <img src={Ghostimg} alt="Not Found" className="object-contain" />
          </div>
          <div className="mx-5 xl:mx-12 xl:w-[750px] sm:w-[460px] w-auto md:w-[450px] ">
            <h1 className="xl:text-[42px]  text-[28px] leading-[41px] xl:leading-[46px] text-[#333] mx-0 text-center xl:text-left mb-[20px]  font-bold pt-12 xl:pt-0">
              Professional Book Video Trailer Services Online!
            </h1>

            <p className="paragraph text-balance mb-[15px]">
              Understand that your book is meant to outshine the publishing
              industry by utilizing the latest industry trends in your author
              journey. Boost the conversions for your book by serving your
              audience with a captivating book video trailer.
            </p>
            <p className="paragraph text-balance mb-[15px]">
              We are an affordable custom book video service that will enhance
              the reader experience for your audience by indulging them with a
              creative yet engaging book video trailer that will help you uplift
              your author persona.
            </p>

            <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col">
              <button
                onClick={() => {
                  SetOpenModal(true);
                }}
                className="nav-btn xl:w-auto w-full mb-4 xl:mb-0"
              >
                GET A FREE QUOTE
              </button>
              <button
                onClick={handleLiveChatClick}
                className="nav-black-btn xl:w-auto w-full xl:mx-4 mx-0 "
              >
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Professional Ghostwriters Online is given */}
      <section className="uniquearea">
        <h3
          className="xl:text-[28px] xl:text-center py-4 text-[25px] font-bold"
          data-aos="fade-up"
        >
          {" "}
          Best Book Video Production Company Online, Enhancing Your Author
          Persona!
        </h3>
        <div
          className={` ${
            Mobile
              ? "flex flex-col justify-around items-center mx-4"
              : "portfolio-col-4"
          }  xl:my-5`}
        >
          <div className=" mb-[40px] xl:mb-0" data-aos="fade-left">
            <div>
              <img
                src={featureIcon1}
                className="w-[50px] xl:mb-[30px] mb-[10px]  object-cover"
              />
            </div>
            <h3 className="font-bold text-[15px] pb-[10px] border-b mb-[10px] border-black">
              Captivate Global Audience
            </h3>
            <p className="text-[14px]">
              Capture minds globally by putting out engaging content like a book
              video trailer that expresses your aspirations in a pleasing
              manner.
            </p>
          </div>
          <div className=" mb-[40px] xl:mb-0" data-aos="fade-right">
            <div>
              <img
                src={featureIcon2}
                className="w-[50px] xl:mb-[30px] mb-[10px]  object-cover"
              />
            </div>
            <h3 className="font-bold border-b text-[15px] pb-[10px] mb-[10px] border-black">
              Latest Industry Trends
            </h3>
            <p className="text-[14px]">
              Utilize the latest industry trends and go beyond the borders with
              your very own book and enhance the number of conversions that your
              book attracts.
            </p>
          </div>
          <div
            className=" mb-[40px] xl:mb-0 xl:mt-[-10px]"
            data-aos="fade-left"
          >
            <div>
              <img
                src={featureIcon3}
                className="w-[50px] xl:mb-[30px] mb-[10px]  object-cover"
              />
            </div>
            <h3 className="font-bold text-[15px] pb-[10px] border-b mb-[10px] border-black">
              Creating A Buzz
            </h3>
            <p className="text-[14px]">
              A creative book video trailer can be considered the best option
              when it comes to creating a buzz around the internet and uplifting
              your author persona in front of the existing as well as the
              audience you attract with your book.
            </p>
          </div>
          <div
            className="mb-[40px] xl:mb-0 xl:mt-[0.3em]"
            data-aos="fade-right"
          >
            <div>
              <img
                src={featureIcon4}
                className="w-[25px] xl:mb-[30px] mb-[10px]  object-cover"
              />
            </div>
            <h3 className="font-bold border-b text-[15px] pb-[10px] mb-[10px] border-black">
              Catch The Right Eye
            </h3>
            <p className="text-[14px]">
              The attention of the right reader awaits your engaging content,
              with a creative book trailer video service you can captivate
              readers who are actually interested in the genre that you served
              with your manuscript.
            </p>
          </div>
        </div>
      </section>
      {/* Professional Ghostwriters Online is End */}
      <section className="prof-bg">
        <div className="flex justify-around items-center xl:flex-row md:flex-row sm:flex-row flex-col">
          <div className="xl:w-[55%] w-[90%]">
            <h5 className="xl:text-[28px] text-[24px]  font-bold xl:mb-3 mb-2">
              EXPERT GHOST BOOK TRAILER - ENHANCING YOUR AUTHOR PERSONA AND
              ASSISTING YOU IN ENGAGING WITH READERS BETTER
            </h5>
            <p className="xl:w-[720px]   mb-2 ">
              We understand the importance of captivating audiences through
              digital platforms by following the latest industry trends. Get a
              professional book video trailer that will help you in letting
              people know that you are about to establish your aspirations on a
              global level. Hire affordable book video trailer services online
              and create a buzz over your existing audience to attract instant
              sales for your book.
            </p>
            <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col">
              <button
                onClick={() => {
                  SetOpenModal(true);
                }}
                className="all-btn  xl:mb-0 mb-3 "
              >
                GET A QUOTE
              </button>
              <button
                onClick={handleLiveChatClick}
                className=" live-chat bg-transparent xl:mb-0 mb-12 text-[#17333c] border border-[#17333c]  rounded-[8px]"
              >
                Live Chat
              </button>
            </div>
          </div>
          <div>
            <img
              src={ServiceWriting}
              alt="Not Found"
              className=" xl:w-[360px] w-[250px] object-contain"
            />
          </div>
        </div>
      </section>
      {/* Help Author is given */}
      <section className="uniquearea text-center mx-4 xl:mx-12">
        <h3 className="xl:text-[32px] text-[22px] py-3  font-bold xl:mb-[25px] mb-[16px]">
          Expert Book Video Trailer Services Near You, Get the Best
          <br className="mb-hide" /> Book Video Services Online!
        </h3>
        <p className="xl:mb-[30px] mb-[22px] ">
          Know that converting your existing audience into buyers of your book
          is an essential task to be executed and for that, you need to let
          people know about what are you up to in a captivating manner. The best
          way of hyping up people for your book is to put out a creative ghost
          book trailer video.
        </p>
        <p>
          Connect with a professional ghost book video trailer company that will
          enhance your author persona in an uplifting manner and elevate your
          author persona.
        </p>
      </section>
      {/* Help Author is End */}
      {/* Published Made is given */}
      <section className="bg-boast">
        <div className="flex justify-around items-center xl:mx-1 mx-5  xl:flex-row flex-col md:flex-row sm:flex-row">
          <div className="mx-3 xl:mx-1 ">
            <h3
              className="text-[22px] xl:text-[42px] 
            font-bold xl:leading-[49px] mb-[20px]  "
            >
              Affordable{" "}
              <span>
                Video <br className="mb-hide" /> Book Trailer Services
              </span>{" "}
              <br className="mb-hide" />
              Online
            </h3>
            <p className="mb-[20px]">With Our Simple Four Step Process</p>
            <button
              style={{ borderRadius: "50px" }}
              className="live-chat   bg-transparent xl:mb-0 mb-12 text-black hover:text-[#00bcbb] border border-black mx-3 rounded-[50px]"
              onClick={handleLiveChatClick}
            >
              <Link to={"javascript:"}>Get in Touch with us</Link>
            </button>
          </div>
          <div
            className="two-gird-col xl:w-[650px]
           w-auto"
          >
            <div>
              <h5 className="place-box mb-0">01</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Create a Buzz
              </h6>
              <p>
                A creative book video trailer will help you create a buzz around
                the audience and serve your author journey with excellence.
              </p>
            </div>
            <div>
              <h5 className="place-box">02</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Better Engagements
              </h6>

              <p>
                Build a connection with your audience for better engagements and
                ensure to attract potential conversions, digitally.
              </p>
            </div>
            <div>
              <h5 className="place-box">03</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Captivating audience
              </h6>

              <p>
                Captivate a wider audience by converting your network into your
                potential readers with the help of an expert book video trailer
                company.
              </p>
            </div>
            <div>
              <h5 className="place-box">04</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Instant Conversions
              </h6>

              <p>
                Attract instant conversions for your book by posting a custom
                video book trailer and hyping up your network so much that they
                turn out to be the instant conversions for your book.
              </p>
            </div>
            <div>
              <h5 className="place-box">05</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Stand-Out In The Industry
              </h6>
              <p>
                Differ from others in the industry by performing unusual. Boost
                your author aspirations by implementing strategies that cater to
                the latest industry trends.
              </p>
            </div>
            <div>
              <h5 className="place-box">06</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Uplifting Author Persona
              </h6>
              <p>
                Enhance your author journey with expert assistance and elevate
                your author persona by performing things that are not very
                common in the industry yet still serve you with exceptional
                results.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Published Made is End */}
      {/*  */}
      <section className="flex justify-around items-center xl:flex-row-reverse md:flex-row sm:flex-row flex-col uniquearea">
        <div className="mx-5 xl:w-[500px] sm:w-[460px] w-auto md:w-[450px]">
          <h1 className="head-h2 font-bold mb-[19px]">
            Tired Of The Search For The Best Book Video Production Online?
          </h1>
          <p className="paragraph text-balance xl:mb-[15px] mb-[10px]">
            Give a lift to your author persona and perform the unusual to
            attract exceptional results your way. Hype up your audience before
            getting your book published with expert video book trailer services.
            Establish a bond with your audience so that they can also assist you
            in getting more sales.
          </p>

          <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col mb-2 xl:my-5">
            <div>
              <ul className="text-[14px] xl:text-sm ">
                <li className="mb-[10px]  ">Create a Buzz</li>
                <li className="mb-[10px] ">Instant Conversions</li>
                <li className="mb-[1px]"> Better Engagements</li>
              </ul>
            </div>
            <div>
              <ul className="text-[14px] xl:text-sm xl:mx-12 mx-0">
                <li className="mb-[10px]">Stand-Out In The Industry</li>
                <li className="mb-[10px] ">Captivating Audience</li>
                <li className="mb-[1px] ">Uplifting Author Persona</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-[20px] w-[280px] xl:w-[300px] my-5 xl:my-0 xl:mb-0 md:mb-0 sm:mb-0">
          <img src={Books} alt="Not Found" className=" object-contain" />
        </div>
      </section>
      <section className="relative">
        <div className="bg-hire-prof ">
          <div className="flex flex-col relative justify-center items-center xl:px-1 px-6">
            <div className="xl:w-[800px] relative text-white w-auto ">
              <h6 className="text-[32px] mb-[10px] font-semibold ">
                Connect With A Custom Ghost Book Trailer Service Near You
              </h6>
              <p
                className="text-[18px] mb-[12px] mx-4 xl:mx-1"
                data-aos="fade-up"
              >
                Recognize the potential in your existing network to know how
                much effort
                <br className="mb-hide" /> it will take for you to get what you
                aspired for and strategize your
                <br className="mb-hide" /> book marketing campaigns accordingly.
              </p>
              <div className="flex justify-center items-center xl:flex-row sm:flex-row md:flex-row flex-col mx-4">
                <button
                  style={{ backgroundColor: "black", color: "white" }}
                  onClick={() => SetOpenModal(true)}
                  className="bg-black-btn cursor-pointer xl:w-auto w-full"
                >
                  Let's Get Started
                </button>
                <button
                  className="bg-black-btn xl:w-auto font-bold w-full"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  <Link to={"tel:+718516-5017"}>Call</Link>
                </button>{" "}
                <button
                  style={{ backgroundColor: "black", color: "white" }}
                  className="bg-black-btn xl:w-auto w-full"
                  onClick={handleLiveChatClick}
                >
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[-1.5em] xl:mt-0 transition-all  bg-faqs">
        <div>
          <h4 className="text-[#333] text-center mb-[10px] text-[22px] font-semibold xl:text-[32px]">
            FAQS
          </h4>
          <p className="text-[#333] text-center uppercase xl:text-[16px] ">
            Here’s a list of frequently asked questions you might have about our
            book writing company.
          </p>
          <div className="xl:mx-12 text-center  xl:my-8 my-4">
            <div className="flex justify-center items-center flex-col">
              <div
                className={`faqs-btn  transition-all duration-300 flex justify-center items-center ${
                  GhostFaqs === true ? "" : "mb-[30px]"
                } `}
                onClick={() => SetGhostFaqs(!GhostFaqs)}
              >
                <h1 className="text-center">
                  Book Trailer Video Services by Freelance Experts?
                </h1>
                <div className="absolute xl:right-[30px] right-3">
                  <i
                    className={`fa  fa-${
                      GhostFaqs === true ? "plus" : "minus"
                    } cursor-pointer`}
                    onClick={() => SetGhostFaqs(!GhostFaqs)}
                  ></i>
                </div>
              </div>
              <div className="overflow-hidden">
                {GhostFaqs === true && (
                  <>
                    <p className="xl:w-[400px] py-3 mx-10 xl:mx-0  transition-all  overflow-hidden ">
                      Yes, you can find numerous freelancers online to help you
                      get a captivating book video trailer but connecting with a
                      well-known book video promotion company can be the best
                      option to go with.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div
                className={`faqs-btn  transition-all duration-300 flex justify-center items-center ${
                  GhostFaqs1 === true ? "" : "mb-[30px]"
                } `}
                onClick={() => SetGhostFaqs1(!GhostFaqs1)}
              >
                <h1 className="text-center">
                  Hiring a Professional to Create a Book Trailer?
                </h1>
                <div className="absolute xl:right-[30px] right-3">
                  <i
                    className={`fa  fa-${
                      GhostFaqs1 === true ? "plus" : "minus"
                    } cursor-pointer`}
                    onClick={() => SetGhostFaqs1(!GhostFaqs1)}
                  ></i>
                </div>
              </div>
              <div className="overflow-hidden">
                {GhostFaqs1 === true && (
                  <>
                    <p className="xl:w-[400px] py-3 mx-10 xl:mx-0  transition-all  overflow-hidden ">
                      You need an expert for your book video trailer as a
                      professional working in the industry must be well aware of
                      the latest industry trends to utilize in the trailer to
                      attract a better audience.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div
                className={`faqs-btn  transition-all duration-300 flex justify-center items-center ${
                  GhostFaqs2 === true ? "" : "mb-[30px]"
                } `}
                onClick={() => SetGhostFaqs2(!GhostFaqs2)}
              >
                <h1 className="text-center  ">
                  How to Make a Book Trailer in 5 Easy Steps on a Budget?
                </h1>
                <div className="absolute xl:right-[30px] right-3">
                  <i
                    className={`fa  fa-${
                      GhostFaqs2 === true ? "plus" : "minus"
                    } cursor-pointer`}
                    onClick={() => SetGhostFaqs2(!GhostFaqs2)}
                  ></i>
                </div>
              </div>
              <div className="overflow-hidden">
                {GhostFaqs2 === true && (
                  <>
                    <p className="xl:w-[400px] py-3 transition-all mx-10 xl:mx-0   overflow-hidden ">
                      Sign up with a professional video book trailer service to
                      get assisted with the simplest procedures catering to your
                      needs for a book video trailer.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div
                className={`faqs-btn  transition-all duration-300 flex justify-center items-center ${
                  GhostFaqs3 === true ? "" : "mb-[30px]"
                } `}
                onClick={() => SetGhostFaqs3(!GhostFaqs3)}
              >
                <h1 className="text-center  ">
                  What is included in a book trailer?
                </h1>
                <div className="absolute xl:right-[30px] right-3">
                  <i
                    className={`fa  fa-${
                      GhostFaqs3 === true ? "plus" : "minus"
                    } cursor-pointer`}
                    onClick={() => SetGhostFaqs3(!GhostFaqs3)}
                  ></i>
                </div>
              </div>
              <div className="overflow-hidden">
                {GhostFaqs3 === true && (
                  <>
                    <p className="xl:w-[400px] py-3 mx-10 xl:mx-0  transition-all  overflow-hidden ">
                      Your book cover and a little description of your book are
                      what is meant to be a part of the book video trailer but
                      you can also include “about the author” in the trailer as
                      per your needs.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div
                className={`faqs-btn  transition-all duration-300 flex justify-center items-center
                 ${GhostFaqs4 === true ? "mb-[20px]" : "mb-[30px]"} `}
                onClick={() => SetGhostFaqs4(!GhostFaqs4)}
              >
                <h1 className="text-center  ">
                  What is the difference between a book talk and a book trailer?
                </h1>
                <div className="absolute xl:right-[30px] right-3">
                  <i
                    className={`fa  fa-${
                      GhostFaqs4 === true ? "plus" : "minus"
                    } cursor-pointer`}
                    onClick={() => SetGhostFaqs4(!GhostFaqs4)}
                  ></i>
                </div>
              </div>
              <div className="overflow-hidden">
                {GhostFaqs4 === true && (
                  <>
                    <p className="xl:w-[400px] py-3 mx-10 xl:mx-0 transition-all  overflow-hidden ">
                      A book talk is a conversation about the book and a book
                      trailer is a promotion for your book, it acts like a
                      campaign to create a buzz and attract more conversions
                      your way.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div
                className={`faqs-btn  transition-all duration-300 flex justify-center items-center ${
                  GhostFaqs5 === true ? "mb-[20px]" : "mb-[30px]"
                } `}
                onClick={() => SetGhostFaqs5(!GhostFaqs5)}
              >
                <h1 className="text-center">
                  How important is a book trailer?
                </h1>
                <div className="absolute xl:right-[30px] right-3">
                  <i
                    className={`fa  fa-${
                      GhostFaqs5 === true ? "plus" : "minus"
                    } cursor-pointer`}
                    onClick={() => SetGhostFaqs5(!GhostFaqs5)}
                  ></i>
                </div>
              </div>
              <div className="overflow-hidden">
                {GhostFaqs5 === true && (
                  <>
                    <p className="xl:w-[400px] py-3 mx-10 xl:mx-0 transition-all  overflow-hidden ">
                      In the digital era, You can consider a book video trailer
                      obligatory for authors to get as letting people know about
                      your new book is pretty easy utilizing social media
                      platforms and it will be a smart move to post a custom
                      book video trailer for your book.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <Testimonails />
      </Suspense>
      <Suspense fallback={<></>}>
        <Contactus />
      </Suspense>
    </>
  );
}

export default BookTrailler;
