import Ghost from "../../assets/images/Book Trailer.png";
import Trustiplot from "../../assets/images/trustpilot.webp";
import Bark from "../../assets/images/bark.webp";
import Clush from "../../assets/images/clutch.webp";
import Sitejob from "../../assets/images/site-jabbar.svg";
import Rating from "../../assets/images/rating-half.webp";
import { Suspense, lazy, useEffect, useState } from "react";
import featureIcon1 from "../../assets/images/feature_icon1.png";
import featureIcon2 from "../../assets/images/feature_icon2.png";
import featureIcon3 from "../../assets/images/feature_icon3.png";
import featureIcon4 from "../../assets/images/feature_icon4.png";
import "../styles/Ghostwriting.css";
import ServiceWriting from "../../assets/images/wri-edi-simg.webp";
import Ghostimg from "../../assets/images/side image  4.webp";
import Books from "../../assets/images/Book_Trailer_3.png";
import Testimonial from "./other sections/Testimonails";
import { useMediaQuery } from "@mui/material";
import "../styles/HireProfessional.css";
import { Link } from "react-router-dom";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/Config";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
import "../styles/Popup.css"
function Webdesign() {
  const [WebdesignFaqs, SetWebdesignFaqs] = useState(false);
  const [WebdesignFaqs1, SetWebdesignFaqs1] = useState(false);
  const [WebdesignFaqs2, SetWebdesignFaqs2] = useState(false);
  const [WebdesignFaqs3, SetWebdesignFaqs3] = useState(false);
  const [WebdesignFaqs4, SetWebdesignFaqs4] = useState(false);
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
          <div className="xl:ml-12 mx-2">
            <h1 className="head-ghost font-bold xl:mb-4 mb-6">
              Custom Author
              <span className="frist-span px-2 text-[#00efff]">
                Web Design Agency,
              </span>
              Take Control Over <br className="mb-hide" /> Your Royalties
            </h1>
            <p className="para xl:mb-[25px] mb-6 xl:w-[580px]">
              Collaborate with the best author web design company that helps you
              boost your sales by serving you with an online portal and taking
              control of the revenue that your book generates. We are the best
              author web design agency in the USA and we can prove our expertise
              in a very short span of time after taking control over your author
              journey.
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
          <div className="xl:mr-5">
            <img
              src={Ghost}
              alt="Not"
              className="  xl:w-[1005px] w-[300px]  md:w-[900px] sm:w-[900px]  object-contain"
            />
          </div>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <SitesLogo />
      </Suspense>
      <section>
        <section className="uniquearea">
          <div className="flex justify-center items-center xl:flex-row md:flex-row sm:flex-row flex-col ">
            <div className="mb-[5px] xl:mb-0 md:mb-0 sm:mb-0">
              <img src={Ghostimg} alt="Not Found" className="object-contain" />
            </div>
            <div className="mx-5 xl:mx-12 xl:w-[650px] sm:w-[460px] w-auto md:w-[450px] ">
              <h1 className="head-h2 leading-[44px] text-[#333] mx-0  xl:text-left mb-[20px]  font-bold pt-12 xl:pt-0">
                Expert Book Author Web Designer Near You!
              </h1>

              <p className="paragraph text-balance mb-[15px]">
                We are a team of custom website designers for authors that serve
                you with end-to-end encrypted portals to enhance your sales and
                grant you full control over the revenue that your book generates
                digitally.
              </p>

              <p className="paragraph text-balance mb-[15px]">
                We are a team of custom website designers for authors that serve
                you with end-to-end encrypted portals to enhance your sales and
                grant you full control over the revenue that your book generates
                digitally.
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
      </section>
      <section className="uniquearea">
        <h3
          className="xl:text-[28px] xl:text-center py-4 text-[25px] mx-4 font-bold"
          data-aos="fade-up"
        >
          {" "}
          Partner With Professional Book Author Web Designers And Take Control
          Of Your Literary Legacy!
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
            <h3 className="font-bold border-b text-[16px] pb-[10px] mb-[10px] border-black">
              Creative Web Design
            </h3>
            <p className="text-[16px] font-normal">
              We have a team of the best author website designers who have the
              expertise to serve you with professional yet creative web designs
              for your literary legacy.
            </p>
          </div>
          <div className=" mb-[40px] xl:mb-0" data-aos="fade-right">
            <div>
              <img
                src={featureIcon2}
                className="w-[50px] xl:mb-[30px] mb-[10px]  object-cover"
              />
            </div>
            <h3 className="font-bold border-b text-[16px] pb-[10px]  mb-[10px] border-black">
              End-To-End Encrypted
            </h3>
            <p className="text-[16px] font-normal">
              As a professional author web design team, we understand the
              importance of end-to-end encrypted portals, ensuring the safety of
              the payment information.
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
              Online Sales Portal
            </h3>
            <p className="text-[16px] font-normal">
              Our top author web designers consider your author website as an
              online sales portal to help you take control over your royalties
              and recognize the potential of your book instantly by
              acknowledging the numbers through payment dashboards.
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
              Control Over Royalties
            </h3>
            <p className="text-[16px] font-normal">
              Have full control over your royalties and boost your sales by
              implying search engine optimization on your book author website by
              connecting with a professional book author website design company.
            </p>
          </div>
        </div>
      </section>
      <section className="prof-bg">
        <div className="flex justify-around items-center xl:flex-row md:flex-row sm:flex-row flex-col">
          <div className="xl:w-[55%] w-[90%]">
            <h5 className="xl:text-[28px] text-[24px]  font-bold xl:mb-3 mb-2">
              CUSTOM AUTHOR WEB DESIGN AGENCY - OWN YOUR ROYALTIES, BOOST YOUR
              SALES, ENHANCING YOUR LITERARY LEGACY
            </h5>
            <p className="xl:w-[720px]   mb-2 ">
              We understand that your book needs an online portal and to cater
              to your needs we have partnered with the best website designers in
              the USA to ensure that your sales excel and you have complete
              control over the revenue your book generates online. Hire expert
              book author web designers to stand out in the industry and engage
              with your audience.
            </p>
            <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col">
              <button
                onClick={() => SetOpenModal(true)}
                className="all-btn  xl:mb-0 mb-3 "
              >
                GET A QUOTE
              </button>
              <button
                className=" live-chat bg-transparent xl:mb-0 mb-12 text-[#17333c] xl:mx-3 border border-[#17333c]  
              rounded-[8px]"
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
      <section className="uniquearea text-center mx-4 xl:mx-12">
        <h3 className="xl:text-[32px] text-[22px] py-3  font-bold xl:mb-[25px] mb-[16px]">
          Assisting Authors In Outshining The Publishing Industry{" "}
          <br className="mb-hide" /> With Affordable Custom Author Web Design
          Services!
        </h3>
        <p className="xl:mb-[30px] mb-[22px] ">
          Any platform where you choose to publish your website is going to
          charge you a minimum of 30% of your revenue, whereas if you go with an
          author website and establish an online sales portal, all the revenue
          generated by your book will belong to you only, and you can redeem it
          anytime you are in need of money.
        </p>
        <p>
          To target potential readers we also serve you with search engine
          optimization to enhance your author experience by elevating the
          revenue your book generates.
        </p>
      </section>
      <section className="bg-boast">
        <div className="flex justify-around items-center  xl:flex-row flex-col md:flex-row sm:flex-row mx-6">
          <div className="mx-5 xl:mx-1">
            <h3 className="text-[22px] xl:text-[42px] font-bold xl:leading-[46px] mb-[20px]  ">
              Professional <span>Book Author Web Design</span>
              Services
            </h3>
            <p className="mb-[20px]">
              Read about our straightforward, four-step procedure.
            </p>
            <button
              style={{ borderRadius: "50px" }}
              className="live-chat   bg-transparent xl:mb-0 mb-12 text-black hover:text-[#00bcbb] border border-black 
               rounded-[50px]"
              onClick={handleLiveChatClick}
            >
              <Link to={"javascript:"}>Get in Touch with us</Link>
            </button>
          </div>
          <div
            className="two-gird-col xl:w-[990px]
           w-auto"
          >
            <div>
              <h5 className="place-box mb-0">01</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Initial Edits
              </h6>
              <p>
                We are a professional book proofreading company that is
                dedicated to serving your draft with early adjustments, but all
                the changes are made visible only when you approve them.
              </p>
            </div>
            <div>
              <h5 className="place-box">02</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Let the Writing Begin!
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
                Review and Proofreading
              </h6>
              <p>
                After you’ve approved our editing styles and all the changes are
                made according to you, our ebook proofreading services revise
                your draft submission one by one before making it to level four.
              </p>
            </div>
            <div>
              <h5 className="place-box">04</h5>
              <h6 className="text-[18px] mb-[10px]  font-semibold">
                Project Delivery
              </h6>

              <p>
                Once your content is done with the editing, we begin with final
                book proofreading to ensure the quality of your final manuscript
                before delivering it to you.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center xl:flex-row-reverse md:flex-row sm:flex-row flex-col uniquearea">
        <div className="mx-5 xl:ml-[10em]  xl:w-[520px] sm:w-[460px] w-auto md:w-[450px]">
          <h1 className="head-h2 font-bold mb-[19px]">
            Looking For Affordable Book Author Web Designers?
          </h1>
          <p className="paragraph text-balance xl:mb-[15px] mb-[10px]">
            Get the best author web design services in the USA and boost your
            online sales in just a short span of time. Recognize the worth of
            your book by observing the conversions on your very own sale portal.
          </p>

          <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col mb-2 xl:my-5">
            <div>
              <ul className="text-[14px] xl:text-sm ">
                <li className="mb-[1px]  ">Creative Web Design</li>
                <li className="mb-[1px] ">Payment Dashboards</li>
                <li className="mb-[1px] ">Engaging Blogs/Articles</li>
              </ul>
            </div>
            <div>
              <ul className="text-[14px] xl:text-sm xl:mx-12 mx-0">
                <li className="mb-[1px]">Search Engine Optimization</li>
                <li className="mb-[1px] ">Newsletters</li>
                <li className="mb-[1px] ">Own Your Royalties</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-[20px] my-5 xl:my-0 xl:mb-0 md:mb-0 sm:mb-0">
          <img
            src={Books}
            alt="Not Found"
            className="w-[280px] xl:w-[400px] object-contain"
          />
        </div>
      </section>
      <section className="relative">
        <div className="bg-hire-prof ">
          <div className="flex flex-col relative justify-center items-center xl:px-1 px-6">
            <div className="xl:w-[800px] relative text-white w-auto ">
              <h6 className="text-[32px] mb-[10px] font-semibold ">
                Connect With The Top Author Web Design Company Online
              </h6>
              <p className="text-[16px] mb-[12px]" data-aos="fade-up">
                Ever aspired to take control over the revenue that your book
                generates? Well that’s possible now, <br className="mb-hide" />{" "}
                as The Writer’s Tree has teamed up with the best author website
                designers to serve <br className="mb-hide" /> you with online
                sales portals in the form of a captivating author website.
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
          <p className="text-[#333] px-4 xl:px-1 text-center capitalize xl:text-[16px] ">
            Here’s a list of frequently asked questions you might have about our
            book writing company.
          </p>
          <div className="xl:mx-12 text-center  xl:my-8 my-4">
            <div className="flex justify-center items-center flex-col">
              <div
                className={`faqs-btn  transition-all duration-300 flex justify-center items-center ${
                  WebdesignFaqs === true ? "" : "mb-[30px]"
                } `}
                onClick={() => SetWebdesignFaqs(!WebdesignFaqs)}
              >
                <h1 className="text-center">
                  how to find an author of a website?
                </h1>
                <div className="absolute xl:right-[30px] right-3">
                  <i
                    className={`fa  fa-${
                      WebdesignFaqs === true ? "plus" : "minus"
                    } cursor-pointer`}
                    onClick={() => SetWebdesignFaqs(!WebdesignFaqs)}
                  ></i>
                </div>
              </div>
              <div className="overflow-hidden">
                {WebdesignFaqs === true && (
                  <>
                    <p className="xl:w-[400px] py-3 mx-10 xl:mx-0  transition-all  overflow-hidden ">
                      By going through the content, yes there must be something
                      written about the author and you can also learn about the
                      author by clicking on the social media badges that might
                      take you to the author’s official social media to connect
                      with.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div
                className={`faqs-btn  transition-all duration-300 flex justify-center items-center ${
                  WebdesignFaqs1 === true ? "" : "mb-[30px]"
                } `}
                onClick={() => SetWebdesignFaqs1(!WebdesignFaqs1)}
              >
                <h1 className="text-center">
                  How much does it cost to create an author website?
                </h1>
                <div className="absolute xl:right-[30px] right-3">
                  <i
                    className={`fa  fa-${
                      WebdesignFaqs1 === true ? "plus" : "minus"
                    } cursor-pointer`}
                    onClick={() => SetWebdesignFaqs1(!WebdesignFaqs1)}
                  ></i>
                </div>
              </div>
              <div className="overflow-hidden">
                {WebdesignFaqs1 === true && (
                  <>
                    <p className="xl:w-[400px] py-3 mx-10 xl:mx-0  transition-all  overflow-hidden ">
                      It depends on the landing pages you desire to include in
                      your website, the more landing pages you include in your
                      website will lead to an increase in pricing for your
                      author's website.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div
                className={`faqs-btn  transition-all duration-300 flex justify-center items-center ${
                  WebdesignFaqs2 === true ? "" : "mb-[30px]"
                } `}
                onClick={() => SetWebdesignFaqs2(!WebdesignFaqs2)}
              >
                <h1 className="text-center  ">What is an author's website?</h1>
                <div className="absolute xl:right-[30px] right-3">
                  <i
                    className={`fa  fa-${
                      WebdesignFaqs2 === true ? "plus" : "minus"
                    } cursor-pointer`}
                    onClick={() => SetWebdesignFaqs2(!WebdesignFaqs2)}
                  ></i>
                </div>
              </div>
              <div className="overflow-hidden">
                {WebdesignFaqs2 === true && (
                  <>
                    <p className="xl:w-[400px] py-3 transition-all mx-10 xl:mx-0   overflow-hidden ">
                      It can be considered as a portfolio for authors to engage
                      with the audience better and build a connection with
                      readers who actually understand your aspirations as an
                      author.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div
                className={`faqs-btn  transition-all duration-300 flex justify-center items-center ${
                  WebdesignFaqs3 === true ? "" : "mb-[30px]"
                } `}
                onClick={() => SetWebdesignFaqs3(!WebdesignFaqs3)}
              >
                <h1 className="text-center">Do you need an author website?</h1>
                <div className="absolute xl:right-[30px] right-3">
                  <i
                    className={`fa  fa-${
                      WebdesignFaqs3 === true ? "plus" : "minus"
                    } cursor-pointer`}
                    onClick={() => SetWebdesignFaqs3(!WebdesignFaqs3)}
                  ></i>
                </div>
              </div>
              <div className="overflow-hidden">
                {WebdesignFaqs3 === true && (
                  <>
                    <p className="xl:w-[400px] py-3 mx-10 xl:mx-0  transition-all  overflow-hidden ">
                      Yes, you’d need an author website to establish yourself in
                      the publishing industry and leave a lasting impression on
                      the audience that your book attracts, on top of that you
                      can also consider your website as an online sales portal
                      that will help you keep track on the royalties your book
                      generates globally.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div
                className={`faqs-btn  transition-all duration-300 flex justify-center items-center ${
                  WebdesignFaqs4 === true ? "mb-[20px]" : "mb-[30px]"
                } `}
                onClick={() => SetWebdesignFaqs4(!WebdesignFaqs4)}
              >
                <h1 className="text-center  ">
                  How to make a website for authors?
                </h1>
                <div className="absolute xl:right-[30px] right-3">
                  <i
                    className={`fa  fa-${
                      WebdesignFaqs4 === true ? "plus" : "minus"
                    } cursor-pointer`}
                    onClick={() => SetWebdesignFaqs4(!WebdesignFaqs4)}
                  ></i>
                </div>
              </div>
              <div className="overflow-hidden">
                {WebdesignFaqs4 === true && (
                  <>
                    <p className="xl:w-[400px] py-3 mx-10 xl:mx-0 transition-all  overflow-hidden ">
                      By collaborating with professionals who can serve you with
                      creative yet professional book cover design services
                      ensuring the latest tools are utilized in the making of
                      your portal like end-to-end encryption.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
      <Suspense fallback={<></>}>
        <Contactus />
      </Suspense>
    </>
  );
}

export default Webdesign;
