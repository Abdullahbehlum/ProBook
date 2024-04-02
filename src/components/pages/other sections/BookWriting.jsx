import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ServiceWriting from "../../../assets/images/wri-edi-simg.webp";
import {
  Dialog,
  DialogActions,
  DialogContent,
  useMediaQuery,
} from "@mui/material";
import Struggle from "../../../assets/images/strugle.webp";
import BookwritingS from "../../../assets/images/best-selling2.png";
// Portfolio Book Images import is available
import Book1 from "../../../assets/images/book_01-removebg-preview (1).webp";
import Book2 from "../../../assets/images/book_02-removebg-preview.webp";
import Book3 from "../../../assets/images/book_03-removebg-preview.webp";
import Book4 from "../../../assets/images/book_04-removebg-preview (1).webp";
import Book5 from "../../../assets/images/book_05-removebg-preview (1).webp";
import Book6 from "../../../assets/images/book_06-removebg-preview.webp";
import Book7 from "../../../assets/images/book_07-removebg-preview.webp";
import Book8 from "../../../assets/images/book_08-removebg-preview.webp";
import Book9 from "../../../assets/images/book_09-removebg-preview.webp";
import Book10 from "../../../assets/images/book_10-removebg-preview.webp";
import Book11 from "../../../assets/images/book_11-removebg-preview.webp";
import Book12 from "../../../assets/images/book_12-removebg-preview.webp";
import Book13 from "../../../assets/images/book_13-removebg-preview.webp";
import Book14 from "../../../assets/images/book_14-removebg-preview.webp";
import Book15 from "../../../assets/images/book_15-removebg-preview.webp";
import Book16 from "../../../assets/images/book_16-removebg-preview.webp";
import Book17 from "../../../assets/images/book_17-removebg-preview.webp";
import Book18 from "../../../assets/images/book_18-removebg-preview.webp";
import Book19 from "../../../assets/images/book_19-removebg-preview (1).webp";
import Book20 from "../../../assets/images/book_20-removebg-preview.webp";

import Book21 from "../../../assets/images/book_21-removebg-preview.webp";
import Book22 from "../../../assets/images/book_22-removebg-preview (1).webp";
import Book23 from "../../../assets/images/book_01-removebg-preview (1).webp";
import Book24 from "../../../assets/images/book_02-removebg-preview.webp";

import Book25 from "../../../assets/images/book_03-removebg-preview.webp";
import Book26 from "../../../assets/images/book_15-removebg-preview.webp";
import Book27 from "../../../assets/images/book_07-removebg-preview.webp";
import Book28 from "../../../assets/images/book_12-removebg-preview.webp";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../config/Config";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// Portfolio Book Images import Is end
function BookWriting() {
  const Mobile = useMediaQuery("(max-width:700px");
  const [PortfolioTabs, SetPortfolioTabs] = useState("all");
  const handleTabsPortfolio = (tabs) => {
    SetPortfolioTabs(tabs);
  };
  const [OpenModal, SetOpenModal] = useState(false);
  const [ClientData, SetClientData] = useState({
    name: "",
    email: "",
    number: "",
  });
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
      {/* Service Lagacy is given */}
      <section className="prof-bg">
        <div className="flex justify-around items-center xl:flex-row md:flex-row sm:flex-row flex-col">
          <div className="xl:w-[55%] w-[90%]">
            <h5 className="xl:text-[32px] text-[28px]  font-bold xl:mb-3 mb-2">
              Book Writing Services Online - Eliminating{" "}
              <br className="mb-hide" /> Complications From Your Literary
              Legacy!
            </h5>
            <p className="xl:w-[720px]   mb-2 ">
              We are a team of online custom book writers who take pride in
              ensuring the highest book writing quality for your manuscript
              before publishing your book. Our expert book writing services are
              dedicated to bringing your aspirations to life making your book
              outshine the author industry.
            </p>
            <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col">
              <button
                onClick={() => SetOpenModal(true)}
                className="all-btn  xl:mb-0 mb-3 "
              >
                GET A QUOTE
              </button>
              <button
                className=" all-btn
              bg-transparent xl:mb-0 mb-12 text-[#17333c] border xl:mx-3 border-[#17333c] "
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
      {/* Service Lagacy is END */}
      {/* Book Writing service is given */}
      <section>
        <div className="bg-await text-center mt-[-1.9em] ">
          <h5
            data-aos="fade-up"
            className="text-[22px] pt-6 xl:pt-0 font-semibold xl:text-[36px] xl:mb-8 mb-4  "
          >
            What Awaits You If You Choose Expert Book Writing Services?
          </h5>
          <div className="gird-col-2">
            <p className="await-para" data-aos="fade-up">
              Online book writers are required by authors to fulfill their
              aspirations as book writing can be a daunting task if you choose
              to execute your best book idea on your own. Most authors aspire to
              inspire and to inspire you need plenty of different experiences so
              that you can justify your thoughts to all sorts of readers
              globally. Hire an expert ghost book writer from the industry to
              help your manuscript stand out in the book marketing industry by
              including relevant information in an engaging manner for you. Even
              if a ghost book writing has to write his own book, it can be
              difficult to manage a number of things altogether at the same
              time.
            </p>
            <p className="await-para" data-aos="fade-up">
              Another complication that book writers usually face is having to
              pay undivided attention to a blank screen fighting with writer’s
              block struggling to join words down in the form of a story. New
              book writers might consider the initial stage of book writing the
              toughest of them all, but the actual thing is that you need to
              figure out a hardscape to keep working on your project.
            </p>
            <p className="await-para" data-aos="fade-up">
              The first complication faced by most book authors is to identify
              whether the book writing idea they want to execute has the
              potential to engage with a wider books audience or not and our
              expert ghost book writing company have the expertise to help you
              identify your top book idea’s potential as well as suggest you
              with a better one according to your aspirations. As a book writing
              services, we have our two cents of experience to contribute to
              elevating your literary legacy by ensuring you from the very start
              that your book has the potential to make it to New York’s Best
              book writing seller List.
            </p>
            <p className="xl:-mt-28 mt-0">
              <p className="await-para" data-aos="fade-up">
                People also mistakenly believe that they are done with the book
                after completing the writing of the book but that’s not true,
                even professional book writing company can make a bunch of
                mistakes in their write-ups if they have to work in bulk. You
                must consider getting your book edited and book proofread by an
                expert so that you can ensure the best quality for your
                published manuscript.
              </p>
              <br />
              <p className="await-para" data-aos="fade-up">
                published globally. The smartest approach to fulfill your author
                aspirations can be connecting to a professional ghostwriting
                agency like us so that you can get done with the complete
                process in no time.
              </p>
            </p>
          </div>
        </div>
      </section>
      <section className="bg-copy  mt-[-2.1em]">
        <div className={`${Mobile ? "pt-[15px]" : "uniquearea"}`}>
          <h1 className="head-h2 font-bold">Online Book Writing Company</h1>
          <ul className="list-arrow">
            <li>
              <i className="fa-solid fa-circle text-[#fd7903]"></i> &nbsp; We
              work closely with you to ensure that our ghostwriters understand
              your aspirations from your book.
            </li>
            <li>
              <i className="fa-solid fa-circle text-[#fd7903]"></i> &nbsp;
              Finalizing Table Of Contents for your book.
            </li>
            <li>
              <i className="fa-solid fa-circle text-[#fd7903]"></i> &nbsp;
              Creative ghost book writing original content with efficiency and
              authenticity.
            </li>
            <li>
              <i className="fa-solid fa-circle text-[#fd7903]"></i> &nbsp;
              Unlimited revisions as per your feedback and guidance.
            </li>
            <li>
              <i className="fa-solid fa-circle text-[#fd7903]"></i> &nbsp;
              Editing to eliminate all the errors from your book.
            </li>
            <li>
              <i className="fa-solid fa-circle text-[#fd7903]"></i> &nbsp;
              Formatting and typewriting to ease up the publication process for
              you.
            </li>
            <li>
              <i className="fa-solid fa-circle text-[#fd7903]"></i> &nbsp;
              Publishing book consultancy to help you figure out the best
              solutions for your journey.
            </li>
            <li>
              <i className="fa-solid fa-circle text-[#fd7903]"></i> &nbsp;
              Creative yet professional book cover design.
            </li>
            <li>
              <i className="fa-solid fa-circle text-[#fd7903]"></i> &nbsp;
              On-call availability for discussions and consultation throughout
              the project.
            </li>
          </ul>
          <p className="para xl:w-auto mb-[30px] text-[14px] xl:mb-[25px]">
            Allow professional book ghost writers for hire to help you analyze
            whether your book writings idea has the <br className="mb-hide" />
            potential to outshine the publishing company with expert book
            writing services. An online ghost book <br className="mb-hide" />{" "}
            writing company that also has the expertise to assist you in
            publishing your book globally.
          </p>
          <button className="nav-btn border-[2px] border-white">
            <Link to={"javascript:"}> TALK TO AN EXPERT</Link>
          </button>
        </div>
      </section>
      <section className={`bg-affordable relative`}>
        <h1 className="xl:text-[38px] text-[28px] text-[#333] mx-0 text-center xl:text-left xl:mx-14 xl:mb-[20px] mb-[10px]  font-normal pt-12 xl:pt-0">
          Hire Affordable Yet Professional Book Ghost Writers
        </h1>
        <div className="flex justify-evenly items-center xl:flex-row md:flex-row sm:flex-row flex-col  ">
          <div className="mx-5 xl:w-[650px] sm:w-[460px] w-auto md:w-[450px]">
            <p className="paragraph text-balance" data-aos="fade-up">
              Hiring an expert online book writer who is passionate and
              dedicated concerning their contributions to your book. Time frame
              is a delicate factor and you need to discuss it with the
              experienced ghost book writer who is going to work on your book
              idea at the time of hiring so you can eliminate all the
              unnecessary delays on the project. Whether you are an entrepreneur
              or a job person, it can be a daunting task for you to execute the
              book writing phase on your own. No matter how good you are at book
              writing, for the sake of efficiency, you need a Top book ghost
              writing services to help you through the best book writing
              process. Hire the best book writing company in the industry which
              can assist you in editing, proofreading, and formatting your
              manuscript in the best possible shape.
            </p>
            <p className="paragraph text-balance" data-aos="fade-up">
              If you are an author who desires full control over the writing
              progress of your book, you can also ask for chapter-wise draft
              submission from the professional book ghost writer you choose to
              get done with your manuscript. For a creative process like book
              writing your aspirations, you’d need expert assistance from an
              expert so that you can elevate your author persona.
            </p>
            <p className="paragraph text-balance" data-aos="fade-up">
              Hire creative book writers online but only trust someone who has
              the expertise to do justice to your aspirations. Ideally, you
              should choose an affordable ghostwriter from an established book
              writing firm. Collaborate with a professional book writing agency
              that has the vision to help you with affordable yet efficient
              assistance for your book writing project to ensure that your book
              reaches the right audience, that too on a wider scale than you
              imagined.
            </p>
            <p className="paragraph text-balance" data-aos="fade-up">
              Hiring an experienced ghostwriter can make your life a thousand
              times better as an author, but if you make the wrong choice, the
              same overwhelming experience can turn out to be a devastating one
              for you. A professional ghost book writer who actually possesses
              diverse expertise in writing will always initiate your project
              after understanding your vision correctly so that your manuscript
              highlights your author persona.
            </p>
          </div>
          <div className="xl:mt-[-26px] relative xl:right-12">
            <img
              src={Struggle}
              alt="Not Found"
              className=" max-w-[400px] w-[100%] object-right-top"
            />
          </div>
        </div>
      </section>
      {/* Portfolio is given */}
      <section className="bg-portfolio">
        <div>
          <h2 className="head-h2 font-semibold text-center xl:mb-[40px] mb-[30px]">
            Our Portfolio
          </h2>
          <div className="portfolio-col-6  xl:mx-40 mx-3 mb-[60px] xl:mb-[50px]">
            <button
              className={`${
                PortfolioTabs === "all"
                  ? "bg-[#ee6c4d] border border-transparent"
                  : "border border-white"
              } rounded-[50px] p-[10px] `}
              onClick={() => handleTabsPortfolio("all")}
            >
              All
            </button>
            <button
              className={`${
                PortfolioTabs === "fit"
                  ? "bg-[#ee6c4d] border border-transparent"
                  : "border border-white"
              } rounded-[50px] p-[10px] `}
              onClick={() => handleTabsPortfolio("fit")}
            >
              Fiction
            </button>
            <button
              className={`${
                PortfolioTabs === "biography"
                  ? "bg-[#ee6c4d] border border-transparent"
                  : "border border-white"
              } rounded-[50px] p-[10px] `}
              onClick={() => handleTabsPortfolio("biography")}
            >
              Biography
            </button>
            <button
              className={`${
                PortfolioTabs === "nonfriction"
                  ? "bg-[#ee6c4d] border border-transparent"
                  : "border border-white"
              } rounded-[50px] p-[10px] `}
              onClick={() => handleTabsPortfolio("nonfriction")}
            >
              Non-Fiction
            </button>
            <button
              className={`${
                PortfolioTabs === "infor"
                  ? "bg-[#ee6c4d] border border-transparent"
                  : "border border-white"
              } rounded-[50px]  p-[10px] `}
              onClick={() => handleTabsPortfolio("infor")}
            >
              Informative
            </button>
            <button
              className={`${
                PortfolioTabs === "Memior"
                  ? "bg-[#ee6c4d] border border-transparent"
                  : "border border-white"
              } rounded-[50px] p-[10px] `}
              onClick={() => handleTabsPortfolio("Memior")}
            >
              Memoir
            </button>
          </div>
          {PortfolioTabs === "all" && (
            <>
              <div className="portfolio-col-4 mx-0 mb-[40px] xl:mx-14">
                <img src={Book1} alt="Not found" className="object-cover " />
                <img src={Book2} alt="Not found" className="object-cover " />
                <img src={Book3} alt="Not found" className="object-cover  " />
                <img src={Book4} alt="Not found" className="object-cover " />
                <img src={Book5} alt="Not found" className="object-cover " />
                <img src={Book6} alt="Not found" className="object-cover " />
                <img src={Book7} alt="Not found" className="object-cover " />
                <img src={Book8} alt="Not found" className="object-cover  " />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <button className="bg-black-btn xl:w-auto w-[280px] ">
                  Let's started
                </button>
              </div>
            </>
          )}
          {PortfolioTabs === "fit" && (
            <>
              <div className="portfolio-col-4 mx-0 mb-[40px] xl:mx-14">
                <img src={Book9} alt="Not found" className="object-cover " />
                <img src={Book10} alt="Not found" className="object-cover " />
                <img src={Book11} alt="Not found" className="object-cover  " />
                <img src={Book12} alt="Not found" className="object-cover " />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <button className="bg-black-btn xl:w-auto w-[280px] ">
                  Let's started
                </button>
              </div>
            </>
          )}
          {PortfolioTabs === "biography" && (
            <>
              <div className="portfolio-col-4 mx-0 mb-[40px] xl:mx-14">
                <img src={Book13} alt="Not found" className="object-cover " />
                <img src={Book14} alt="Not found" className="object-cover " />
                <img src={Book15} alt="Not found" className="object-cover  " />
                <img src={Book16} alt="Not found" className="object-cover " />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <button className="bg-black-btn xl:w-auto w-[280px] ">
                  Let's started
                </button>
              </div>
            </>
          )}
          {PortfolioTabs === "nonfriction" && (
            <>
              <div className="portfolio-col-4 mx-0 mb-[40px] xl:mx-14">
                <img src={Book17} alt="Not found" className="object-cover " />
                <img src={Book18} alt="Not found" className="object-cover " />
                <img src={Book19} alt="Not found" className="object-cover  " />
                <img src={Book20} alt="Not found" className="object-cover " />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <button className="bg-black-btn xl:w-auto w-[280px] ">
                  Let's started
                </button>
              </div>
            </>
          )}
          {PortfolioTabs === "infor" && (
            <>
              <div className="portfolio-col-4 mx-0 mb-[40px] xl:mx-14">
                <img src={Book21} alt="Not found" className="object-cover " />
                <img src={Book22} alt="Not found" className="object-cover " />
                <img src={Book23} alt="Not found" className="object-cover  " />
                <img src={Book24} alt="Not found" className="object-cover " />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <button className="bg-black-btn xl:w-auto w-[280px] ">
                  Let's started
                </button>
              </div>
            </>
          )}
          {PortfolioTabs === "Memior" && (
            <>
              <div className="portfolio-col-4 mx-0 mb-[40px] xl:mx-14">
                <img src={Book25} alt="Not found" className="object-cover " />
                <img src={Book26} alt="Not found" className="object-cover " />
                <img src={Book27} alt="Not found" className="object-cover  " />
                <img src={Book28} alt="Not found" className="object-cover " />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <button className="bg-black-btn xl:w-auto w-[280px] ">
                  Let's started
                </button>
              </div>
            </>
          )}
        </div>
      </section>
      {/* Portfolio is end */}
      <section className="uniquearea">
        <div className="flex justify-evenly items-center xl:flex-row md:flex-row sm:flex-row flex-col ">
          <div className="mb-[5px] xl:mb-0 md:mb-0 sm:mb-0">
            <img
              src={BookwritingS}
              alt="Not Found"
              className="object-contain"
            />
          </div>
          <div className="mx-5 xl:mx-12 xl:w-[650px] sm:w-[460px] w-auto md:w-[450px] ">
            <h1 className="xl:text-[42px]  text-[28px] leading-[38px] text-[#333] mx-0 text-center xl:text-left mb-[20px]  font-bold pt-12 xl:pt-0">
              Best Ghost Book Writing Company In the USA!
            </h1>
            <p className="font-semibold mb-[20px]">
              Offering professional ghostwriting services online, hire the best
              book ghostwriters online
            </p>
            <p className="paragraph text-balance mb-[15px]">
              Creative ghostwriting services are not only about ghostwriting
              your thoughts on a piece of paper, it’s about crafting a
              compelling masterpiece that enhances your literary legacy to
              another level of excellence. Our experienced ghostwriters
              understand that your book idea needs to be thoroughly thought out
              before getting on to writing your aspirations with authenticity
              and follow a captivating manner through the ghostwriting process.
            </p>
            <p className="paragraph text-balance">
              Collaborate with a team of best ghostwriters who have diversifying
              experience in the file and the right understanding of utilizing
              the latest industry tools to elevate the level of your literature
              in the book that you are planning to publish. Get custom
              ghostwriting solutions and enable your author journey with
              navigation through all the complications you are going to face as
              an author. From action fiction to your life story we have a wide
              range of professional ghostwriters from all around the globe who
              would gladly work on your literary project without hesitation.
            </p>
            <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col">
              <button
                onClick={() => SetOpenModal(!OpenModal)}
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
    </>
  );
}

export default BookWriting;
