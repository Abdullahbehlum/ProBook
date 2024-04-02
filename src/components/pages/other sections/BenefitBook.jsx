import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
import { Link } from "react-router-dom";
import Person from "../../../assets/images/about_girl_44.webp";
import Abouticon1 from "../../../assets/images/about_img1.png";
import Abouticon2 from "../../../assets/images/about_img2.png";
import Abouticon3 from "../../../assets/images/about_img3.png";
import Abouticon4 from "../../../assets/images/about_img4.png";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
import "../../styles/Popup.css"
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../config/Config";
function BenefitBook() {
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
      <section className="benefit-bg ">
        <div className="flex xl:flex-row sm:flex-row md:flex-row flex-col">
          <div className="mb-hide">
            <img
              data-aos="fade-up"
              src={Person}
              alt="No"
              className="w-[900px]  object-fill "
            />
          </div>
          <div
            className=" text-white py-5 overflow-hidden  mx-4 xl:mr-[74px]"
            data-aos="fade-up"
          >
            <h1 className="xl:text-[39px] text-[29px] font-bold mb-[20px]">
              What Benefits Does A Professional Book Writing Agency Bring to You
              ?
            </h1>
            <p className="xl:w-[720px] mb-5">
              We started as an online book writing services, with the aim of
              serving aspiring authors with affordable ghost book writing
              company, ensuring that your book outshines the book publishing
              industry. You can trust us when it comes to getting expert book
              advice on your write-ups. Get your very own best book, edited
              according to the latest industry trends by the best online book
              writing services in the USA. Professional ghost bookwriters who
              are dedicated to fulfilling your writing needs, whether it’s
              fiction, non-fiction, horror, or a reality-based book that you
              want to put out in the book industry.
            </p>
            <div className=" col-4 text-black xl:mt-8 mt-4 ">
              <div className="about_box">
                <div className="about_icon">
                  <img src={Abouticon1} alt="No" className="object-cover" />
                </div>
                <h3>
                  Quality Over <br className="mb-hide" /> Anything
                </h3>
              </div>

              <div className="about_box">
                <div className="about_icon">
                  <img src={Abouticon2} alt="No" className="object-cover" />
                </div>
                <h3>
                  Timely <br className="mb-hide" /> Delivery
                </h3>
              </div>

              <div className="about_box">
                <div className="about_icon">
                  <img src={Abouticon3} alt="No" className="object-cover" />
                </div>
                <h3>
                  Cost-Effective <br className="mb-hide" />
                  Packages
                </h3>
              </div>

              <div className="about_box">
                <div className="about_icon">
                  <img src={Abouticon4} alt="No" className="object-cover" />
                </div>
                <h3>
                  Royalties <br className="mb-hide" />
                  Delivered
                </h3>
              </div>
            </div>
            <button
              className="btn mx-5 xl:mx-0 my-3 xl:my-0 "
              onClick={() => SetOpenModal(!OpenModal)}
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default BenefitBook;
