import React, { useEffect, useState } from "react";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import Books from "../../../assets/images/struglee.webp";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../config/Config";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
function HireBooks() {
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

    if (typeof Tawk_API !== 'undefined') {
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
      <div className="flex justify-around items-center xl:flex-row md:flex-row sm:flex-row flex-col uniquearea">
        <div className="mx-5 xl:w-[780px] xl:mx-6 sm:w-[460px] w-auto md:w-[450px]">
          <h1 className="xl:text-[40px] text-[24px]  leading-[45px] font-bold mb-[19px]">
            Hire Professional Book <br className="mb-hide" /> Writing Company
            For Your <br className="mb-hide" /> Custom Books?
          </h1>
          <p className=" text-gray-500 text-[16px] font-medium  text-balance xl:mb-[15px] mb-[10px] ">
            Get an absolutely phenomenal TOC from an expert online book{" "}
            <br className="mb-hide" /> writing agency. A team of professional
            online book writers who have <br className="mb-hide" /> the
            expertise to write your imagination on a piece of paper. Here’s{" "}
            <br className="mb-hide" /> why you’d need a ghost book writing
            services, to achieve your <br className="mb-hide" /> aspirations as
            an established author.
          </p>

          <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col mb-2 xl:my-5">
            <div>
              <ul className="text-[14px] xl:text-sm ">
                <li className="mb-[10px]  ">
                  {" "}
                  <i className="fa-solid text-[#0b80ba] fa-check"></i> Custom
                  Ghost Book Writing
                </li>
                <li className="mb-[10px] ">
                  {" "}
                  <i className="fa-solid text-[#0b80ba] fa-check"></i> Expert
                  Editing/Proofreading Services
                </li>
                <li className="mb-[1px]">
                  {" "}
                  <i className="fa-solid text-[#0b80ba] fa-check"></i> Simplest
                  Publishing Solutions
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-[14px] xl:text-sm xl:mx-12 mx-0">
                <li className="mb-[10px]">
                  {" "}
                  <i className="fa-solid text-[#0b80ba] fa-check"></i> Niche
                  Oriented Content Written
                </li>

                <li className="mb-[10px] ">
                  {" "}
                  <i className="fa-solid text-[#0b80ba] fa-check"></i> Efficient
                  Book Marketing
                </li>

                <li className="mb-[1px] ">
                  {" "}
                  <i className="fa-solid text-[#0b80ba] fa-check"></i> Elevating
                  The Literature
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-normal xl:-mx-1 items-start xl:flex-row md:flex-row sm:flex-row flex-col">
            <button
              onClick={() => SetOpenModal(!OpenModal)}
              className="nav-btn mb-[10px] xl:mr-4 mr-0 w-full xl:w-auto "
            >
              Get Started
            </button>
            <button  onClick={handleLiveChatClick} className="nav-black-btn mb-[10px] xl:mr-4 mr-0 w-full xl:w-auto ">
              Live Chat
            </button>
            <button className="nav-btn mb-[13px] w-full xl:w-auto ">
              <Link to={"tel:+718516-5017"}>Call Us (718) 516-5017</Link>
            </button>
          </div>
        </div>
        <div className="mb-[20px] xl:mb-0 md:mb-0 sm:mb-0 xl:mx-[1em] mx-0">
          <img
            src={Books}
            alt="Not Found"
            className=" xl:w-auto w-[380px] object-contain "
          />
        </div>
      </div>
    </>
  );
}

export default HireBooks;
