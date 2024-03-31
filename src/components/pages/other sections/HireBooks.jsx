import React, { useEffect, useState } from "react";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import Books from "../../../assets/images/struglee.webp";
function HireBooks() {
  const [OpenModal, SetOpenModal] = useState(false);
  const [ClientData, SetClientData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const navigate = useNavigate();
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
            <form className="xl:py-3 flex flex-col justify-start items-start">
              <input
                type="text"
                className=" xl:mb-[20px] mb-[15px] text-black xl:w-[300px] w-full p-[10px] 
                   border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Name"
                required
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
