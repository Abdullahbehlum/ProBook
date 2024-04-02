import Ghost from "../../../assets/images/Book Printing.png";
import Trustiplot from "../../../assets/images/trustpilot.webp";
import Bark from "../../../assets/images/bark.webp";
import Clush from "../../../assets/images/clutch.webp";
import Sitejob from "../../../assets/images/site-jabbar.svg";
import Rating from "../../../assets/images/rating-half.webp";
import featureIcon1 from "../../../assets/images/feature_icon1.png";
import featureIcon2 from "../../../assets/images/feature_icon2.png";
import featureIcon3 from "../../../assets/images/feature_icon3.png";
import featureIcon4 from "../../../assets/images/feature_icon4.png";
import Book from "../../../assets/images/Book Mockup.png";
import ServiceWriting from "../../../assets/images/wri-edi-simg.webp";
import { Suspense, lazy, useEffect, useState } from "react";
import "../../styles/Ghostwriting.css";
import BookwritingS from "../../../assets/images/Book Printing 2.jpg";
import {
  Dialog,
  DialogActions,
  DialogContent,
  useMediaQuery,
} from "@mui/material";
import "./PrintContact.css";
import "../../styles/Popup.css"
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../config/Config";
import { addDoc, collection, getFirestore } from "firebase/firestore";
function Bookprint() {
  const SitesLogo = lazy(() => import("../../pages/Page section/GoogleSlider"));
  const Mobile = useMediaQuery("(max-width:800px)");
  const Contactus = lazy(() => import("../other sections/Contact"));
  const [BookCover, SetBookCover] = useState(false);
  const [BookCover1, SetBookCover1] = useState(false);
  const [BookCover2, SetBookCover2] = useState(false);
  const [BookCover3, SetBookCover3] = useState(false);
  const [BookCover4, SetBookCover4] = useState(false);
  const [BookCover5, SetBookCover5] = useState(false);
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
      <section className="bg-banner">
        <div className="flex justify-around overflow-hidden text-white items-center xl:flex-row md:flex-row sm:flex-row flex-col py-8 xl:py-3">
          <div className="xl:ml-9 mx-2">
            <h1
              className="head-ghost font-extrabold xl:mb-4 mb-6 xl:w-[600px]"
              style={{ lineHeight: Mobile ? "42px" : "60px" }}
            >
              Hire a Top Book Printing Company To Help You Leave A Lasting
              <span className="frist-span px-2 text-[#00efff]">
                Impression On Your Audience.
              </span>
            </h1>
            <p className="para xl:mb-[25px] mb-6 xl:w-[568px]">
              Hire USA's best book printers online and elevate your author
              experience by ensuring that your book is remarkable and absolutely
              error-free. As the best custom book printing company in the USA,
              we understand the value of elevating your book’s readability.
              Convert your big dreams as an author, to big realities.
            </p>
            <button
              className="btn w-full xl:w-auto mb-4 xl:mb-0 xl:mx-2 mx-0 "
              onClick={() => SetOpenModal(true)}
            >
              Get a Free Quote
            </button>
            <br className="block xl:hidden md:hidden sm:hidden" />
            <button className="btn w-full xl:w-auto mb-6 xl:mb-0">
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
              className=" xl:w-[45em] md:[745px] sm:[745px] w-[700px]   object-contain"
            />
          </div>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <SitesLogo />
      </Suspense>
      <section className="uniquearea">
        <div className="flex justify-around items-center xl:flex-row md:flex-row sm:flex-row flex-col ">
          <div className="mb-[5px] xl:mb-0 md:mb-0 sm:mb-0 xl:mr-4">
            <img
              src={BookwritingS}
              alt="Not Found"
              className="object-contain  "
            />
          </div>
          <div className="mx-5 xl:mx-4 xl:w-[650px] mt-0 xl:mt-2 sm:w-[460px] w-auto md:w-[450px] ">
            <h1 className="head-h2 xl:leading-[49px] leading-[42px] text-[#333] mx-0 text-center xl:text-left mb-[20px]  font-bold pt-12 xl:pt-0">
              Best Book Printing Company In The USA!
            </h1>

            <p className="paragraph text-balance mb-[15px]">
              We are known as an experienced book printing company online and we
              aim to serve you with the best publishing as well as custom book
              printing services to uplift your author persona and assist you in
              building a network globally.
            </p>
            <p className="paragraph text-balance">
              We are an affordable book printing service that helps authors
              boost their audience by serving them with the best possible
              services and helping them leave a lasting impression over the
              readers by delivering them with absolutely top-notch deliverables
              that outshine instantly with their efficient quality.
            </p>
            <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col">
              <button
                className="nav-btn xl:w-auto w-full mb-4 xl:mb-0"
                onClick={() => SetOpenModal(true)}
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
      <section className="uniquearea">
        <h3
          className="xl:text-[28px] xl:text-center py-4 text-[25px] mx-4 font-bold"
          data-aos="fade-up"
        >
          {" "}
          The Writer’s Tree - Establish Your Dreams In 4 Simple Steps!
        </h3>
        <div
          className={` ${
            Mobile
              ? "flex flex-col justify-around items-center mx-4"
              : "portfolio-col-4"
          }  xl:my-5`}
        >
          <div className=" mb-[40px] xl:mb-0  " data-aos="fade-left">
            <div>
              <img
                src={featureIcon1}
                className="w-[50px] xl:mb-[30px] mb-[10px] object-cover"
              />
            </div>
            <h3 className="font-bold border-b text-[16px] pb-[10px] mb-[10px] border-black">
              Book Formatting
            </h3>
            <p className="text-[16px] font-normal">
              Our designers will take care of the formatting to ensure the best
              quality for your top-notch printed book that is going to get the
              attention of the world.
            </p>
          </div>
          <div className=" mb-[40px] xl:mb-0" data-aos="fade-right">
            <div>
              <img
                src={featureIcon2}
                className="w-[50px] xl:mb-[30px] mb-[10px] object-cover"
              />
            </div>
            <h3 className="font-bold border-b text-[15px] pb-[10px]  mb-[10px] border-black">
              Approval On The Project
            </h3>
            <p className="text-[16px] font-normal">
              Once our designers are done with the creative process for your
              print book, we need you to approve the formatting size.
            </p>
          </div>
          <div
            className=" mb-[40px] xl:mb-0 xl:mt-[-10px]"
            data-aos="fade-left"
          >
            <div>
              <img
                src={featureIcon3}
                className="w-[50px] xl:mb-[30px] mb-[10px] object-cover"
              />
            </div>
            <h3 className="font-bold border-b pb-[10px] text-[16px] mb-[10px] border-black">
              Expert Printing
            </h3>
            <p className="text-[16px] font-normal">
              We have a team that works according to your requirements and
              serves you with services that you have been looking for all around
              the USA.
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
            <h3 className="font-bold border-b text-[16px] pb-[10px] mb-[10px] border-black">
              Project Delivery
            </h3>
            <p className="text-[16px] font-normal">
              Being a custom book printing company we aim to assist you with all
              your author needs and serve you with the best possible
              deliverables.
            </p>
          </div>
        </div>
      </section>
      <section className="prof-bg">
        <div className="flex justify-around items-center xl:flex-row md:flex-row sm:flex-row flex-col">
          <div className="xl:w-[55%] w-[90%]">
            <h5 className="xl:text-[28px] text-[24px]  font-bold xl:mb-3 mb-2">
              PRINT BOOK PUBLISHING - SERVING AUTHORS GLOBALLY, ENHANCING AUTHOR
              EXPERIENCES
            </h5>
            <p className="xl:w-[720px]   mb-2 ">
              We know that as an author, you must have aspired to see your book
              on the shelf of the book near your street. As a book printing
              company, we have been able to team up with industry professionals
              and bring their author personas to life. Hire custom book printing
              services and leave all the complexities on the team that is
              experienced to cater to all of them.
            </p>
            <div className="flex xl:flex-row md:flex-row  sm:flex-row flex-col">
              <button
                className="all-btn  xl:mb-0 mb-3 "
                onClick={() => SetOpenModal(true)}
              >
                GET A QUOTE
              </button>
              <button
                className=" live-chat bg-transparent xl:mb-0 mb-12 text-[#17333c] border border-[#17333c]  "
                style={{
                  borderRadius: "8px",
                }}
                onClick={handleLiveChatClick}
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
          Assisting Authors In Leaving a Lasting Impression Over{" "}
          <br className="mb-hide" /> The Readers Globally.
        </h3>
        <p className="xl:mb-[30px] mb-[22px] ">
          Do you also want to leave a lasting impression on your readers
          globally? Do you also want to publish a printed book to uplift your
          author persona? Hire professional book printing services that enhance
          your author experience by serving you with extremely professional
          print book publishing online.
        </p>
        <p>
          Know that your book is meant to outshine the publishing industry by
          getting the attention of your potential readers through a creative
          book cover design that will elevate the reader's experience of your
          audience instantly.
        </p>
      </section>
      {/* Help Author is End */}
      {/* Published Made is given */}
      <section className="bg-boast">
        <div className="flex justify-around items-center xl:mx-1  mx-4  xl:flex-row flex-col md:flex-row sm:flex-row">
          <div className="mx-4 xl:mx-1">
            <h3
              className="text-[22px] xl:text-[42px] 
            font-bold xl:leading-[49px] mb-[10px] xl:mb-[20px]  "
            >
              Best Book Printing <br className="mb-hide" /> Services
              <span className="px-2">In The USA</span>
            </h3>
            <p className="mb-[20px]">
              Six easy steps to get your book published
            </p>
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
           w-auto  "
          >
            <div>
              <h5 className="place-box mb-0">01</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Tell us Your Book Length
              </h6>
              <p>
                The first thing that you need to tell our account manager is to
                identify your book-length and the number of pages your book has.
              </p>
            </div>
            <div>
              <h5 className="place-box">02</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Paperback or Hard Cover
              </h6>

              <p>
                According to your aspirations and needs, Our account managers
                will let you know the price-per-piece for your printed book.
              </p>
            </div>
            <div>
              <h5 className="place-box">03</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Black and White Printing
              </h6>

              <p>
                If your book doesn’t include any pictures, then we suggest you
                go with black and white printing for your book to save some
                money.
              </p>
            </div>
            <div>
              <h5 className="place-box">04</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Colour Premium
              </h6>
              <p>
                Go with the colored printed book, if you are aspiring to publish
                a children’s book then color printing is the thing you need for
                your book as your book must contain captivating illustrations to
                engage with the audience better.
              </p>
            </div>
            <div>
              <h5 className="place-box">05</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Glossy Cover Finish
              </h6>
              <p>
                A glossy cover finish is the most attractive for Gen-Z readers,
                if you are putting out a book that targets young readers then
                you should go with a glossy cover finish for your book.
              </p>
            </div>
            <div>
              <h5 className="place-box">06</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Matte Cover Finish
              </h6>
              <p>
                A matte cover finish is attractive to aged/mature readers
                globally as the touch feels premium if you go with the matte
                cover finish.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-around items-center xl:flex-row-reverse md:flex-row sm:flex-row flex-col uniquearea">
        <div className="mx-5 xl:w-[690px] sm:w-[460px] w-auto md:w-[450px]">
          <h1
            className="head-h2 font-bold mb-[19px]"
            style={{
              lineHeight: Mobile ? "45px" : "48px",
            }}
          >
            Searching For Affordable Book Printing Services Online?
          </h1>
          <p className="paragraph text-balance xl:mb-[15px] mb-[10px]">
            Print book publishing near you has a team of expert designers who
            are experienced in looking after the formatting and ensuring that
            your book is printed and delivered to your provided address, the
            services for printing books we offer:
          </p>

          <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col mb-2 xl:my-5">
            <div>
              <ul className="text-[14px] xl:text-sm ">
                <li className="mb-[10px]  ">Realistic Book Cover</li>
                <li className="mb-[10px] ">Card-Board Book</li>
                <li className="mb-[10px] ">Animated Book Cover</li>
              </ul>
            </div>
            <div>
              <ul className="text-[14px] xl:text-sm xl:mx-12 mx-0">
                <li className="mb-[10px]">Paper-Back Book</li>
                <li className="mb-[10px] ">Ebook Services</li>
                <li className="mb-[1px] ">Hard Book Cover</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-[20px] my-5 xl:my-0 xl:mb-0 md:mb-0 sm:mb-0">
          <img
            src={Book}
            alt="Not Found"
            className="w-[280px] xl:w-[370px] object-contain"
          />
        </div>
      </section>
      <section className="relative">
        <div className="bg-hire-prof ">
          <div className="flex flex-col relative justify-center items-center xl:px-1 px-6">
            <div className="xl:w-[750px] relative text-white w-auto  ">
              <h6 className="text-[32px] mb-[10px] font-semibold ">
                Connect yourself with the best custom book printing company
                online!
              </h6>
              <p className="text-[18px] mb-[12px]" data-aos="fade-up">
                Have you also been aspiring to add richness to your writings?
                Collaborate <br className="mb-hide" /> with the best in the
                publishing industry and enhance your literary legacy{" "}
                <br className="mb-hide" /> in a positive manner.
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
                  // onClick={handleLiveChatClick}
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
          <p className="text-[#333] text-center uppercase xl:text-[16px] mx-5 xl:mx-1 ">
            Here’s a list of frequently asked questions you might have about our
            book writing company.
          </p>
          <div className="xl:mx-12 text-center  xl:my-8 my-4">
            <div className="flex justify-center items-center flex-col">
              <div
                className={`faqs-btn  transition-all duration-300 flex justify-center items-center ${
                  BookCover === true ? "" : "mb-[30px]"
                } `}
                onClick={() => SetBookCover(!BookCover)}
              >
                <h1 className="text-center   ">
                  how to start a book printing company
                </h1>
                <div className="absolute xl:right-[30px] right-3 ">
                  <i
                    className={`fa  fa-${
                      BookCover === true ? "plus" : "minus"
                    } cursor-pointer`}
                    onClick={() => SetBookCover(!BookCover)}
                  ></i>
                </div>
              </div>
              <div className="overflow-hidden">
                {BookCover === true && (
                  <>
                    <p className="xl:w-[400px] py-3 mx-10 xl:mx-0  transition-all  overflow-hidden ">
                      Connect yourself with a printing agency and make a
                      contract with them on the basis of which you can get your
                      orders printed by a third party and make money by becoming
                      the middleman in the process.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div
                className={`faqs-btn  transition-all duration-300 flex justify-center items-center ${
                  BookCover1 === true ? "" : "mb-[30px]"
                } `}
                onClick={() => SetBookCover1(!BookCover1)}
              >
                <h1 className="text-center">
                  How much does it cost to print a book on average?
                </h1>
                <div className="absolute  xl:right-[30px] right-2 ">
                  <i
                    className={`fa  fa-${
                      BookCover1 === true ? "plus" : "minus"
                    } cursor-pointer`}
                    onClick={() => SetBookCover1(!BookCover1)}
                  ></i>
                </div>
              </div>
              <div className="overflow-hidden">
                {BookCover1 === true && (
                  <>
                    <p className="xl:w-[400px] py-3 mx-10 xl:mx-0  transition-all  overflow-hidden ">
                      There are a lot of factors on which the average cost of a
                      book might differ like, if you need a paperback, it’ll
                      cost you different and if you go for a hardcover, it might
                      cost you different, the average price for printing a book
                      can be considered around 15-18$ per piece.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div
                className={`faqs-btn  transition-all duration-300 flex justify-center items-center ${
                  BookCover2 === true ? "" : "mb-[30px]"
                } `}
                onClick={() => SetBookCover2(!BookCover2)}
              >
                <h1 className="text-center  ">Where do people print books?</h1>
                <div className="absolute  xl:right-[30px] right-3 ">
                  <i
                    className={`fa  fa-${
                      BookCover2 === true ? "plus" : "minus"
                    } cursor-pointer`}
                    onClick={() => SetBookCover2(!BookCover2)}
                  ></i>
                </div>
              </div>
              <div className="overflow-hidden">
                {BookCover2 === true && (
                  <>
                    <p className="xl:w-[400px] py-3 transition-all mx-10 xl:mx-0  overflow-hidden ">
                      You can connect with a professional book printer for help
                      in printing your book or you can get done with the process
                      through various online platforms that you can find if you
                      search the same question on the search engine but trust
                      someone who has been doing things for minimum a year now
                      or have a number of clients that they have already served.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div
                className={`faqs-btn  transition-all duration-300 flex justify-center items-center ${
                  BookCover3 === true ? "" : "mb-[30px]"
                } `}
                onClick={() => SetBookCover3(!BookCover3)}
              >
                <h1 className="text-center ">
                  Can you print a book on a normal printer?
                </h1>
                <div className="absolute  xl:right-[30px] right-3 ">
                  <i
                    className={`fa  fa-${
                      BookCover3 === true ? "plus" : "minus"
                    } cursor-pointer`}
                    onClick={() => SetBookCover3(!BookCover3)}
                  ></i>
                </div>
              </div>
              <div className="overflow-hidden">
                {BookCover3 === true && (
                  <>
                    <p className="xl:w-[400px] py-3 mx-10 xl:mx-0  transition-all  overflow-hidden ">
                      No, a book can not be printed in a normal printer as every
                      book is different in specifications and
                      hardcover/paperbacks might not be printed in the best
                      quality if you go with a normal printer. A book printer is
                      a bit different from a normal printer.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div
                className={`faqs-btn  transition-all duration-300 flex justify-center items-center
                 ${BookCover4 === true ? "mb-[20px]" : "mb-[30px]"} `}
                onClick={() => SetBookCover4(!BookCover4)}
              >
                <h1 className="text-center  ">
                  Why do people prefer reading printed books?
                </h1>
                <div className="absolute xl:right-[30px] right-3  ">
                  <i
                    className={`fa  fa-${
                      BookCover4 === true ? "plus" : "minus"
                    } cursor-pointer`}
                    onClick={() => SetBookCover4(!BookCover4)}
                  ></i>
                </div>
              </div>
              <div className="overflow-hidden">
                {BookCover4 === true && (
                  <>
                    <p className="xl:w-[400px] py-3 mx-10 xl:mx-0 transition-all  overflow-hidden ">
                      For various reasons, people prefer to go with a printed
                      book when it comes to the reader's perspective as a book
                      is captivating and it’s easy to keep track of your
                      readings with the help of a bookmark in a printed book but
                      it can be difficult if you choose an online book.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col text-center">
              <div
                className={`faqs-btn  transition-all duration-300 flex justify-center items-center ${
                  BookCover5 === true ? "mb-[20px]" : "mb-[30px]"
                } `}
                onClick={() => SetBookCover5(!BookCover5)}
              >
                <h1 className="text-center ">
                  Why printed books are better than audiobooks?
                </h1>
                <div className="absolute xl:right-[30px] right-3 ">
                  <i
                    className={`fa  fa-${
                      BookCover5 === true ? "plus" : "minus"
                    } cursor-pointer`}
                    onClick={() => SetBookCover5(!BookCover5)}
                  ></i>
                </div>
              </div>
              <div className="overflow-hidden">
                {BookCover5 === true && (
                  <>
                    <p className="xl:w-[400px] py-3 mx-10 xl:mx-0 transition-all  overflow-hidden ">
                      It varies from person to person, everything depends on the
                      reader's personal preference but as an author, printed
                      books are more likely to get potential conversions and
                      attract more readers because most people prefer printed
                      books from a reader's point of view.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <Testi />
      </Suspense>

      <Suspense fallback={<></>}>
        <Contactus />
      </Suspense>
    </>
  );
}

export default Bookprint;
