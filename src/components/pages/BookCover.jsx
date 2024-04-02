import Ghost from "../../assets/images/13.png";
import Trustiplot from "../../assets/images/trustpilot.webp";
import Bark from "../../assets/images/bark.webp";
import Clush from "../../assets/images/clutch.webp";
import Sitejob from "../../assets/images/site-jabbar.svg";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
import Rating from "../../assets/images/rating-half.webp";
import "../styles/HireProfessional.css";
import { Suspense, lazy, useEffect, useState } from "react";
import featureIcon1 from "../../assets/images/feature_icon1.png";
import featureIcon2 from "../../assets/images/feature_icon2.png";
import featureIcon3 from "../../assets/images/feature_icon3.png";
import featureIcon4 from "../../assets/images/feature_icon4.png";
import Book from "../../assets/images/12.png";
import ServiceWriting from "../../assets/images/wri-edi-simg.webp";
import BookwritingS from "../../assets/images/side image  2.webp";
import Sz1 from "../../assets/images/sz1.webp";
import Sz2 from "../../assets/images/sz1.webp";
import Sz3 from "../../assets/images/sz1.webp";
import Sz4 from "../../assets/images/sz1.webp";
import Sz5 from "../../assets/images/sz1.webp";
import Sz6 from "../../assets/images/sz1.webp";
import Sz7 from "../../assets/images/sz1.webp";
import Sz8 from "../../assets/images/sz1.webp";
import Sz9 from "../../assets/images/sz1.webp";
import Sz10 from "../../assets/images/sz1.webp";
import Sz11 from "../../assets/images/sz1.webp";
import Sz12 from "../../assets/images/sz1.webp";
import { useMediaQuery } from "@mui/material";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/Config";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "../styles/Popup.css"
function BookCover() {
  const SitesLogo = lazy(() => import("./Page section/GoogleSlider"));
  const Contactus = lazy(() => import("./other sections/Contact"));
  const Testi = lazy(() => import("./other sections/Testimonails"));
  const [BookCover, SetBookCover] = useState(false);
  const [BookCover1, SetBookCover1] = useState(false);
  const [BookCover2, SetBookCover2] = useState(false);
  const [BookCover3, SetBookCover3] = useState(false);
  const [BookCover4, SetBookCover4] = useState(false);
  const [BookCover5, SetBookCover5] = useState(false);
  const [BookCover6, SetBookCover6] = useState(false);
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
        <div className="flex justify-around overflow-hidden text-white items-center xl:flex-row md:flex-row sm:flex-row flex-col py-8">
          <div className="xl:ml-12 mx-2">
            <h1 className="head-ghost font-bold xl:mb-4 mb-6">
              We are a Custom Book Cover
              <span className="frist-span px-2 text-[#00efff]">
                Design Company!
              </span>
            </h1>
            <p className="para xl:mb-[25px] mb-6 xl:w-[580px]">
              You might have heard the phrase, “Never judge a book by its
              cover”. But in reality, the first element based on which your book
              would be judged is your book’s cover. Hire creative book cover
              designers and get an eye-catching book cover that will help you
              leave a lasting first impression on the audience. We are a custom
              book cover design company that has the potential to captivate
              minds and portray your aspirations with excellence, The Writers
              Tree has the expertise to help you get the best book cover design
              online and uplift your publishing game.
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
              className="btn uppercase  w-full xl:w-auto mb-6 xl:mb-0"
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
              className=" xl:w-[745px] md:[745px] sm:[745px] w-[300px]  object-contain"
            />
          </div>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <SitesLogo />
      </Suspense>
      <section className="uniquearea">
        <div className="flex justify-around items-center xl:flex-row md:flex-row sm:flex-row flex-col ">
          <div className="mb-[5px] xl:mb-0 md:mb-0 sm:mb-0">
            <img
              src={BookwritingS}
              alt="Not Found"
              className="object-contain"
            />
          </div>
          <div className="mx-5 xl:mx-4 xl:w-[950px] mt-0 xl:mt-2 sm:w-[460px] w-auto md:w-[450px] ">
            <h1 className="xl:text-[44px]  text-[28px] leading-[44px] text-[#333] mx-0 text-center xl:text-left mb-[20px]  font-bold pt-12 xl:pt-0">
              Custom Book Cover Designers In The USA!
            </h1>

            <p className="paragraph text-balance mb-[15px]">
              You should never judge a book based on its cover. Unless of
              course, you are referring to a physical book rather than a
              metaphor for a person. When your first batch of books reaches the
              shelves, to get picked up, your book cover design is the element
              that will motivate the readers to pick it up from the shelf, and
              initially, it is judged based on your book cover. Hire a creative
              book cover designer as according to statistics, the title, cover,
              and back cover content of a book are the first few things that a
              person notices before opening it to read some of the content.
            </p>
            <p className="paragraph text-balance">
              The best book cover design acts as a motivator for the readers to
              have a look at your book and read the title as well as the back
              cover information. Your book would normally collect dust on the
              shelves if it doesn’t have an outstanding and professional book
              cover design. With book cover designers online, ensure that your
              manuscript is in good hands.
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
                className="nav-black-btn uppercase  xl:w-auto w-full xl:mx-4 mx-0 "
              >
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="uniquearea">
        <h3
          className=" xl:text-center py-4 text-[25px] mx-4 font-bold"
          data-aos="fade-up"
        >
          Collaborate With Creative Book Cover Designers And Captivate Readers
          Instantly
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
                className="w-[80px] xl:mb-[30px] mb-[10px] object-cover"
              />
            </div>
            <h3 className="font-bold border-b text-[16px] pb-[10px] mb-[10px] border-black">
              Dust Jacket
            </h3>
            <p className="text-[16px] font-normal">
              A creative dust jacket cover not only protects the original cover
              but also showcases the blurb and back cover of your book in a
              captivating manner.
            </p>
          </div>
          <div className=" mb-[40px] xl:mb-0" data-aos="fade-right">
            <div>
              <img
                src={featureIcon2}
                className="w-[80px] xl:mb-[30px] mb-[10px] object-cover"
              />
            </div>
            <h3 className="font-bold border-b text-[15px] pb-[10px]  mb-[10px] border-black">
              Hard Cover
            </h3>
            <p className="text-[16px] font-normal">
              There’s nothing quite like the feel of a well-made hardcover for
              your book! Our designers can serve you with perfect hardcovers
              that not only protect the pages of your book but also help you
              captivate minds.
            </p>
          </div>
          <div
            className=" mb-[40px] xl:mb-0 xl:mt-[-10px]"
            data-aos="fade-left"
          >
            <div>
              <img
                src={featureIcon3}
                className="w-[80px] xl:mb-[30px] mb-[10px] object-cover"
              />
            </div>
            <h3 className="font-bold border-b pb-[10px] text-[16px] mb-[10px] border-black">
              Paper Back
            </h3>
            <p className="text-[16px] font-normal">
              Depending on your needs, If you have a lot to show in your cover
              design, or if you simply want to give your book a more modern
              approach, The Writer’s Tree can create the most beautiful
              paperback cover for you!
            </p>
          </div>
          <div
            className=" mb-[40px] xl:mb-0 xl:mt-[0.3em]"
            data-aos="fade-right"
          >
            <div>
              <img
                src={featureIcon4}
                className="w-[50px] xl:mb-[30px] mb-[10px]  object-cover"
              />
            </div>
            <h3 className="font-bold border-b text-[16px] pb-[10px] mb-[10px] border-black">
              Print Book
            </h3>
            <p className="text-[16px] font-normal">
              Whether it’s hardcover or paperback that you need, The Writers
              Tree can create expertly printed covers that capture the soul of
              your book, and draw potential reader's attention.
            </p>
          </div>
        </div>
      </section>
      <section className="prof-bg">
        <div className="flex justify-around items-center xl:flex-row md:flex-row sm:flex-row flex-col">
          <div className="xl:w-[55%] w-[90%]">
            <h5 className=" text-[24px]  font-bold xl:mb-3 mb-2">
              BOOK COVER DESIGNERS ONLINE - THAT ASSIST YOUR CAPTIVATING GLOBAL
              AUDIENCE AND UPLIFTING YOUR AUTHOR ASPIRATIONS!
            </h5>
            <p className="xl:w-[720px]   mb-2 ">
              There are plenty of sizes and forms available to choose from for
              your custom book cover design. Regardless of the size of your book
              or cover, we are a professional book cover design firm that is
              dedicated to serving you with spectacular designs.
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
                className=" live-chat bg-transparent uppercase
              xl:mb-0 mb-12 text-[#17333c] border border-[#17333c] xl:mx-3 mx-0 rounded-[8px] "
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
          Helping Authors Uplift Their Literary Journey, Creative
          <br className="mb-hide" /> yet Professional Book Cover Services
          Online!
        </h3>
        <p className="xl:mb-[30px] mb-[22px] ">
          Do you also aspire to turn your ideas into an eBook that captivates
          readers globally? We are a USA-based book cover designer team that
          aims to assist authors globally and help them reach another level of
          literature excellence. Hire creative book cover designers who have
          diverse expertise in the book cover design industry and know how to
          make your book outshine the industry by creating an eye-catching book
          cover for your story. Get custom eBook cover design and packages that
          cater to your author needs, Elevate your composition with the superior
          knowledge and skills of our creative design team.
        </p>
        <p>
          To target a wider audience and increase the readability of your book
          with the best as well as creative book cover designers. We are the
          best book cover design services that have the expertise to assist you
          in captivating readers globally.
        </p>
      </section>
      <section className="booksize">
        <div className="text-center flex flex-col justify-center items-center  mx-4 xl:mx-3">
          <h2 className="head-h2 font-semibold mb-[15px]">Book Cover Sizes</h2>
          <p className="xl:w-[840px] font-semibold">
            A book is available in a variety of sizes and forms. Regardless of
            the size of the book or cover, our designers are experienced at
            creating spectacular designs. With our team of experts, size doesn't
            matter.
          </p>
        </div>
        <div className="sz-3 xl:mx-6 xl:my-6">
          <div className="info-size  ">
            <img src={Sz1} alt="no" className="w-[50px] mx-4 object-cover" />
            <div className="">
              <h2 className="text-[16px] font-semibold">Pocket Book</h2>
              <p>4.25 x 6.875 in | 108 x 175 mm</p>
            </div>
          </div>
          <div className="info-size">
            <img src={Sz2} alt="no" className="w-[50px] xl:mx-4 object-cover" />
            <div>
              <h2 className="text-[16px] font-semibold">Digest</h2>
              <p>5.5 x 8.5 in | 140 x 216 mm</p>
            </div>
          </div>
          <div className="info-size">
            <img src={Sz3} alt="no" className="w-[50px] xl:mx-4 object-cover" />
            <div>
              <h2 className="text-[16px] font-semibold">A5</h2>
              <p>4.25 x 6.875 in | 108 x 175 mm</p>
            </div>
          </div>
          <div className="info-size">
            <img src={Sz4} alt="no" className="w-[50px] xl:mx-4 object-cover" />
            <div>
              <h2 className="text-[16px] font-semibold">US Trade</h2>
              <p>6 x 9 in | 152 x 229 mm</p>
            </div>
          </div>
          <div className="info-size">
            <img src={Sz5} alt="no" className="w-[50px] xl:mx-4 object-cover" />
            <div>
              <h2 className="text-[16px] font-semibold">Royal</h2>
              <p>6.14 x 9.21 in | 156 x 234 mm</p>
            </div>
          </div>
          <div className="info-size">
            <img src={Sz6} alt="no" className="w-[50px] xl:mx-4 object-cover" />
            <div>
              <h2 className="text-[16px] font-semibold">Comic Book</h2>
              <p>6.63 x 10.25 in | 168 x 260 mm</p>
            </div>
          </div>
          <div className="info-size">
            <img src={Sz7} alt="no" className="w-[50px] xl:mx-4 object-cover" />
            <div>
              <h2 className="text-[16px] font-semibold">Executive</h2>
              <p>7 x 10 in | 178 x 254 mm</p>
            </div>
          </div>
          <div className="info-size">
            <img src={Sz8} alt="no" className="w-[50px] xl:mx-4 object-cover" />
            <div>
              <h2 className="text-[16px] font-semibold">Crown Quarto</h2>
              <p>7.44 x 9.68 in | 189 x 246 mm</p>
            </div>
          </div>
          <div className="info-size">
            <img src={Sz9} alt="no" className="w-[50px] xl:mx-4 object-cover" />
            <div>
              <h2 className="text-[16px] font-semibold">Small Square</h2>
              <p>7.5 x 7.5 in | 190 x 190 mm</p>
            </div>
          </div>
          <div className="info-size">
            <img
              src={Sz10}
              alt="no"
              className="w-[50px] xl:mx-4 object-cover"
            />
            <div>
              <h2 className="text-[16px] font-semibold">A4</h2>
              <p>8.27 x 11.69 in | 210 x 297 mm</p>
            </div>
          </div>
          <div className="info-size">
            <img
              src={Sz11}
              alt="no"
              className="w-[50px] xl:mx-4 object-cover"
            />
            <div>
              <h2 className="text-[16px] font-semibold">US Letter</h2>
              <p>8.5 x 11 in | 216 x 279 mm</p>
            </div>
          </div>

          <div className="info-size">
            <img
              src={Sz12}
              alt="no"
              className="w-[50px] xl:mx-4 object-cover"
            />
            <div>
              <h2 className="text-[16px] font-semibold">A4 Landscape</h2>
              <p>11.69 x 8.27 in | 297 x 210 mm</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-evenly items-center xl:flex-row-reverse md:flex-row sm:flex-row flex-col uniquearea">
        <div className="mx-5 xl:w-[650px] sm:w-[460px] w-auto md:w-[450px]">
          <h1 className="head-h2 font-bold mb-[19px]">
            Have a Look at Our Custom Book Cover Design
          </h1>
          <p className="paragraph text-balance xl:mb-[15px] mb-[10px]">
            We are an ebook publishing service provider in the USA that only
            teams up with creative book cover designers who are experienced in
            helping you get a captivating animated book cover design for your
            book. A team of professional book cover designers for hire who are
            experienced in dealing with extensive workloads, and a variety of
            genres, ensuring the best shape of your manuscript.
          </p>

          <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col mb-2 xl:my-5">
            <div className="xl:w-[300px]">
              <ul className="text-[14px] xl:text-sm ">
                <li className="mb-[1px]  ">
                  Creative yet Professional Cover Services
                </li>
                <li className="mb-[1px] ">Professional Audiobooks</li>
                <li className="mb-[1px] ">Best Web-Design & Internet SEO</li>
              </ul>
            </div>
            <div className="xl:mr-[1em] xl:w-[300px]">
              <ul className="text-[14px]">
                <li className="mb-[1px]">Publishing Assistance</li>
                <li className="mb-[1px] ">Video Book Trailers</li>
                <li className="mb-[1px] ">Branding and Marketing Campaigns</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-[20px] my-5 xl:my-0 xl:mb-0 md:mb-0 sm:mb-0">
          <img
            src={Book}
            alt="Not Found"
            className="w-[280px] object-contain"
          />
        </div>
      </section>
      <section className="relative">
        <div className="bg-hire-prof ">
          <div className="flex flex-col relative justify-center items-center px-6 xl:px-1">
            <div className="xl:w-[800px] relative text-white w-auto ">
              <h4 className="text-[36px]  mb-[10px] font-normal ">
                Tired of searching for professional yet affordable book cover
                designers?
              </h4>
              <p className="text-[18px] mb-[12px]" data-aos="fade-up">
                Get an animated book cover design for your manuscript and
                elevate your <br className="mb-hide" /> literary journey.
                Collaborate with professional book cover designers{" "}
                <br className="mb-hide" />
                near you and captivate readers globally.
              </p>
              <div className="flex justify-center items-center xl:flex-row sm:flex-row md:flex-row flex-col mx-4">
                <button
                  onClick={() => SetOpenModal(true)}
                  className="bg-black-btn font-bold cursor-pointer  xl:w-auto w-full"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  Let's Get Started
                </button>
                <button
                  className="bg-black-btn xl:w-auto font-bold w-full"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  <Link to={"tel:+718516-5017"}>Call</Link>
                </button>
                <button
                  onClick={handleLiveChatClick}
                  className="bg-black-btn xl:w-auto uppercase w-full"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[-1.5em] xl:mt-0 transition-all   bg-faqs">
        <div className="px-4 xl:px-1">
          <h4 className="text-[#333] text-center mb-[10px] text-[22px] font-semibold xl:text-[32px]">
            FAQS
          </h4>
          <p className="text-[#333] text-center  xl:text-[16px]  ">
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
                <h1 className="text-center">
                  How much do book cover designers make?
                </h1>
                <div className="absolute right-[30px] ">
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
                      It depends on the utilizitaion of the creative thought
                      process, and on the type of design that you desire for
                      your manuscript, is it an animated cover, or a 3D book
                      cover, realistic or what so ever.
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
                  How much should an artist charge for a book cover?
                </h1>
                <div className="absolute right-[30px] ">
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
                      It all depends on the services you need a designer to
                      serve you with, the amount of energy and creativity you
                      require is the factor on the basis of which the designer
                      will charge you for the services.
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
                <h1 className="text-center  ">
                  What do ghostwriters do for clients?{" "}
                </h1>
                <div className="absolute right-[30px] ">
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
                  BookCover3 === true ? "" : "mb-[30px]"
                } `}
                onClick={() => SetBookCover3(!BookCover3)}
              >
                <h1 className="text-center">
                  How can I find someone to write my book?
                </h1>
                <div className="absolute right-[30px] ">
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
                 ${BookCover4 === true ? "mb-[20px]" : "mb-[30px]"} `}
                onClick={() => SetBookCover4(!BookCover4)}
              >
                <h1 className="text-center">
                  What is the best book cover competition?
                </h1>
                <div className="absolute right-[30px] ">
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
                      A captivating book cover is what actually eliminates the
                      competition for your book and help you stand out in the
                      publishing industry and captivate readers globally with a
                      creative book cover design.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div
                className={`faqs-btn  transition-all duration-300 flex justify-center items-center ${
                  BookCover5 === true ? "mb-[20px]" : "mb-[30px]"
                } `}
                onClick={() => SetBookCover5(!BookCover5)}
              >
                <h1 className="text-center ">
                  How do I find Best book cover Design Company?
                </h1>
                <div className="absolute right-[30px] ">
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
                      Invest your money wisely and ensure that your book
                      standsout in the book shelf, and captivates the right
                      attention. The best book cover designer is the one who can
                      create a book cover that not only helps you attract more
                      readers but also communicate your aspirations with new
                      readers for better conversions.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div
                className={`faqs-btn  transition-all duration-300  flex justify-center items-center ${
                  BookCover6 === true ? "mb-[20px]" : "mb-[30px]"
                } `}
                onClick={() => SetBookCover6(!BookCover6)}
              >
                <h1 className="text-center ">
                  Best free book cover design software?
                </h1>
                <div className="absolute xl:right-[30px] right-3  ">
                  <i
                    className={`fa  fa-${
                      BookCover6 === true ? "plus" : "minus"
                    } cursor-pointer`}
                    onClick={() => SetBookCover6(!BookCover6)}
                  ></i>
                </div>
              </div>
              <div className="overflow-hidden">
                {BookCover6 === true && (
                  <>
                    <p className="xl:w-[400px] py-3 mx-10 xl:mx-0 transition-all  overflow-hidden ">
                      In todays era it’s very easy to find a book cover design
                      software for free but anything that is free might bring
                      copyright strikes your way and as an author you won’t be
                      needing that at any cost. Ensure that your book cover is
                      originally designed for you only.
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

export default BookCover;
