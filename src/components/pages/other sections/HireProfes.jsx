import React, { useState, useEffect } from "react";
import "../../styles/HireProfessional.css";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../config/Config";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
function HireProfes() {
  const [MainFaqs, SetMainFaqs] = useState(false);
  const [MainFaqs1, SetMainFaqs1] = useState(false);
  const [MainFaqs2, SetMainFaqs2] = useState(false);
  const [MainFaqs3, SetMainFaqs3] = useState(false);
  const [MainFaqs4, SetMainFaqs4] = useState(false);
  const [MainFaqs5, SetMainFaqs5] = useState(false);
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
      <section className="relative">
        <div className="bg-hire-prof ">
          <div className="flex flex-col relative justify-center items-center">
            <div className="xl:w-[800px] relative text-white w-auto px-4 xl:px-1 ">
              <h6 className="text-[32px] mb-[10px] font-semibold ">
                Hire a Professional Book Writer Now!
              </h6>
              <p className="text-[16px] mb-[12px]" data-aos="fade-up">
                Want to enhance your literature by uplifting your{" "}
                <br className="mb-hide" /> writing game? online expert book
                writing services to assist you in finalizing{" "}
                <br className="mb-hide" /> the best book writers for yourself.
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
                  MainFaqs === true ? "" : "mb-[30px]"
                } `}
                onClick={() => SetMainFaqs(!MainFaqs)}
              >
                <h1 className="text-center ">
                  How much do your book writing services cost?
                </h1>
                <div className="absolute xl:right-[30px] right-3" >
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
                      We have collected the most professional book writing team
                      of account managers who can serve you with the best book
                      writing consultancy and they can also serve you with
                      custom book packages just according to your needs. The
                      Writer’s Tree is a expert team that aims to eliminate all
                      the literary complications that are faced by authors
                      globally.
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
                  Is it illegal to write a book about someone else?
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
                      No, you can write about anything all that is needed to be
                      noticed is biasedness as a reader. Mostly when people
                      write something about someone else they portray what they
                      think about the person and that can be considered illegal.
                      But, if you just need to put out a book story that speaks
                      about the pros and cons of an individual, it won’t be
                      counted as illegal.
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
                  Why should I hire a book writer?{" "}
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
                      Even if you have the time to write your book, you’d still
                      need an expert editor to proofread your manuscript before
                      it is actually published. Everything needs to be executed
                      by an expert, and we have a team of book writers for hire,
                      who have the expertise to ensure that your book is written
                      with keen attention to detail.
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
                  How can I find someone to write my book?
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
                className={`faqs-btn  transition-all duration-300 flex justify-center items-center ${
                  MainFaqs4 === true ? "mb-[20px]" : "mb-[30px]"
                } `}
                onClick={() => SetMainFaqs4(!MainFaqs4)}
              >
                <h1 className="text-center">
                  How Does the Book Writing Process Work?
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
                      As it is a creative book writing process, it varies on the
                      book ghostwriter you hire, every person works on a
                      different creative thought process that is derived from
                      their comfort zone. Our professional book writers get
                      connected with you and tell you how are they going to
                      execute your very own manuscript and they work with you
                      closely ensuring that your book meets your expectations.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div
                className={`faqs-btn  transition-all duration-300 flex justify-center items-center ${
                  MainFaqs5 === true ? "mb-[20px]" : "mb-[30px]"
                } `}
                onClick={() => SetMainFaqs5(!MainFaqs5)}
              >
                <h1 className="text-center ">
                  Are your services 100% confidential?
                </h1>
                <div className="absolute xl:right-[30px] right-3">
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
                    <p
                      className="xl:w-[400px] py-3 mx-10 xl:mx-0 transition-all 
                     overflow-hidden "
                    >
                      Absolutely yes, we understand the importance of
                      maintaining a healthy relationship with our clients by
                      prioritizing confidentiality regarding their data,
                      whatsoever you provide us with, it all stays between you
                      and an assigned account manager.
                    </p>
                  </>
                )}{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HireProfes;
