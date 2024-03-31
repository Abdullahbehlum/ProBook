import React, { useEffect, useState } from "react";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
import { Link } from "react-router-dom";

function Contact() {
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
      <section className="contact-bg">
        <div className="flex flex-col justify-center items-center mx-8 xl:mx-1">
          <div>
            <h2 className="head-h2   font-bold  xl:mb-[25px] mb-[15px] ">
              Want to publish <br /> your very own book?
            </h2>
            <h3 className="mb-[10px] xl:mb-[25px] text-[14px]  mx-4 xl:w-[1050px] text-[#122826] leading-[28px] xl:mx-5">
              Our ghostwriters never run out of relevant content for you, The
              Writer’s Tree has served a variety of clients including,
              established authors, aspiring authors, large and small businesses,
              and more.
            </h3>
            <div className="flex justify-center items-center mx-4 xl:mx-0  xl:flex-row md:flex-row sm:flex-row flex-col">
              <button
                className="nav-btn xl:w-auto mb-3 xl:mb-0 w-[300px]"
                onClick={() => SetOpenModal(true)}
              >
                GET A FREE QUOTE
              </button>
              <button onClick={handleLiveChatClick} className="nav-black-btn xl:w-auto w-[292px] xl:mx-4 mx-0 ">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex xl:flex-row md:flex-row sm:flex-row xl:justify-around xl:items-center
   justify-center items-center    flex-col">
        <div className="fobox">
          <Link to={"mailto:info@thewriterstree.com"}>
            <h3 className="text-[30px] text-black">
              <i
                className="fa fa-envelope text-[#00838c]"
                aria-hidden="true"
              ></i>
              <span className="mx-2">Email</span>
            </h3>
            <p>info@thewriterstree.com</p>
          </Link>
        </div>
        <div className="fobox">
          <Link to={"https://goo.gl/maps/b5mPU5bnrxxbnsrV9"}>
            <h3 className="text-[30px] text-black">
              <i
                className="fa-solid fa-globe text-[#00838c]"
                aria-hidden="true"
              ></i>
              <span className="mx-2"> Contact Us</span>
            </h3>
            <p>415 W 14th St, New York, NY 10014</p>
          </Link>
        </div>
        <div className="fobox">
          <Link to={"tel:+7185165017"}>
            <h3 className="text-[30px] text-black">
              <i
                className="fa fa-phone-square text-[#00838c]"
                aria-hidden="true"
              ></i>
              <span className="mx-2"> Phone</span>
            </h3>
            <p>(718) 516-5017</p>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Contact;
