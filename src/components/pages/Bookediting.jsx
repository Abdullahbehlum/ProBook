import Ghost from "../../assets/images/05-01.png";
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
import Ghostimg from "../../assets/images/side image  3.webp";
import Books from "../../assets/images/08.png";
import "../styles/HireProfessional.css";
import { useMediaQuery } from "@mui/material";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
import { Link } from "react-router-dom";
import { firebaseConfig } from "../config/Config";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import "../styles/Popup.css"
function Bookediting() {
  const SitesLogo = lazy(() => import("./Page section/GoogleSlider"));
  const Contactus = lazy(() => import("./other sections/Contact"));
  const Testimonials = lazy(() => import("./other sections/Testimonails"));
  const [MainFaqs, SetMainFaqs] = useState(false);
  const [MainFaqs1, SetMainFaqs1] = useState(false);
  const [MainFaqs2, SetMainFaqs2] = useState(false);
  const [MainFaqs3, SetMainFaqs3] = useState(false);
  const [MainFaqs4, SetMainFaqs4] = useState(false);
  const [MainFaqs5, SetMainFaqs5] = useState(false);
  const Mobile = useMediaQuery("(max-width:800px)");
  const [OpenModal, SetOpenModal] = useState(false);
  const [ClientData, SetClientData] = useState({
    name: "",
    email: "",
    number: "",
  });
  // Database connection is given
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
  // Database connection is End
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
            <h1 className="head-ghost font-bold xl:mb-4 mb-6 ">
              Expert Book Editor’s
              <span className="frist-span px-2 text-[#00efff]">For Hire</span>
            </h1>
            <p className="para xl:mb-[25px] mb-6 xl:w-[580px] w-auto md:w-[580px] sm:w-[580px]">
              Through the years we have been able to manage to team up with
              professional online book editing services we are dedicated to
              eliminating all the errors in your manuscript whether it consists
              of grammatical or punctuation errors. We are a best book
              proofreading company that will help you publish a perfect book
              following the latest industry trends concerning the formatting of
              your book. Get professional ebook proofreading services and
              outshine the publishing industry with your literary legacy.
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
              className=" xl:w-[745px]  md:w-[545px] sm:w-[745px] w-[300px]  object-contain"
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
              <h1 className="xl:text-[42px]  text-[28px] leading-[44px] text-[#333] mx-0 text-center xl:text-left mb-[20px]  font-bold pt-12 xl:pt-0">
                Connect with Top Book Proofreaders Online For Your Manuscript
              </h1>
              <h3 className="font-semibold mb-[20px]">
                Get help from professional book editors online
              </h3>
              <p className="paragraph text-balance mb-[15px]">
                Our diligent and thorough ebook proofreading services will help
                you gain more confidence in the overall content of your
                manuscript, whether your book is authored by our ghostwriters or
                you are done with the writing process yourself. When it comes to
                correcting errors and improving the quality of the existing
                material, no page is left unturned by our expert book editors.
                We are an affordable book-proofreading company online, with a
                team of expert book proofreaders for hire.
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
          Your Experience With Best Proofreading And Editing Services!
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
              Expert Editors Team
            </h3>
            <p className="text-[16px] font-normal">
              A group of competent and experienced proofreaders who have the
              expertise to serve in a variety of genres ensuring the highest
              quality.
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
              Creativity Alongside Authenticity
            </h3>
            <p className="text-[16px] font-normal">
              We are a dedicated team of best editors in town who aim to serve
              you with expertly written books that are a mixture of relevant and
              authentic information according to your book idea.
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
              Proper Formatting
            </h3>
            <p className="text-[16px] font-normal">
              Our formatters are experienced enough to follow the latest
              industry trends while formatting your manuscript properly before
              publishing.
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
              Original Content
            </h3>
            <p className="text-[16px] font-normal">
              Whether it is articles/blogs or affordable book editing services
              for your book, we have a team of writers who are dedicated to
              providing you original content for your readers.
            </p>
          </div>
        </div>
      </section>
      <section className="prof-bg">
        <div className="flex justify-around items-center xl:flex-row md:flex-row sm:flex-row flex-col">
          <div className="xl:w-[55%] w-[90%]">
            <h5 className="xl:text-[28px] text-[24px]  font-bold xl:mb-3 mb-2">
              BEST BOOK PROOFREADERS FOR HIRE - ENHANCING YOUR AUTHOR JOURNEY,
              WITH PROFESSIONAL BOOK EDITING COMPANY!
            </h5>
            <p className="xl:w-[720px]   mb-2 ">
              We are a professional team of book editors online, who aim to
              assist you in elevating your reader’s experience in an uplifting
              manner. It won’t be wrong if you consider us one of the top book
              editing services in the USA. Let the best book proofreading
              services help you engage with your readers better.
            </p>
            <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col">
              <button
                onClick={() => SetOpenModal(true)}
                className="all-btn  xl:mb-0 mb-3 "
              >
                GET A QUOTE
              </button>
              <button
                className=" live-chat bg-transparent xl:mb-0 mb-12 xl:mx-3 text-[#17333c] border border-[#17333c] 
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
          Helping Authors Uplift Their Literary Journey,{" "}
          <br className="mb-hide" /> Professional Book Proofreading Services
          Online! Online!
        </h3>
        <p className="xl:mb-[30px] mb-[22px] ">
          Do you also aspire to turn your ideas into an eBook editing that
          captivates readers globally? We are a USA-based eBook proofreading
          service that aims to assist authors globally and help them reach
          another level of literature excellence. Hire expert book editors to
          eliminate all the errors in your very own book and execute the
          proofreading/editing phase of your book ensuring absolutely affordable
          proofreading services. Get custom online editing assistance, and
          packages that cater to your editing needs, Elevate your composition
          with the superior knowledge and skills of our expert editing services.
        </p>
        <p>
          To target a wider audience and increase the readability of your book
          with the professional proofreading services online. We are a
          professional editing agency that has the expertise to enhance your
          book proofreading experience in a positive way.
        </p>
      </section>
      <section className="bg-boast">
        <div className="flex justify-around items-center  xl:mx-1 mx-5 xl:flex-row flex-col md:flex-row sm:flex-row">
          <div className="mx-3 xl:mx-1">
            <h3 className="text-[22px] xl:text-[42px] font-bold xl:leading-[46px] mb-[20px]  ">
              Best <span>Book Editing</span> <br className="mb-hide" /> Services
              in <span>4</span> Simple <br className="mb-hide" /> Steps
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
      <section className="flex justify-evenly items-center xl:flex-row-reverse md:flex-row sm:flex-row flex-col uniquearea">
        <div className="mx-5 xl:w-[650px] sm:w-[460px] w-auto md:w-[450px]">
          <h1 className="head-h2 font-bold mb-[19px]">
            Have a Look at the Professional eBook Editing Services that We
            Offer.
          </h1>
          <p className="paragraph text-balance xl:mb-[15px] mb-[10px]">
            We are a book editing service provider in the USA that only teams up
            with professional proofreaders who are experienced in looking after
            your manuscript and ensuring that your piece of art is error-free
            and ready to be published. A team of book editors for hire who are
            experienced in dealing with extensive workloads, and a variety of
            genres, ensuring the best shape of your manuscript.
          </p>

          <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col mb-2 xl:my-5">
            <div>
              <ul className="text-[14px] xl:text-sm ">
                <li className="mb-[10px]  ">
                  Expert Book Proofreading Services
                </li>
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
        <div className="mb-[20px] my-5 xl:my-0 xl:mb-0 md:mb-0 sm:mb-0">
          <img
            src={Books}
            alt="Not Found"
            className="w-[280px] object-contain"
          />
        </div>
      </section>
      <section className="relative">
        <div className="bg-hire-prof ">
          <div className="flex flex-col relative justify-center items-center px-5 xl:px-0">
            <div className="xl:w-[800px] relative text-white w-auto ">
              <h6 className="text-[32px] mb-[10px] font-semibold ">
                Hire the Best Editing Services Online!
              </h6>
              <p
                className="text-[18px] mb-[12px] mx-4 xl:mx-1"
                data-aos="fade-up"
              >
                We are an affordable book proofreading company that is a
                one-stop
                <br className="mb-hide" />
                shop that aims to provide affordable editing/proofreading
                <br className="mb-hide" /> services catering to the needs and
                established authors.
              </p>
              <div className="flex justify-center items-center xl:flex-row sm:flex-row md:flex-row flex-col mx-4">
                <button
                  onClick={() => SetOpenModal(true)}
                  className="bg-black-btn cursor-pointer xl:w-auto w-full"
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
                  className="bg-black-btn xl:w-auto w-full"
                  style={{ backgroundColor: "black", color: "white" }}
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
                <h1 className="text-center ">
                  What is the difference between a book editor and a
                  proofreader?
                </h1>
                <div className="absolute right-[30px] ">
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
                      A book editor is the one who esure the tone of the content
                      included in your book and the proofreader is supposed to
                      eliminate grammatical and punctuational errors from your
                      very own book.
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
                <h1 className="text-center  ">
                  Can I pay someone to proofread my book?
                </h1>
                <div className="absolute right-[30px] ">
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
                      Yes, you can find people with epertise who can help you
                      ensure the best quality of your manuscript before it’s
                      actually published globally. You can easily find an expert
                      proofreader online and pay them to help you out with the
                      services you have been looking for.
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
                <h1 className="text-center ">
                  Should I hire an editor for my book?
                </h1>
                <div className="absolute right-[30px] ">
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
                      If you are not sure about the authenticity and efficiency
                      of your literature then yes you can hire an editor to
                      uplift your literary journey. Your literary journey is
                      what we aim to boost to make you outshine the author
                      industry.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div
                className={`faqs-btn  transition-all duration-300 flex justify-center  items-center ${
                  MainFaqs3 === true ? "" : "mb-[30px]"
                } `}
                onClick={() => SetMainFaqs3(!MainFaqs3)}
              >
                <h1 className="text-center ">
                  How do I find a proofreader for my book?
                </h1>
                <div className="xl:absolute xl:right-[30px] ">
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
                      You can find numerous service provider online who aim to
                      assist you proofread your very own book to enhance the
                      quality of your book and make you stand out as an author.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div
                className={`faqs-btn  transition-all duration-300 flex justify-between items-center ${
                  MainFaqs4 === true ? "mb-[20px]" : "mb-[30px]"
                } `}
                onClick={() => SetMainFaqs4(!MainFaqs4)}
              >
                <h1 className="text-center  relative xl:left-[18em]">
                  How do I get hired as a professional proofreader?
                </h1>
                <div>
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
                      If you have the expertise to proofread your book and
                      outshine other aspiration in an elevating industry itself
                      then you can sure signup as a proofreader as a freelancer
                      or connect with a proofreading agency as an employee.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div
                className={`faqs-btn  transition-all duration-300 flex justify-between items-center ${
                  MainFaqs5 === true ? "mb-[20px]" : "mb-[30px]"
                } `}
                onClick={() => SetMainFaqs5(!MainFaqs5)}
              >
                <h1 className="text-center  relative xl:left-[18em]">
                  Why is proofreading important for a book?
                </h1>
                <div>
                  <i
                    className={`fa  fa-${
                      MainFaqs5 === true ? "plus" : "minus"
                    } cursor-pointer`}
                    onClick={() => SetMainFaqs5(!MainFaqs5)}
                  ></i>
                </div>
              </div>
              <div className="overflow-hidden">
                {MainFaqs5 === true && (
                  <>
                    <p className="xl:w-[400px] py-3 mx-10 xl:mx-0 transition-all  overflow-hidden ">
                      A proofreader can help you save a lot of time in the
                      writing process so that you can focus on the other aspects
                      of your publishing journey, and elevate your author
                      experience on the go. Ensuring that your book is in the
                      best possible shape.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<></>}>
        <Contactus />
      </Suspense>
    </>
  );
}

export default Bookediting;
