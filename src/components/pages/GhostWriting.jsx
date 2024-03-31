import React, { Suspense, lazy, useEffect, useState } from "react";
import Ghost from "../../assets/images/1-01.png";
import Trustiplot from "../../assets/images/trustpilot.webp";
import Bark from "../../assets/images/bark.webp";
import Clush from "../../assets/images/clutch.webp";
import Sitejob from "../../assets/images/site-jabbar.svg";
import Rating from "../../assets/images/rating-half.webp";
import Ghostimg from "../../assets/images/side image 111.webp";
import featureIcon1 from "../../assets/images/feature_icon1.png";
import featureIcon2 from "../../assets/images/feature_icon2.png";
import featureIcon3 from "../../assets/images/feature_icon3.png";
import featureIcon4 from "../../assets/images/feature_icon4.png";
import ServiceWriting from "../../assets/images/wri-edi-simg.webp";
import Books from "../../assets/images/3-01.png";
import "../styles/Ghostwriting.css";
import "../styles/HireProfessional.css";
import { useMediaQuery } from "@mui/material";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
import { initializeApp } from "firebase/app";
import { Link } from "react-router-dom";
import { firebaseConfig } from "../config/Config";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
function GhostWriting() {
  const SitesLogo = lazy(() => import("./Page section/GoogleSlider"));
  const Contactus = lazy(() => import("./other sections/Contact"));
  const [GhostFaqs, SetGhostFaqs] = useState(false);
  const [GhostFaqs1, SetGhostFaqs1] = useState(false);
  const [GhostFaqs2, SetGhostFaqs2] = useState(false);
  const [GhostFaqs3, SetGhostFaqs3] = useState(false);
  const [GhostFaqs4, SetGhostFaqs4] = useState(false);
  const [GhostFaqs5, SetGhostFaqs5] = useState(false);
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
      <Dialog open={OpenModal}>
        <DialogActions>
          <i
            className="fa-solid fa-xmark text-center flex flex-col justify-center items-center mt-4 xl:mt-0 mr-1 xl:mr-0  bg-[#a44099] w-[30px] h-[30px] p-[1px] rounded-[4px]  cursor-pointer"
            onClick={() => SetOpenModal(false)}
          ></i>
        </DialogActions>
        <DialogContent>
          <div className="popupform">
            <h2 className="text-black xl:text-white font-bold mb-[10px]">
              Get Ready To <br />
              Become a Bestseller!
            </h2>
            <form
              onSubmit={(e) => handleFormSubmit(e)}
              className="xl:py-3 flex flex-col justify-start items-start"
            >
              <input
                type="text"
                className=" xl:mb-[20px] mb-[15px] text-black xl:w-[300px] w-full p-[10px] 
                   border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Name"
                required
                value={ClientData.name}
                onChange={(e) => {
                  SetClientData({ ...ClientData, name: e.target.value });
                }}
              />
              <input
                type="number"
                className=" xl:mb-[20px] mb-[15px] xl:w-[300px] w-full p-[10px] text-black
                   border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Number"
                required
                value={ClientData.number}
                onChange={(e) => {
                  SetClientData({ ...ClientData, number: e.target.value });
                }}
              />
              <input
                type="email"
                className=" xl:mb-[20px] mb-[15px] xl:w-[300px] w-full p-[10px] text-black
                   border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Email Address"
                required
                value={ClientData.email}
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
      </Dialog>{" "}
      <section className="bg-banner">
        <div className="flex justify-around text-white items-center xl:flex-row md:flex-row sm:flex-row flex-col py-8">
          <div className="xl:ml-12 mx-2">
            <h1 className="head-ghost">
              A Professional Ghostwriting{" "}
              <span className="frist-span px-1 xl:px-0 text-[#00efff]">
                Company
              </span>
            </h1>
            <p className="para xl:mb-[20px] mb-6 xl:w-[580px] sm:w-[580px] md:w-[580px]">
              Our team of creative ghostwriters will take your concept and turn
              it into an outstanding art piece. We are a custom ghostwriting
              services that aims to serve your imagination with a lease on life
              and assist you through your literary journey. Connect with one of
              the best ghostwriters for hire in the US and reach the pinnacle of
              your author journey. Choose the best online ghostwriting services
              and elevate your literary legacy to another level of excellence.
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
              className="object-contain xl:w-[660px] w-[300px]  md:w-[400px] sm:w-[400px]"
            />
          </div>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <SitesLogo />
      </Suspense>{" "}
      <section className="uniquearea">
        <div className="flex justify-center items-center xl:flex-row md:flex-row sm:flex-row flex-col ">
          <div className="mb-[5px] xl:mb-0 md:mb-0 sm:mb-0">
            <img src={Ghostimg} alt="Not Found" className="object-contain" />
          </div>
          <div className="mx-5 xl:mx-12 xl:w-[750px] sm:w-[460px] w-auto md:w-[450px] ">
            <h1 className="xl:text-[42px]  text-[28px] leading-[41px] xl:leading-[46px] text-[#333] mx-0 text-center xl:text-left mb-[20px]  font-bold pt-12 xl:pt-0">
              Expert Ghostwriters For Hire , Achieve Your Writing Goals
            </h1>
            <h3 className="font-semibold mb-[20px]">
              Ghostwriting Let’s Get Started
            </h3>
            <p className="paragraph text-balance mb-[15px]">
              The Writer's Tree aims to serve you with the best online
              ghostwriting services and our professional ghostwriters are best
              enough to maintain the level of creativity in your manuscript
              according to your needs as per your preference. We are a top
              ghostwriting service near you that will execute your ghost book
              idea in a manner that will make your book reflect two components
              including your aspirations and our skills. Hire the best ghost
              writing company who comprise experienced writers genre-wise,
              making us own the power of diversity. USA ghostwriting agency will
              get all the work done, you just need to sit back and wait for your
              manuscript to be published.
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
        </div>
      </section>
      {/* Professional Ghostwriters Online is given */}
      <section className="uniquearea">
        <h3
          className="xl:text-[28px] xl:text-center py-4 text-[25px] font-bold"
          data-aos="fade-up"
        >
          {" "}
          Hire Professional Ghostwriters and Elevate Your Ghostwriting
          Experience!
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
              Professional Ghostwriters Online
            </h3>
            <p className="text-[14px]">
              A group of competent and expert ghostwriters who have the
              expertise to serve in a variety of genres ensuring the highest
              quality.
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
              Creativity Alongside Authenticity
            </h3>
            <p className="text-[14px]">
              We are a dedicated team of professional ghostwriters who aim to
              serve you with expertly written books that are a mixture of
              relevant and authentic information according to your book idea.
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
              Proper Formatting
            </h3>
            <p className="text-[14px]">
              Our formatters are experienced enough to follow the latest
              industry trends while formatting your manuscript properly before
              publishing.
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
              Original Content
            </h3>
            <p className="text-[14px]">
              Whether it is articles/blogs or expert ghostwriting for your book,
              we have a team of writers who are dedicated to providing you with
              absolutely unique content for your audience.
            </p>
          </div>
        </div>
      </section>
      {/* Professional Ghostwriters Online is End */}
      <section className="prof-bg">
        <div className="flex justify-around items-center xl:flex-row md:flex-row sm:flex-row flex-col">
          <div className="xl:w-[55%] w-[90%]">
            <h5 className="xl:text-[28px] text-[24px]  font-bold xl:mb-3 mb-2">
              ELIMINATE ALL THE COMPLEXITIES FROM YOUR AUTHOR JOURNEY, GET
              PROFESSIONAL GHOSTWRITING SERVICES
            </h5>
            <p className="xl:w-[720px]   mb-2 ">
              Our team of expert online ghostwriters owns the power of diversity
              to enhance your author journey in an uplifting manner. Collaborate
              with the best ghostwriting company and ensure the highest quality
              of your ready-to-be-published manuscript. We are the affordable
              ghostwriting services in the USA that are well-known for ghost
              writing author’s aspirations with authenticity.
            </p>
            <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col">
              <button
                onClick={() => SetOpenModal(true)}
                className="all-btn  xl:mb-0 mb-3 "
              >
                GET A QUOTE
              </button>
              <button
                onClick={handleLiveChatClick}
                className=" live-chat bg-transparent xl:mb-0 mb-12 text-[#17333c] 
                border border-[#17333c]  rounded-[8px] xl:mx-3"
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
          Helping Authors Uplift Their Literary Journey, Best{" "}
          <br className="mb-hide" /> Ghostwriting Agency Online!
        </h3>
        <p className="xl:mb-[30px] mb-[22px] ">
          Do you also aspire to turn your ideas into an eBook that captivates
          readers globally? We are a USA-based ghostwriting service that aims to
          assist authors globally and help them reach another level of
          literature excellence. Hire expert ghostwriters to identify the
          potential in your very own book and execute the ghost writing phase of
          your book ensuring absolutely affordable ghostwriting services Prices.
          Get custom online ghostwriting assistance, and packages that cater to
          your ghostwriting needs, Elevate your composition with the superior
          knowledge and skills of our professional ghostwriting services.
        </p>
        <p>
          To target a wider audience and increase the readability of your book
          with Experts ghostwriting services online. An Professional
          ghostwriting firm that has the expertise to enhance your ghostwriting
          experience in a positive way.
        </p>
      </section>
      {/* Help Author is End */}
      {/* Published Made is given */}
      <section className="bg-boast">
        <div className="flex justify-around items-center xl:mx-1 mx-5  xl:flex-row flex-col md:flex-row sm:flex-row">
          <div className="mx-3 xl:mx-1">
            <h3
              className="text-[22px] xl:text-[42px] 
            font-bold xl:leading-[49px] mb-[20px]  "
            >
              Getting Your The <br className="mb-hide" />{" "}
              <span>Book Written</span> and <br className="mb-hide" /> Published
              Made Easy
            </h3>
            <p className="mb-[20px]">
              Read about our straightforward, four-step procedure.
            </p>
            <button
              onClick={handleLiveChatClick}
              className="live-chat bg-transparent xl:mb-0 mb-12 text-black hover:text-[#00bcbb] border border-black mx-3 rounded-[50px]"
            >
              <Link to={"javascript:"}> Get in Touch with us</Link>
            </button>
          </div>
          <div
            className="two-gird-col xl:w-[650px]
           w-auto"
          >
            <div>
              <h5 className="place-box mb-0">01</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Place your order
              </h6>
              <p>
                After you've placed an order for a book with us, we start by
                gathering information about your project from you.
              </p>
            </div>
            <div>
              <h5 className="place-box">02</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Place your order
              </h6>

              <p>
                After getting the information about your project, we begin
                writing. The first chapter has been completed and sent to you
                for review.
              </p>
            </div>
            <div>
              <h5 className="place-box">03</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Feedback & revisions
              </h6>

              <p>
                The rest of the book is written in chapters, and each one is
                delivered to you for comment on the adjustments that need to be
                made.
              </p>
            </div>
            <div>
              <h5 className="place-box">04</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Editing & proofreading
              </h6>

              <p>
                Our team of editors will check your book after it's finished to
                ensure it's of the highest quality.
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
            Have a Look at the Best Ghostwriting Services that We Offer
          </h1>
          <p className="paragraph text-balance xl:mb-[15px] mb-[10px]">
            We are a USA ghostwriting agency that only teams up with
            professional ghostwriters who are experienced in looking after your
            manuscript and ensuring that your piece of art is error-free and
            ready to be published. A team of Ghost writers for hire who are
            experienced in dealing with extensive workloads, and a variety of
            genres.
          </p>

          <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col mb-2 xl:my-5">
            <div className="xl:w-[300px]">
              <ul className="text-[13px]  ">
                <li className="mb-[1px]  ">Professional Audiobooks</li>
                <li className="mb-[1px] ">Creating a book cover design</li>
                <li className="mb-[1px]"> Expert Web-Design & Internet SEO</li>
              </ul>
            </div>
            <div className="xl:mr-[1em] xl:w-[300px]">
              <ul className="text-[13px]">
                <li className="mb-[1px]">Publishing Assistance</li>
                <li className="mb-[1px] ">Video Book Trailers</li>
                <li className="mb-[1px] ">Branding and Marketing Campaigns</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-[20px] w-[280px] xl:w-[200px] my-5 xl:my-0 xl:mb-0 md:mb-0 sm:mb-0">
          <img src={Books} alt="Not Found" className=" object-contain" />
        </div>
      </section>
      <section className="relative">
        <div className="bg-hire-prof ">
          <div className="flex flex-col relative justify-center items-center">
            <div className="xl:w-[800px] relative text-white w-auto ">
              <h6 className="text-[32px] mb-[10px] font-semibold ">
                Hire An Expert Ghostwriter Now!
              </h6>
              <p
                className="text-[18px] mb-[12px] mx-4 xl:mx-1"
                data-aos="fade-up"
              >
                Want to outshine your literary excellence?
                <br className="mb-hide" />
                You need the best ghostwriters to partner with to lift up
                <br className="mb-hide" /> your ghostwriting experience.
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
        <div className="">
          <h4 className="text-[#333] text-center mb-[10px] text-[22px] font-semibold xl:text-[32px]">
            FAQS
          </h4>
          <p className=" px-6 xl:px-1 text-[#333] text-center uppercase xl:text-[16px] ">
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
                  How much does it cost to hire a ghostwriter?
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
                      We have collected the most professional team of account
                      managers who can serve you with the best consultancy and
                      they can also serve you with custom packages just
                      according to your ghostwriting needs. The Writer’s Tree is
                      a team that aims to eliminate all the literary
                      complications that are faced by authors globally.
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
                <h1 className="text-center">What is a ghostwriting?</h1>
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
                      In the process of ghostwriting, you hire a professionally
                      skilled writer and pay them to write your aspirations
                      efficiently and include relevant information on topics
                      that you want to include in your book with complete
                      authenticity and originality throughout the book,
                      prioritizing readability to engage with the readers
                      better.
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
                  What do ghostwriters do for clients?{" "}
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
                      A professional ghostwriter would definitely want to learn
                      about the author’s aspirations in order to serve you with
                      a relevant compilation of scenarios that would turn out to
                      be a captivating book after the formatting is done. A
                      professional ghostwriter basically is a writer who writes
                      your book idea and helps you accomplish your literary
                      goals.
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
                  How can I find someone to write my book?
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
                      There are many book writing agencies that can help you
                      with the book writing process but what matters is to gain
                      trust, and that we can assure you of as our account
                      managers won’t ask you for any money until they clear all
                      your queries concerning our creative book writing process.
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
                  Should You Become a Ghostwriter?
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
                      If you have writing excellence and have the time to
                      communicate with authors and understand what they need
                      from their book, then of course you can become a
                      ghostwriter but as a writer, it takes time to polish your
                      writing skills so well that you become capable of writing
                      for others.
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
                  What is the benefit of ghostwriter?
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
                      A ghostwriter can help you save a lot of time in the
                      writing process so that you can focus on the other aspects
                      of your publishing journey so that you can enhance your
                      author experience on the go.
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

export default GhostWriting;
