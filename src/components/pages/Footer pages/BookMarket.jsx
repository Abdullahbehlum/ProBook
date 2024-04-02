import React, { Suspense, lazy, useEffect, useState } from "react";
import Rating from "../../../assets/images/rating-half.webp";
import Bools from "../../../assets/images/Book Marketing.png";
import Trustiplot from "../../../assets/images/trustpilot.webp";
import Bark from "../../../assets/images/bark.webp";
import Clush from "../../../assets/images/clutch.webp";
import Sitejob from "../../../assets/images/site-jabbar.svg";
import Ghostimg from "../../../assets/images/Book Marketing 2.jpg";
import featureIcon1 from "../../../assets/images/feature_icon1.png";
import featureIcon2 from "../../../assets/images/feature_icon2.png";
import featureIcon3 from "../../../assets/images/feature_icon3.png";
import featureIcon4 from "../../../assets/images/feature_icon4.png";
import ServiceWriting from "../../../assets/images/wri-edi-simg.webp";
import Books from "../../../assets/images/Book Marketing 3.png";
import "../../styles/Ghostwriting.css";
import "../../styles/HireProfessional.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
// Card images are imported
import Maret1 from "../../../assets/images/mark1.webp";
import Maret2 from "../../../assets/images/mark2.webp";
import Maret3 from "../../../assets/images/mark3.webp";
import Maret4 from "../../../assets/images/mark4.webp";
import Maret5 from "../../../assets/images/mark5.webp";
import Maret6 from "../../../assets/images/mark6.webp";
import Maret7 from "../../../assets/images/mark7.webp";
import Maret8 from "../../../assets/images/mark8.webp";
import Maret9 from "../../../assets/images/mark9.webp";
import Maret10 from "../../../assets/images/mark10.webp";
import Maret11 from "../../../assets/images/mark11.webp";
import Maret12 from "../../../assets/images/mark12.webp";
import "../../styles/Popup.css"
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../config/Config";
function BookMarketing() {
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
              style={{ lineHeight: Mobile ? "45px" : "55px" }}
            >
              Online Book Marketing <br className="mb-hide" /> Services At
              <span className="frist-span px-2 text-[#00efff]">
                Reasonable Rates Aligning With Extreme
              </span>
              <br className="mb-hide" /> Professionalism
            </h1>
            <p className="para xl:mb-[25px] mb-6 xl:w-[580px] w-auto md:w-[580px] sm:w-[580px]">
              Acknowledge the potential in your book idea and know that you can
              reach the pinnacle of your writing journey by partnering with the
              best book marketing agency. We are an online book promotion
              service, that considers their success when your royalties elevate.
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
              Understand the Basics, <br className="mb-hide" /> and Learn the
              Tactics <br className="mb-hide" /> With a Professional Book
              Marketing Agency.
            </h1>

            <p className="paragraph text-balance mb-[15px]">
              The writer’s tree is a digital book marketing service platform
              that offers you with the best services in the USA to make your
              book attract potential conversions and catch the right attention.
              Through the years we have been able to team up with the top book
              marketing experts that aim to uplift your author persona through
              affective book marketing strategies.
            </p>
            <p className="paragraph text-balance mb-[15px]">
              Collaborate with a team of professional book marketing experts
              that not only help you with work but also assist you in
              understanding, what they are planning on doing with your marketing
              strategies through all the platforms you want them to look after.
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
          Partner with the best book marketing agency online and attract
          potential conversions instantly.
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
              Book Marketing
            </h3>
            <p className="text-[14px]">
              Our expert book marketing team will take care of the potential
              conversions that your very own book attracts, ensuring that all
              the royalties belong to you by serving you with an online sales
              portal.
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
              Social Media Promotions
            </h3>
            <p className="text-[14px]">
              We are an affordable book marketing agency that offers you the
              best social media promotion services to help you engage with your
              audience better and elevate your legacy.
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
              Content Calendar
            </h3>
            <p className="text-[14px]">
              Our professional book marketers for hire make sure that your
              social media engages with your audience serving your literary
              legacy with a lasting impression on the readers globally.
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
              Potential Conversions
            </h3>
            <p className="text-[14px]">
              Our online book marketing expert team will ensure that your online
              sales portal is optimized and they execute your marketing
              structure with such proficiency to ensure potential conversions
              are attracted.
            </p>
          </div>
        </div>
      </section>
      {/* Professional Ghostwriters Online is End */}
      <section className="prof-bg">
        <div className="flex justify-around items-center xl:flex-row md:flex-row sm:flex-row flex-col">
          <div className="xl:w-[55%] w-[90%]">
            <h5 className="xl:text-[28px] text-[24px]  font-bold xl:mb-3 mb-2">
              ONLINE BOOK PROMOTION SERVICES TO ENSURE THAT YOUR BOOK ATTRACTS
              POTENTIAL READERS!
            </h5>
            <p className="xl:w-[720px]   mb-2 ">
              We are a team of expert book marketers who not only want your book
              to attract potential conversions but also want your very own
              manuscript to catch the eye of the readers who are actually
              interested in your book.
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
          Choose the top book marketing experts online and uplift
          <br className="mb-hide" /> you literary legacy!
        </h3>
        <p className="xl:mb-[30px] mb-[22px] ">
          A book marketer is an essential team member to partner with as an
          author so that you have an expert assistance to target your book to
          your potential readers and attract converions globally. We are an
          affordable book marketing firm that will cater to all of your needs in
          a very reasonable rate because we understand that your conversions
          turn out to be your motivation to keep going as an author.
        </p>
        <p>
          Hire the best digital book marketing services to grab the attention of
          your potential readers, globally through affective marketing
          campaigns.
        </p>
      </section>
      {/* Help Author is End */}
      {/* Published Made is given */}
      <section className="bg-boast">
        <div className="flex justify-around items-center xl:mx-1 mx-5  xl:flex-row flex-col md:flex-row sm:flex-row p-0 ">
          <div className="mx-3 xl:mx-1 ">
            <h3
              className="text-[22px] xl:text-[42px] 
            font-bold xl:leading-[49px] mb-[20px]  "
            >
              Expert Book <br className="mb-hide" /> <span>Marketers</span> For
              Hire!
            </h3>
            <p className="mb-[20px]">With Our Simple Four Step Process</p>
            <button
              style={{ borderRadius: "50px" }}
              className="live-chat   bg-transparent xl:mb-0 mb-12 text-black hover:text-[#00bcbb] border border-black mx-3 rounded-[50px]"
           onClick={handleLiveChatClick} >
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
                Content Calender
              </h6>
              <p>
                If you choose to work with us the first thing that will be
                shared to you by our marketing experts is the content calender
                for your digital platforms whether it’s social media, amazon or
                online sales portal that you need to optimize for more potential
                conversions, we have the expertise to help you with everything.
              </p>
            </div>
            <div>
              <h5 className="place-box">02</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Social Media Optimization
              </h6>

              <p>
                Our book marketing experts understand the importance of
                optimizing your social media platforms to attract better
                audience to engage with and enhanmce the number of conversions
                for your book.
              </p>
            </div>
            <div>
              <h5 className="place-box">03</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Social Media Post Design
              </h6>

              <p>
                Our marketing experts will ensure the best possible designs for
                your social media posts to engage with the audience better and
                help you leave behind a lasting impression over the audience
                that your book attracts.
              </p>
            </div>
            <div>
              <h5 className="place-box">04</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Social Media Ad Campaigns
              </h6>

              <p>
                Know how much you’d need to invest in your social media ad
                campaigns by professional book marketing experts who are waiting
                to working on your project and uplifting your sales, digitally
                and globally.
              </p>
            </div>
            <div>
              <h5 className="place-box">05</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Author website
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
                Search Engine Optimization
              </h6>
              <p>
                Get your online sales portal optimized by the search engines by
                utilizing potential keywords that target to your niche, the
                readers that are actually interested in your book to give it a
                read and learn from your aspirations.
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
            Wanting To Enhance Your Sales? Hire Expert Book Marketers!
          </h1>
          <p className="paragraph text-balance xl:mb-[15px] mb-[10px]">
            Marketing a self-published book can be a daunting task but, if you
            make the right choice and choose an expert team of book marketers or
            hire an online book marketing agency can also help you boost your
            sales and top-grade your literary legacy.
          </p>

          <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col mb-2 xl:my-5">
            <div>
              <ul className="text-[14px] xl:text-sm ">
                <li className="mb-[10px]  ">Social Media Promotions</li>
                <li className="mb-[10px] ">Track On Royalties</li>
                <li className="mb-[1px]">SEO Optimization</li>
              </ul>
            </div>
            <div>
              <ul className="text-[14px] xl:text-sm xl:mx-12 mx-0">
                <li className="mb-[10px]">Amazon Optimization</li>
                <li className="mb-[10px] ">Targetting Potential Buyers</li>
                <li className="mb-[10px] ">Online Sales Portal</li>
                <li className="mb-[1px] ">Amazon PPC</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-[20px] w-[280px] xl:w-[300px] my-5 xl:my-0 xl:mb-0 md:mb-0 sm:mb-0">
          <img src={Books} alt="Not Found" className=" object-contain" />
        </div>
      </section>
      {/* variety section is given */}
      <section className="px-7 xl:px-1">
        <div>
          <h1 className="head-h2 font-bold text-center">
            We offer a variety of book marketing services{" "}
            <br className="mb-hide" /> to help put your book out there
          </h1>
        </div>
        <div className="book-cols-3 xl:my-8 my-3">
          <div className="card_effect">
            <figure>
              <img src={Maret1} alt="No" />
            </figure>
            <div className="card_body">
              <h3>Author Network</h3>
              <p className="xl:w-[300px]">
                Our author network is an amalgamation of the best services for
                aspiring authors looking to launch their book.
              </p>
            </div>
          </div>
          <div className="card_effect">
            <figure>
              <img src={Maret2} alt="No" />
            </figure>
            <div className="card_body">
              <h3>Advertising & Marketing</h3>
              <p className="xl:w-[300px]">
                With the right advertising and strategic marketing, we can
                effectively help your book become the next bestseller.
              </p>
            </div>
          </div>
          <div className="card_effect">
            <figure>
              <img src={Maret3} alt="No" />
            </figure>
            <div className="card_body">
              <h3>Public Relations</h3>
              <p className="xl:w-[300px]">
                Our public relations services will always give your audience
                something to talk about when it comes to your book!
              </p>
            </div>
          </div>
          <div className="card_effect">
            <figure>
              <img src={Maret4} alt="No" />
            </figure>
            <div className="card_body">
              <h3>Self-Publishing</h3>
              <p className="xl:w-[300px]">
                We offer assistance for aspiring authors who are looking to
                become self-published. We’ll provide you with all the info you
                need.
              </p>
            </div>
          </div>
          <div className="card_effect">
            <figure>
              <img src={Maret5} alt="No" />
            </figure>
            <div className="card_body">
              <h3>Branding, Logos & Design</h3>
              <p className="xl:w-[300px]">
                To get the most from your book, we will help you build your
                brand, create a logo for it too, and design a captivating book
                cover.
              </p>
            </div>
          </div>
          <div className="card_effect">
            <figure>
              <img src={Maret6} alt="No" />
            </figure>
            <div className="card_body">
              <h3>Social Media</h3>
              <p className="xl:w-[300px]">
                We can help build your social media presence so that your
                published book is given the maximum digital reach it deserves.
              </p>
            </div>
          </div>
          <div className="card_effect">
            <figure>
              <img src={Maret7} alt="No" />
            </figure>
            <div className="card_body">
              <h3>Author Website</h3>
              <p className="xl:w-[300px]">
                To create an online platform for you and your books, our
                marketing services also include designing and developing your
                own website.
              </p>
            </div>
          </div>
          <div className="card_effect">
            <figure>
              <img src={Maret8} alt="No" />
            </figure>
            <div className="card_body">
              <h3>B&N Book Edition</h3>
              <p className="xl:w-[300px]">
                We can help make your book a Barnes & Noble exclusive edition to
                give you the necessary upper edge over the competition.
              </p>
            </div>
          </div>
          <div className="card_effect">
            <figure>
              <img src={Maret9} alt="No" />
            </figure>
            <div className="card_body">
              <h3>SEO & Content Marketing</h3>
              <p className="xl:w-[300px]">
                Effective SEO and content marketing strategies will help ensure
                your book stays on top of internet search results!
              </p>
            </div>
          </div>
          <div className="card_effect">
            <figure>
              <img src={Maret10} alt="No" />
            </figure>
            <div className="card_body">
              <h3>Book Trailers</h3>
              <p className="xl:w-[300px]">
                A book trailer can mean the difference between your book selling
                or catching dust. We’ll help design a reader-engaging book
                trailer for your book.
              </p>
            </div>
          </div>
          <div className="card_effect">
            <figure>
              <img src={Maret11} alt="No" />
            </figure>
            <div className="card_body">
              <h3>Audio Books</h3>
              <p className="xl:w-[300px]">
                Need an audio-only version for your published book? Our
                audiobook readers will ensure they deliver creative justice to
                your book.
              </p>
            </div>
          </div>
          <div className="card_effect">
            <figure>
              <img src={Maret12} alt="No" />
            </figure>
            <div className="card_body">
              <h3>Artical Writing</h3>
              <p className="xl:w-[300px]">
                A good article for a good book is a great way of giving your
                readers a glimpse of what to expect from your book when they buy
                it.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* variety section is End */}

      <section className="relative ">
        <div className="bg-hire-prof ">
          <div className="flex flex-col relative justify-center items-center px-6 xl:px-1">
            <div className="xl:w-[800px] relative text-white w-auto ">
              <h6 className="head-h2 mb-[10px] font-semibold ">
                Best Online Book Marketing Services To Hire!{" "}
              </h6>
              <p
                className="text-[18px] mb-[12px] mx-4 xl:mx-1"
                data-aos="fade-up"
              >
                Struggling to elevate your author persona? Hire the most
                professional
                <br className="mb-hide" /> team of book marketers to hire in the
                USA.
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
                  how to write a marketing plan for a book?
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
                      Firstly you need to identify your target niche and then
                      research about the platforms where your target niche is
                      most likely to be found. It can be facebook, amazon,
                      instagram, and you need to strategize your marketing
                      according to the algorithms of individual platforms.
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
                  Can I hire someone to market my book?
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
                      Yes you can hire a plenty of professionals online to
                      market your book but it can be a daunting task to find
                      reliable book marketer online, a teamof professional whom
                      you can truly trust.
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
                <h1 className="text-center  ">Where do I market my book?</h1>
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
                      Identify your target niche and the platforms where your
                      targetted audience is meant to be found and strategize
                      your book marketing campaign according to the algorithms
                      of the respective platforms.
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
                  how to start a digital marketing agency book?
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
                      If you have the expertise of digital marketing, all you
                      need to do is surf the internet and look for the people
                      searching for your services and once you find one
                      potential buyer, boom! You just established a digital
                      marketing agency online.
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
                  how to find a best book marketing company?
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
                      You can find numerous book marketing companies online but
                      gaining trust on the service provider can be a daunting
                      task, though you can run through the reviews and positive
                      feedbacks from the clients to ensure yourself of trusting
                      the well-known in the market.
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
                  Who can I pay to market my book?
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
                      Anyone who’s able to win your trust concerning your book
                      marketing strategy by proving their skills by any means
                      can turn out to be the best choice for you, connect and
                      communicate with a number of professional book marketing
                      companies and choose the best among them.
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

export default BookMarketing;
