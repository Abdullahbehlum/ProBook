import React, { useEffect, useState } from "react";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../config/Config";
import { collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

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
