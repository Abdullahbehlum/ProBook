import React, { Suspense, lazy, useEffect, useState } from "react";
import IconAbout from "../../assets/images/exellent.webp";
import { firebaseConfig } from "../config/Config";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
function Contactus() {
  const Contact = lazy(() => import("../pages/other sections/Contact"));
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
      <section className="bg-contact">
        <h1 className="head-h2 font-bold  mb-[22px]">
          Contact Us and Get Published
        </h1>
        <p className="mb-[22px] font-semibold">
          We'll finish generating your book depending on your requirements, the{" "}
          <br className="mb-hide" />
          industry, and the genre, combining your idea with our creative
          expertise. <br className="mb-hide" /> Let's get started by contacting
          us.
        </p>
        <div className="flex  xl:flex-row flex-col md:flex-row sm:flex-row mb-[30px]">
          <div>
            <button
              onClick={() => SetOpenModal(true)}
              className="btn xl:w-auto w-full rounded-[50px]  mb-5 xl:mb-0 "
            >
              Get a Free Quote
            </button>
            <button
              onClick={handleLiveChatClick}
              className="live-chat xl:mx-4 xl:w-auto w-full "
            >
              Live Chat
            </button>
          </div>
        </div>
        <div className="mb-[30px] xl:mb-0">
          <img src={IconAbout} alt="No" className="object-cover" />
        </div>
      </section>
      <section className="uniquearea">
        <div className="container grid xl:grid-cols-2 grid-cols-1 py-8 xl:py-1">
          <div>
            <h2 className="head-h2 font-bold  mb-[22px]">
              We'd be delighted if you could tell us about your book.
            </h2>
            <p className="pb-[20px] font-semibold ">
              Our consultations are complimentary, and you can schedule one by
              providing us with your contact information. We'll get back to you
              right away to start talking about your ideas!
            </p>
            <p className="border-b-[6px] border-[#307d82] mb-[10px] w-[100px]"></p>
            <p className="mb-[10px]">
              For immediate support, feel free to call us on
            </p>
            <h2 className="head-h2 text-[#307d82] font-bold mb-5 xl:mb-1">
              (718) 516-5017
            </h2>
          </div>
          <div>
            <form
              onSubmit={() => handleFormSubmit()}
              className="flex justify-center items-center flex-col xl:py-8"
            >
              <input
                type="text"
                className=" xl:mb-[20px] mb-[15px] xl:w-[520px] w-[335px] p-[10px]
                   border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Name"
                required
                onChange={(e) => {
                  SetClientData({ ...ClientData, name: e.target.value });
                }}
              />
              <input
                type="number"
                className=" xl:mb-[20px] mb-[15px] xl:w-[520px] w-[335px] p-[10px]
                   border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Number"
                required
                onChange={(e) => {
                  SetClientData({ ...ClientData, number: e.target.value });
                }}
              />
              <input
                type="email"
                className=" xl:mb-[20px] mb-[15px] xl:w-[520px] w-[335px] p-[10px]
                   border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Email Address"
                required
                onChange={(e) => {
                  SetClientData({ ...ClientData, email: e.target.value });
                }}
              />

              <button className="nav-btn uppercase xl:relative xl:left-[14.6em] xl:w-auto w-full ">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <Contact />
      </Suspense>{" "}
    </>
  );
}

export default Contactus;
