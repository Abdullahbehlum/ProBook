import ServiceWriting from "../../assets/images/wri-edi-simg.webp";
import React, { Suspense, lazy, useEffect, useState } from "react";
import Ghost from "../../assets/images/07.png";
import Trustiplot from "../../assets/images/trustpilot.webp";
import Bark from "../../assets/images/bark.webp";
import Clush from "../../assets/images/clutch.webp";
import Sitejob from "../../assets/images/site-jabbar.svg";
import Rating from "../../assets/images/rating-half.webp";
import featureIcon1 from "../../assets/images/feature_icon1.png";
import featureIcon2 from "../../assets/images/feature_icon2.png";
import featureIcon3 from "../../assets/images/feature_icon3.png";
import featureIcon4 from "../../assets/images/feature_icon4.png";
import "../styles/Ghostwriting.css";
import "../styles/HireProfessional.css";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
import Books from "../../assets/images/11.png";
import { useMediaQuery } from "@mui/material";
import { initializeApp } from "firebase/app";
import { Link } from "react-router-dom";
import { firebaseConfig } from "../config/Config";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
function BookPublishing() {
  const [MainFaqs, SetMainFaqs] = useState(false);
  const [MainFaqs1, SetMainFaqs1] = useState(false);
  const [MainFaqs2, SetMainFaqs2] = useState(false);
  const [MainFaqs3, SetMainFaqs3] = useState(false);
  const [MainFaqs4, SetMainFaqs4] = useState(false);
  const [MainFaqs5, SetMainFaqs5] = useState(false);
  const SitesLogo = lazy(() => import("./Page section/GoogleSlider"));
  const Contactus = lazy(() => import("./other sections/Contact"));
  const Mobile = useMediaQuery("(max-width:800px)");
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [OpenModal, SetOpenModal] = useState(false);

  const [ClientData, SetClientData] = useState({
    name: "",
    email: "",
    number: "",
  });
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
 ml-4 xl:mx-0   bg-poup xl:z-[999] z-[60] xl:h-auto h-[480px] xl:w-[850px] w-[330px] ${
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
                className="mb-5 text-black xl:w-[380px] w-[290px] p-4 border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Name"
                required
                value={ClientData.name}
                onChange={(e) =>
                  SetClientData({ ...ClientData, name: e.target.value })
                }
              />
              <input
                type="number"
                className="mb-5 xl:w-[380px] w-[290px] p-4 text-black border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Number"
                required
                value={ClientData.number}
                onChange={(e) =>
                  SetClientData({ ...ClientData, number: e.target.value })
                }
              />
              <input
                type="email"
                className="mb-5 xl:w-[380px] w-[290px] p-4 text-black border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Email Address"
                required
                value={ClientData.email}
                onChange={(e) =>
                  SetClientData({ ...ClientData, email: e.target.value })
                }
              />

              <button className="btn xl:w-auto w-[290px] uppercase">
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
      <section className="bg-banner">
        <div className="flex justify-around text-white items-center xl:flex-row md:flex-row sm:flex-row flex-col py-8">
          <div className="xl:ml-12 mx-2">
            <h1 className="head-ghost xl:mb-4 mb-6">
              USA Book Publishing Agency For Your{" "}
              <span className="frist-span text-[#00efff]">Author Journey</span>
            </h1>
            <p className="para xl:mb-[25px] mb-6 xl:w-[580px]">
              We are an expert book publishing company that has the expertise to
              walk you through the entire book publishing process so that you
              can have full control over your author journey without having to
              deal with obnoxious traditional book publishing houses. Get expert
              ebook publishing services to elevate a hassle-free author journey
              and fulfill your dreams on the go. Collaborate with an affordable
              self-publishing eBook company that has the expertise to simplify
              the book publishing process for you.
            </p>
            <button
              onClick={() => SetOpenModal(true)}
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
          <div>
            <img
              src={Ghost}
              alt="Not"
              className="object-contain xl:w-[1120px] w-[300px]"
            />
          </div>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <SitesLogo />
      </Suspense>
      <section className="uniquearea">
        <div className="flex justify-between items-center xl:flex-row md:flex-row sm:flex-row flex-col ">
          <div className="mx-5 xl:mx-2 xl:w-[790px] sm:w-[460px] w-auto md:w-[450px] ">
            <h1 className="xl:text-[42px]  text-[28px] leading-[44px] text-[#333] mx-0 text-center xl:text-left mb-[20px]  font-bold pt-12 xl:pt-0">
              Best Book Publishers <br className="mb-hide" /> For Hire
            </h1>
            <p className="font-semibold mb-[20px]">
              Have the Comfort that your Book is in Safe Hands and Trust a
              Self-Publishing ebook Company with your very Own Manuscript.
            </p>
            <p className="paragraph text-balance mb-[15px]">
              Our Amazon Book Publishers have the expertise to bring your
              visions to life and we own our promises! Yes, you read it right,
              We are a team of book publishing experts that has been able to
              serve numerous clients with tremendous results. You can identify
              us as an affordable book publishing company that has been able to
              team up with professional book publishers from the industry to
              help you publish your book globally, hassle-free. The top USA book
              publishing agency near you is a life-saver for all aspiring as
              well as established authors to outshine the publishing industry.
            </p>

            <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col">
              <button
                onClick={() => SetOpenModal(true)}
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
          <div></div>
          <div className="mb-[5px] xl:mb-0 md:mb-0 sm:mb-0 publish-col-2  mx-5 xl:mx-4 mt-12 xl:mt-1">
            <div className="info-expert">
              <span>
                <i className="fas fa-check"></i>
              </span>
              <h4>A number of printed copies of your book</h4>
            </div>

            <div className="info-expert">
              <span>
                <i className="fas fa-check"></i>
              </span>
              <h4>EBook conversion and distribution</h4>
            </div>

            <div className="info-expert">
              <span>
                <i className="fas fa-check"></i>
              </span>
              <h4>Print-on-demand distribution</h4>
            </div>
            <div className="info-expert w-full">
              <span>
                <i className="fas fa-check"></i>
              </span>
              <h4>Certified ISBN barcodes</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="uniquearea">
        <h3
          className="xl:text-[28px] mx-4 xl:mx-1 xl:text-center py-4 text-[25px] font-bold"
          data-aos="fade-up"
        >
          {" "}
          Online Book Publishing Experts For Hire Online
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
            <h3 className="font-bold border-b pb-[10px] mb-[10px] border-black">
              Distribution & Retail
            </h3>
            <p className="text-[14px] font-normal">
              Our team of expert book publishers ensures that your book is
              published on all the major platforms like Amazon, Barnes & Noble,
              Apple Books, and more.
            </p>
          </div>
          <div className=" mb-[40px] xl:mb-0" data-aos="fade-right">
            <div>
              <img
                src={featureIcon2}
                className="w-[50px] xl:mb-[30px] mb-[10px]  object-cover"
              />
            </div>
            <h3 className="font-bold border-b pb-[10px]  mb-[10px] border-black">
              Catalogue Of Copyright
            </h3>
            <p className="text-[14px] font-normal">
              Pro Book Writer will take care of all the copyright registrations,
              as well as the ISBN and other aspects required for your book.
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
            <h3 className="font-bold border-b pb-[10px] mb-[10px] border-black">
              Area Of Expertise
            </h3>
            <p className="text-[14px] font-normal">
              USA Book Publishing Agency serves you with a large network of
              industry specialists including literary, publishing, and media
              agencies.
            </p>
          </div>
          <div
            className=" mb-[40px] xl:mb-0 xl:mt-[0.3em]"
            data-aos="fade-right"
          >
            <div>
              <img
                src={featureIcon4}
                className="w-[25px] xl:mb-[30px] mb-[10px]  object-cover"
              />
            </div>
            <h3 className="font-bold border-b pb-[10px] mb-[10px] border-black">
              Proven Outcomes
            </h3>
            <p className="text-[14px] font-normal">
              Our result-driven approach is what separates us from others in the
              market and with the help of our expert book publishers, we have
              been able to showcase our results time and time again.
            </p>
          </div>
        </div>
      </section>
      <section className="prof-bg">
        <div className="flex justify-around items-center xl:flex-row md:flex-row sm:flex-row flex-col">
          <div className="xl:w-[55%] w-[90%]">
            <h5 className="xl:text-[28px] text-[24px]  font-bold xl:mb-3 mb-2">
              EXPERT BOOK PUBLISHERS FOR HIRE - ENHANCING YOUR AUTHOR JOURNEY,
              WITH PROFESSIONAL BOOK PUBLISHING TEAM IN THE USA!
            </h5>
            <p className="xl:w-[720px]   mb-2 ">
              We are a professional team of ebook publishers online, who aim to
              assist you in elevating your reader’s experience in an uplifting
              manner. It won’t be wrong if you consider us one of the top Amazon
              book publishing company in the USA. Let the best book proofreading
              services help you engage with your readers better.
            </p>
            <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col">
              <button
                onClick={() => SetOpenModal(true)}
                className="all-btn xl:mb-0 mb-3 "
              >
                GET A QUOTE
              </button>
              <button
                onClick={handleLiveChatClick}
                className=" live-chat bg-transparent xl:mx-3  xl:mb-0 mb-12 text-[#17333c] border border-[#17333c]  rounded-[8px]"
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
      <section className="uniquearea text-center mx-4 xl:mx-12">
        <h3 className="xl:text-[32px] text-[22px] py-3  font-bold xl:mb-[25px] mb-[16px]">
          Helping Authors Uplift Their Literary Journey, Expert Book{" "}
          <br className="mb-hide" /> Publishing Services Online!
        </h3>
        <p className="xl:mb-[30px] mb-[22px] ">
          Do you also aspire to turn your ideas into an eBook that captivates
          readers globally? We are a USA-based eBook publishing service that
          aims to assist authors globally and help them reach another level of
          literature excellence. Hire expert book publishers who own diverse
          expertise in the publishing industry and know how to make your book
          outshine the industry by making relevant keyword tagging a part of
          your book publishing process. Get custom online ebook publishing
          assistance, and packages that cater to your author needs, Elevate your
          composition with the superior knowledge and skills of our expert
          publishing services.
        </p>
        <p>
          To target a wider audience and increase the readability of your book
          with the best Amazon book publishing services online. We are a
          professional book publishing firm that has the expertise to simplify
          the publishing process for you.
        </p>
      </section>
      <section className="bg-boast">
        <div className="flex justify-around items-center mx-5 xl:mx-1 xl:flex-row flex-col md:flex-row sm:flex-row">
          <div className="mx-3 xl:mx-1">
            <h3 className="text-[22px] xl:text-[42px] font-bold xl:leading-[46px] mb-[20px]  ">
              Best Book Publishing <br className="mb-hide" /> Services
              <span>In The USA</span>
            </h3>
            <p className="mb-[20px]">
              Six easy steps to get your book published
            </p>
            <button onClick={handleLiveChatClick} className="live-chat bg-transparent xl:mb-0 mb-12 text-black hover:text-[#00bcbb] border border-black mx-3 rounded-[50px]">
              <Link to={"javascript:"}> Get in Touch with us</Link>
            </button>
          </div>
          <div
            className="two-gird-col xl:w-[650px]
           w-auto"
          >
            <div>
              <h5 className="place-box mb-0">01</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">Sign Up </h6>
              <p>
                According to your needs, choosing your desired book publishing
                company is the first step.
              </p>
            </div>
            <div>
              <h5 className="place-box">02</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Manuscript Review Place your order
              </h6>

              <p>
                Your book will be assigned to a professional editor to eliminate
                all the errors in your manuscript.
              </p>
            </div>
            <div>
              <h5 className="place-box">03</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Formatting & Proofreading
              </h6>

              <p>
                The third phase involves final proofreading and any necessary
                formatting.
              </p>
            </div>
            <div>
              <h5 className="place-box">04</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Book Cover Design
              </h6>

              <p>
                It is essential to have a creative book cover design to
                captivate readers instantly.
              </p>
            </div>
            <div>
              <h5 className="place-box">05</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Publishing
              </h6>

              <p>
                Now, we are on to the final stages of the process, A
                self-publishing eBook company can help you target a global
                audience by publishing your book on platforms like Amazon,
                Barnes & Noble, Kobo, Blurb, and more.
              </p>
            </div>
            <div>
              <h5 className="place-box">06</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Royalties
              </h6>

              <p>
                All that is left now, is for you to sit back, relax, and take
                pleasure in the royalties generated by your published book.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center xl:flex-row-reverse md:flex-row sm:flex-row flex-col uniquearea">
        <div className="mx-5  xl:w-[650px] sm:w-[460px] w-auto md:w-[450px]">
          <h1 className="xl:text-[37px] text-[22px] leading-[49px] font-bold mb-[19px]">
            Have a Look at the Professional Amazon Book Publishing Services that
            We Offer.
          </h1>
          <p className="paragraph text-balance xl:mb-[15px] mb-[10px]">
            We are an ebook publishing service provider in the USA that only
            teams up with professional publishers who are experienced in looking
            after your manuscript and ensure that your book is distributed
            globally targeting a wider audience than you ever imagined. A team
            of USA book publishers for hire who are experienced in dealing with
            extensive workloads, and a variety of genres, ensuring the best
            shape of your manuscript.
          </p>

          <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col mb-2 xl:my-5 my-0">
            <div>
              <ul className="text-[14px] xl:text-sm ">
                <li className="mb-[10px]  ">Global Book Publishing Services</li>
                <li className="mb-[10px] ">Professional Audiobooks</li>
                <li className="mb-[10px] ">Best Web-Design & Internet SEO</li>
              </ul>
            </div>
            <div>
              <ul className="text-[14px] xl:text-sm xl:mx-12 mx-0">
                <li className="mb-[10px]">Publishing Assistance</li>
                <li className="mb-[10px] ">Video Book Trailers</li>
                <li className="mb-[1px] ">Branding and Marketing Campaigns</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-[1px] my-5 xl:my-0 xl:mb-0 md:mb-0 sm:mb-0 xl:mx-24">
          <img
            src={Books}
            alt="Not Found"
            className="w-[280px]  object-contain"
          />
        </div>
      </section>
      <section className="relative">
        <div className="bg-hire-prof ">
          <div className="flex flex-col relative justify-center items-center xl:px-1 px-5">
            <div className="xl:w-[800px] relative text-white w-auto ">
              <h6 className="text-[32px] mb-[10px] font-semibold ">
                Looking for Professional Book Publishers?
              </h6>
              <p
                className="text-[18px] mb-[12px] mx-4 xl:mx-1"
                data-aos="fade-up"
              >
                We can be considered the best book publishing agency in the USA,
                <br className="mb-hide" />
                as we have been able to assist many aspiring authors to
                establish
                <br className="mb-hide" /> their dreams and stand out in the
                publishing industry
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
        <div className="px-4 xl:px-1">
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
                  MainFaqs === true ? "" : "mb-[30px]"
                } `}
                onClick={() => SetMainFaqs(!MainFaqs)}
              >
                <h1 className="text-center">
                  Does Amazon offer book publishing services?
                </h1>
                <div className="absolute xl:right-[30px] right-3">
                  <i
                    className={`fa  fa-${
                      MainFaqs === true ? "plus" : "minus"
                    } cursor-pointer`}
                    onClick={() => SetMainFaqs(!MainFaqs)}
                  ></i>
                </div>
              </div>
              <div className="overflow-hidden">
                {MainFaqs === true && (
                  <>
                    <p className="xl:w-[400px] py-3 mx-10 xl:mx-0  transition-all  overflow-hidden ">
                      It’s a daunting task to publish your book on platforms
                      like Amazon or Barnes&Nobles as you need an expert
                      publisher to assist you in making your book global by
                      publishing your book on Amazon, taking care of all the
                      documentations, copyrights, and IBANs required.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div
                className={`faqs-btn  transition-all duration-300 flex justify-center items-center ${
                  MainFaqs1 === true ? "" : "mb-[30px]"
                } `}
                onClick={() => SetMainFaqs1(!MainFaqs1)}
              >
                <h1 className="text-center">
                  Is Amazon the best place to publish a book?
                </h1>
                <div className="absolute xl:right-[30px] right-3">
                  <i
                    className={`fa  fa-${
                      MainFaqs1 === true ? "plus" : "minus"
                    } cursor-pointer`}
                    onClick={() => SetMainFaqs1(!MainFaqs1)}
                  ></i>
                </div>
              </div>
              <div className="overflow-hidden">
                {MainFaqs1 === true && (
                  <>
                    <p className="xl:w-[400px] py-3 mx-10 xl:mx-0  transition-all  overflow-hidden ">
                      Amazon is a globally well-known platform and a good choice
                      to publish your author aspirations but there are many
                      other platforms as well to make your book globally
                      available for readers who capture interest in your book.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div
                className={`faqs-btn  transition-all duration-300 flex justify-center items-center ${
                  MainFaqs2 === true ? "" : "mb-[30px]"
                } `}
                onClick={() => SetMainFaqs2(!MainFaqs2)}
              >
                <h1 className="text-center">
                  How do I get into Amazon Publishing?
                </h1>
                <div className="absolute xl:right-[30px] right-3">
                  <i
                    className={`fa  fa-${
                      MainFaqs2 === true ? "plus" : "minus"
                    } cursor-pointer`}
                    onClick={() => SetMainFaqs2(!MainFaqs2)}
                  ></i>
                </div>
              </div>
              <div className="overflow-hidden">
                {MainFaqs2 === true && (
                  <>
                    <p className="xl:w-[400px] py-3 transition-all mx-10 xl:mx-0   overflow-hidden ">
                      Signup with Amazon and the platform will assist you with
                      everything itself but the termanoligies they possess might
                      not be understandable but if you acquire expert publisher,
                      they might help you in understanding Amazon at ease.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div
                className={`faqs-btn  transition-all duration-300 flex justify-center items-center ${
                  MainFaqs3 === true ? "" : "mb-[30px]"
                } `}
                onClick={() => SetMainFaqs3(!MainFaqs3)}
              >
                <h1 className="text-center ">
                  How do I publish my first book?
                </h1>
                <div className="absolute xl:right-[30px] right-3">
                  <i
                    className={`fa  fa-${
                      MainFaqs3 === true ? "plus" : "minus"
                    } cursor-pointer`}
                    onClick={() => SetMainFaqs3(!MainFaqs3)}
                  ></i>
                </div>
              </div>
              <div className="overflow-hidden">
                {MainFaqs3 === true && (
                  <>
                    <p className="xl:w-[400px] py-3 mx-10 xl:mx-0  transition-all  overflow-hidden ">
                      Either you can go with the traditional book publishing
                      services or you can eliminate all the hassle by hiring an
                      expert publisher to assist you publish your book globally
                      and help you target a wider audience with your manuscript.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div
                className={`faqs-btn  transition-all duration-300 flex justify-center items-center ${
                  MainFaqs4 === true ? "mb-[20px]" : "mb-[30px]"
                } `}
                onClick={() => SetMainFaqs4(!MainFaqs4)}
              >
                <h1 className="text-center  ">
                  How much do publishers pay you for a book?
                </h1>
                <div className="absolute xl:right-[30px] right-3">
                  <i
                    className={`fa  fa-${
                      MainFaqs4 === true ? "plus" : "minus"
                    } cursor-pointer`}
                    onClick={() => SetMainFaqs4(!MainFaqs4)}
                  ></i>
                </div>
              </div>
              <div className="overflow-hidden">
                {MainFaqs4 === true && (
                  <>
                    <p className="xl:w-[400px] py-3 mx-10 xl:mx-0 transition-all  overflow-hidden ">
                      Amazon being a publishing platform offers 40-70% of your
                      book royalties and help you take the full advantage of
                      your self-publishing journey and enjoy the conversions
                      that your book was able to attract.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <Contactus />
      </Suspense>
    </>
  );
}

export default BookPublishing;
